# Web Tasarımı ve Programlama - LAB-5: TypeScript & State Yönetimi

Bu çalışma, projenin görsel arayüzüne dinamik veri mantığı ve tip güvenliği eklenmesini kapsamaktadır. Statik bileşen yapısından, asenkron veri çeken ve "state" (durum) odaklı çalışan modern bir mimariye geçiş yapılmıştır.

## 🎯 Kazanımlar

- **TypeScript Entegrasyonu:** `interface` ve `type alias` kullanarak veri modellerinin (`Project`, `Category`, `FilterState`) tanımlanması.
- **Async/Await & Fetch API:** Proje verilerinin harici bir JSON dosyasından asenkron olarak çekilmesi ve işlenmesi.
- **Hata Yönetimi (Error Handling):** `try/catch/finally` blokları ile ağ hatalarının ve HTTP durum kodlarının yönetimi.
- **Modern State Mantığı:** Doğrudan DOM manipülasyonu yerine, React'in state mantığı ile UI güncelleme (`UI = f(state)`).
- **Dinamik Filtreleme & Sıralama:** Arama kutusu, kategori butonları ve yıla/başlığa göre sıralama fonksiyonlarının (helpers) uygulanması.
- **Modüler Kod Yapısı:** Tipler, servisler ve yardımcı fonksiyonların ayrı dosyalarda organize edilmesi.

## 🛠️ Teknik Araçlar

- **Dil:** TypeScript (tip güvenliği için)
- **Veri Kaynağı:** Local JSON (Mock Data)
- **React Hooks:** `useState` ve `useEffect`
- **Utility:** JavaScript Array Methods (`filter`, `sort`, `some`, `includes`)

## 🚀 Kurulum
```bash
npm install
npm run dev
``` 