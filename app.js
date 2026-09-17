/**
 * BURSRADAR - AKILLI BURS EŞLEŞTİRME & ÇAKIŞMA TESPİT MOTORU
 * Öğrencinin profiline göre bursları uyuşmazlıklar ve kırmızı çizgilerle filtreler.
 */

// Uygulama Durumu (State)
const appState = {
  userProfile: {
    department: 'all',
    uniType: 'state',
    classLevel: '1',
    gpa: 3.00,
    hasKYK: false,
    hasOtherPrivate: false,
    onlyNonRepayable: true
  },
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'match_score',
  favorites: JSON.parse(localStorage.getItem('bursradar_favorites') || '[]'),
  compareList: []
};

// DOM Yüklendiğinde Başlat
document.addEventListener('DOMContentLoaded', () => {
  initProfileWizard();
  initSearchAndFilter();
  initModalsAndDrawers();
  updateAndRender();
});

/* ==========================================================
   1. AKILLI EŞLEŞME & ÇAKIŞMA HESAPLAMA MOTORU (CORE ALGORITHM)
   ========================================================== */
function calculateEligibility(burs, profile) {
  let score = 100;
  const issues = [];
  const positiveReasons = [];
  let hasCriticalConflict = false;

  // 1. Kapsamlı Bölüm Kontrolü
  const isDeptAll = burs.target_departments.includes("Tümü");
  let deptMatches = isDeptAll;

  if (!deptMatches && profile.department !== 'all') {
    const userDept = profile.department.toLowerCase();
    deptMatches = burs.target_departments.some(bDept => {
      const targetDept = bDept.toLowerCase();
      return targetDept.includes(userDept) || userDept.includes(targetDept) || targetDept === "tümü";
    });
  }

  if (deptMatches) {
    positiveReasons.push("Bölümünüz bu bursun hedef alanlarına doğrudan uygundur.");
  } else if (!isDeptAll && profile.department !== 'all') {
    score -= 45;
    hasCriticalConflict = true;
    issues.push(`Bölüm Kısıtlaması: Bu burs (${burs.target_departments.join(', ')}) öğrencilerine yöneliktir.`);
  }

  // 2. Üniversite Statüsü Kontrolü
  if (burs.university_restriction_type === 'state_only') {
    if (profile.uniType !== 'state') {
      score -= 50;
      hasCriticalConflict = true;
      issues.push("Sadece Devlet Üniversitelerine Açık: Vakıf üniversitesi öğrencileri başvuramaz.");
    } else {
      positiveReasons.push("Devlet üniversitesi şartını sağlıyorsunuz.");
    }
  } else if (burs.university_restriction_type === 'state_or_full_scholarship') {
    if (profile.uniType === 'private_partial') {
      score -= 45;
      hasCriticalConflict = true;
      issues.push("Vakıf Kısıtlaması: Sadece Devlet veya %100 Tam Burslu vakıf öğrencileri başvurabilir.");
    }
  }

  // 3. Not Ortalaması (GNO) Kontrolü
  // 1. Sınıf ve Hazırlık öğrencilerinin üniversite GNO'su henüz olmaz; YKS puanı ile başvuru yapılır!
  const isFreshmanOrPrep = profile.classLevel === '1' || profile.classLevel === 'prep';
  
  if (isFreshmanOrPrep) {
    positiveReasons.push("Yeni kayıt (1. Sınıf / Hazırlık) olduğunuz için üniversite GNO şartı aranmaz, YKS puanınız esas alınır.");
  } else {
    // Ara sınıflar için GNO değerlendirilir
    if (profile.gpa < burs.min_gpa) {
      const diff = (burs.min_gpa - profile.gpa).toFixed(2);
      score -= 30;
      issues.push(`Not Ortalaması Eksik: Ara sınıflar için istenen min GNO ${burs.min_gpa.toFixed(2)}, sizin ortalamanız ${profile.gpa.toFixed(2)} (${diff} eksik).`);
    } else {
      positiveReasons.push(`GNO Şartı Sağlandı: Min ${burs.min_gpa.toFixed(2)} isteniyor, sizinki ${profile.gpa.toFixed(2)}.`);
    }
  }

  // 4. BAŞKA ÖZEL VAKIF BURSU ÇAKIŞMASI (EN ÖNEMLİ KRİTİK KURAL)
  if (profile.hasOtherPrivate && !burs.conflict_rules.allows_other_private) {
    score -= 55;
    hasCriticalConflict = true;
    issues.push(`ÇAKIŞMA UYARISI (Tek Burs Kuralı): Şu an başka özel bursunuz var! Bu vakıf ikinci bir özel burs almanıza izin vermez.`);
  } else if (profile.hasOtherPrivate && burs.conflict_rules.allows_other_private) {
    positiveReasons.push("Çift Burs Serbest: Mevcut özel bursunuz varken bu bursu da alabilirsiniz!");
  }

  // 5. KYK Çakışma Kontrolü
  if (profile.hasKYK && burs.conflict_rules.allows_kyk) {
    positiveReasons.push("KYK Dostu: KYK bursu/kredisi alırken bu burs kesilmez.");
  }

  // 6. Geri Ödeme Şartı
  if (profile.onlyNonRepayable && burs.is_repayable) {
    score -= 35;
    issues.push("Geri Ödemeli: Bu burs karşılıksız değildir; mezuniyet sonrası geri ödeme veya taahhüt içerir.");
  }

  // Skor Sınırlandırma
  score = Math.max(10, Math.min(100, score));

  let badgeClass = 'score-perfect';
  let badgeText = `%${score} Tam Uyumlu 🎯`;

  if (hasCriticalConflict || score < 60) {
    badgeClass = 'score-warning';
    badgeText = `%${score} Çakışma Var ⚠️`;
  } else if (score < 90) {
    badgeClass = 'score-good';
    badgeText = `%${score} Kısmen Uyumlu 👍`;
  }

  return {
    score,
    badgeClass,
    badgeText,
    hasCriticalConflict,
    issues,
    positiveReasons
  };
}

