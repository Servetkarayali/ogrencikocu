# Öğrenci Koçu

8-18 yaş öğrencilere online koçluk veren bir koç için Türkçe web sitesi.

Hedef: Ziyaretçiyi **ücretsiz 30 dk tanışma görüşmesine** yönlendirmek; e-posta karşılığı ücretsiz PDF rehber ile liste oluşturmak.

## Teknoloji

- [Astro](https://astro.build) ile statik site (`src/`)
- Yayın: Cloudflare Workers (`wrangler.jsonc`, `dist/` klasörünü yayınlar)
- Randevu: Cal.com (link, sayfaya gömülü değil)
- E-posta + PDF: Brevo double opt-in formu
- Çerez ve takip yok; ücretsiz testler tamamen tarayıcıda çalışır

## Kişisel bilgiler

Koçun adı, e-posta, randevu linki, Brevo form adresi ve Impressum bilgileri tek dosyada: `src/site.config.ts`.
Köşeli parantezli `[ ... ]` metinler gerçek bilgilerle değiştirilecek.

## Komutlar

```bash
npm install
npm run dev      # yerel geliştirme: http://localhost:4321
npm run build    # dist/ klasörüne derler
npm run deploy   # derler ve Cloudflare'e yükler
```
