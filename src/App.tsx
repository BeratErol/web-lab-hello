import "./App.css";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header className="header">
  <h1 className="site-title">Berat Erol</h1>

  <nav aria-label="Ana navigasyon" className="nav">
    <ul>
      <li><a href="#hakkimda">Hakkımda</a></li>
      <li><a href="#projeler">Projeler</a></li>
      <li><a href="#iletisim">İletişim</a></li>
    </ul>
  </nav>
</header> 

      <main id="main-content" className="container">
        <h1>Kişisel Portföy</h1>

        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <figure>
            <img
              src="/profil.jpg"
              alt="Berat Erol'un vesikalık fotoğrafı"
              width="150"
            />
            <figcaption>Berat Erol</figcaption>
          </figure>

          <p>
            Yazılım Mühendisliği öğrencisiyim. C#/.NET ve Java backend
            sistemleri üzerine çalışıyorum.
          </p>

          <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
  <li>HTML5</li>
  <li>CSS3</li>
  <li>JavaScript</li>
  <li>React</li>
  <li>TypeScript</li>
  <li>Git</li>
</ul>
        </section>

        <section id="projeler">
  <h2>Projelerim</h2>

  <div className="project-grid">

    <article className="project-card">
      <h3>C#/.NET Desktop & Backend Projeleri</h3>
      <p>
        Masaüstü uygulamaları, katmanlı mimari tasarımları ve
        backend servisleri geliştirdim.
      </p>
    </article>

    <article className="project-card">
      <h3>Java Algoritma & Uygulamaları</h3>
      <p>
        120+ temel algoritma implementasyonu ve Swing tabanlı
        sistem geliştirdim.
      </p>
    </article>

    <article className="project-card">
      <h3>BookVerse System</h3>
      <p>
        Monolit mimariden mikroservis mimarisine geçiş simülasyonu.
      </p>
    </article>

  </div>
</section>
      </main>

      <footer>
        <section id="iletisim" className="container">
          <h2>İletişim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit" className="primary-btn">
                Gönder
              </button>
            </fieldset>
          </form>
        </section>

        <p className="copyright">
          © 2025 Berat Erol. Tüm hakları saklıdır.
        </p>
      </footer>
    </>
  );
}

export default App;