/* ==========================================================
   2. PROFİL SİHİRBAZI VE EVENTLERİ
   ========================================================== */
function initProfileWizard() {
  const gpaInput = document.getElementById('profGpa');
  const gpaDisplay = document.getElementById('gpaDisplay');
  const deptSelect = document.getElementById('profDepartment');
  const uniTypeSelect = document.getElementById('profUniType');
  const classSelect = document.getElementById('profClass');
  const kykCheck = document.getElementById('profHasKYK');
  const otherCheck = document.getElementById('profHasOtherPrivate');
  const nonRepayCheck = document.getElementById('profOnlyNonRepayable');
  const resetBtn = document.getElementById('resetProfileBtn');
  const toggleBtn = document.getElementById('toggleWizardBtn');
  const wizardSection = document.getElementById('wizardSection');
  const applyBtn = document.getElementById('applyWizardBtn');

  const gpaNotice = document.getElementById('gpaNotice');

  function updateGpaFieldState(classVal) {
    if (classVal === '1' || classVal === 'prep') {
      gpaInput.disabled = true;
      gpaDisplay.textContent = 'GNO Aranmaz (1. Sınıf / Hazırlık)';
      if (gpaNotice) {
        gpaNotice.textContent = '✨ 1. sınıf ve hazırlıkta GNO aranmaz; vakıflar YKS başarı sıranızı değerlendirir.';
        gpaNotice.style.color = '#34d399';
      }
    } else {
      gpaInput.disabled = false;
      const val = parseFloat(gpaInput.value).toFixed(2);
      gpaDisplay.textContent = `${val} / 4.00`;
      if (gpaNotice) {
        gpaNotice.textContent = 'Ara sınıflar için genel not ortalamanızı belirleyin.';
        gpaNotice.style.color = 'var(--text-muted)';
      }
    }
  }

  // Başlangıç durumu
  updateGpaFieldState(classSelect.value);

  // GNO Değiştiğinde
  gpaInput.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value).toFixed(2);
    gpaDisplay.textContent = `${val} / 4.00`;
    appState.userProfile.gpa = parseFloat(val);
    updateAndRender();
  });

  // Seçim Kutuları Değiştiğinde
  deptSelect.addEventListener('change', (e) => {
    appState.userProfile.department = e.target.value;
    updateAndRender();
  });

  uniTypeSelect.addEventListener('change', (e) => {
    appState.userProfile.uniType = e.target.value;
    updateAndRender();
  });

  classSelect.addEventListener('change', (e) => {
    appState.userProfile.classLevel = e.target.value;
    updateGpaFieldState(e.target.value);
    updateAndRender();
  });

  kykCheck.addEventListener('change', (e) => {
    appState.userProfile.hasKYK = e.target.checked;
    updateAndRender();
  });

  otherCheck.addEventListener('change', (e) => {
    appState.userProfile.hasOtherPrivate = e.target.checked;
    updateAndRender();
  });

  nonRepayCheck.addEventListener('change', (e) => {
    appState.userProfile.onlyNonRepayable = e.target.checked;
    updateAndRender();
  });

  // Sihirbazı Sıfırla
  resetBtn.addEventListener('click', () => {
    deptSelect.value = 'all';
    uniTypeSelect.value = 'state';
    classSelect.value = '1';
    gpaInput.value = '3.00';
    updateGpaFieldState('1');
    kykCheck.checked = false;
    otherCheck.checked = false;
    nonRepayCheck.checked = true;

    appState.userProfile = {
      department: 'all',
      uniType: 'state',
      classLevel: '1',
      gpa: 3.00,
      hasKYK: false,
      hasOtherPrivate: false,
      onlyNonRepayable: true
    };

    showToast('🔄 Profil kriterleri sıfırlandı');
    updateAndRender();
  });

  // Aç/Kapat Butonu
  toggleBtn.addEventListener('click', () => {
    wizardSection.scrollIntoView({ behavior: 'smooth' });
    showToast('🧙‍♂️ Profil kriterlerinizi düzenleyebilirsiniz');
  });

  applyBtn.addEventListener('click', () => {
    document.querySelector('.toolbar-section').scrollIntoView({ behavior: 'smooth' });
  });
}

