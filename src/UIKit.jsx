import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';

export default function UIKit() {
  return (
    <div className="p-8 space-y-12 bg-white dark:bg-gray-950 transition-colors">
      <h1 className="text-4xl font-bold dark:text-white">UI Kit Tasarım Sistemi</h1>

      {/* BUTTON VARYANTLARI */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">Butonlar</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      {/* ALERT VARYANTLARI */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">Uyarılar (Alerts)</h2>
        <div className="space-y-3">
          <Alert variant="info" title="Bilgi">Sistem güncellemesi yarın.</Alert>
          <Alert variant="success" title="Başarılı">İşlem başarıyla kaydedildi.</Alert>
          <Alert variant="warning" title="Uyarı">Kota limitine yaklaştınız.</Alert>
          <Alert variant="error" title="Hata">Sunucuya bağlanılamadı.</Alert>
        </div>
      </section>

      {/* INPUT VARYANTLARI */}
      <section className="space-y-4 max-w-sm">
        <h2 className="text-xl font-semibold dark:text-white">Form Alanları</h2>
        <Input label="Normal" placeholder="İsim soyisim" />
        <Input label="Hata Durumu" error="Bu alan zorunludur!" />
      </section>
    </div>
  );
}