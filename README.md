# 🚗 KIA Masati Semarang — Website Dealer Resmi

Website Company Profile & Katalog Digital untuk **Dealer Resmi KIA Masati Semarang**, Jawa Tengah.  
Dibangun dengan **Next.js 16**, **React 19**, **Tailwind CSS 4**, dan **TypeScript** — dioptimasi untuk performa, SEO, dan pengalaman pengguna premium.

🌐 **Live URL:** [https://kiasemarang.id](https://kiasemarang.id)

---

## 📑 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Halaman Website](#-halaman-website)
- [API Endpoints](#-api-endpoints)
- [Tech Stack](#-tech-stack)
- [Struktur Proyek](#-struktur-proyek)
- [Katalog Kendaraan](#-katalog-kendaraan)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)

---

## ✨ Fitur Utama

### 🎨 Desain & UI/UX
- **Desain Premium Modern** — Layout editorial dengan tipografi Plus Jakarta Sans, glassmorphism effects, dan micro-animations
- **Fully Responsive** — Optimal di desktop, tablet, dan mobile dengan layout khusus per breakpoint
- **Hero Section Dinamis** — Auto-slideshow dengan crossfade transition menampilkan unit unggulan KIA (interval 6 detik)
- **Dark Cinematic Aesthetic** — Hero section dengan gradient overlay dan vignette untuk kesan premium
- **Floating Glass Menu Card** — Navigasi kontekstual dengan backdrop-blur pada hero section (desktop only)
- **Smooth Scroll & Hover Animations** — Interaksi halus pada card, tombol, dan navigasi
- **Sticky Navbar** — Navigasi tetap terlihat dengan active indicator dan mobile drawer menu

### 🚘 Katalog Unit Kendaraan
- **Daftar Katalog Lengkap** — 5 model KIA (Sonet, All New Carens, All-New Seltos, Carnival, EV9)
- **Halaman Detail Per Unit** — Galeri foto, spesifikasi teknis, fitur, dan harga per varian
- **Filter & Sorting Canggih** — Filter berdasarkan model, rentang harga, tipe bodi (SUV/MPV/EV), dan transmisi
- **Sorting Dinamis** — Urutkan berdasarkan harga terendah/tertinggi, terbaru, atau nama A-Z
- **Varian Per Model** — Tampilan card varian (Trendy, Motion, Black Edition, Signature, GT Line, dll.)
- **Halaman Spesifikasi Detail** — Spesifikasi lengkap per varian dengan carousel 3 detik auto-transition
- **Crossfade Hero Carousel** — Slider katalog hero dengan 5 slide & indikator dash interaktif

### 📊 Data-Driven via REST API
- **API Katalog Mobil** (`/api/cars`) — GET dengan query filter (model, harga, tipe, transmisi, sort)
- **API Detail Mobil** (`/api/cars/[id]`) — GET data lengkap per unit kendaraan
- **API Promo** (`/api/promos`) — GET daftar promo aktif dealer
- **API Spesifikasi** (`/api/specifications`) — GET spesifikasi teknis per model
- **API Spesifikasi Detail** (`/api/specifications/[id]`) — GET spesifikasi lengkap per varian
- **API Kontak** (`/api/contact`) — GET informasi kontak dealer
- **API Test Drive** (`/api/test-drive`) — GET & POST booking jadwal test drive

### 📝 Booking Test Drive
- **Modal Form Interaktif** — Form booking test drive dengan validasi real-time
- **Pilihan Lokasi Fleksibel** — Showroom, Home Test Drive, atau Office Test Drive
- **Pre-select Unit** — Otomatis memilih unit saat booking dari halaman detail
- **Konfirmasi Instan** — Tampilan booking ID dan detail konfirmasi setelah submit
- **Integrasi API** — Form terhubung ke API endpoint `/api/test-drive` (POST)

### 🏷️ Promo & Penawaran
- **Section Promo Bulan Ini** — Tampilan promo aktif dengan highlight fitur dan batas waktu
- **3 Paket Promo Aktif** — DP Ringan, Kredit Seltos, dan Luxury Family Package
- **Koneksi WhatsApp** — CTA langsung ke WhatsApp sales dengan pesan template per unit

### 🔧 Layanan Bengkel Resmi
- **Halaman Bengkel Dedicated** — Info layanan bengkel resmi dengan hero cinematic
- **Komitmen Layanan** — Section deskripsi komitmen servis
- **3 Layanan Unggulan** — Grid card layanan unggulan bengkel
- **Form Jadwal Servis** — Formulir booking jadwal servis kendaraan
- **Status Coming Soon** — Badge "Coming Soon" untuk fitur yang sedang dikembangkan

### 📞 Kontak & Tim Profesional
- **Halaman Kontak Lengkap** — Hero dengan foto showroom, CTA WhatsApp & Google Maps
- **Tim Profesional** — Profil tim sales dealer dengan foto dan info kontak
- **Inquiry Form** — Section "Inquire with KIA" untuk pertanyaan pelanggan
- **Embed Google Maps** — Peta lokasi showroom tertanam langsung
- **Info Operasional** — Jam operasional dan layanan 24/7

### 📈 SEO & Performance
- **Meta Tags Komprehensif** — Title, description, keywords, Open Graph, dan Twitter Card
- **Dynamic Sitemap** — Auto-generated sitemap XML untuk semua halaman & detail kendaraan
- **Robots.txt** — Konfigurasi robots.txt untuk crawling optimal
- **Web App Manifest** — PWA-ready manifest untuk install ke home screen
- **Image Optimization** — Semua gambar dalam format WebP dengan responsive `sizes`
- **Dynamic Import (Lazy Loading)** — Komponen di-load secara lazy untuk performa page load optimal
- **Vercel Analytics** — Tracking analytics terintegrasi via `@vercel/analytics`
- **Semantic HTML** — Struktur HTML5 semantik untuk aksesibilitas dan SEO

### 🏠 Landing Page Sections
1. **Hero Section** — Fullscreen slideshow dengan headline & CTA pill buttons
2. **Stats Banner** — Statistik dealer (tahun berdiri, unit terjual, dll.)
3. **KIA EV9 Specification Showcase** — Highlight spesifikasi flagship EV9 dengan auto-carousel
4. **Unit Unggulan** — Grid unit kendaraan populer
5. **Test Drive Adrenaline CTA** — Section ajakan test drive dengan visual dinamis
6. **Testimonials** — Testimoni pelanggan KIA Semarang
7. **Layanan Bengkel (Coming Soon)** — Teaser layanan bengkel resmi
8. **Footer** — Navigasi, kontak, alamat, sosial media (Instagram, Facebook, WhatsApp, TikTok)

---

## 📄 Halaman Website

| Halaman | Route | Deskripsi |
|---------|-------|-----------|
| **Beranda** | `/` | Landing page utama dengan 8 section |
| **Katalog Unit** | `/katalog` | Daftar semua kendaraan + filter sidebar |
| **Detail Mobil** | `/katalog/[id]` | Galeri, spesifikasi, fitur, dan varian per unit |
| **Spesifikasi Lengkap** | `/katalog/[id]/spesifikasi` | Spesifikasi teknis detail per varian |
| **Layanan Bengkel** | `/bengkel` | Info layanan bengkel resmi KIA |
| **Kontak & Tentang** | `/kontak` | Kontak dealer, tim profesional, dan lokasi |

---

## 🔌 API Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `GET` | `/api/cars` | Daftar kendaraan (filter: model, harga, tipe, transmisi, sort) |
| `GET` | `/api/cars/[id]` | Detail kendaraan berdasarkan ID |
| `GET` | `/api/promos` | Daftar promo aktif dealer |
| `GET` | `/api/specifications` | Daftar spesifikasi semua model |
| `GET` | `/api/specifications/[id]` | Spesifikasi detail per model/varian |
| `GET` | `/api/contact` | Informasi kontak dealer |
| `GET` | `/api/test-drive` | Daftar booking test drive |
| `POST` | `/api/test-drive` | Buat booking test drive baru |

---

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| **Next.js** | 16.3.0 | Framework React dengan App Router & API Routes |
| **React** | 19.2.8 | Library UI component-based |
| **TypeScript** | ^5 | Type safety & developer experience |
| **Tailwind CSS** | ^4 | Utility-first CSS framework |
| **Lucide React** | ^1.28 | Icon library modern |
| **Vercel Analytics** | ^2.0.1 | Web analytics terintegrasi |
| **Plus Jakarta Sans** | Google Fonts | Tipografi utama website |

---

## 📁 Struktur Proyek

```
src/
├── app/
│   ├── page.tsx                    # Landing page (Beranda)
│   ├── layout.tsx                  # Root layout + metadata SEO
│   ├── globals.css                 # Global styles
│   ├── sitemap.ts                  # Dynamic sitemap generator
│   ├── robots.ts                   # Robots.txt config
│   ├── manifest.ts                 # PWA manifest
│   ├── katalog/
│   │   ├── page.tsx                # Halaman katalog + filter
│   │   └── [id]/
│   │       ├── page.tsx            # Detail unit kendaraan
│   │       └── spesifikasi/
│   │           └── page.tsx        # Spesifikasi teknis lengkap
│   ├── bengkel/
│   │   └── page.tsx                # Halaman layanan bengkel
│   ├── kontak/
│   │   └── page.tsx                # Halaman kontak & tentang
│   └── api/
│       ├── cars/
│       │   ├── route.ts            # API daftar kendaraan
│       │   └── [id]/route.ts       # API detail kendaraan
│       ├── promos/route.ts         # API promo
│       ├── specifications/
│       │   ├── route.ts            # API spesifikasi
│       │   └── [id]/route.ts       # API spesifikasi per model
│       ├── contact/route.ts        # API kontak
│       └── test-drive/route.ts     # API booking test drive
├── components/
│   ├── Navbar.tsx                  # Navigasi utama (sticky + mobile drawer)
│   ├── HeroSection.tsx             # Hero slideshow landing page
│   ├── StatsSection.tsx            # Banner statistik dealer
│   ├── Ev9SpecSection.tsx          # Showcase spesifikasi KIA EV9
│   ├── FeaturedUnitsSection.tsx    # Grid unit unggulan
│   ├── PromoSection.tsx            # Section promo bulan ini
│   ├── TestDriveAdrenalineSection.tsx  # CTA test drive
│   ├── TestDriveModal.tsx          # Modal form booking test drive
│   ├── TestimonialsSection.tsx     # Testimoni pelanggan
│   ├── CarCatalogSection.tsx       # Komponen katalog mobil
│   ├── KatalogGridSection.tsx      # Grid katalog + filter sidebar
│   ├── KontakTimProfesionalSection.tsx # Profil tim sales
│   ├── KontakInquireSection.tsx    # Form inquiry & peta
│   ├── BengkelComingSoonSection.tsx # Teaser bengkel (coming soon)
│   ├── BengkelKomitmenSection.tsx  # Komitmen layanan bengkel
│   ├── BengkelLayananUnggulanSection.tsx # Layanan unggulan bengkel
│   ├── BengkelJadwalServisSection.tsx   # Form jadwal servis
│   ├── ApiTesterSection.tsx        # API tester component
│   └── Footer.tsx                  # Footer global + social media
└── data/
    ├── cars.ts                     # Data katalog kendaraan (5 model)
    ├── promos.ts                   # Data promo aktif (3 paket)
    ├── contact.ts                  # Data kontak dealer
    └── specifications.ts           # Data spesifikasi teknis lengkap

public/
└── images/
    ├── katalog unit/               # Foto kendaraan (exterior & interior)
    ├── landing page/               # Aset hero & banner
    ├── layanan bengkel/            # Foto bengkel
    ├── kontak/                     # Foto showroom
    ├── logo/                       # Logo KIA Masati Semarang
    ├── team/                       # Foto tim profesional
    └── medsos/                     # Ikon sosial media (default & hover)
```

---

## 🚗 Katalog Kendaraan

| Model | Kategori | Harga Mulai | Mesin | Kursi |
|-------|----------|-------------|-------|-------|
| **KIA Sonet** | SUV | Rp 272 Juta | 1.5L / 1.4L Turbo | 5 |
| **KIA All New Carens** | MPV | Rp 310 Juta | 1.5L / 1.4L Turbo | 6-7 |
| **KIA All-New Seltos** | SUV | Rp 373 Juta | 1.5L / 1.4L Turbo | 5 |
| **KIA Carnival** | MPV | Rp 938 Juta | 2.2L Diesel / 1.6L Hybrid | 7-11 |
| **KIA EV9** | EV | Rp 1.585 Miliar | Dual Motor 99.8 kWh | 6-7 |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 18
- **npm**, **yarn**, **pnpm**, atau **bun**

### Instalasi & Development

```bash
# Clone repository
git clone https://github.com/AndikaHugaW/KIA-Masati-Semarang.git

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Production

```bash
npm run build
npm start
```

---

## 🌍 Deployment

Website di-deploy menggunakan **Vercel Platform**:

- **Production Branch:** `main`
- **Preview Branch:** `dev`
- **Domain:** [kiasemarang.id](https://kiasemarang.id)

---

## 📞 Informasi Dealer

| Info | Detail |
|------|--------|
| **Dealer** | KIA Masati Semarang |
| **Alamat** | Jl. Dr. Cipto No. 136, Sarirejo, Semarang Timur, Kota Semarang 50124 |
| **Telepon** | 0813-2545-6655 |
| **WhatsApp** | [+62 813-2545-6655](https://wa.me/6281325456655) |
| **Google Maps** | [Lihat Lokasi](https://maps.app.goo.gl/LtEd1xDa1nDk8CQz5) |

---

<p align="center">
  <sub>© 2026 Masati Semarang. All rights reserved.</sub>
</p>