/* ==========================================================
   3. ARAMA VE SIRALAMA SİSTEMİ
   ========================================================== */
function initSearchAndFilter() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const sortBySelect = document.getElementById('sortBySelect');
  const filterPills = document.querySelectorAll('.filter-pill');
  const resetAllBtn = document.getElementById('resetAllFiltersBtn');

  // Canlı Arama
  searchInput.addEventListener('input', (e) => {
    appState.searchQuery = e.target.value.trim().toLowerCase();
    clearBtn.classList.toggle('hidden', appState.searchQuery.length === 0);
    updateAndRender();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    appState.searchQuery = '';
    clearBtn.classList.add('hidden');
    updateAndRender();
  });

  // Sıralama Değişimi
  sortBySelect.addEventListener('change', (e) => {
    appState.sortBy = e.target.value;
    updateAndRender();
  });

  // Kategori Hap Butonları
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      appState.activeCategory = pill.getAttribute('data-filter');
      updateAndRender();
    });
  });

  resetAllBtn.addEventListener('click', () => {
    searchInput.value = '';
    appState.searchQuery = '';
    appState.activeCategory = 'all';
    filterPills.forEach(p => p.classList.remove('active'));
    filterPills[0].classList.add('active');
    updateAndRender();
  });
}

/* ==========================================================
   4. RENDER & FİLTRELEME MANTIĞI
   ========================================================== */
