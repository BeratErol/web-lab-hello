import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';

export default function UIKit() {
  return (
    <div className="p-10 space-y-10">
      <h1 className="text-3xl font-bold">UI Kit</h1>
      <Button variant="primary">Test Butonu</Button>
      <Input label="İsim" placeholder="Adınızı girin" />
      <Card title="Örnek Kart">Kart içeriği buraya gelecek.</Card>
      <Alert variant="success" title="Başarılı">İşlem tamam!</Alert>
    </div>
  );
}