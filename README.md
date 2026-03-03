# 🏗️ Semantik Portföy İskeleti

Bu branch, kişisel portföyümün temelini oluşturan **HTML5** iskelet yapısını ve **erişilebilirlik (A11y)** standartlarını kapsar.

## 🎯 Kazanımlar
* **Semantik Yapı:** Sayfa içeriği; `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` ve `<footer>` etiketleri kullanılarak anlamlı bir hiyerarşiyle yapılandırıldı.
* **Erişilebilirlik (A11y):** * `<h1>` - `<h6>` hiyerarşisi, ekran okuyucular için optimize edildi.
    * Görsellerde anlamlı `alt` metinleri ve dekoratif görsellerde `alt=""` kullanımı uygulandı.
    * `role="alert"` ve `aria-describedby` gibi ARIA öznitelikleri ile form hata yönetimi güçlendirildi.
* **Form Mimarisi:** İletişim formu, `<label>` ilişkisi (for/id) kurularak erişilebilir hale getirildi ve HTML5 doğrulama öznitelikleri (`required`, `minlength`) ile desteklendi.
* **Navigasyon:** Klavye kullanıcıları için "Ana içeriğe atla" (skip link) özelliği eklendi.

## 🛠️ Teknik Araçlar
* **HTML5:** Semantik etiketleme.
* **Lighthouse:** Erişilebilirlik puanının 90+ seviyesine çıkarılması için denetim.
