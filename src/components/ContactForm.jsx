import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Alert from './Alert';

export default function ContactForm() {
  const [status, setStatus] = useState(null); // null, 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basit bir simülasyon: 2 saniye sonra başarılı mesajı ver
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold dark:text-white">İletişim</h2>
      <Input label="E-posta" type="email" required placeholder="ornek@mail.com" />
      <Input label="Mesaj" id="message" placeholder="Mesajınız..." />
      
      <Button variant="primary" type="submit" className="w-full">Gönder</Button>

      {status === 'success' && (
        <Alert variant="success" title="Başarılı">Mesajınız iletildi!</Alert>
      )}
    </form>
  );
}