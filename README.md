# KLIKMEDIS Landing Page

Website statis (HTML, CSS, JavaScript tanpa framework). Tidak perlu proses build:
unggah seluruh isi folder ini ke hosting, atau buka `index.html` di browser.

## Struktur

```
index.html              halaman utama (konten, SEO, JSON-LD)
assets/
  css/style.css         seluruh gaya; warna ada di variabel :root
  js/main.js            slider hero, logo klinik, video, testimoni, WhatsApp, pelacakan
  images/               foto (saat ini masih foto dummy)
```

Font Montserrat dimuat dari Google Fonts (butuh internet saat dibuka).

## Yang perlu diganti sebelum tayang

1. **Logo**: header dan footer memakai `https://app.kliksimpus.com/Primary-Logo-1.png`.
   Disarankan simpan file logo di `assets/images/` lalu ubah `src` di `index.html`
   (cari `class="limg"`).
2. **Nomor WhatsApp**: variabel `WA` di bagian atas `assets/js/main.js`.
3. **Video testimoni**: isi `id` pada array `VIDEOS` di `assets/js/main.js`.
4. **Foto dan logo klinik**: ganti file di `assets/images/` dengan nama yang sama
   (foto dummy), dan logo klinik (SVG di `index.html`, section "Dipercaya Klinik...").
5. **Testimoni berjalan**: array `T` di `assets/js/main.js`.
6. **Link media sosial** di footer (masih `#`).
7. **Pelacakan**: tempel snippet GA4 / GTM / Meta Pixel di `<head>` pada komentar
   `PELACAKAN`. Event `wa_click` dan `lead_form_submit` sudah dikirim lewat `dataLayer`.
8. **Pratinjau tautan**: tambahkan `og-image.jpg` (1200x630) lalu aktifkan baris
   `og:image` yang dikomentari di `<head>`.
9. **Isi**: angka 450+ fasilitas, daftar fitur per paket, harga add-on, dan jawaban FAQ
   keamanan data perlu dicocokkan dengan kondisi sebenarnya.

## Pesan WhatsApp otomatis

Semua tombol dengan `href="#kontak"` dibuka ke WhatsApp. Pesan bisa dibuat khusus
dengan atribut `data-msg="..."`. Tombol paket memakai `data-plan` dan `data-price`.
