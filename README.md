# BursRadar 🎯🎓
> **Üniversite Bursları Akıllı Eşleştirme & Çakışma Tespit Platformu**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=black)
![License](https://img.shields.io/badge/Lisans-MIT-green?style=for-the-badge)

BursRadar, üniversite öğrencilerinin burs ararken karşılaştığı karmaşık şartları, gizli çakışma kurallarını (örn. *"başka özel burs alırsan kesilir"*, *"sadece kimyacılara açık"*, *"KYK ile birlikte alınabilir mi?"*) tek bir akıllı profil filtresiyle çözen açık kaynaklı bir web platformudur.

---

## ✨ Öne Çıkan Özellikler

- **🧙‍♂️ 30 Saniyelik Profil Sihirbazı**: Üniversite türü, fakülte/bölüm, sınıf ve mevcut burs durumuna göre anlık analiz.
- **⚡ Kırmızı Çizgi & Çakışma Dedektörü**:
  - 🟢 **KYK Dostu**: KYK bursu/kredisi varken kesilmeyecek burslar.
  - 🔴 **Tek Özel Burs Kuralı**: Birden fazla özel burs kabul etmeyen vakıfların net uyarısı.
  - ✨ **Çift Burs Serbest**: Birden fazla bursla birleştirilebilen kurumlar (TÜBİTAK, T3 vb.).
  - 💎 **Tam Karşılıksız**: Geri ödeme veya mecburi hizmet şartı olmayanlar.
- **🌱 1. Sınıf & Hazırlık YKS Mantığı**: Yeni başlayan öğrenciler için gereksiz GNO kısıtlaması uygulanmaz; sistem otomatik olarak YKS puanını esas alır.
- **📊 110 Prestijli Burs Veritabanı**: TEV, Koç, Sabancı, TÜBİTAK, Zorlu, Rönesans, ASELSAN, BAYKAR, T3, İBB, Barolar, Tıp vakıfları ve il kalkınma dernekleri.
- **⚖️ Yan Yana Burs Karşılaştırıcı**: Seçilen 3 bursa kadar aylık tutarları, süreleri ve şartları tablo halinde kıyaslama.
- **⭐ Favoriler Çekmecesi**: İlgilenilen bursları tek tıkla kaydedip yerel hafızada (LocalStorage) saklama.

---

## 🚀 Hızlı Başlangıç

Projeyi yerelinizde çalıştırmak için harici bir kütüphaneye veya sunucu kurulumuna gerek yoktur (Saf HTML, CSS ve JavaScript kullanılmıştır):

```bash
# Depoyu klonlayın
git clone https://github.com/Halilbraim/burssorunu-z-ld-.git

# Proje dizinine girin
cd burssorunu-z-ld-

# index.html dosyasını doğrudan tarayıcınızda açın veya yerel sunucu başlatın:
# Python ile:
python -m http.server 3000
```

Tarayıcınızda `http://localhost:3000` adresine gidin.

---

## 🌐 Ücretsiz Canlı Yayınlama (GitHub Pages)

Bu projeyi arkadaşlarınızın ve diğer öğrencilerin kullanımına açmak için GitHub Pages ile 1 dakikada ücretsiz yayına alabilirsiniz:

1. Bu projeyi GitHub deponuza yükleyin.
2. Deponun **Settings** (Ayarlar) > **Pages** sekmesine gidin.
3. **Branch** kısmından `main` veya `master` seçip **Save** butonuna tıklayın.
4. Birkaç saniye içinde projeniz `https://kullaniciadiniz.github.io/bursradar` adresinde canlıya geçecektir!

---

## 🤝 Katkıda Bulunma

Yeni bir burs eklemek veya mevcut kuralları güncellemek isterseniz:
1. Depoyu fork'layın (`Fork`).
2. `burslar-data.js` dosyasına yeni burs nesnesini ekleyin.
3. Değişikliklerinizi commit edip bir `Pull Request` gönderin!

---

## 📄 Lisans
Bu proje [MIT Lisansı](LICENSE) altında açık kaynak olarak paylaşılmıştır.
