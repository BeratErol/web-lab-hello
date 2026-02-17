function App() {
  return (
    <div style={{
      padding: "40px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>Web Tasarımı ve Programlama</h1>
      <h2>LAB-1</h2>

      <hr style={{ width: "60%", margin: "20px auto" }} />

      <p><strong>Ad Soyad:</strong> Berat Erol</p>
      <p><strong>Öğrenci No:</strong> 235541010</p>
      <p><strong>Bölüm:</strong> Yazılım Mühendisliği</p>
      <p><strong>Sınıf:</strong> 3. Sınıf</p>

      <div style={{ marginTop: "20px" }}>
        <h3>Hakkımda</h3>
        <p>
          Yazılım geliştirme ve web teknolojilerine ilgi duyuyorum.
          React ve TypeScript öğrenerek kendimi geliştirmeyi hedefliyorum.
        </p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Hobiler</h3>
        <p>Kod yazmak, spor yapmak, teknoloji araştırmaları yapmak</p>
      </div>
    </div>
  );
}

export default App;
