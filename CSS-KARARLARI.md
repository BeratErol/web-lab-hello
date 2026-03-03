# CSS Kararları

## 1. Breakpoint Seçimi

**Neden 640px ve 1024px seçildi?**
640px breakpoint’i, mobil cihazlardan tablet boyutuna geçişte içeriğin yatayda sıkışmaya ve taşmaya başladığı nokta olduğu için tercih edilmiştir. 1024px ise tablet ile masaüstü arasındaki geçişi temsil eder. Bu genişlikte daha fazla sütun yapısına ihtiyaç duyulduğundan ikinci breakpoint olarak belirlenmiştir.

**İçerik bu noktalarda nasıl değişiyor?**

* 640px sonrası: Tek sütunlu yapı iki sütuna geçer, boşluklar artırılır.
* 1024px sonrası: Kart yapıları daha geniş alana yayılır ve çok sütunlu grid düzenine geçilir.
  Bu sayede içerik her ekran boyutunda okunabilir ve dengeli görünür.

---

## 2. Layout Tercihleri

**Header için neden Flexbox kullanıldı?**
Flexbox, elemanları yatay ve dikey eksende hizalamayı kolaylaştırdığı için tercih edilmiştir. Menü öğeleri ve logo arasındaki boşlukları kontrol etmek, hizalamayı düzenlemek ve responsive davranışı yönetmek açısından idealdir.

**Proje kartları için neden Grid kullanıldı?**
Grid yapısı, iki boyutlu (satır ve sütun) yerleşimi daha kontrollü şekilde yönetmeyi sağlar. Proje kartlarının eşit genişlikte ve düzenli bir yapıda yerleşmesi için Grid daha uygundur.

**auto-fit mi auto-fill mi kullanıldı? Neden?**
`auto-fit` tercih edilmiştir. Çünkü kartların mevcut alanı dolduracak şekilde genişlemesi istenmiştir. `auto-fit`, boş sütunları kaldırarak elemanların esnek biçimde genişlemesini sağlar.

---

## 3. Design Tokens

**Renk paleti seçimi**
Minimal ve modern bir görünüm için nötr tonlar (beyaz, gri tonları) ve vurgu rengi olarak tek bir ana renk seçilmiştir. Bu yaklaşım görsel karmaşayı azaltır ve odak noktası oluşturur.

**Spacing skalası nasıl belirlendi?**
Tutarlılık sağlamak amacıyla 4px veya 8px tabanlı bir spacing sistemi kullanılmıştır (örneğin: 4, 8, 16, 24, 32). Bu sistem sayesinde boşluklar düzenli ve orantılı görünür.

**Fluid typography için clamp değerleri nasıl ayarlandı?**
`clamp()` kullanılarak minimum, ideal (viewport’a bağlı) ve maksimum font boyutları belirlenmiştir.
Örneğin:

* Minimum: Küçük ekranlarda okunabilirliği korumak için
* Orta değer: Viewport genişliğine bağlı ölçeklenme
* Maksimum: Büyük ekranlarda aşırı büyümeyi engellemek için

Bu yöntem tipografinin her cihazda dengeli görünmesini sağlar.

---

## 4. Responsive Stratejiler

**Mobile-first yaklaşım nasıl uygulandı?**
Stiller önce mobil ekranlar için yazılmış, ardından `min-width` media query’leri ile daha büyük ekranlar için genişletilmiştir. Bu yaklaşım performans ve sürdürülebilirlik açısından avantaj sağlar.

**Breakpoint’lerde hangi elemanlar değişiyor?**

* Grid sütun sayısı artar
* Header düzeni yatay hizalamaya geçer
* Boşluk ve padding değerleri artırılır
* Bazı elemanların boyutları yeniden ölçeklenir

**Görsel boyutları nasıl yönetildi?**
Görseller için `max-width: 100%` ve `height: auto` kullanılarak taşma engellenmiştir. Ayrıca gerektiğinde `object-fit` ile kırpma kontrolü sağlanmıştır.
