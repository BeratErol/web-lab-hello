# 📱 Modern Responsive Tasarım Sistemi

Bu branch, portföy sayfasının farklı ekran boyutlarına (Mobil, Tablet, Masaüstü) kusursuz uyum sağlaması için modern CSS teknikleri ile güncellendiği bölümdür.

## 🚀 Teknik Stratejiler
* **Mobile-First Yaklaşımı:** Tasarım süreci en küçük ekranlardan başlayıp `min-width` medya sorguları ile genişletildi.
* **Tasarım Sistemi (Design Tokens):** Renk paleti, boşluk skalası (spacing), border-radius ve gölgeler `:root` üzerinden CSS değişkenleri (`var(--...)`) ile merkezi yönetime geçirildi.
* **Fluid Typography:** `clamp()` fonksiyonu kullanılarak, sabit piksel değerleri yerine ekran genişliğine göre akıcı şekilde ölçeklenen metin yapısı kuruldu.
* **Layout Sistemleri:**
    * **Flexbox:** Navigasyon ve hizalama işlemlerinde tek boyutlu esnek düzen.
    * **CSS Grid:** Proje kartlarının `auto-fit` ve `minmax` özellikleri ile medya sorgusu gerektirmeyen, otomatik responsive ızgara düzeni.
* **Görsel Yönetimi:** `max-width: 100%` ve `object-fit: cover` kullanımı ile görsellerin duyarlı hale getirilmesi.

## 📈 Breakpoint'ler
* **Mobil:** 0 - 639px
* **Tablet:** 640px - 1023px
* **Masaüstü:** 1024px+
