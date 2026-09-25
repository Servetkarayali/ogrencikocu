// Sitenin tüm kişisel bilgileri tek yerde.
// Köşeli parantezli [ ... ] değerler koçtan gelecek bilgilerle değiştirilecek.

export const site = {
  name: 'Öğrenci Koçu',
  coachName: 'Sevil Berk',
  tagline: 'Çocuğunuzun potansiyelini birlikte ortaya çıkaralım',
  description:
    '8-18 yaş öğrencilere dünyanın her yerinden online öğrenci koçluğu. Ücretsiz testler, alıştırmalar ve veli rehberleri.',

  email: '[iletisim@alanadi.de]',
  // Uluslararası formatta, boşluksuz. Boş bırakılırsa WhatsApp butonu gizlenir.
  whatsapp: '',

  // Cal.com'daki 30 dakikalık ücretsiz tanışma etkinliğinin linki.
  bookingUrl: 'https://cal.com/servetk/tanisma',

  // Brevo'da oluşturulan double opt-in formunun "action" adresi.
  // Boş bırakılırsa form "yakında" uyarısı gösterir ve veri göndermez.
  newsletterFormAction: '',

  // Impressum bilgileri (Almanya'da yasal zorunluluk)
  legal: {
    fullName: '[Ad Soyad]',
    street: '[Sokak ve No]',
    city: '[Posta Kodu Şehir]',
    country: 'Deutschland',
    phone: '[Telefon]',
    vatId: '', // Varsa USt-IdNr., yoksa boş kalır
  },
};

export const nav = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/testler', label: 'Ücretsiz Testler' },
  { href: '/alistirmalar', label: 'Alıştırmalar' },
  { href: '/veli-kosesi', label: 'Veli Köşesi' },
  { href: '/iletisim', label: 'İletişim' },
];