function updateAndRender() {
  const grid = document.getElementById('scholarshipsGrid');
  const noResults = document.getElementById('noResultsState');
  const statVisibleCount = document.getElementById('statVisibleCount');
  const statPerfectMatches = document.getElementById('statPerfectMatches');
  const matchCountText = document.getElementById('matchCountText');
  const matchSubText = document.getElementById('matchSubText');

  // 1. Her bursa uygunluk skorunu hesapla
  const processedList = BURSLAR_DATA.map(burs => {
    const analysis = calculateEligibility(burs, appState.userProfile);
    return {
      ...burs,
      analysis
    };
  });

  // 2. Filtreleri Uygula
  let filtered = processedList.filter(item => {
    // Kategori Filtresi
    if (appState.activeCategory === 'kyk-friendly' && !item.conflict_rules.allows_kyk) return false;
    if (appState.activeCategory === 'double-burs' && !item.conflict_rules.allows_other_private) return false;
    if (appState.activeCategory === 'muhendislik') {
      const isM = item.target_departments.some(d => d.includes('Mühendislik') || d === 'Tümü');
      if (!isM) return false;
    }
    if (appState.activeCategory === 'tip') {
      const isT = item.target_departments.some(d => d.includes('Tıp') || d === 'Tümü');
      if (!isT) return false;
    }
    if (appState.activeCategory === 'temel-bilimler') {
      const isTB = item.target_departments.some(d => d.includes('Fizik') || d.includes('Kimya') || d.includes('Temel Bilimler') || d === 'Tümü');
      if (!isTB) return false;
    }
    if (appState.activeCategory === 'high-amount' && item.amount_monthly < 5000) return false;

    // Arama Kelimesi Filtresi
    if (appState.searchQuery) {
      const q = appState.searchQuery;
      const matchName = item.name.toLowerCase().includes(q);
      const matchProvider = item.provider.toLowerCase().includes(q);
      const matchDept = item.target_departments.some(d => d.toLowerCase().includes(q));
      const matchTags = item.tags.some(t => t.toLowerCase().includes(q));
      const matchCity = item.target_city.toLowerCase().includes(q);

      if (!matchName && !matchProvider && !matchDept && !matchTags && !matchCity) return false;
    }

    return true;
  });

  // 3. Sıralama
  filtered.sort((a, b) => {
    if (appState.sortBy === 'match_score') {
      return b.analysis.score - a.analysis.score;
    }
    if (appState.sortBy === 'amount_desc') {
      return b.amount_monthly - a.amount_monthly;
    }
    if (appState.sortBy === 'deadline_asc') {
      return new Date(a.deadline) - new Date(b.deadline);
    }
    if (appState.sortBy === 'min_gpa_asc') {
      return a.min_gpa - b.min_gpa;
    }
    return 0;
  });

  // İstatistikleri Güncelle
  const perfectMatchCount = filtered.filter(i => i.analysis.score >= 95).length;
  statVisibleCount.textContent = filtered.length;
  statPerfectMatches.textContent = `${perfectMatchCount} Burs`;

  // Toplam burs sayacını güncelle
  document.querySelectorAll('.total-count-val').forEach(el => el.textContent = BURSLAR_DATA.length);

  if (matchCountText && matchSubText) {
    matchCountText.textContent = `${perfectMatchCount} Burs Profilinize %100 Tam Uyumlu!`;
    matchSubText.textContent = appState.userProfile.hasOtherPrivate 
      ? '⚠️ Mevcut bir özel bursunuz olduğu için tek burs kuralı olan vakıflar kırmızı çizgiyle işaretlendi.'
      : 'Tüm şartları sağladığınız ve çakışma olmayan burslar en üstte gösteriliyor.';
  }

  // Boş Durum Kontrolü
  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }
  noResults.classList.add('hidden');

  // Kartları Render Et
  grid.innerHTML = filtered.map(item => renderBursCard(item)).join('');

  // Kart Buton Eventlerini Bağla
  attachCardEvents();
  updateNavBadges();
}

/* ==========================================================
   5. TEK BİR BURS KARTININ HTML ŞABLONU
   ========================================================== */
