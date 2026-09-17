/**
 * BURSRADAR - TÜRKİYE'NİN EN KAPSAMLI 105+ ÜNİVERSİTE BURSU VERİTABANI
 * Çakışma kuralları, hedef fakülteler, tutarlar ve güncel şartlar eksiksiz listelenmiştir.
 */

const BURSLAR_DATA = [
  {
    "id": "tev-lisans",
    "name": "TEV Üniversite Lisans Bursu",
    "provider": "Türk Eğitim Vakfı (TEV)",
    "logo_initials": "TEV",
    "badge_color": "#ef4444",
    "amount_monthly": 4500,
    "amount_display": "4.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs Kuralı",
      "rule_description": "KYK serbesttir; başka özel vakıf bursu ile birleştirilemez."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet",
      "Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-10",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tev.org.tr",
    "tags": [
      "Prestijli",
      "Karşılıksız",
      "Geniş Ağ"
    ],
    "description": "Türk Eğitim Vakfı (TEV) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir; başka özel vakıf bursu ile birleştirilemez."
    ]
  },
  {
    "id": "vkv-lisans",
    "name": "Vehbi Koç Vakfı Üniversite Lisans Bursu",
    "provider": "Vehbi Koç Vakfı (VKV)",
    "logo_initials": "VKV",
    "badge_color": "#3b82f6",
    "amount_monthly": 6500,
    "amount_display": "6.500 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Katı Tek Burs Kuralı",
      "rule_description": "KYK serbesttir; başka herhangi bir özel vakıf bursu alınamaz."
    },
    "target_departments": [
      "Mühendislik",
      "Tıp",
      "İktisadi ve İdari Bilimler",
      "Hukuk",
      "Temel Bilimler"
    ],
    "department_category": "Belirli Fakülteler",
    "target_universities": [
      "ODTÜ",
      "İTÜ",
      "Boğaziçi",
      "Hacettepe",
      "İstanbul Üni",
      "Ankara Üni"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 3.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 3.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-09-30",
    "deadline_status": "urgent",
    "status_label": "Son Günler!",
    "apply_url": "https://www.vkv.org.tr",
    "tags": [
      "Yüksek Tutar",
      "Karşılıksız"
    ],
    "description": "Vehbi Koç Vakfı (VKV) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 3.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir; başka herhangi bir özel vakıf bursu alınamaz."
    ]
  },
  {
    "id": "sabanci-lisans",
    "name": "Sabancı Vakfı Üniversiteye Giriş Bursu",
    "provider": "Sabancı Vakfı",
    "logo_initials": "SBV",
    "badge_color": "#8b5cf6",
    "amount_monthly": 6000,
    "amount_display": "6.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs Kuralı",
      "rule_description": "KYK serbesttir; başka özel burs alınamaz."
    },
    "target_departments": [
      "Mühendislik",
      "Tıp",
      "Hukuk",
      "İktisat",
      "İşletme",
      "Eğitim"
    ],
    "department_category": "Çeşitli Bölümler",
    "target_universities": [
      "Hacettepe",
      "İTÜ",
      "Boğaziçi",
      "ODTÜ",
      "Marmara",
      "Ankara Üni"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.75,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.75 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-18",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.sabancivakfi.org",
    "tags": [
      "Prestijli",
      "Karşılıksız"
    ],
    "description": "Sabancı Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.75 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir; başka özel burs alınamaz."
    ]
  },
  {
    "id": "mzv-yetgen",
    "name": "Mehmet Zorlu Vakfı 21. Yüzyıl Yetkinlikleri Bursu",
    "provider": "Mehmet Zorlu Vakfı (MZV)",
    "logo_initials": "MZV",
    "badge_color": "#6366f1",
    "amount_monthly": 5500,
    "amount_display": "5.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız + YetGen",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK serbesttir; eş zamanlı başka vakıf bursu kabul edilmez."
    },
    "target_departments": [
      "İktisadi ve İdari Bilimler",
      "Mühendislik",
      "Hukuk",
      "Tıp"
    ],
    "department_category": "Hedef Bölümler",
    "target_universities": [
      "ODTÜ",
      "İTÜ",
      "Boğaziçi",
      "Yıldız Teknik",
      "Galatasaray"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 3.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 3.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-15",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.mzv.org.tr",
    "tags": [
      "YetGen Eğitimi",
      "Liderlik"
    ],
    "description": "Mehmet Zorlu Vakfı (MZV) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 3.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir; eş zamanlı başka vakıf bursu kabul edilmez."
    ]
  },
  {
    "id": "rev-egitim",
    "name": "Rönesans Eğitim Vakfı Lisans Bursu",
    "provider": "Rönesans Eğitim Vakfı",
    "logo_initials": "REV",
    "badge_color": "#14b8a6",
    "amount_monthly": 4500,
    "amount_display": "4.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK alınabilir; başka özel burs alınamaz."
    },
    "target_departments": [
      "İnşaat Mühendisliği",
      "Mimarlık",
      "Makine Müh.",
      "Elektrik Müh.",
      "Hukuk"
    ],
    "department_category": "Mühendislik & Mimarlık",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye (Deprem Öncelikli)",
    "deadline": "2026-10-12",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://rev.org.tr",
    "tags": [
      "Deprem Bölgesi Önceliği",
      "İnşaat"
    ],
    "description": "Rönesans Eğitim Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK alınabilir; başka özel burs alınamaz."
    ]
  },
  {
    "id": "anadolu-vakfi",
    "name": "Anadolu Vakfı Lisans Bursu",
    "provider": "Anadolu Vakfı",
    "logo_initials": "ANV",
    "badge_color": "#e11d48",
    "amount_monthly": 4200,
    "amount_display": "4.200 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK serbesttir; başka vakıftan burs alınamaz."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-09-30",
    "deadline_status": "urgent",
    "status_label": "Son Günler!",
    "apply_url": "https://www.anadoluvakfi.org.tr",
    "tags": [
      "Devlet Ünileri",
      "Mentörlük"
    ],
    "description": "Anadolu Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir; başka vakıftan burs alınamaz."
    ]
  },
  {
    "id": "elginkan-lisans",
    "name": "Elginkan Vakfı Lisans Bursu",
    "provider": "Elginkan Vakfı",
    "logo_initials": "ELG",
    "badge_color": "#d97706",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK hariç başka bir kurumdan burs alınamaz."
    },
    "target_departments": [
      "Mühendislik",
      "Kimya Mühendisliği",
      "Makine Müh.",
      "Malzeme Müh."
    ],
    "department_category": "Kimya & Mühendislik",
    "target_universities": [
      "İTÜ",
      "ODTÜ",
      "Boğaziçi",
      "Yıldız Teknik",
      "Ege Üni"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.7,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.70 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-05",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.elginkanvakfi.org.tr",
    "tags": [
      "Sanayi Odaklı",
      "Kimya"
    ],
    "description": "Elginkan Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.70 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK hariç başka bir kurumdan burs alınamaz."
    ]
  },
  {
    "id": "alarko-alev",
    "name": "Alarko Eğitim-Kültür Vakfı (ALEV) Bursu",
    "provider": "Alarko Eğitim ve Kültür Vakfı",
    "logo_initials": "ALR",
    "badge_color": "#2563eb",
    "amount_monthly": 5000,
    "amount_display": "5.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs Kuralı",
      "rule_description": "KYK alınabilir; başka özel kurum bursu alınamaz."
    },
    "target_departments": [
      "Makine Müh.",
      "Endüstri Müh.",
      "İnşaat Müh.",
      "İşletme"
    ],
    "department_category": "Mühendislik & İşletme",
    "target_universities": [
      "İTÜ",
      "ODTÜ",
      "Boğaziçi",
      "Yıldız Teknik"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 3.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 3.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-14",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.alarko.com.tr",
    "tags": [
      "Sanayi Devi",
      "Staj İmkânı"
    ],
    "description": "Alarko Eğitim ve Kültür Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 3.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK alınabilir; başka özel kurum bursu alınamaz."
    ]
  },
  {
    "id": "borusan-bursu",
    "name": "Borusan Kocabıyık Vakfı Üniversite Bursu",
    "provider": "Borusan Kocabıyık Vakfı",
    "logo_initials": "BRS",
    "badge_color": "#dc2626",
    "amount_monthly": 5200,
    "amount_display": "5.200 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK serbesttir; başka bir vakıftan düzenli burs alınamaz."
    },
    "target_departments": [
      "Mühendislik",
      "Hukuk",
      "İktisadi ve İdari Bilimler",
      "Müzik"
    ],
    "department_category": "Mühendislik, Hukuk & Sanat",
    "target_universities": [
      "İTÜ",
      "İstanbul Üni",
      "ODTÜ",
      "Boğaziçi"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.8,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.80 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-08",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.bkv.org.tr",
    "tags": [
      "Kültür & Sanat",
      "Sanayi"
    ],
    "description": "Borusan Kocabıyık Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.80 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir; başka bir vakıftan düzenli burs alınamaz."
    ]
  },
  {
    "id": "enka-vakfi",
    "name": "ENKA Vakfı Lisans Eğitim Bursu",
    "provider": "ENKA Spor Eğitim ve Sosyal Yardım Vakfı",
    "logo_initials": "ENK",
    "badge_color": "#059669",
    "amount_monthly": 5800,
    "amount_display": "5.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Kuralı",
      "rule_description": "KYK alınabilir; başka özel kurum bursu alınamaz."
    },
    "target_departments": [
      "İnşaat Mühendisliği",
      "Makine Müh.",
      "Elektrik Müh.",
      "Mimarlık"
    ],
    "department_category": "Mühendislik & Mimarlık",
    "target_universities": [
      "İTÜ",
      "ODTÜ",
      "Boğaziçi"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.8,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.80 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-20",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.enkavakfi.org",
    "tags": [
      "İnşaat Devi",
      "Yüksek Tutar"
    ],
    "description": "ENKA Spor Eğitim ve Sosyal Yardım Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.80 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK alınabilir; başka özel kurum bursu alınamaz."
    ]
  },
  {
    "id": "eczacibasi-burs",
    "name": "Eczacıbaşı Girişimcilik & Lisans Bursu",
    "provider": "Eczacıbaşı Holding",
    "logo_initials": "ECZ",
    "badge_color": "#9333ea",
    "amount_monthly": 5500,
    "amount_display": "5.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Kuralı",
      "rule_description": "KYK hariç başka burs alınamaz."
    },
    "target_departments": [
      "Eczacılık",
      "Kimya Mühendisliği",
      "Biyomühendislik",
      "İşletme"
    ],
    "department_category": "Sağlık & Kimya",
    "target_universities": [
      "Devlet",
      "Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.75,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.75 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-15",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.eczacibasi.com.tr",
    "tags": [
      "Eczacılık",
      "Girişimcilik"
    ],
    "description": "Eczacıbaşı Holding tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.75 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK hariç başka burs alınamaz."
    ]
  },
  {
    "id": "tekfen-vakfi",
    "name": "Tekfen Vakfı Lisans Burs Programı",
    "provider": "Tekfen Vakfı",
    "logo_initials": "TKF",
    "badge_color": "#0284c7",
    "amount_monthly": 4800,
    "amount_display": "4.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK serbesttir; başka vakıf bursu kabul edilmez."
    },
    "target_departments": [
      "Ziraat Fakültesi",
      "İnşaat Mühendisliği",
      "Kimya Müh.",
      "Biyoloji"
    ],
    "department_category": "Ziraat & Mühendislik",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-02",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tekfenburs.org",
    "tags": [
      "Tarımsal AR-GE",
      "Mühendislik"
    ],
    "description": "Tekfen Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir; başka vakıf bursu kabul edilmez."
    ]
  },
  {
    "id": "yasar-egitim",
    "name": "Yaşar Eğitim ve Kültür Vakfı Lisans Bursu",
    "provider": "Yaşar Eğitim ve Kültür Vakfı",
    "logo_initials": "YŞR",
    "badge_color": "#ea580c",
    "amount_monthly": 4200,
    "amount_display": "4.200 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK serbesttir; başka özel burs alınamaz."
    },
    "target_departments": [
      "Gıda Mühendisliği",
      "Ziraat Fakültesi",
      "Veterinerlik",
      "Kimya Müh."
    ],
    "department_category": "Gıda, Ziraat & Kimya",
    "target_universities": [
      "Ege Üni",
      "Dokuz Eylül",
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye (Ege Öncelikli)",
    "deadline": "2026-10-11",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.yasarvakfi.org.tr",
    "tags": [
      "Gıda & Ziraat"
    ],
    "description": "Yaşar Eğitim ve Kültür Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir; başka özel burs alınamaz."
    ]
  },
  {
    "id": "kibar-vakfi",
    "name": "Kibar Eğitim ve Sosyal Yardım Vakfı Bursu",
    "provider": "Kibar Vakfı",
    "logo_initials": "KBR",
    "badge_color": "#475569",
    "amount_monthly": 4600,
    "amount_display": "4.600 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbest; başka vakıf bursu yasaktır."
    },
    "target_departments": [
      "Metalurji ve Malzeme Müh.",
      "Makine Müh.",
      "Endüstri Müh."
    ],
    "department_category": "Metalurji & Makine",
    "target_universities": [
      "İTÜ",
      "Yıldız Teknik",
      "Kocaeli Üni"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.75,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.75 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-22",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.kibar.com",
    "tags": [
      "Sanayi",
      "Metalurji"
    ],
    "description": "Kibar Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.75 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbest; başka vakıf bursu yasaktır."
    ]
  },
  {
    "id": "limak-vakfi",
    "name": "Limak Vakfı Türkiye'nin Mühendis Kızları Bursu",
    "provider": "Limak Eğitim Kültür ve Sağlık Vakfı",
    "logo_initials": "LMK",
    "badge_color": "#be123c",
    "amount_monthly": 6000,
    "amount_display": "6.000 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız + İngilizce Eğitimi",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Esnek",
      "rule_description": "KYK ve diğer burslarla birlikte alınabilir (Kız mühendis öğrencileri)."
    },
    "target_departments": [
      "Bilgisayar Mühendisliği",
      "Elektrik-Elektronik Müh.",
      "Endüstri Müh.",
      "İnşaat Müh.",
      "Makine Müh., Kimya Müh."
    ],
    "department_category": "Sadece Kız Mühendisler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-18",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.limakvakfi.org",
    "tags": [
      "Kız Öğrenciler",
      "İngilizce Desteği",
      "Mentörlük"
    ],
    "description": "Limak Eğitim Kültür ve Sağlık Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK ve diğer burslarla birlikte alınabilir (Kız mühendis öğrencileri)."
    ]
  },
  {
    "id": "kalyon-vakfi",
    "name": "Kalyon Vakfı Geleceğin Mühendisleri Bursu",
    "provider": "Kalyon Vakfı",
    "logo_initials": "KLY",
    "badge_color": "#0f766e",
    "amount_monthly": 4800,
    "amount_display": "4.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "İnşaat Mühendisliği",
      "Enerji Sistemleri Müh.",
      "Elektrik Müh."
    ],
    "department_category": "İnşaat & Enerji",
    "target_universities": [
      "Devlet",
      "Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.6,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.60 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-25",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.kalyonholding.com",
    "tags": [
      "Enerji & İnşaat"
    ],
    "description": "Kalyon Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.60 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "sanko-vakfi",
    "name": "Sani Konukoğlu Vakfı (SANKO) Bursu",
    "provider": "Sani Konukoğlu Vakfı",
    "logo_initials": "SNK",
    "badge_color": "#b91c1c",
    "amount_monthly": 4300,
    "amount_display": "4.300 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK alınabilir; başka kurum bursu alınamaz."
    },
    "target_departments": [
      "Tekstil Mühendisliği",
      "Makine Müh.",
      "Tıp",
      "İşletme"
    ],
    "department_category": "Tekstil, Tıp & Mühendislik",
    "target_universities": [
      "Gaziantep Üni",
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye (Güneydoğu Öncelikli)",
    "deadline": "2026-10-15",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.sankovakfi.com",
    "tags": [
      "Güneydoğu",
      "Tekstil"
    ],
    "description": "Sani Konukoğlu Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK alınabilir; başka kurum bursu alınamaz."
    ]
  },
  {
    "id": "dogus-grubu",
    "name": "Doğuş Grubu Oyunda Kal Lisans Bursu",
    "provider": "Doğuş Grubu & Darüşşafaka",
    "logo_initials": "DGŞ",
    "badge_color": "#0369a1",
    "amount_monthly": 5000,
    "amount_display": "5.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Kuralı",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Spor Bilimleri",
      "İletişim Fakültesi",
      "Mühendislik"
    ],
    "department_category": "Spor & İletişim",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-28",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.dogusgrubu.com.tr",
    "tags": [
      "Spor & Sanat",
      "İletişim"
    ],
    "description": "Doğuş Grubu & Darüşşafaka tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "calik-holding",
    "name": "Çalık Holding Geleceğe Adım Bursu",
    "provider": "Çalık Holding",
    "logo_initials": "ÇLK",
    "badge_color": "#c2410c",
    "amount_monthly": 4700,
    "amount_display": "4.700 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Enerji Sistemleri Müh.",
      "Elektrik Müh.",
      "İktisat",
      "Bankacılık ve Finans"
    ],
    "department_category": "Enerji & Finans",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.7,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.70 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye (Doğu Öncelikli)",
    "deadline": "2026-10-19",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.calik.com",
    "tags": [
      "Enerji & Finans"
    ],
    "description": "Çalık Holding tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.70 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "akfen-vakfi",
    "name": "TİKAV (Akfen) Bireysel Gelişim Bursu",
    "provider": "Türkiye İnsan Kaynakları Vakfı (TİKAV)",
    "logo_initials": "TİK",
    "badge_color": "#15803d",
    "amount_monthly": 4500,
    "amount_display": "4.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız + Sosyal Uyum",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK alınabilir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Fırat Üniversitesi",
      "Van Yüzüncü Yıl",
      "Doğu/Güneydoğu Ünileri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1"
    ],
    "target_city": "Doğu & Güneydoğu Anadolu",
    "deadline": "2026-10-14",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tikav.org.tr",
    "tags": [
      "Doğu Anadolu",
      "Bireysel Gelişim"
    ],
    "description": "Türkiye İnsan Kaynakları Vakfı (TİKAV) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK alınabilir."
    ]
  },
  {
    "id": "turk-petrol",
    "name": "Türk Petrol Vakfı Lisans Bursu",
    "provider": "Türk Petrol Vakfı",
    "logo_initials": "TPV",
    "badge_color": "#b45309",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Kuralı",
      "rule_description": "KYK serbest; başka özel burs alınamaz."
    },
    "target_departments": [
      "Mühendislik",
      "Hukuk",
      "Tıp",
      "Siyaset Bilimi"
    ],
    "department_category": "Köklü Bölümler",
    "target_universities": [
      "İstanbul'daki Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.75,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.75 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "İstanbul",
    "deadline": "2026-10-09",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.turkpetrolvakfi.org.tr",
    "tags": [
      "İstanbul",
      "Köklü Vakıf"
    ],
    "description": "Türk Petrol Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.75 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbest; başka özel burs alınamaz."
    ]
  },
  {
    "id": "akkok-vakfi",
    "name": "Akkök Holding Eğitim Bursu",
    "provider": "Akkök Holding",
    "logo_initials": "AKK",
    "badge_color": "#4338ca",
    "amount_monthly": 5000,
    "amount_display": "5.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Kimya Mühendisliği",
      "Tekstil Müh.",
      "Endüstri Müh."
    ],
    "department_category": "Kimya & Tekstil",
    "target_universities": [
      "İTÜ",
      "Yalova Üni",
      "Yıldız Teknik"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.7,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.70 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye (Yalova Öncelikli)",
    "deadline": "2026-10-21",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.akkok.com.tr",
    "tags": [
      "Kimya Sanayi"
    ],
    "description": "Akkök Holding tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.70 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "polisan-vakfi",
    "name": "Polisan Eğitim ve Kültür Bursu",
    "provider": "Polisan Holding",
    "logo_initials": "POL",
    "badge_color": "#6d28d9",
    "amount_monthly": 4200,
    "amount_display": "4.200 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Kuralı",
      "rule_description": "KYK alınabilir."
    },
    "target_departments": [
      "Kimya",
      "Kimya Mühendisliği",
      "İşletme"
    ],
    "department_category": "Kimya & Yönetim",
    "target_universities": [
      "Kocaeli Üni",
      "Gebze Teknik",
      "İTÜ"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Kocaeli & Çevresi",
    "deadline": "2026-10-16",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.polisan.com.tr",
    "tags": [
      "Kimya & Boya"
    ],
    "description": "Polisan Holding tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK alınabilir."
    ]
  },
  {
    "id": "ditas-burs",
    "name": "Ditaş Doğan Yedek Parça İmalat Bursu",
    "provider": "Doğan Holding & Ditaş",
    "logo_initials": "DTS",
    "badge_color": "#047857",
    "amount_monthly": 4400,
    "amount_display": "4.400 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Otomotiv Mühendisliği",
      "Makine Mühendisliği"
    ],
    "department_category": "Otomotiv & Makine",
    "target_universities": [
      "Niğde Ömer Halisdemir",
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye (Niğde Öncelikli)",
    "deadline": "2026-10-26",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.ditas.com.tr",
    "tags": [
      "Otomotiv Sanayi"
    ],
    "description": "Doğan Holding & Ditaş tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "cinar-vakfi",
    "name": "Çınar Vakfı Başarı Bursu",
    "provider": "Çınar Eğitim ve Kültür Vakfı",
    "logo_initials": "ÇNR",
    "badge_color": "#0f172a",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "İlahiyat Fakültesi",
      "Tarih",
      "Edebiyat",
      "Sosyoloji"
    ],
    "department_category": "Sosyal & Beşeri Bilimler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-12",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.cinarvakfi.org.tr",
    "tags": [
      "İlahiyat & Sosyal"
    ],
    "description": "Çınar Eğitim ve Kültür Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "t3-teknofest",
    "name": "T3 Vakfı Özdemir Bayraktar Milli Teknoloji Bursu",
    "provider": "Türkiye Teknoloji Takımı Vakfı (T3)",
    "logo_initials": "T3",
    "badge_color": "#f59e0b",
    "amount_monthly": 5000,
    "amount_display": "5.000 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız + Eğitmenlik",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK veya başka burs alıyor olmak T3 bursuna engel DEĞİLDİR."
    },
    "target_departments": [
      "Bilgisayar Mühendisliği",
      "Elektrik-Elektronik Müh.",
      "Yazılım Müh.",
      "Makine Müh.",
      "Havacılık ve Uzay",
      "Yapay Zeka Müh."
    ],
    "department_category": "Mühendislik & Teknoloji",
    "target_universities": [
      "Tüm Üniversiteler"
    ],
    "university_restriction_type": "all",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-11-05",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://t3vakfi.org",
    "tags": [
      "TEKNOFEST",
      "Çift Burs Serbest",
      "Mühendislik"
    ],
    "description": "Türkiye Teknoloji Takımı Vakfı (T3) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK veya başka burs alıyor olmak T3 bursuna engel DEĞİLDİR."
    ]
  },
  {
    "id": "aselsan-burs",
    "name": "ASELSAN Yetenek Programı Lisans Desteği",
    "provider": "ASELSAN",
    "logo_initials": "ASL",
    "badge_color": "#0284c7",
    "amount_monthly": 7500,
    "amount_display": "7.500 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız + Aday Mühendislik",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Diğer burslar alınabilir; haftada belirli gün şirkette çalışma imkânı."
    },
    "target_departments": [
      "Elektrik-Elektronik Müh.",
      "Bilgisayar Mühendisliği",
      "Makine Müh.",
      "Haberleşme Müh."
    ],
    "department_category": "Savunma & Elektronik",
    "target_universities": [
      "ODTÜ",
      "Bilkent",
      "İTÜ",
      "Hacettepe",
      "Gazi"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 3.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 3.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "3",
      "4"
    ],
    "target_city": "Ankara & İstanbul",
    "deadline": "2026-10-15",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.aselsan.com.tr",
    "tags": [
      "Savunma Devi",
      "Yüksek Tutar",
      "Aday Mühendis"
    ],
    "description": "ASELSAN tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 3.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Diğer burslar alınabilir; haftada belirli gün şirkette çalışma imkânı."
    ]
  },
  {
    "id": "havelsan-burs",
    "name": "HAVELSAN Yıldızlar Stajyer & Burs Programı",
    "provider": "HAVELSAN",
    "logo_initials": "HVL",
    "badge_color": "#1d4ed8",
    "amount_monthly": 7000,
    "amount_display": "7.000 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız + Proje",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK ve vakıf bursları ile çakışmaz."
    },
    "target_departments": [
      "Bilgisayar Mühendisliği",
      "Yazılım Mühendisliği",
      "Siber Güvenlik",
      "Yapay Zeka"
    ],
    "department_category": "Yazılım & Siber Güvenlik",
    "target_universities": [
      "Devlet & Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 3.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 3.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-20",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.havelsan.com.tr",
    "tags": [
      "Yazılım",
      "Siber Güvenlik",
      "Savunma"
    ],
    "description": "HAVELSAN tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 3.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK ve vakıf bursları ile çakışmaz."
    ]
  },
  {
    "id": "tusas-liftup",
    "name": "TUSAŞ LIFT UP Sanayi Odaklı Lisans Bitirme Bursu",
    "provider": "Türk Havacılık ve Uzay Sanayii (TUSAŞ)",
    "logo_initials": "TUS",
    "badge_color": "#047857",
    "amount_monthly": 6500,
    "amount_display": "6.500 ₺ / ay",
    "months_count": 8,
    "is_repayable": false,
    "repayment_type": "Karşılıksız Bitirme Projesi Destek",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Öğrencinin başka bursları alması TUSAŞ projesine engel değildir."
    },
    "target_departments": [
      "Havacılık ve Uzay Müh.",
      "Uçak Müh.",
      "Makine Müh.",
      "Malzeme Müh."
    ],
    "department_category": "Havacılık & Uzay",
    "target_universities": [
      "Tüm Mühendislik Fakülteleri"
    ],
    "university_restriction_type": "all",
    "min_gpa": 2.8,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.80 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-11-01",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tusas.com",
    "tags": [
      "Havacılık",
      "Bitirme Tezi",
      "Çift Burs"
    ],
    "description": "Türk Havacılık ve Uzay Sanayii (TUSAŞ) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.80 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Öğrencinin başka bursları alması TUSAŞ projesine engel değildir."
    ]
  },
  {
    "id": "rokersan-burs",
    "name": "ROKETSAN Geleceğin Liderleri Lisans Programı",
    "provider": "ROKETSAN",
    "logo_initials": "RKT",
    "badge_color": "#b91c1c",
    "amount_monthly": 7200,
    "amount_display": "7.200 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK ve diğer burslarla birleştirilebilir."
    },
    "target_departments": [
      "Makine Mühendisliği",
      "Havacılık ve Uzay",
      "Kimya Mühendisliği",
      "Mekatronik"
    ],
    "department_category": "Roket & Füze Sistemleri",
    "target_universities": [
      "ODTÜ",
      "İTÜ",
      "Gazi",
      "Hacettepe"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 3.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 3.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "3",
      "4"
    ],
    "target_city": "Ankara",
    "deadline": "2026-10-18",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.roketsan.com.tr",
    "tags": [
      "Yüksek Teknoloji",
      "Savunma"
    ],
    "description": "ROKETSAN tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 3.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK ve diğer burslarla birleştirilebilir."
    ]
  },
  {
    "id": "baykar-milli",
    "name": "Baykar Milli S/İHA Teknolojileri Bursu",
    "provider": "Baykar Teknoloji",
    "logo_initials": "BYK",
    "badge_color": "#e11d48",
    "amount_monthly": 8000,
    "amount_display": "8.000 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız + AR-GE Mentörlük",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Mevcut burslar engel teşkil etmez."
    },
    "target_departments": [
      "Yapay Zeka Müh.",
      "Bilgisayar Müh.",
      "Havacılık ve Uzay",
      "Elektronik Müh."
    ],
    "department_category": "İHA & Robotik Sistemler",
    "target_universities": [
      "Devlet & Vakıf"
    ],
    "university_restriction_type": "all",
    "min_gpa": 3.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 3.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-25",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://kariyer.baykartech.com",
    "tags": [
      "İHA Teknolojileri",
      "Yüksek Tutar",
      "Robotik"
    ],
    "description": "Baykar Teknoloji tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 3.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Mevcut burslar engel teşkil etmez."
    ]
  },
  {
    "id": "stm-savunma",
    "name": "STM Savunma Teknolojileri Bursu",
    "provider": "STM Savunma Teknolojileri Mühendislik",
    "logo_initials": "STM",
    "badge_color": "#0891b2",
    "amount_monthly": 6500,
    "amount_display": "6.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Diğer burslar serbesttir."
    },
    "target_departments": [
      "Deniz Ulaştırma İşletme Müh.",
      "Gemi İnşaatı ve Gemi Makineleri",
      "Siber Güvenlik"
    ],
    "department_category": "Denizcilik & Siber",
    "target_universities": [
      "İTÜ",
      "Piri Reis",
      "Yıldız Teknik"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.8,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.80 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "İstanbul & Ankara",
    "deadline": "2026-10-29",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.stm.com.tr",
    "tags": [
      "Gemi İnşaatı",
      "Siber"
    ],
    "description": "STM Savunma Teknolojileri Mühendislik tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.80 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Diğer burslar serbesttir."
    ]
  },
  {
    "id": "cezeri-yapay-zeka",
    "name": "Cezeri Yapay Zeka ve Otonom Sistemler Bursu",
    "provider": "Cezeri Yeşil Teknoloji",
    "logo_initials": "CZR",
    "badge_color": "#059669",
    "amount_monthly": 6000,
    "amount_display": "6.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Yapay Zeka Mühendisliği",
      "Bilgisayar Mühendisliği",
      "Mekatronik"
    ],
    "department_category": "Otonom Araçlar",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.8,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.80 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-11-10",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.cezeri.com",
    "tags": [
      "Yapay Zeka",
      "Otonom"
    ],
    "description": "Cezeri Yeşil Teknoloji tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.80 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "tubitak-star",
    "name": "TÜBİTAK STAR Stajyer Araştırmacı Burs Programı",
    "provider": "TÜBİTAK BİDEB",
    "logo_initials": "STR",
    "badge_color": "#10b981",
    "amount_monthly": 4500,
    "amount_display": "4.500 ₺ / ay",
    "months_count": 6,
    "is_repayable": false,
    "repayment_type": "Karşılıksız Araştırma Desteği",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Tüm diğer burslarla birleştirilebilir (Resmi devlet araştırma desteği)."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler (AR-GE Odaklı)",
    "target_universities": [
      "Tüm Üniversiteler"
    ],
    "university_restriction_type": "all",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-11-15",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://star.tubitak.gov.tr",
    "tags": [
      "AR-GE Projesi",
      "Devlet Destekli",
      "Çift Burs Serbest"
    ],
    "description": "TÜBİTAK BİDEB tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Tüm diğer burslarla birleştirilebilir (Resmi devlet araştırma desteği)."
    ]
  },
  {
    "id": "turksat-burs",
    "name": "TÜRKSAT Uydu & Uzay Teknolojileri Bursu",
    "provider": "TÜRKSAT",
    "logo_initials": "TKS",
    "badge_color": "#2563eb",
    "amount_monthly": 5500,
    "amount_display": "5.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Haberleşme Mühendisliği",
      "Elektrik-Elektronik",
      "Bilgisayar"
    ],
    "department_category": "Uydu & Haberleşme",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.75,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.75 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-20",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.turksat.com.tr",
    "tags": [
      "Uydu Sistemleri",
      "Haberleşme"
    ],
    "description": "TÜRKSAT tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.75 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "botes-enerji",
    "name": "BOTAŞ Geleceğin Enerjisi Lisans Bursu",
    "provider": "BOTAŞ",
    "logo_initials": "BOT",
    "badge_color": "#ea580c",
    "amount_monthly": 5000,
    "amount_display": "5.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Petrol ve Doğalgaz Mühendisliği",
      "Jeoloji Müh.",
      "Maden Müh."
    ],
    "department_category": "Petrol, Gaz & Maden",
    "target_universities": [
      "İTÜ",
      "ODTÜ",
      "Hacettepe",
      "İskenderun Teknik"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-18",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.botas.gov.tr",
    "tags": [
      "Doğalgaz & Petrol"
    ],
    "description": "BOTAŞ tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "tpao-bursu",
    "name": "TPAO Petrol ve Doğalgaz Lisans Bursu",
    "provider": "Türkiye Petrolleri Anonim Ortaklığı (TPAO)",
    "logo_initials": "TPA",
    "badge_color": "#15803d",
    "amount_monthly": 9000,
    "amount_display": "9.000 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız + İşe Alım Önceliği",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "YKS'de petrol/jeofizik/jeoloji bölümlerini üst sıralardan seçenlere verilir."
    },
    "target_departments": [
      "Petrol ve Doğalgaz Mühendisliği",
      "Jeofizik Mühendisliği",
      "Jeoloji Müh."
    ],
    "department_category": "Petrol & Jeoloji",
    "target_universities": [
      "İTÜ",
      "ODTÜ"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-05",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tpao.gov.tr",
    "tags": [
      "Çok Yüksek Tutar",
      "İstihdam İmkânı"
    ],
    "description": "Türkiye Petrolleri Anonim Ortaklığı (TPAO) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "YKS'de petrol/jeofizik/jeoloji bölümlerini üst sıralardan seçenlere verilir."
    ]
  },
  {
    "id": "tupras-burs",
    "name": "TÜPRAŞ Rafineri ve Sürdürülebilir Kimya Bursu",
    "provider": "TÜPRAŞ",
    "logo_initials": "TPR",
    "badge_color": "#d97706",
    "amount_monthly": 5800,
    "amount_display": "5.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK alınabilir."
    },
    "target_departments": [
      "Kimya Mühendisliği",
      "Çevre Mühendisliği",
      "Makine Mühendisliği"
    ],
    "department_category": "Kimya & Rafineri",
    "target_universities": [
      "ODTÜ",
      "İTÜ",
      "Boğaziçi",
      "Kocaeli Üni"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.8,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.80 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Kocaeli, İzmir, Kırıkkale",
    "deadline": "2026-10-22",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tupras.com.tr",
    "tags": [
      "Rafineri",
      "Kimya devi"
    ],
    "description": "TÜPRAŞ tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.80 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK alınabilir."
    ]
  },
  {
    "id": "petkim-socar",
    "name": "SOCAR Türkiye (Petkim) Petrokimya Bursu",
    "provider": "SOCAR Türkiye",
    "logo_initials": "SCR",
    "badge_color": "#dc2626",
    "amount_monthly": 5500,
    "amount_display": "5.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Kimya Mühendisliği",
      "Polimer Mühendisliği",
      "Endüstri Müh."
    ],
    "department_category": "Petrokimya",
    "target_universities": [
      "Ege Üni",
      "İzmir Yüksek Teknoloji",
      "Dokuz Eylül"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.7,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.70 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "İzmir & Ege",
    "deadline": "2026-10-16",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.socar.com.tr",
    "tags": [
      "Petrokimya",
      "İzmir"
    ],
    "description": "SOCAR Türkiye tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.70 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "vestel-teknoloji",
    "name": "Vestel Geleceğe Bağlan Lisans Bursu",
    "provider": "Vestel & Zorlu",
    "logo_initials": "VST",
    "badge_color": "#be123c",
    "amount_monthly": 4800,
    "amount_display": "4.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Yazılım Mühendisliği",
      "Endüstriyel Tasarım",
      "Elektrik-Elektronik"
    ],
    "department_category": "Tüketici Elektroniği",
    "target_universities": [
      "Ege Üni",
      "Dokuz Eylül",
      "Manisa Celal Bayar"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.7,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.70 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Manisa & İzmir",
    "deadline": "2026-10-27",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.vestel.com.tr",
    "tags": [
      "Tasarım & Elektronik"
    ],
    "description": "Vestel & Zorlu tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.70 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "tubitak-2205",
    "name": "TÜBİTAK 2205 Temel Bilimler Lisans Bursu",
    "provider": "TÜBİTAK BİDEB",
    "logo_initials": "TÜB",
    "badge_color": "#10b981",
    "amount_monthly": 9500,
    "amount_display": "9.500 ₺ / ay",
    "months_count": 12,
    "is_repayable": false,
    "repayment_type": "Karşılıksız (12 Ay Kesintisiz)",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "TÜBİTAK bursiyerleri diğer vakıf burslarını ve KYK bursunu aynı anda alabilir!"
    },
    "target_departments": [
      "Fizik",
      "Kimya",
      "Biyoloji",
      "Matematik",
      "Moleküler Biyoloji"
    ],
    "department_category": "Temel Bilimler",
    "target_universities": [
      "Tüm Üniversiteler"
    ],
    "university_restriction_type": "all",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-25",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://e-bideb.tubitak.gov.tr",
    "tags": [
      "12 Ay Kesintisiz",
      "Çok Yüksek Tutar",
      "Temel Bilimler"
    ],
    "description": "TÜBİTAK BİDEB tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "TÜBİTAK bursiyerleri diğer vakıf burslarını ve KYK bursunu aynı anda alabilir!"
    ]
  },
  {
    "id": "ibb-genc-uni",
    "name": "İBB Genç Üniversiteli Eğitim Desteği",
    "provider": "İstanbul Büyükşehir Belediyesi",
    "logo_initials": "İBB",
    "badge_color": "#06b6d4",
    "amount_monthly": 5000,
    "amount_display": "5.000 ₺ / ay",
    "months_count": 3,
    "is_repayable": false,
    "repayment_type": "Karşılıksız Sosyal Destek",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Tüm Burslarla Uygun",
      "rule_description": "Belediye sosyal yardımı olduğu için KYK veya diğer özel bursları kesinlikle engellemez."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet",
      "Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "Hazırlık",
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "İstanbul İkametli",
    "deadline": "2026-10-20",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://gencuniversiteli.ibb.istanbul",
    "tags": [
      "İstanbul",
      "Engel Yok",
      "Sosyal Yardım"
    ],
    "description": "İstanbul Büyükşehir Belediyesi tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Belediye sosyal yardımı olduğu için KYK veya diğer özel bursları kesinlikle engellemez."
    ]
  },
  {
    "id": "abb-baskent-genc",
    "name": "Ankara BB Başkent Genç Lisans Desteği",
    "provider": "Ankara Büyükşehir Belediyesi",
    "logo_initials": "ABB",
    "badge_color": "#3b82f6",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 3,
    "is_repayable": false,
    "repayment_type": "Karşılıksız Destek",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Tüm Burslarla Uygun",
      "rule_description": "KYK ve özel vakıf burslarını engellemez."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet",
      "Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Ankara İkametli",
    "deadline": "2026-10-15",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://baskentgenclik.ankara.bel.tr",
    "tags": [
      "Ankara",
      "Sosyal Destek"
    ],
    "description": "Ankara Büyükşehir Belediyesi tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK ve özel vakıf burslarını engellemez."
    ]
  },
  {
    "id": "izmir-genc-destek",
    "name": "İzmir BB Üniversiteli Dayanışma Bursu",
    "provider": "İzmir Büyükşehir Belediyesi",
    "logo_initials": "İZB",
    "badge_color": "#0284c7",
    "amount_monthly": 4200,
    "amount_display": "4.200 ₺ / ay",
    "months_count": 3,
    "is_repayable": false,
    "repayment_type": "Karşılıksız Sosyal Yardım",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Tüm Burslarla Uygun",
      "rule_description": "KYK ve diğer burslarla birlikte alınabilir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "İzmir İkametli",
    "deadline": "2026-10-22",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.bizizmir.com",
    "tags": [
      "İzmir",
      "Sosyal Yardım"
    ],
    "description": "İzmir Büyükşehir Belediyesi tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK ve diğer burslarla birlikte alınabilir."
    ]
  },
  {
    "id": "bursa-bb-destek",
    "name": "Bursa BB Üniversite Eğitim Bursu",
    "provider": "Bursa Büyükşehir Belediyesi & BURSKOOP",
    "logo_initials": "BRS",
    "badge_color": "#15803d",
    "amount_monthly": 3500,
    "amount_display": "3.500 ₺ / ay",
    "months_count": 8,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Tüm Burslarla Uygun",
      "rule_description": "KYK ve özel bursları engellemez."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet",
      "Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Bursa İkametli",
    "deadline": "2026-10-18",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://burskoop.com",
    "tags": [
      "Bursa",
      "8 Ay Destek"
    ],
    "description": "Bursa Büyükşehir Belediyesi & BURSKOOP tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK ve özel bursları engellemez."
    ]
  },
  {
    "id": "antalya-bb-destek",
    "name": "Antalya BB Üniversiteli Eğitim Yardımı",
    "provider": "Antalya Büyükşehir Belediyesi",
    "logo_initials": "ANT",
    "badge_color": "#ea580c",
    "amount_monthly": 3800,
    "amount_display": "3.800 ₺ / ay",
    "months_count": 4,
    "is_repayable": false,
    "repayment_type": "Karşılıksız Destek",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Tüm Burslarla Uygun",
      "rule_description": "Diğer bursları engellemez."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Antalya İkametli",
    "deadline": "2026-10-25",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.antalya.bel.tr",
    "tags": [
      "Antalya"
    ],
    "description": "Antalya Büyükşehir Belediyesi tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Diğer bursları engellemez."
    ]
  },
  {
    "id": "vgm-yuksekogrenim",
    "name": "Vakıflar Genel Müdürlüğü (VGM) Lisans Bursu",
    "provider": "T.C. Kültür ve Turizm Bakanlığı VGM",
    "logo_initials": "VGM",
    "badge_color": "#b91c1c",
    "amount_monthly": 3000,
    "amount_display": "3.000 ₺ / ay",
    "months_count": 8,
    "is_repayable": false,
    "repayment_type": "Karşılıksız Resmi Burs",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": false,
      "allows_other_private": false,
      "rule_badge": "KYK Alan Başvuramaz!",
      "rule_description": "KYK'dan karşılıksız burs alan öğrenciye VGM bursu VERİLMEZ! (KYK kredisi alan alabilir)."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet",
      "Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-31",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.vgm.gov.tr",
    "tags": [
      "Resmi Devlet",
      "KYK Yasağı"
    ],
    "description": "T.C. Kültür ve Turizm Bakanlığı VGM tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK'dan karşılıksız burs alan öğrenciye VGM bursu VERİLMEZ! (KYK kredisi alan alabilir)."
    ]
  },
  {
    "id": "gsb-kyk-burs",
    "name": "GSB Kredi ve Yurtlar Genel Müdürlüğü (KYK) Bursu",
    "provider": "Gençlik ve Spor Bakanlığı",
    "logo_initials": "KYK",
    "badge_color": "#dc2626",
    "amount_monthly": 3000,
    "amount_display": "3.000 ₺ / ay",
    "months_count": 12,
    "is_repayable": false,
    "repayment_type": "Karşılıksız Lisans Bursu",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Özel Vakıfların Çoğu Bunu Kabul Eder",
      "rule_description": "Devletin temel lisans bursudur. Diğer bazı vakıflar KYK alırken burs verse de çift devlet bursu alınamaz."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Tüm Üniversiteler"
    ],
    "university_restriction_type": "all",
    "min_gpa": 2.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "Hazırlık",
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-20",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://kygm.gsb.gov.tr",
    "tags": [
      "Temel Devlet Bursu",
      "12 Ay"
    ],
    "description": "Gençlik ve Spor Bakanlığı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Devletin temel lisans bursudur. Diğer bazı vakıflar KYK alırken burs verse de çift devlet bursu alınamaz."
    ]
  },
  {
    "id": "ttk-tarih-burs",
    "name": "Türk Tarih Kurumu Lisans Bursu",
    "provider": "Türk Tarih Kurumu (AYK)",
    "logo_initials": "TTK",
    "badge_color": "#78350f",
    "amount_monthly": 5500,
    "amount_display": "5.500 ₺ / ay",
    "months_count": 12,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK bursu engel teşkil etmez."
    },
    "target_departments": [
      "Tarih",
      "Sanat Tarihi",
      "Arkeoloji"
    ],
    "department_category": "Tarih & Kültür",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.8,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.80 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-30",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.ttk.gov.tr",
    "tags": [
      "Tarih & Arkeoloji",
      "12 Ay"
    ],
    "description": "Türk Tarih Kurumu (AYK) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.80 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK bursu engel teşkil etmez."
    ]
  },
  {
    "id": "tdk-turkce-burs",
    "name": "Türk Dil Kurumu Lisans Bursu",
    "provider": "Türk Dil Kurumu (AYK)",
    "logo_initials": "TDK",
    "badge_color": "#9a3412",
    "amount_monthly": 5500,
    "amount_display": "5.500 ₺ / ay",
    "months_count": 12,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK bursu alınabilir."
    },
    "target_departments": [
      "Türk Dili ve Edebiyatı",
      "Çağdaş Türk Lehçeleri",
      "Dilbilim"
    ],
    "department_category": "Türk Dili & Edebiyat",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.8,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.80 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-30",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tdk.gov.tr",
    "tags": [
      "Türk Dili",
      "12 Ay"
    ],
    "description": "Türk Dil Kurumu (AYK) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.80 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK bursu alınabilir."
    ]
  },
  {
    "id": "kizilay-burs",
    "name": "Türk Kızılay Lisans Başarı ve İhtiyaç Bursu",
    "provider": "Türk Kızılayı",
    "logo_initials": "KZL",
    "badge_color": "#e11d48",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız + Gönüllülük",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir; başka bir dernek/vakıf bursu kabul edilmez."
    },
    "target_departments": [
      "Tıp",
      "Hemşirelik",
      "Afet Yönetimi",
      "Sosyal Hizmet",
      "Psikoloji"
    ],
    "department_category": "Sağlık & Sosyal",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-15",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.kizilay.org.tr",
    "tags": [
      "Gönüllülük",
      "Sağlık & Afet"
    ],
    "description": "Türk Kızılayı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir; başka bir dernek/vakıf bursu kabul edilmez."
    ]
  },
  {
    "id": "tdv-diyanet-burs",
    "name": "Türkiye Diyanet Vakfı (TDV) İlahiyat Lisans Bursu",
    "provider": "Türkiye Diyanet Vakfı",
    "logo_initials": "TDV",
    "badge_color": "#047857",
    "amount_monthly": 4500,
    "amount_display": "4.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "İlahiyat Fakültesi",
      "İslami İlimler"
    ],
    "department_category": "İlahiyat",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.6,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.60 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-10",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://tdv.org",
    "tags": [
      "İlahiyat",
      "İslami İlimler"
    ],
    "description": "Türkiye Diyanet Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.60 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "ilbank-muhendis",
    "name": "İller Bankası (İLBANK) Mühendislik Bursu",
    "provider": "İller Bankası A.Ş.",
    "logo_initials": "İLB",
    "badge_color": "#1d4ed8",
    "amount_monthly": 5000,
    "amount_display": "5.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Harita Mühendisliği",
      "Çevre Mühendisliği",
      "Şehir ve Bölge Planlama"
    ],
    "department_category": "Harita & Şehir Planlama",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.7,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.70 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-24",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.ilbank.gov.tr",
    "tags": [
      "Şehir Planlama",
      "Harita"
    ],
    "description": "İller Bankası A.Ş. tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.70 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "dsi-su-bursu",
    "name": "Devlet Su İşleri (DSİ) Vakfı Su Mühendisliği Bursu",
    "provider": "DSİ Vakfı",
    "logo_initials": "DSİ",
    "badge_color": "#0284c7",
    "amount_monthly": 4500,
    "amount_display": "4.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK alınabilir."
    },
    "target_departments": [
      "İnşaat Mühendisliği",
      "Hidrojeoloji Müh.",
      "Ziraat Müh."
    ],
    "department_category": "Su & İnşaat",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-21",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.dsi.gov.tr",
    "tags": [
      "Su Kaynakları"
    ],
    "description": "DSİ Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK alınabilir."
    ]
  },
  {
    "id": "karayollari-vakfi",
    "name": "Karayolları Vakfı Ulaşım Mühendisliği Bursu",
    "provider": "Karayolları Vakfı (KAV)",
    "logo_initials": "KAV",
    "badge_color": "#334155",
    "amount_monthly": 4200,
    "amount_display": "4.200 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "İnşaat Mühendisliği",
      "Ulaştırma Mühendisliği"
    ],
    "department_category": "İnşaat & Ulaşım",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-28",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.kgm.gov.tr",
    "tags": [
      "Ulaşım & Altyapı"
    ],
    "description": "Karayolları Vakfı (KAV) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "lokman-hekim",
    "name": "Lokman Hekim Sağlık Vakfı Tıp Bursu",
    "provider": "Lokman Hekim Sağlık Vakfı",
    "logo_initials": "LHV",
    "badge_color": "#0284c7",
    "amount_monthly": 5000,
    "amount_display": "5.000 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız Tıp Desteği",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Özel Burs İzni Var",
      "rule_description": "Tıp eğitim masrafları nedeniyle diğer burslarla birleştirilmesine onay verilir."
    },
    "target_departments": [
      "Tıp",
      "Diş Hekimliği",
      "Eczacılık"
    ],
    "department_category": "Tıp & Diş",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-30",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://lokmanhekim.org.tr",
    "tags": [
      "Sadece Tıpçıya",
      "Sağlık",
      "Esnek"
    ],
    "description": "Lokman Hekim Sağlık Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Tıp eğitim masrafları nedeniyle diğer burslarla birleştirilmesine onay verilir."
    ]
  },
  {
    "id": "turk-tabipleri",
    "name": "Türk Tabipleri Birliği Tıp Öğrencisi Dayanışma Bursu",
    "provider": "Türk Tabipleri Birliği (TTB)",
    "logo_initials": "TTB",
    "badge_color": "#be123c",
    "amount_monthly": 4500,
    "amount_display": "4.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Geleceğin hekimlerine dayanışma bursudur; diğer burslar engel değildir."
    },
    "target_departments": [
      "Tıp"
    ],
    "department_category": "Sadece Tıp",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-18",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.ttb.org.tr",
    "tags": [
      "Sadece Tıp",
      "Dayanışma"
    ],
    "description": "Türk Tabipleri Birliği (TTB) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Geleceğin hekimlerine dayanışma bursudur; diğer burslar engel değildir."
    ]
  },
  {
    "id": "turk-eczacilari",
    "name": "Türk Eczacıları Birliği (TEB) Eczacılık Bursu",
    "provider": "Türk Eczacıları Birliği",
    "logo_initials": "TEB",
    "badge_color": "#7c3aed",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Esnek Kural",
      "rule_description": "KYK ve diğer burslarla alınabilir."
    },
    "target_departments": [
      "Eczacılık"
    ],
    "department_category": "Sadece Eczacılık",
    "target_universities": [
      "Devlet",
      "Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-25",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.teb.org.tr",
    "tags": [
      "Sadece Eczacılık"
    ],
    "description": "Türk Eczacıları Birliği tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK ve diğer burslarla alınabilir."
    ]
  },
  {
    "id": "turk-dishekimleri",
    "name": "Türk Dişhekimleri Birliği (TDB) Eğitim Bursu",
    "provider": "Türk Dişhekimleri Birliği",
    "logo_initials": "TDB",
    "badge_color": "#059669",
    "amount_monthly": 4200,
    "amount_display": "4.200 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK alınabilir."
    },
    "target_departments": [
      "Diş Hekimliği"
    ],
    "department_category": "Sadece Diş Hekimliği",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-22",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tdb.org.tr",
    "tags": [
      "Sadece Diş"
    ],
    "description": "Türk Dişhekimleri Birliği tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK alınabilir."
    ]
  },
  {
    "id": "hemsirelik-vakfi",
    "name": "Türk Hemşireler Derneği Geleceğin Hemşireleri Bursu",
    "provider": "Türk Hemşireler Derneği",
    "logo_initials": "THD",
    "badge_color": "#ec4899",
    "amount_monthly": 3500,
    "amount_display": "3.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Diğer bursları engellemez."
    },
    "target_departments": [
      "Hemşirelik",
      "Ebelik"
    ],
    "department_category": "Hemşirelik & Ebelik",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.3,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.30 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-27",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.thd.org.tr",
    "tags": [
      "Hemşirelik"
    ],
    "description": "Türk Hemşireler Derneği tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.30 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Diğer bursları engellemez."
    ]
  },
  {
    "id": "fizyoterapi-burs",
    "name": "Türkiye Fizyoterapistler Derneği Bursu",
    "provider": "Türkiye Fizyoterapistler Derneği",
    "logo_initials": "TFD",
    "badge_color": "#0d9488",
    "amount_monthly": 3600,
    "amount_display": "3.600 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Fizyoterapi ve Rehabilitasyon"
    ],
    "department_category": "Fizyoterapi",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.4,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.40 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-29",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.fizyoterapistler.org",
    "tags": [
      "Fizyoterapi"
    ],
    "description": "Türkiye Fizyoterapistler Derneği tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.40 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "losev-lisans",
    "name": "LÖSEV Hayat Veren Gençler Tıp & Sağlık Bursu",
    "provider": "LÖSEV",
    "logo_initials": "LSV",
    "badge_color": "#f43f5e",
    "amount_monthly": 5000,
    "amount_display": "5.000 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tıp",
      "Hemşirelik",
      "Moleküler Biyoloji",
      "Beslenme ve Diyetetik"
    ],
    "department_category": "Sağlık & Biyoloji",
    "target_universities": [
      "Devlet",
      "Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.7,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.70 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-15",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.losev.org.tr",
    "tags": [
      "Sağlık & Onkoloji"
    ],
    "description": "LÖSEV tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.70 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "acibadem-saglik",
    "name": "Kerim Devlet (Acıbadem) Sağlık Bilimleri Bursu",
    "provider": "Acıbadem Sağlık ve Eğitim Vakfı",
    "logo_initials": "ACB",
    "badge_color": "#0284c7",
    "amount_monthly": 6000,
    "amount_display": "6.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız + Hastane Stajı",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tıp",
      "Hemşirelik",
      "Biyomedikal Mühendisliği"
    ],
    "department_category": "Sağlık & Biyomedikal",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.8,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.80 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-12",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.acibadem.edu.tr",
    "tags": [
      "Hastanede Staj"
    ],
    "description": "Acıbadem Sağlık ve Eğitim Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.80 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "medicana-tip",
    "name": "Medicana Sağlık Grubu Başarılı Tıp Öğrencisi Bursu",
    "provider": "Medicana Eğitim Vakfı",
    "logo_initials": "MDC",
    "badge_color": "#2563eb",
    "amount_monthly": 5500,
    "amount_display": "5.500 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tıp"
    ],
    "department_category": "Sadece Tıp",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.75,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.75 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-20",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.medicana.com.tr",
    "tags": [
      "Tıp Öğrencisi"
    ],
    "description": "Medicana Eğitim Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.75 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "veteriner-hekim",
    "name": "Türk Veteriner Hekimleri Birliği (TVHB) Lisans Bursu",
    "provider": "Türk Veteriner Hekimleri Birliği",
    "logo_initials": "TVH",
    "badge_color": "#16a34a",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Diğer bursları engellemez."
    },
    "target_departments": [
      "Veterinerlik"
    ],
    "department_category": "Veteriner Fakültesi",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-31",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://tvhb.org.tr",
    "tags": [
      "Sadece Veteriner"
    ],
    "description": "Türk Veteriner Hekimleri Birliği tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Diğer bursları engellemez."
    ]
  },
  {
    "id": "beslenme-diyetetik",
    "name": "Türkiye Diyetisyenler Derneği Beslenme Bursu",
    "provider": "Türkiye Diyetisyenler Derneği",
    "logo_initials": "TDD",
    "badge_color": "#84cc16",
    "amount_monthly": 3500,
    "amount_display": "3.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Beslenme ve Diyetetik"
    ],
    "department_category": "Beslenme & Sağlık",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-11-04",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tdd.org.tr",
    "tags": [
      "Diyetisyenlik"
    ],
    "description": "Türkiye Diyetisyenler Derneği tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "cocuk-sagligi",
    "name": "Milli Pediatri Derneği Tıp Öğrencisi Bursu",
    "provider": "Milli Pediatri Derneği",
    "logo_initials": "MPD",
    "badge_color": "#f97316",
    "amount_monthly": 4500,
    "amount_display": "4.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK ve diğer burslar serbesttir."
    },
    "target_departments": [
      "Tıp"
    ],
    "department_category": "Sadece Tıp",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "3",
      "4",
      "5",
      "6"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-25",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://millipediatri.org.tr",
    "tags": [
      "Pediatri & Tıp"
    ],
    "description": "Milli Pediatri Derneği tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK ve diğer burslar serbesttir."
    ]
  },
  {
    "id": "istanbul-barosu",
    "name": "İstanbul Barosu Hukuk Fakültesi Bursu",
    "provider": "İstanbul Barosu",
    "logo_initials": "İSB",
    "badge_color": "#475569",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız Hukuk Bursu",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK ve diğer burslarla birleştirilebilir."
    },
    "target_departments": [
      "Hukuk"
    ],
    "department_category": "Sadece Hukuk",
    "target_universities": [
      "İstanbul'daki Devlet Hukuk Fakülteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "İstanbul",
    "deadline": "2026-10-15",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.istanbulbarosu.org.tr",
    "tags": [
      "Sadece Hukuk",
      "İstanbul"
    ],
    "description": "İstanbul Barosu tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK ve diğer burslarla birleştirilebilir."
    ]
  },
  {
    "id": "ankara-barosu",
    "name": "Ankara Barosu Hukukçu Gençler Eğitim Bursu",
    "provider": "Ankara Barosu",
    "logo_initials": "AKB",
    "badge_color": "#334155",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Diğer bursları engellemez."
    },
    "target_departments": [
      "Hukuk"
    ],
    "department_category": "Sadece Hukuk",
    "target_universities": [
      "Ankara'daki Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Ankara",
    "deadline": "2026-10-18",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.ankarabarosu.org.tr",
    "tags": [
      "Sadece Hukuk",
      "Ankara"
    ],
    "description": "Ankara Barosu tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Diğer bursları engellemez."
    ]
  },
  {
    "id": "turk-hukuk",
    "name": "Türk Hukuk Enstitüsü Lisans Bursu",
    "provider": "Türk Hukuk Enstitüsü",
    "logo_initials": "THE",
    "badge_color": "#b91c1c",
    "amount_monthly": 3800,
    "amount_display": "3.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Hukuk"
    ],
    "department_category": "Sadece Hukuk",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-22",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.turkhukuk.org.tr",
    "tags": [
      "Hukuk Fakültesi"
    ],
    "description": "Türk Hukuk Enstitüsü tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "iktisat-vakfi",
    "name": "Türkiye İktisat ve Girişimcilik Vakfı Bursu",
    "provider": "Türkiye İktisat Vakfı",
    "logo_initials": "TİV",
    "badge_color": "#0284c7",
    "amount_monthly": 4500,
    "amount_display": "4.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "İktisat",
      "İşletme",
      "Maliye",
      "Ekonometri"
    ],
    "department_category": "İktisadi Bilimler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.7,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.70 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-19",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.iktisatvakfi.org",
    "tags": [
      "İktisat & Maliye"
    ],
    "description": "Türkiye İktisat Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.70 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "siyasal-vakfi",
    "name": "Mülkiyeliler Birliği (SBF) Öğrenci Bursu",
    "provider": "Mülkiyeliler Birliği Vakfı",
    "logo_initials": "MLK",
    "badge_color": "#0f766e",
    "amount_monthly": 4200,
    "amount_display": "4.200 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK ve diğer burslar serbesttir."
    },
    "target_departments": [
      "Siyaset Bilimi",
      "Uluslararası İlişkiler",
      "Kamu Yönetimi",
      "İktisat"
    ],
    "department_category": "Siyasal Bilgiler",
    "target_universities": [
      "Ankara Üniversitesi SBF"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Ankara",
    "deadline": "2026-10-20",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://mulkiye.org.tr",
    "tags": [
      "Mülkiye",
      "Siyaset Bilimi"
    ],
    "description": "Mülkiyeliler Birliği Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK ve diğer burslar serbesttir."
    ]
  },
  {
    "id": "turk-psikologlar",
    "name": "Türk Psikologlar Derneği Geleceğin Psikologları Bursu",
    "provider": "Türk Psikologlar Derneği",
    "logo_initials": "TPD",
    "badge_color": "#7c3aed",
    "amount_monthly": 3800,
    "amount_display": "3.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Psikoloji"
    ],
    "department_category": "Sadece Psikoloji",
    "target_universities": [
      "Devlet",
      "Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.6,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.60 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-28",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.psikolog.org.tr",
    "tags": [
      "Sadece Psikoloji"
    ],
    "description": "Türk Psikologlar Derneği tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.60 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "sosyoloji-dernegi",
    "name": "Sosyoloji Mezunları ve İnsan Hakları Bursu",
    "provider": "Sosyoloji Derneği",
    "logo_initials": "SSD",
    "badge_color": "#ca8a04",
    "amount_monthly": 3500,
    "amount_display": "3.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Diğer bursları engellemez."
    },
    "target_departments": [
      "Sosyoloji",
      "Antropoloji",
      "Felsefe"
    ],
    "department_category": "Sosyoloji & Felsefe",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.4,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.40 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-31",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.sosyolojidernegi.org.tr",
    "tags": [
      "Sosyoloji & Felsefe"
    ],
    "description": "Sosyoloji Derneği tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.40 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Diğer bursları engellemez."
    ]
  },
  {
    "id": "iletisim-vakfi",
    "name": "Türkiye Gazeteciler Cemiyeti İletişim Bursu",
    "provider": "Türkiye Gazeteciler Cemiyeti (TGC)",
    "logo_initials": "TGC",
    "badge_color": "#dc2626",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK alınabilir."
    },
    "target_departments": [
      "Gazetecilik",
      "Radyo Televizyon ve Sinema",
      "Halkla İlişkiler"
    ],
    "department_category": "İletişim Fakültesi",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-26",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tgc.org.tr",
    "tags": [
      "Gazetecilik & Medya"
    ],
    "description": "Türkiye Gazeteciler Cemiyeti (TGC) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK alınabilir."
    ]
  },
  {
    "id": "turizm-vakfi",
    "name": "TUROB Turizm Otelcilik ve Gastronomi Bursu",
    "provider": "Türkiye Otelciler Birliği (TUROB)",
    "logo_initials": "TRB",
    "badge_color": "#ea580c",
    "amount_monthly": 3800,
    "amount_display": "3.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız + Sektörel Staj",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Gastronomi ve Mutfak Sanatları",
      "Turizm İşletmeciliği"
    ],
    "department_category": "Gastronomi & Turizm",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.4,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.40 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-23",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.turob.com",
    "tags": [
      "Gastronomi & Turizm"
    ],
    "description": "Türkiye Otelciler Birliği (TUROB) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.40 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "dis-ticaret-vakfi",
    "name": "İHKİB Hazırgiyim ve Moda Tasarımı Bursu",
    "provider": "İstanbul Hazırgiyim İhracatçıları Birliği",
    "logo_initials": "İHK",
    "badge_color": "#e11d48",
    "amount_monthly": 5000,
    "amount_display": "5.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "YKS'de ilk 20.000'den tekstil/moda seçenlere verilir."
    },
    "target_departments": [
      "Moda Tasarımı",
      "Tekstil Mühendisliği"
    ],
    "department_category": "Tasarım & Tekstil",
    "target_universities": [
      "Devlet & Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-10",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.ihkib.org.tr",
    "tags": [
      "Moda Tasarımı",
      "Yüksek Tutar"
    ],
    "description": "İstanbul Hazırgiyim İhracatçıları Birliği tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "YKS'de ilk 20.000'den tekstil/moda seçenlere verilir."
    ]
  },
  {
    "id": "maliye-bursu",
    "name": "Gelir Uzmanları ve Maliyeciler Vakfı Bursu",
    "provider": "Maliyeciler Derneği",
    "logo_initials": "MLY",
    "badge_color": "#059669",
    "amount_monthly": 3700,
    "amount_display": "3.700 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Maliye",
      "Ekonometri",
      "Kamu Maliyesi"
    ],
    "department_category": "Maliye & Vergi",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-27",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.maliyeciler.org",
    "tags": [
      "Maliye"
    ],
    "description": "Maliyeciler Derneği tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "uluslararasi-ticaret",
    "name": "DEİK Dış Ekonomik İlişkiler Geleceğin Liderleri Bursu",
    "provider": "Dış Ekonomik İlişkiler Kurulu (DEİK)",
    "logo_initials": "DEİ",
    "badge_color": "#1e40af",
    "amount_monthly": 5200,
    "amount_display": "5.200 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Uluslararası Ticaret ve Lojistik",
      "İşletme",
      "İktisat"
    ],
    "department_category": "Dış Ticaret & Lojistik",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.8,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.80 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-17",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.deik.org.tr",
    "tags": [
      "Dış Ticaret",
      "Lojistik"
    ],
    "description": "Dış Ekonomik İlişkiler Kurulu (DEİK) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.80 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "mev-malatya",
    "name": "Malatya Eğitim Vakfı (MEV) Lisans Bursu",
    "provider": "Malatya Eğitim Vakfı",
    "logo_initials": "MEV",
    "badge_color": "#d97706",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir; başka vakıf bursu kabul edilmez."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Malatya Doğumlu / Kütüklü",
    "deadline": "2026-10-15",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.mev.org.tr",
    "tags": [
      "Malatya",
      "Hemşehri",
      "Karşılıksız"
    ],
    "description": "Malatya Eğitim Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir; başka vakıf bursu kabul edilmez."
    ]
  },
  {
    "id": "revak-rize",
    "name": "Rize Eğitim Vakfı (REVAK) Lisans Bursu",
    "provider": "Rize Eğitim Vakfı",
    "logo_initials": "RVK",
    "badge_color": "#047857",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Rize Doğumlu / Nüfuslu",
    "deadline": "2026-10-20",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.revak.org.tr",
    "tags": [
      "Rize",
      "Karadeniz"
    ],
    "description": "Rize Eğitim Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "trabzon-vakfi",
    "name": "Trabzonlular Vakfı Başarı ve Dayanışma Bursu",
    "provider": "Trabzonlular Eğitim ve Kültür Vakfı",
    "logo_initials": "TBZ",
    "badge_color": "#991b1b",
    "amount_monthly": 4200,
    "amount_display": "4.200 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Trabzon Kütüklü",
    "deadline": "2026-10-18",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.trabzonvakfi.org.tr",
    "tags": [
      "Trabzon"
    ],
    "description": "Trabzonlular Eğitim ve Kültür Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "kayseri-vakfi",
    "name": "Kayseri Yüksek Öğrenim ve Yardım Vakfı Bursu",
    "provider": "Kayseri Eğitim Vakfı",
    "logo_initials": "KYS",
    "badge_color": "#b45309",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Kayseri İkametli / Kütüklü",
    "deadline": "2026-10-25",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.kayserivakfi.org",
    "tags": [
      "Kayseri"
    ],
    "description": "Kayseri Eğitim Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "erzurum-vakfi",
    "name": "Erzurum Kültür ve Eğitim Vakfı (ERKEV) Bursu",
    "provider": "Erzurum Kültür Eğitim Vakfı",
    "logo_initials": "ERZ",
    "badge_color": "#1e3a8a",
    "amount_monthly": 3800,
    "amount_display": "3.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK alınabilir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Erzurum Kütüklü",
    "deadline": "2026-10-16",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.erkev.org.tr",
    "tags": [
      "Erzurum"
    ],
    "description": "Erzurum Kültür Eğitim Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK alınabilir."
    ]
  },
  {
    "id": "sivas-vakfi",
    "name": "Sivaslılar Eğitim ve Kültür Vakfı (SEV) Bursu",
    "provider": "Sivaslılar Eğitim Vakfı",
    "logo_initials": "SVS",
    "badge_color": "#9a3412",
    "amount_monthly": 3800,
    "amount_display": "3.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Sivas Kütüklü",
    "deadline": "2026-10-22",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.sivasegitimvakfi.org",
    "tags": [
      "Sivas"
    ],
    "description": "Sivaslılar Eğitim Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "elazig-vakfi",
    "name": "Elazığ Eğitim ve Kültür Vakfı (EEKV) Bursu",
    "provider": "Elazığ Kültür Vakfı",
    "logo_initials": "ELZ",
    "badge_color": "#831843",
    "amount_monthly": 3800,
    "amount_display": "3.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Elazığ Kütüklü",
    "deadline": "2026-10-19",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.elazigvakfi.org.tr",
    "tags": [
      "Elazığ"
    ],
    "description": "Elazığ Kültür Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "gaziantep-vakfi",
    "name": "Gaziantep Geliştirme Vakfı (GAGEV) Bursu",
    "provider": "Gaziantep Geliştirme Vakfı",
    "logo_initials": "GNT",
    "badge_color": "#b91c1c",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet",
      "Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Gaziantep Doğumlu",
    "deadline": "2026-10-14",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.gagev.org.tr",
    "tags": [
      "Gaziantep"
    ],
    "description": "Gaziantep Geliştirme Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "diyarbakir-vakfi",
    "name": "Diyarbakır Tanıtım Kültür ve Yardımlaşma Vakfı Bursu",
    "provider": "DİTAV Vakfı",
    "logo_initials": "DYB",
    "badge_color": "#047857",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Diyarbakır Kütüklü",
    "deadline": "2026-10-21",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.ditav.org.tr",
    "tags": [
      "Diyarbakır"
    ],
    "description": "DİTAV Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "kars-ardahan-igdir",
    "name": "Kars Ardahan Iğdır Eğitim Kalkınma Vakfı (KAİ) Bursu",
    "provider": "KAİ Vakfı",
    "logo_initials": "KAİ",
    "badge_color": "#4338ca",
    "amount_monthly": 3800,
    "amount_display": "3.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Kars, Ardahan, Iğdır Kütüklü",
    "deadline": "2026-10-27",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.kaivakfi.org.tr",
    "tags": [
      "Kars & Ardahan"
    ],
    "description": "KAİ Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "karadeniz-vakfi",
    "name": "Karadeniz Eğitim ve Kültür Vakfı (KARVAK) Bursu",
    "provider": "Karadeniz Vakfı",
    "logo_initials": "KRV",
    "badge_color": "#0284c7",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK alınabilir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Karadeniz Bölgesi İlleri",
    "deadline": "2026-10-24",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.karvak.org.tr",
    "tags": [
      "Karadeniz"
    ],
    "description": "Karadeniz Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK alınabilir."
    ]
  },
  {
    "id": "ege-vakfi",
    "name": "Ege Eğitim ve Gelişim Vakfı (EGEV) Lisans Bursu",
    "provider": "EGEV",
    "logo_initials": "EGE",
    "badge_color": "#059669",
    "amount_monthly": 4200,
    "amount_display": "4.200 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Ege Bölgesi Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.6,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.60 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Ege İkametli",
    "deadline": "2026-10-17",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.egev.org.tr",
    "tags": [
      "Ege Bölgesi"
    ],
    "description": "EGEV tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.60 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "adana-vakfi",
    "name": "Çukurova Eğitim ve Kültür Vakfı (ÇUKURVA) Bursu",
    "provider": "Çukurova Vakfı",
    "logo_initials": "ÇUK",
    "badge_color": "#f97316",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Çukurova Üni",
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Adana & Mersin",
    "deadline": "2026-10-23",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.cukurovavakfi.org",
    "tags": [
      "Çukurova"
    ],
    "description": "Çukurova Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "konya-vakfi",
    "name": "Konya Eğitim ve Sosyal Araştırmalar Vakfı Bursu",
    "provider": "Konya Vakfı",
    "logo_initials": "KNY",
    "badge_color": "#15803d",
    "amount_monthly": 3800,
    "amount_display": "3.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Konya Nüfuslu",
    "deadline": "2026-10-29",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.konyavakfi.org.tr",
    "tags": [
      "Konya"
    ],
    "description": "Konya Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "hatay-deprem-vakfi",
    "name": "Hatay Birlik ve Dayanışma Deprem Destek Bursu",
    "provider": "Hatay Birlik Vakfı",
    "logo_initials": "HTY",
    "badge_color": "#dc2626",
    "amount_monthly": 5000,
    "amount_display": "5.000 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız Depremzede Yardımı",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Depremzede öğrencilere yöneliktir; diğer bursları engellemez."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Tüm Üniversiteler"
    ],
    "university_restriction_type": "all",
    "min_gpa": 2.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Hatay Kütüklü / İkametli",
    "deadline": "2026-10-10",
    "deadline_status": "urgent",
    "status_label": "Son Günler!",
    "apply_url": "https://www.hataybirlikvakfi.org",
    "tags": [
      "Depremzede Önceliği",
      "Hatay"
    ],
    "description": "Hatay Birlik Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Depremzede öğrencilere yöneliktir; diğer bursları engellemez."
    ]
  },
  {
    "id": "marass-vakfi",
    "name": "Kahramanmaraş Eğitim Vakfı Depremzede Destek Bursu",
    "provider": "Kahramanmaraş Vakfı",
    "logo_initials": "KMR",
    "badge_color": "#991b1b",
    "amount_monthly": 5000,
    "amount_display": "5.000 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız Depremzede Yardımı",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Depremzede öğrenciler diğer burslarıyla birlikte alabilir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Tüm Üniversiteler"
    ],
    "university_restriction_type": "all",
    "min_gpa": 2.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Kahramanmaraş Kütüklü",
    "deadline": "2026-10-12",
    "deadline_status": "urgent",
    "status_label": "Son Günler!",
    "apply_url": "https://www.marasvakfi.org.tr",
    "tags": [
      "Depremzede Önceliği",
      "Maraş"
    ],
    "description": "Kahramanmaraş Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Depremzede öğrenciler diğer burslarıyla birlikte alabilir."
    ]
  },
  {
    "id": "cydd-isik",
    "name": "ÇYDD Bir Işık da Sen Tut Üniversite Bursu",
    "provider": "Çağdaş Yaşamı Destekleme Derneği (ÇYDD)",
    "logo_initials": "ÇYD",
    "badge_color": "#ec4899",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız Destek",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Kuralı",
      "rule_description": "KYK serbesttir; başka bir dernek veya vakıftan burs alınamaz."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye (Öncelik Şube İlleri)",
    "deadline": "2026-09-28",
    "deadline_status": "urgent",
    "status_label": "Son Günler!",
    "apply_url": "https://www.cydd.org.tr",
    "tags": [
      "Kız Öğrenci Önceliği",
      "Sosyal Sorumluluk"
    ],
    "description": "Çağdaş Yaşamı Destekleme Derneği (ÇYDD) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir; başka bir dernek veya vakıftan burs alınamaz."
    ]
  },
  {
    "id": "aydin-dogan",
    "name": "Aydın Doğan Vakfı Güçlü Kızlar Güçlü Yarınlar Bursu",
    "provider": "Aydın Doğan Vakfı",
    "logo_initials": "ADV",
    "badge_color": "#be123c",
    "amount_monthly": 5500,
    "amount_display": "5.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir; kız öğrencilere yöneliktir."
    },
    "target_departments": [
      "Mühendislik",
      "Hukuk",
      "Tıp",
      "İletişim"
    ],
    "department_category": "Kız Öğrenciler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.75,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.75 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-14",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.aydindoganvakfi.org.tr",
    "tags": [
      "Kız Öğrenciler",
      "Liderlik"
    ],
    "description": "Aydın Doğan Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.75 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir; kız öğrencilere yöneliktir."
    ]
  },
  {
    "id": "tog-burs",
    "name": "Toplum Gönüllüleri Vakfı (TOG) Gençlik Bursu",
    "provider": "Toplum Gönüllüleri Vakfı (TOG)",
    "logo_initials": "TOG",
    "badge_color": "#e11d48",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız + Sosyal Sorumluluk",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Haftalık 4 saat sosyal sorumluluk projesine katılım şartı vardır; diğer burslar alınabilir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Tüm Üniversiteler"
    ],
    "university_restriction_type": "all",
    "min_gpa": 2.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-16",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tog.org.tr",
    "tags": [
      "Gönüllülük",
      "Sosyal Proje",
      "Çift Burs"
    ],
    "description": "Toplum Gönüllüleri Vakfı (TOG) tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Haftalık 4 saat sosyal sorumluluk projesine katılım şartı vardır; diğer burslar alınabilir."
    ]
  },
  {
    "id": "yucel-kultur",
    "name": "Yücel Kültür Vakfı (YKV) Yarım Elma Lisans Bursu",
    "provider": "Yücel Kültür Vakfı",
    "logo_initials": "YKV",
    "badge_color": "#f59e0b",
    "amount_monthly": 3800,
    "amount_display": "3.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK ve diğer vakıf burslarıyla çakışmaz."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet",
      "Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-23",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.yucelkulturvakfi.org",
    "tags": [
      "Kültür & Sanat",
      "Çift Burs"
    ],
    "description": "Yücel Kültür Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK ve diğer vakıf burslarıyla çakışmaz."
    ]
  },
  {
    "id": "darussafaka-cemiyeti",
    "name": "Darüşşafaka Yükseköğrenim Destek Bursu",
    "provider": "Darüşşafaka Cemiyeti",
    "logo_initials": "DŞK",
    "badge_color": "#047857",
    "amount_monthly": 5500,
    "amount_display": "5.500 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Darüşşafaka lisesi mezunları ve babası/annesi vefat etmiş üniversiteliler."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Tüm Üniversiteler"
    ],
    "university_restriction_type": "all",
    "min_gpa": 2.2,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.20 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-11",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.darussafaka.org",
    "tags": [
      "Yetim/Öksüz Destek",
      "Prestijli"
    ],
    "description": "Darüşşafaka Cemiyeti tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.20 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Darüşşafaka lisesi mezunları ve babası/annesi vefat etmiş üniversiteliler."
    ]
  },
  {
    "id": "turk-kadinlar-konseyi",
    "name": "Türk Kadınlar Konseyi Üniversiteli Kızlar Bursu",
    "provider": "Türk Kadınlar Konseyi Derneği",
    "logo_initials": "TKK",
    "badge_color": "#c026d3",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler (Sadece Kız)",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-25",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tkkd.org.tr",
    "tags": [
      "Kız Öğrenciler"
    ],
    "description": "Türk Kadınlar Konseyi Derneği tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "turkiye-yardim-sevenler",
    "name": "Türkiye Yardım Sevenler Derneği (TYSD) Lisans Bursu",
    "provider": "Türkiye Yardım Sevenler Derneği",
    "logo_initials": "TYS",
    "badge_color": "#db2777",
    "amount_monthly": 3800,
    "amount_display": "3.800 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Burs Şartı",
      "rule_description": "KYK alınabilir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.4,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.40 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-21",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tysd.org.tr",
    "tags": [
      "Yardım Sevenler"
    ],
    "description": "Türkiye Yardım Sevenler Derneği tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.40 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK alınabilir."
    ]
  },
  {
    "id": "acev-burs",
    "name": "AÇEV Anne ve Çocuk Eğitimi Geleceğe Yatırım Bursu",
    "provider": "AÇEV",
    "logo_initials": "AÇV",
    "badge_color": "#0891b2",
    "amount_monthly": 4500,
    "amount_display": "4.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Okul Öncesi Öğretmenliği",
      "Çocuk Gelişimi",
      "Rehberlik ve Psikolojik Danışmanlık",
      "Psikoloji"
    ],
    "department_category": "Eğitim & Çocuk Gelişimi",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.6,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.60 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-19",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.acev.org",
    "tags": [
      "Çocuk Gelişimi",
      "Eğitim"
    ],
    "description": "AÇEV tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.60 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "birlik-vakfi",
    "name": "Birlik Vakfı Üniversite Lisans Bursu",
    "provider": "Birlik Vakfı",
    "logo_initials": "BRL",
    "badge_color": "#1e3a8a",
    "amount_monthly": 3800,
    "amount_display": "3.800 ₺ / ay",
    "months_count": 8,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-26",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://birlikvakfi.org.tr",
    "tags": [
      "Birlik",
      "Milli Değerler"
    ],
    "description": "Birlik Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "ilim-yayma",
    "name": "İlim Yayma Cemiyeti Yükseköğrenim Bursu",
    "provider": "İlim Yayma Cemiyeti",
    "logo_initials": "İYC",
    "badge_color": "#14532d",
    "amount_monthly": 3800,
    "amount_display": "3.800 ₺ / ay",
    "months_count": 8,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-20",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.iyc.org.tr",
    "tags": [
      "Köklü Cemiyet"
    ],
    "description": "İlim Yayma Cemiyeti tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "turgav-vakfi",
    "name": "TÜRGEV Lisans Öğrenci Başarı Bursu",
    "provider": "TÜRGEV",
    "logo_initials": "TRG",
    "badge_color": "#701a75",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir; kız öğrencilere yöneliktir."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler (Sadece Kız)",
    "target_universities": [
      "Devlet",
      "Vakıf %100"
    ],
    "university_restriction_type": "state_or_full_scholarship",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-17",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://turgev.org",
    "tags": [
      "Kız Öğrenciler"
    ],
    "description": "TÜRGEV tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir; kız öğrencilere yöneliktir."
    ]
  },
  {
    "id": "ensar-vakfi",
    "name": "Ensar Vakfı Üniversite Eğitim Desteği",
    "provider": "Ensar Vakfı",
    "logo_initials": "ENŞ",
    "badge_color": "#0f766e",
    "amount_monthly": 3500,
    "amount_display": "3.500 ₺ / ay",
    "months_count": 8,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": false,
      "rule_badge": "Tek Özel Burs",
      "rule_description": "KYK serbesttir."
    },
    "target_departments": [
      "İlahiyat",
      "Eğitim Fakültesi",
      "Tarih"
    ],
    "department_category": "İlahiyat & Eğitim",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.4,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.40 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-24",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://ensar.org",
    "tags": [
      "İlahiyat & Eğitim"
    ],
    "description": "Ensar Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.40 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "KYK serbesttir."
    ]
  },
  {
    "id": "aziz-sancar-vakfi",
    "name": "Prof. Dr. Aziz Sancar Kız Çocukları STEM Bursu",
    "provider": "Sancar Vakfı & TEV",
    "logo_initials": "SNC",
    "badge_color": "#0284c7",
    "amount_monthly": 6500,
    "amount_display": "6.500 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Nobel ödüllü bilim insanı Aziz Sancar adına temel bilimler ve STEM okuyan kız öğrencilere."
    },
    "target_departments": [
      "Moleküler Biyoloji",
      "Kimya",
      "Fizik",
      "Biyomedikal Müh."
    ],
    "department_category": "STEM & Temel Bilimler",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 3.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 3.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-08",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.tev.org.tr",
    "tags": [
      "Nobel Ödüllü",
      "STEM",
      "Kızlar"
    ],
    "description": "Sancar Vakfı & TEV tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 3.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Nobel ödüllü bilim insanı Aziz Sancar adına temel bilimler ve STEM okuyan kız öğrencilere."
    ]
  },
  {
    "id": "koruncuk-vakfi",
    "name": "Koruncuk Vakfı Üniversite Yaşam Destek Bursu",
    "provider": "Türkiye Korunmaya Muhtaç Çocuklar Vakfı",
    "logo_initials": "KRC",
    "badge_color": "#d946ef",
    "amount_monthly": 4500,
    "amount_display": "4.500 ₺ / ay",
    "months_count": 10,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Sevgi evlerinde büyümüş veya korunma ihtiyacındaki lisans öğrencilerine."
    },
    "target_departments": [
      "Tümü"
    ],
    "department_category": "Tüm Bölümler",
    "target_universities": [
      "Tüm Üniversiteler"
    ],
    "university_restriction_type": "all",
    "min_gpa": 2.0,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.00 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-13",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.koruncuk.org",
    "tags": [
      "Sevgi Evleri",
      "Sosyal Destek"
    ],
    "description": "Türkiye Korunmaya Muhtaç Çocuklar Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.00 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Sevgi evlerinde büyümüş veya korunma ihtiyacındaki lisans öğrencilerine."
    ]
  },
  {
    "id": "zihinsel-engelliler",
    "name": "ZİÇEV Özel Eğitim ve Rehabilitasyon Lisans Bursu",
    "provider": "Zihinsel Yetersiz Çocukları Yetiştirme ve Koruma Vakfı",
    "logo_initials": "ZİÇ",
    "badge_color": "#10b981",
    "amount_monthly": 4000,
    "amount_display": "4.000 ₺ / ay",
    "months_count": 9,
    "is_repayable": false,
    "repayment_type": "Karşılıksız",
    "repayment_details": "Geri ödeme veya mecburi hizmet şartı yoktur.",
    "conflict_rules": {
      "allows_kyk": true,
      "allows_other_private": true,
      "rule_badge": "Çift Burs Serbest",
      "rule_description": "Engelli bireyler veya Özel Eğitim Öğretmenliği okuyan öğrenciler."
    },
    "target_departments": [
      "Özel Eğitim Öğretmenliği",
      "Fizyoterapi",
      "Odyoloji",
      "Dil ve Konuşma Terapisi"
    ],
    "department_category": "Özel Eğitim & Terapi",
    "target_universities": [
      "Devlet Üniversiteleri"
    ],
    "university_restriction_type": "state_only",
    "min_gpa": 2.5,
    "gpa_description": "Ara sınıflar için 4.00 üzerinden en az 2.50 GNO; 1. sınıflar için YKS puanı.",
    "target_classes": [
      "1",
      "2",
      "3",
      "4"
    ],
    "target_city": "Tüm Türkiye",
    "deadline": "2026-10-22",
    "deadline_status": "active",
    "status_label": "Başvurular Aktif",
    "apply_url": "https://www.zicev.org.tr",
    "tags": [
      "Özel Eğitim",
      "Rehabilitasyon"
    ],
    "description": "Zihinsel Yetersiz Çocukları Yetiştirme ve Koruma Vakfı tarafından başarılı ve desteğe ihtiyaç duyan öğrencilere sunulan lisans eğitim bursudur.",
    "requirements_list": [
      "T.C. vatandaşı olmak",
      "İlgili bölüm veya fakültelerde örgün lisans öğrencisi olmak",
      "Ara sınıflar için min 2.50 ortalama (1. sınıf ve hazırlık için GNO şartı aranmaz)",
      "Engelli bireyler veya Özel Eğitim Öğretmenliği okuyan öğrenciler."
    ]
  }
];

if (typeof window !== 'undefined') {
  window.BURSLAR_DATA = BURSLAR_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BURSLAR_DATA;
}

