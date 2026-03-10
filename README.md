# Web Tasarımı ve Programlama - LAB-4: Tailwind CSS Portföy

Bu proje, önceki laboratuvarlarda oluşturulan semantik HTML iskeletinin, **Tailwind CSS v4** framework'ü ile modern, responsive ve utility-first bir yapıya taşınmasını kapsamaktadır.

## 🎯 Kazanımlar
- **Utility-First CSS:** Geleneksel CSS yerine doğrudan HTML içerisinde Tailwind sınıflarının kullanılması (hız ve tutarlılık).
- **Component Yaklaşımı:** `Button`, `Input`, `Card` ve `Alert` bileşenlerinin varyant bazlı (primary, danger, ghost vb.) tasarımı.
- **Responsive Tasarım:** `sm:`, `md:`, `lg:` prefixleri ile mobil uyumlu ızgara (grid) yapısı.
- **Dark Mode:** `dark:` ön eki ile karanlık/aydınlık tema desteği ve dinamik geçiş (toggle).
- **Erişilebilirlik (A11y):** `aria-describedby`, `role="alert"` ve semantik etiketleme ile yüksek erişilebilirlik standartları.
- **UI Kit:** Tüm bileşen varyantlarının tek bir sayfada (`UIKit.jsx`) dokümante edilmesi.

## 🛠️ Teknik Araçlar
- **Framework:** Vite + React
- **CSS:** Tailwind CSS v4
- **Yapılandırma:** `@theme` ve `@custom-variant dark` (CSS tabanlı özelleştirme).
- **Versiyon Kontrol:** Git (feature/tailwind-ui-kit branch yapısı).

## 🚀 Kurulum
```bash
npm install
npm run dev