function renderBursCard(item) {
  const isFav = appState.favorites.includes(item.id);
  const isCompared = appState.compareList.includes(item.id);

  // Çakışma Rozetleri
  const kykPill = item.conflict_rules.allows_kyk
    ? `<span class="conflict-pill pill-kyk-ok">🟢 KYK Bursu ile Birlikte Alınabilir</span>`
    : `<span class="conflict-pill pill-single-burs">🔴 KYK ile Alınamaz!</span>`;

  const privatePill = item.conflict_rules.allows_other_private
    ? `<span class="conflict-pill pill-double-burs">✨ Başka Özel Vakıf Bursu Serbest</span>`
    : `<span class="conflict-pill pill-single-burs">⚠️ Tek Özel Burs Kuralı (Başka Vakıf Yasak)</span>`;

  return `
    <article class="burs-card" data-id="${item.id}">
      <div>
        <!-- Başlık & Skor -->
        <div class="burs-card-header">
          <div class="provider-info">
            <div class="provider-avatar" style="background: ${item.badge_color};">
              ${item.logo_initials}
            </div>
            <div class="provider-meta">
              <span class="provider-name">${item.provider}</span>
              <span class="deadline-tag ${item.deadline_status === 'urgent' ? 'urgent' : ''}">
                ⏳ ${item.status_label} (${formatDate(item.deadline)})
              </span>
            </div>
          </div>
          <span class="match-score-badge ${item.analysis.badgeClass}">
            ${item.analysis.badgeText}
          </span>
        </div>

        <!-- Burs Başlığı -->
        <h3 class="burs-card-title" style="margin-top: 0.9rem;">${item.name}</h3>

        <!-- Tutar Şeridi -->
        <div class="burs-card-amount-row" style="margin: 0.85rem 0;">
          <div>
            <span class="amount-val">${item.amount_display}</span>
          </div>
          <span class="duration-val">Yılda ${item.months_count} Ay Ödenir</span>
        </div>

        <!-- Çakışma & Şart Matrisi Rozetleri -->
        <div class="conflict-pills-row">
          ${kykPill}
          ${privatePill}
        </div>
      </div>

      <div>
        <!-- Mini Etiketler (Hedef Bölüm, Min GNO) -->
        <div class="burs-card-tags" style="margin-bottom: 0.85rem;">
          <span class="mini-tag highlight">🎯 Min GNO: ${item.min_gpa.toFixed(2)}</span>
          <span class="mini-tag">🏛️ ${item.department_category}</span>
          <span class="mini-tag">📍 ${item.target_city}</span>
        </div>

        <!-- Aksiyon Butonları -->
        <div class="burs-card-actions">
          <button class="btn-detail" data-id="${item.id}">
            Şartları &amp; Kırmızı Çizgileri Gör
          </button>
          <button class="btn-icon-action btn-compare ${isCompared ? 'active-compare' : ''}" data-id="${item.id}" title="Karşılaştırmaya Ekle">
            ⚖️
          </button>
          <button class="btn-icon-action btn-fav ${isFav ? 'active-fav' : ''}" data-id="${item.id}" title="Favorilere Ekle">
            ⭐
          </button>
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================
   6. KART ETKİLEŞİMLERİ (DETAY, FAVORİ, KARŞILAŞTIRMA)
   ========================================================== */
function attachCardEvents() {
  // Detay Modalı Aç
  document.querySelectorAll('.btn-detail').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      openDetailModal(id);
    });
  });

  // Favorilere Ekle / Çıkar
  document.querySelectorAll('.btn-fav').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      toggleFavorite(id);
    });
  });

  // Karşılaştırmaya Ekle / Çıkar
  document.querySelectorAll('.btn-compare').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      toggleCompare(id);
    });
  });
}

function toggleFavorite(id) {
  const index = appState.favorites.indexOf(id);
  if (index > -1) {
    appState.favorites.splice(index, 1);
    showToast('⭐ Burs favorilerden çıkarıldı');
  } else {
    appState.favorites.push(id);
    showToast('⭐ Burs favorilere eklendi!');
  }
  localStorage.setItem('bursradar_favorites', JSON.stringify(appState.favorites));
  updateAndRender();
}

function toggleCompare(id) {
  const index = appState.compareList.indexOf(id);
  if (index > -1) {
    appState.compareList.splice(index, 1);
    showToast('⚖️ Karşılaştırma listesinden çıkarıldı');
  } else {
    if (appState.compareList.length >= 3) {
      showToast('⚠️ En fazla 3 bursu aynı anda karşılaştırabilirsiniz!');
      return;
    }
    appState.compareList.push(id);
    showToast('⚖️ Karşılaştırma listesine eklendi (+1)');
  }
  updateAndRender();
}

function updateNavBadges() {
  const compareBadge = document.getElementById('compareBadge');
  const favBadge = document.getElementById('favoritesBadge');

  if (compareBadge) compareBadge.textContent = appState.compareList.length;
  if (favBadge) favBadge.textContent = appState.favorites.length;
}

/* ==========================================================
   7. MODAL VE ÇEKMECELER (DETAILS, COMPARE, FAVORITES)
   ========================================================== */
function initModalsAndDrawers() {
  // Detay Modalı Kapatma
  const detailModal = document.getElementById('detailModal');
  const closeDetailBtn = document.getElementById('closeDetailModalBtn');
  closeDetailBtn.addEventListener('click', () => detailModal.classList.add('hidden'));

  // Karşılaştırma Modalı Açma / Kapatma
  const compareModal = document.getElementById('compareModal');
  const openCompareBtn = document.getElementById('openCompareBtn');
  const closeCompareBtn = document.getElementById('closeCompareModalBtn');

  openCompareBtn.addEventListener('click', () => {
    if (appState.compareList.length === 0) {
      showToast('ℹ️ Lütfen önce en az bir bursun yanındaki (⚖️) butonuna tıklayın!');
      return;
    }
    renderCompareModal();
    compareModal.classList.remove('hidden');
  });

  closeCompareBtn.addEventListener('click', () => compareModal.classList.add('hidden'));

  // Favoriler Çekmecesi Açma / Kapatma
  const favDrawer = document.getElementById('favoritesDrawer');
  const openFavBtn = document.getElementById('openFavoritesBtn');
  const closeFavBtn = document.getElementById('closeFavoritesDrawerBtn');

  openFavBtn.addEventListener('click', () => {
    renderFavoritesDrawer();
    favDrawer.classList.remove('hidden');
  });

  closeFavBtn.addEventListener('click', () => favDrawer.classList.add('hidden'));

  // Backdrop Tıklamalarında Kapat
  [detailModal, compareModal, favDrawer].forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el) el.classList.add('hidden');
    });
  });
}

/* Detay Modalı Render */
function openDetailModal(id) {
  const burs = BURSLAR_DATA.find(b => b.id === id);
  if (!burs) return;

  const analysis = calculateEligibility(burs, appState.userProfile);
  const content = document.getElementById('detailModalContent');

  let alertBlock = '';
  if (analysis.issues.length > 0) {
    alertBlock = `
      <div class="modal-alert-box">
        <div class="modal-alert-title">⚠️ Profilinize Göre Dikkat Edilmesi Gereken Kırmızı Çizgiler:</div>
        <ul class="requirements-ul" style="margin-top: 0.4rem;">
          ${analysis.issues.map(iss => `<li style="color: #fb7185;">${iss}</li>`).join('')}
        </ul>
      </div>
    `;
  } else {
    alertBlock = `
      <div class="modal-alert-box success">
        <div class="modal-alert-title" style="color: #34d399;">🎯 %100 Mükemmel Uyum!</div>
        <p style="font-size: 0.86rem; color: #a7f3d0;">Girdiğiniz üniversite, bölüm, GNO ve mevcut burs durumunuz bu vakfın tüm şartlarına uymaktadır.</p>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="modal-header-section">
      <div class="modal-provider-avatar" style="background: ${burs.badge_color};">
        ${burs.logo_initials}
      </div>
      <div>
        <span class="provider-name">${burs.provider}</span>
        <h2 class="modal-burs-title">${burs.name}</h2>
      </div>
    </div>

    ${alertBlock}

    <div class="modal-section">
      <h4 class="modal-section-title">💰 Burs Tutarı &amp; Süresi</h4>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">
        <strong>${burs.amount_display}</strong> &bull; Yılda ${burs.months_count} ay boyunca hesabınıza yatırılır.
      </p>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
        Geri Ödeme Durumu: <strong style="color: #34d399;">${burs.repayment_type}</strong> - ${burs.repayment_details}
      </p>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">⚡ Çakışma &amp; Kurallar (Başka Burs Alabilir miyim?)</h4>
      <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); padding: 0.85rem 1rem; border-radius: var(--radius-md);">
        <p style="font-size: 0.88rem; color: var(--text-main); font-weight: 600;">
          ${burs.conflict_rules.rule_description}
        </p>
      </div>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">📋 Başvuru Şartları &amp; Kriterler</h4>
      <ul class="requirements-ul">
        ${burs.requirements_list.map(req => `<li>${req}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">🎯 Hedef Bölümler &amp; Üniversiteler</h4>
      <p style="font-size: 0.88rem; color: var(--text-secondary);">
        <strong>Bölümler:</strong> ${burs.target_departments.join(', ')}
      </p>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.3rem;">
        <strong>Üniversiteler:</strong> ${burs.target_universities.join(', ')}
      </p>
    </div>

    <div class="modal-footer-actions">
      <a href="${burs.apply_url}" target="_blank" rel="noopener noreferrer" class="apply-external-btn">
        <span>Resmi Başvuru Sayfasına Git</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 17px; height: 17px;">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    </div>
  `;

  document.getElementById('detailModal').classList.remove('hidden');
}

/* Karşılaştırma Tablosu Render */
function renderCompareModal() {
  const container = document.getElementById('compareBody');
  const list = BURSLAR_DATA.filter(b => appState.compareList.includes(b.id));

  if (list.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted);">Karşılaştırılacak burs seçilmedi.</p>`;
    return;
  }

  container.innerHTML = `
    <div class="compare-table-wrapper">
      <table class="compare-table">
        <thead>
          <tr>
            <th class="criteria-col">Karşılaştırma Kriteri</th>
            ${list.map(b => `
              <th>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: ${b.badge_color};"></span>
                  <span>${b.name}</span>
                </div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="criteria-col">Aylık Burs Tutarı</td>
            ${list.map(b => `<td style="font-weight: 700; color: #34d399; font-size: 1.05rem;">${b.amount_display}</td>`).join('')}
          </tr>
          <tr>
            <td class="criteria-col">Ödenen Ay Sayısı</td>
            ${list.map(b => `<td>Yılda ${b.months_count} Ay</td>`).join('')}
          </tr>
          <tr>
            <td class="criteria-col">KYK Bursu ile Birlikte Alınabilir mi?</td>
            ${list.map(b => `
              <td>
                ${b.conflict_rules.allows_kyk 
                  ? '<strong style="color: #34d399;">✅ Evet (KYK Dostu)</strong>' 
                  : '<strong style="color: #fb7185;">❌ Hayır (Kesilir)</strong>'}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="criteria-col">Başka Özel Vakıf Bursu İzni</td>
            ${list.map(b => `
              <td>
                ${b.conflict_rules.allows_other_private 
                  ? '<strong style="color: #67e8f9;">✨ Evet (Çift Burs Serbest)</strong>' 
                  : '<strong style="color: #fb7185;">🔴 Yasak (Tek Burs Kuralı)</strong>'}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="criteria-col">Min Not Ortalaması (GNO)</td>
            ${list.map(b => `<td><strong>${b.min_gpa.toFixed(2)}</strong> / 4.00</td>`).join('')}
          </tr>
          <tr>
            <td class="criteria-col">Geri Ödeme Şartı</td>
            ${list.map(b => `<td>${b.repayment_type}</td>`).join('')}
          </tr>
          <tr>
            <td class="criteria-col">Hedef Üniversiteler</td>
            ${list.map(b => `<td style="font-size: 0.8rem;">${b.target_universities.slice(0, 3).join(', ')}...</td>`).join('')}
          </tr>
          <tr>
            <td class="criteria-col">Hedef Bölümler</td>
            ${list.map(b => `<td style="font-size: 0.8rem;">${b.target_departments.slice(0, 3).join(', ')}...</td>`).join('')}
          </tr>
          <tr>
            <td class="criteria-col">Resmi Başvuru</td>
            ${list.map(b => `
              <td>
                <a href="${b.apply_url}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-primary-light); text-decoration: underline; font-weight: 600;">
                  Siteye Git &rarr;
                </a>
              </td>
            `).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

/* Favoriler Çekmecesi Render */
function renderFavoritesDrawer() {
  const container = document.getElementById('favoritesList');
  const countEl = document.getElementById('drawerCount');
  const list = BURSLAR_DATA.filter(b => appState.favorites.includes(b.id));

  countEl.textContent = list.length;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 2rem; margin-bottom: 0.5rem;">⭐</p>
        <p>Henüz favori bir burs eklemediniz.</p>
        <p style="font-size: 0.8rem; margin-top: 0.4rem;">Kartlardaki yıldız ikonuna tıklayarak ilgilendiğiniz bursları buraya kaydedebilirsiniz.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(b => `
    <div class="drawer-item">
      <div>
        <div class="drawer-item-title">${b.name}</div>
        <div class="drawer-item-amount">${b.amount_display}</div>
        <span style="font-size: 0.72rem; color: var(--text-muted);">${b.provider}</span>
      </div>
      <div style="display: flex; gap: 0.4rem;">
        <button class="ghost-btn" onclick="openDetailModal('${b.id}')" style="padding: 0.35rem 0.65rem;">Gör</button>
        <button class="ghost-btn" onclick="toggleFavorite('${b.id}')" style="padding: 0.35rem 0.65rem; color: #fb7185;">✕</button>
      </div>
    </div>
  `).join('');
}

/* ==========================================================
   8. YARDIMCI FONKSİYONLAR (TOAST, TARİH FORMATI)
   ========================================================== */
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');

  toastMsg.textContent = msg;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function formatDate(dateStr) {
  const parts = dateStr.split('-');
  return `${parts[2]}.${parts[1]}.${parts[0]}`;
}
