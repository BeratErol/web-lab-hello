import Button from './components/Button';
import Card from './components/Card';
import UIKit from './UIKit';
import ContactForm from './components/ContactForm';

// Projeleri bir dizi olarak tanımladık [cite: 1039-1045]
const projeler = [
  { id: 1, title: "E-Ticaret Sitesi", desc: "React ve Node.js kullanarak geliştirdiğim tam kapsamlı bir uygulama.", img: "proje1.jpg" },
  { id: 2, title: "Arduino Smart Lock", desc: "Arduino ve sensörler ile güvenli geçiş sistemi.", img: "proje2.jpg" },
  { id: 3, title: "Ankara Ulaşım", desc: "Ankara içi gerçek zamanlı ulaşım platformu (GIS).", img: "proje3.jpg" }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6 flex flex-col items-center transition-colors">
      
      {/* Tema Değiştirici Buton [cite: 353-381] */}
      <button 
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">🌙</span>
        <span className="hidden dark:inline">☀️</span>
      </button>

      {/* 1. Profil Bilgileri - Detaylandırılmış  */}
      <div className="max-w-xl w-full mb-10">
        <Card title="Hakkımda" variant="elevated">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Merhaba, ben Berat Erol. Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. 
              Backend geliştirme, embedded sistemler ve siber güvenlik üzerine araştırmalar yapıyorum.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs">React</span>
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs">Python</span>
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs">Tailwind</span>
            </div>
          </div>
        </Card>
      </div>

      {/* 2. Projelerim Bölümü [cite: 1030-1057] */}
      <section id="projeler" className="py-16 px-4 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Projelerim
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projeler.map((p) => (
            <Card key={p.id} title={p.title} image={p.img} variant="elevated">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{p.desc}</p>
              <Button 
  variant="ghost" 
  size="sm" 
  className="mt-4"
  onClick={() => alert("Proje detayları yakında eklenecek!")}
>
  Detayları Gör
</Button>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. İletişim Formu */}
      <section className="w-full max-w-4xl mt-10">
        <ContactForm />
      </section>

      {/* 4. UI Kit Vitrini */}
      <div className="w-full max-w-4xl mt-10">
        <UIKit />
      </div>
      
    </div>
  )
}

export default App;