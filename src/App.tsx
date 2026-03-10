function App() {
  return (
    // min-h-screen: tam ekran boyu, bg-gray-50: hafif gri arka plan, flex: ortalama için
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-gray-900">
      
      {/* Kart tasarımı */}
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center border border-gray-100">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Web Tasarımı ve Programlama</h1>
        <h3 className="text-xl font-semibold text-gray-600 mb-6">LAB-4 ~ Tailwind CSS</h3>
        
        <div className="space-y-2 text-left bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">
            <span className="font-bold text-blue-900">Ad Soyad:</span> Berat Erol
          </p>
          <p className="text-gray-700">
            <span className="font-bold text-blue-900">Öğrenci No:</span> 235541010
          </p>
        </div>

        <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Tailwind Başarılı!
        </button>
      </div>
    </div>
  )
}

export default App; 