# Öğrenci Koçu

8-18 yaş öğrencilere online koçluk veren bir koç için Türkçe web sitesi.

Hedef: Ziyaretçiyi **ücretsiz 30 dk tanışma görüşmesine** yönlendirmek; e-posta karşılığı ücretsiz PDF rehber ile liste oluşturmak.

## Teknoloji

- Statik HTML/CSS site (`site/`), derleme adımı yok
- Yayın: Cloudflare Workers statik varlıklar (`wrangler.jsonc`, `site/` klasörünü yayınlar)
- E-posta + PDF: Brevo double opt-in formu; rehber PDF'i `site/ogrenci-koclugu-rehberi.pdf`
- Çerez ve takip yok

## Sayfalar

- `site/index.html`: ücretsiz rehber açılış sayfası (Brevo form kodu buraya eklenecek)
- `site/impressum.html`, `site/datenschutz.html`: yasal sayfalar

## Yayın

`main` dalına her push'ta Cloudflare otomatik olarak `npx wrangler deploy` çalıştırır.
