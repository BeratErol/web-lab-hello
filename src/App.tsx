import Button from './components/Button';
import Card from './components/Card';
import UIKit from './UIKit';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6 flex flex-col items-center">
      
      {/* 1. Profil Bilgileri */}
      <div className="max-w-sm w-full mb-10">
        <Card title="Kullanıcı Bilgileri" variant="elevated">
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-blue-900 dark:text-blue-400">Ad Soyad:</span> Berat Erol
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-blue-900 dark:text-blue-400">Öğrenci No:</span> 235541010
            </p>
          </div>
        </Card>
      </div>

      {/* 2. Projelerim Bölümü (Buraya ekledik) */}
      <section id="projeler" className="py-16 px-4 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Projelerim
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="E-Ticaret Sitesi" 
            variant="elevated" 
            image="proje1.jpg" 
            imageAlt="E-Ticaret projesi ekran görüntüsü"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              React ve Node.js kullanarak geliştirdiğim tam kapsamlı bir uygulama.
            </p>
            <Button variant="ghost" size="sm" className="mt-4">Detayları Gör</Button>
          </Card>
        </div>
      </section>

      {/* 3. UI Kit Vitrini */}
      <div className="w-full max-w-4xl mt-10">
        <UIKit />
      </div>
      
    </div>
  )
}

export default App;