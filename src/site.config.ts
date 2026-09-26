// Sitenin tüm kişisel bilgileri tek yerde.
// Köşeli parantezli [ ... ] değerler koçtan gelecek bilgilerle değiştirilecek.

export const site = {
  name: 'Öğrenci Koçu',
  coachName: 'Sevil Berk',
  tagline: 'Çocuğunuzun potansiyelini birlikte ortaya çıkaralım',
  description:
    '8-18 yaş öğrencilere dünyanın her yerinden online öğrenci koçluğu. Ücretsiz testler, alıştırmalar ve veli rehberleri.',

  email: 'servetkarayali@gmail.com',
  // Uluslararası formatta, boşluksuz. Boş bırakılırsa WhatsApp butonu gizlenir.
  whatsapp: '',

  // Cal.com'daki 30 dakikalık ücretsiz tanışma etkinliğinin linki.
  bookingUrl: 'https://cal.com/servetk/tanisma',

  // Brevo'da oluşturulan double opt-in formunun "action" adresi.
  // Boş bırakılırsa form "yakında" uyarısı gösterir ve veri göndermez.
  newsletterFormAction:
    'https://342b761f.sibforms.com/serve/MUIFAHdwtEXOB8d17cG1d_DMwDVOC26cw7t8YJZGnlSvCdL3HEghRxskFzFIiMv1IfHa2XJ7tpOuzSrSm2hLM4UFdqH38QUVzMIAyPgdEeqxLGVpzoKJHw9v8kdB-b2wVXiUPQRezKXSPNtlYN1n-8hVOZiA5HU6MUdkn9uULZSYdGCIztl6TrnTgbmuK1mfrEUYbH2UV-kplOJa3w==',

  // Impressum bilgileri (Almanya'da yasal zorunluluk)
  legal: {
    fullName: 'Sevil Berk', // Uyarı: Impressum'da gerçek ad zorunlu
    street: 'Magdeburger Ring 98',
    city: '38518 Gifhorn',
    country: 'Deutschland',
    phone: '', // İsteğe bağlı
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
