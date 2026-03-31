# Web Tasarımı ve Programlama - LAB-6: React Bileşen Mimarisi & Ara Checkpoint #1

Bu çalışma, projenin modüler bir yapıya dönüştürülmesini, bileşenler arası veri aktarımını (props) ve kullanıcı etkileşimlerinin kontrollü form yapılarıyla yönetilmesini kapsamaktadır. Ayrıca, projenin ilk büyük kontrol noktası olan **Ara Checkpoint #1** gereksinimleri tamamlanmıştır.

## 🎯 Kazanımlar

- **Bileşen (Component) Mimarisi:** UI'ın bağımsız, yeniden kullanılabilir ve test edilebilir parçalara (`Header`, `Hero`, `ProjectList`, `ContactForm`) bölünmesi.
- **Props ile Veri Aktarımı:** Verilerin ebeveyn bileşenden alt bileşenlere güvenli bir şekilde aktarılması ve TypeScript ile prop tiplerinin tanımlanması.
- **useState ile Durum Yönetimi:** Bileşen düzeyinde durumların oluşturulması, güncellenmesi ve asenkron state değişimlerinin yönetilmesi.
- **useMemo ile Performans Optimizasyonu:** Filtreleme ve sıralama gibi maliyetli hesaplamaların önbelleğe alınarak performansın artırılması.
- **Kontrollü Formlar (Controlled Forms):** Form elemanlarının React state ile kontrol edilmesi, anlık veri doğrulaması (validation) ve gönderim durumlarının yönetimi.
- **Liste Render ve Key Kavramı:** Dizi verilerinin `.map()` ile dinamik olarak listelenmesi ve `key` prop'u ile verimli DOM güncellemelerinin sağlanması.

## 🛠️ Teknik Araçlar

- **Framework:** React 18 & Vite
- **Dil:** TypeScript (Interface ve Type tanımlamalarıyla tam tip güvenliği)
- **Styling:** Tailwind CSS v4 (Responsive Tasarım)
- **Hooks:** `useState`, `useEffect`, `useMemo`

## 📂 Proje Yapısı

Laboratuvar standartlarına uygun olarak geliştirilen klasör hiyerarşisi:

- `src/components/layout/`: Ortak yerleşim bileşenleri (`Header`, `Footer`).
- `src/components/sections/`: Sayfa bölümleri (`Hero`, `About`, `Skills`, `ProjectList`).
- `src/components/ui/`: Temel arayüz elemanları (`Button`, `Card`, `Input`, `Alert`).
- `src/components/forms/`: Form bileşenleri (`ContactForm`, `ProjectFilter`).
- `src/types/`: TypeScript model tanımlamaları.
- `src/services/`: Veri çekme servisleri.
- `src/utils/`: Yardımcı fonksiyonlar (Filtreleme ve Sıralama).

## 🚀 Kurulum

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

---

## 📋 Ara Checkpoint #1 Notu

Bu branch (`feature/checkpoint-1`), projenin ilk 6 haftalık sürecini kapsayan tüm teknik gereksinimleri (Responsive tasarım, asenkron veri çekme, dinamik filtreleme ve form doğrulaması) içermektedir.