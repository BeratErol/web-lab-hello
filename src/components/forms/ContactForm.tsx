import { useState, type FormEvent } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Alert from "../ui/Alert";

// 1. Form veri ve hata modellerini tanımlıyoruz [cite: 2156-2178]
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  // --- STATE YÖNETİMİ [cite: 2212-2221] ---
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // --- DOĞRULAMA MANTIĞI (VALIDATION) [cite: 2223-2281] ---
  const validate = (data: ContactFormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) newErrors.name = "Ad soyad zorunludur.";
    if (!data.email.trim()) {
      newErrors.email = "E-posta zorunludur.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz.";
    }
    if (!data.message.trim()) {
      newErrors.message = "Mesaj zorunludur.";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Mesaj en az 10 karakter olmalıdır.";
    }
    return newErrors;
  };

  // --- INPUT DEĞİŞİM YÖNETİMİ  ---
  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Yazarken o alandaki hatayı temizle
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  // --- FORM GÖNDERİMİ  ---
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate(formData);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // API çağrısı simülasyonu (1 saniye) 
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Gönderilen Veri:", formData);
      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch {
      alert("Gönderim başarısız.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="p-6 text-center">
        <Alert variant="success" title="Başarılı">Mesajınız başarıyla iletildi!</Alert>
        <Button variant="ghost" onClick={() => setSubmitSuccess(false)} className="mt-4">Yeni Mesaj Gönder</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800" noValidate>
      <h2 className="text-2xl font-bold dark:text-white mb-6">Bize Ulaşın</h2>
      
      <Input 
        label="Ad Soyad" 
        value={formData.name}
        onChange={e => handleChange("name", e.target.value)}
        placeholder="Adınız Soyadınız"
      />
      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}

      <Input 
        label="E-posta" 
        type="email"
        value={formData.email}
        onChange={e => handleChange("email", e.target.value)}
        placeholder="ornek@mail.com"
      />
      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1 dark:text-gray-300">Mesajınız</label>
        <textarea 
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          rows={4}
          value={formData.message}
          onChange={e => handleChange("message", e.target.value)}
          placeholder="Nasıl yardımcı olabiliriz?"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
      </Button>
    </form>
  );
}