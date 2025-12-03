# 🌟 Konjiki No Yami

![Repo badge](https://img.shields.io/badge/status-active-brightgreen) ![Lang-TS](https://img.shields.io/badge/lang-TypeScript-blue) ![Express](https://img.shields.io/badge/framework-Express-lightgrey)

> **Selamat datang, Master, di repositori *Konjiki No Yami*!**
>
> Proyek ini berisi backend API sederhana untuk katalog karakter. Di sini kamu akan menemukan tugas, catatan development, dan cara cepat menjalankan project.

---

## 🎆 Visual Welcome

![welcome-gif](https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif)

> *Fufufu... Selamat datang Master, semoga petualangan development ini menyenangkan.*

---

## 📌 Isi README (Intisari)

* ✅ Quick start (jalankan server)
* 📂 Struktur folder singkat
* 🧩 Daftar tugas / branching (cara melihat tugas: **pindah branch** — petunjuk visual di bawah)
* ✅ Checklist persiapan PR / merge
* 🛠 Tips & troubleshooting singkat

---

## 🚀 Quick start

1. Clone repo:

```bash
git clone git@github.com:KonjikiNoYamii/Yami_Backend.git
cd Yami_Backend
```

2. Install dependencies:

```bash
npm init -y
npm install
npm install morgan helmet cors express-validator
npm install -D @types/morgan @types/cors @types/express-validator
```

3. Jalankan server (development):

```bash
npm run dev
```

4. Buka `http://localhost:5000` untuk memastikan server hidup.

---

## 🗂️ **Cara Melihat Tugas (BRANCH VISUAL GUIDE)**

Tugas-tugas ditempatkan pada branch terpisah. Untuk **melihat tugas tertentu**, cukup pindah branch — berikut beberapa cara visual dan perintah Git.

### 1) Cara cepat lewat Git (terminal)

```bash
# lihat semua branch remote
git branch

# pindah ke branch tugas (contoh: day4)
git switch day1/2/3....

```
### 2) Cara visual di VSCode (GUI)

1. Buka **panel kiri bawah**—di pojok kiri bawah ada nama branch sekarang (mis. `main`).
2. Klik nama branch → akan muncul daftar branch. Pilih branch yang ingin dibuka (contoh: `day4`).
3. Jika branch belum ada lokal, pilih `Remote` → klik `origin/day4` → `Checkout`.


## 📋 Tugas (Task Board — ringkasan)

| Branch         | Judul Tugas                    | Status         | Catatan             |
| -------------- | ------------------------------ | -------------- | ------------------- |
| `day1`         | Setup project & tsconfig       | ✅ Done         | -                   |
| `day2`         | Basic CRUD Characters          | ✅ Done         | -                   |
| `day3`         | Validation + error handling    | ✅ Done         | -                   |
| `day4`         | Middleware + logging + API key | ✅ Done         | Lihat branch `day4` |
| `day5`         | ???                            | ⏳ Planned      | -                   |

---


```bash
# cara aman
git stash
git pull origin <branch>
# perbaiki conflict jika ada
git stash pop
git add .
git commit -m "resolve conflicts"
git push origin <branch>

# jika yakin ingin overwrite remote (HATI-HATI)
git push origin <branch> --force
```

**API key middleware**

* Pastikan header `x-api-key` dikirim (contoh: `94326`) saat testing via Postman / curl.

---

## 🧭 Contoh Perintah Berguna

```bash
# lihat log morgan (console)
# jalankan server dev
npm run dev

# lihat branch remote
git fetch && git branch -r
```

--

---

## 🎴 Footer — Sentuhan estetika

> "Konjiki No Yami" — semoga repo ini memberi cahaya bagi Master saat coding. ✨

<div align="center">
  <img src="https://img.shields.io/badge/Have%20Fun-%E2%9C%A8-pink" alt="Have Fun" />
  <p style="font-size:12px; opacity:0.8">Made with care ♥</p>
</div>
