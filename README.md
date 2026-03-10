
---

# 🎨 Kişiselleştirilmiş UI ve Etkileşimli Formlar

Bu branch, portföy arayüzünün görsel kimliğinin oluşturulması, kullanıcı etkileşimlerinin iyileştirilmesi ve erişilebilir form mimarisinin entegre edildiği geliştirme aşamasıdır.

## 🎯 Kazanımlar

* **UI Kişiselleştirme:** Projenin genel tema renkleri ve tipografik tercihleri, modern bir kullanıcı deneyimi (UX) sunacak şekilde yapılandırıldı.
* **Gelişmiş Form Mimarisi:** İletişim formu, kullanıcı girdilerini doğrulayan (`required`, `minLength`) ve hata mesajlarını `aria-describedby` ile ekran okuyuculara bildiren erişilebilir bir yapıya kavuşturuldu.
* **Etkileşim Tasarımı:** Form alanları üzerinde odaklanma (focus) ve tıklama (active) durumları için görsel geri bildirimler eklendi.
* **Kullanıcı Deneyimi (UX):** Kullanıcının sayfaya ilk girişinde odaklanmayı kolaylaştıran "Ana içeriğe atla" (Skip Link) yapısı ve net bir görsel hiyerarşi oluşturuldu.

## 🛠 Teknik Araçlar

* **React (JSX/TSX):** Bileşen bazlı yapı ile form elementlerinin modüler kullanımı.
* **CSS3 (Modern Seçiciler):** `:focus`, `:required`, `:invalid` gibi sözde sınıflar (pseudo-classes) ile akıllı form yönetimi.
* **Erişilebilirlik (A11y):** Form etiketleri (`label`), `fieldset`/`legend` kullanımı ve hata mesajları için `role="alert"` implementasyonu.
* **Git İş Akışı:** Bu aşamada, kodun tarihçesini korumak adına atomik commit prensibi (feat, style, fix) uygulandı.

## ⚙️ Uygulanan İyileştirmeler

* [x] **Form Validasyonu:** Kullanıcı hata yaptığında veya eksik bilgi girdiğinde anlık geri bildirim mekanizmaları kuruldu.
* [x] **Görsel Hiyerarşi:** Profil fotoğrafı ve tanıtım kartları için kapsayıcılar (`figure`, `figcaption`) düzenlenerek görsel bütünlük sağlandı.
* [x] **Lighthouse Denetimi:** Uygulanan değişikliklerin ardından Accessibility (Erişilebilirlik) puanının 90+ seviyesinde korunması için testler gerçekleştirildi.

---