---
title: "Melamar Kerja Posisi QA Tanpa Pengalaman (dan Somehow Bisa Lolos?). Jadi gini..."
category: "QA Career"
level: "Beginner"
date: "2026-05-04"
excerpt: "Lulus dari Elektro, nekat ngelamar QA tanpa pengalaman sama sekali dan ternyata lolos. Ini ceritanya."
featured: false
image: "/technical-test.png"
theme: "amber"
description: "Cerita bagaimana aku melamar posisi QA Engineer tanpa pengalaman sama sekali setelah lulus kuliah, dan ternyata berhasil lolos seleksi."
keywords: "melamar kerja QA tanpa pengalaman, cara jadi QA engineer, QA engineer pemula, tips lolos interview QA, belajar QA dari nol"
---
*Estimated read: 6–7 minutes*

---

## Lulus dari Jurusan Elektro, Eh Malah Ngelamar ke Posisi Software QA

Jujur, waktu kuliah dulu, bayanganku soal karier itu ya seputar rangkaian listrik, komponen elektronik, atau paling jauh jadi teknisi atau guru. QA? Bahkan itu nggak masuk di radarku (awalnya).

Tapi namanya juga fresh graduate ya... semangat masih membara banget, terus di sisi lain tabungan makin menipis. Ikhtiarnya adalah nyebar CV ke mana-mana. Prinsipku waktu itu simpel: selama masih nyambung sama dunia teknologi (yang mana ini salah satu minatku), maju aja dulu. Urusan "cocok atau nggak" dipikirin belakangan.

Nah, dari situlah aku nekat ngirim lamaran ke posisi Software Quality Assurance di sebuah startup. Tanpa sertifikasi. Tanpa pengalaman QA sama sekali. Modal satu-satunya? Mental *"pura-pura PD bisa aja dulu, belajarnya bisa sambil jalan."* Tahu kan, kalau orang lagi mepet banget tuh suka tiba-tiba dapet skill extra yang entah dapet darimana? Nah, semacam kayak gitu deh, hahaha.

---

## Interview HR: Terlalu Lancar, Ternyata Ada Jebakannya

Interview sama HR berjalan mulus. Menurutku terlalu mulus, bahkan. Aku merasa awalnya, *"Oh, aku udah banyak belajar nih dari pengalaman interview sebelumnya."*

Tapi di penghujung sesi, si interviewernya bilang kayak gini, beliau bilang dengan santai banget:

> *"Oh iya, ini ada link website sama file JSON. Kami mau lihat gimana caranya kamu bisa eksplor."*

Titik. Nggak dikasih instruksi lebih lanjut. Deadline-nya 2 hari, katanya. Namun itu.. nggak ada petunjuk harus diapain, bilangnya cuma, *"ya coba-coba dulu aja ya. Nanti coba jelaskan kepada kami apa aja temuannya."*

Klik. Lalu, panggilan Skype berakhir.

Dan aku duduk diam depan layar, bengong aja sambil dengerin suara kipas laptop, sambil mikir: *"Ini maksudnya gimana ya?"*

Deg-degan? Iya. Tapi di balik itu ada sesuatu yang aneh(?) semacam rasa penasaran yang pelan-pelan muncul. Kayak dikasih teka-teki yang belum jelas bentuknya, tapi justru itu yang bikin aku nggak bisa langsung nutup laptop.

*"Oke. Kita coba!"*. Selanjutnya, tab browserku penuh sama tutorial cara Software Testing.

---

## File JSON Itu Apa Sih? (Bayangin sebagai Peta Harta Karun)

Sebelum cerita lebih jauh, aku mau jelasin dua "senjata" yang mereka kasih, biar kamu pas bacanya juga nggak ikut-ikutan panik.

**File JSON** itu kalau diumpamakan, bayangin kamu dapat peta dari sebuah gedung besar. Peta itu nggak cuma nunjukin ruangan mana yang ada, tapi juga pintu mana yang bisa dibuka, dan kunci apa yang dibutuhkan.

Nah, dalam konteks software, "gedung" itu adalah sistemnya, "ruangan" itu adalah fitur-fiturnya, dan JSON adalah petanya, yang biasa disebut *API endpoints*. Ini semacam daftar resmi: *"Kamu bisa minta data ini, pakai cara ini, dan hasilnya akan seperti ini."*

Tampilannya kira-kira kayak gini:

```json
{
  "api": {
    "title": "Example API",
    "links": {
      "author": "mailto:api-admin@example.com",
      "describedBy": "[https://example.com/api-docs/](https://example.com/api-docs/)"
    }
  },
  "resources": {
    "tag:me@example.com,2016:widgets": {
      "href": "/widgets/",
      "hints": {
        "allow": ["GET", "PUT", "DELETE", "PATCH"]
      }
    }
  }
}
```

Waktu pertama kali aku buka file-nya yang isinya segudang baris kayak gitu, rasanya kayak dapat peta tapi nggak bisa baca tulisannya gimana atau nggak bisa baca konturnya. *Overwhelming?* Banget. Tapi aku ingat satu hal yang pernah aku pelajari waktu praktikum elektro dulu: kalau rangkaiannya rumit, mulai dari satu titik. Satu titik aja dulu.

Dan prinsip itu yang akhirnya aku pakai di sini.

---

## Strategiku: Bongkar Satu-Satu

Daripada panik lihat semuanya sekaligus, aku putuskan untuk bedah dulu apa yang aku punya:

- 🖥️ **Website** —> Proyek yang masih dalam pengembangan, perlu diuji dari sisi pengguna.
- ⚙️ **File JSON** —> Peta API tadi, yang perlu dicek satu-satu apakah semua "pintu" di petanya beneran bisa dibuka dan berfungsi sesuai harapan atau nggak.

Nah, ini bagian serunya! karena nggak ada instruksi, aku coba buat aturan sendiri:

- **Website** → aku coba cek pakai tiga pendekatan: apakah fiturnya berjalan sesuai fungsi? Apakah nyaman dipakai? Apakah tampilannya normal di berbagai kondisi? (dalam hal ini, maksudnya gimana tampilannya kalau di laptop atau di HP gitu)
- **JSON / API** → aku uji pakai aplikasi bernama **Postman**. Kalau JSON adalah petanya, Postman ini semacam senter yang aku pakai buat masuk ke tiap ruangan dan ngecek apakah lampunya bisa nyala atau nggak.

Selanjutnya, karena aku cuma punya waktu 2 hari, jadi aku bikin jadwal ngerjainnya, simpel aja kayak gini:

| Hari | Fokus |
|------|-------|
| Hari 1 | Bedah website habis-habisan, catat temuan, bikin laporan |
| Hari 2 | Ngecek API satu per satu, catat temuan, bikin laporan |

Waktu itu aku ingat pelajaran dari kuliah dulu, kalau alat ukurnya cuma satu, ya ukur satu-satu. Nggak perlu dilakuin semuanya sekaligus. Kita coba pelan, tapi sistematis.

---

## Dua Hari yang Kacau

Realitanya, aku nggak mau ngasih *false hope* deh, karena nyatanya dua hari itu memang berat buatku.

Tab browser-ku penuh dipake searching berbagai artikel. Tab YouTube juga penuh dipake searching gimana caranya pakai Postman. Catatanku? Penuh coretan yang setengahnya aku sendiri nggak yakin artinya apa.

Tapi aku coba terus jalan aja. 

Untuk **website**, setiap kali nemu sesuatu yang aneh, kayak tombol yang nggak bereaksi, tampilan yang berantakan, link yang ke mana-mana, pokoknya semuanya aku catat dengan detail. Bukan cuma laporan *"ini rusak,"* tapi aku tulis juga: di mana rusaknya, gimana cara nemuin kerusakannya, dan seberapa parah dampaknya ke pengguna. Mirip kayak nulis laporan praktikum elektronika, nggak cukup bilang "ada arus yang konslet," tapi harus jelas disebutkan di titik mana dan kenapa.

Untuk **API**, aku pelajari dulu peta JSON-nya sebelum mulai masuk ke tiap "ruangan." Pintu mana yang ada? Bisa diketuk pakai cara apa? Kalau diketuk, seharusnya dapat respons apa? Baru setelah itu aku mulai ngirim *request* satu per satu dan catat hasilnya.

Hasilnya memang nggak sempurna. Tapi seengganya, aku selesaikan. Yang penting selesai aja dulu.

---

## Dua Hari Kemudian: Kirim, lalu Lupakan

Laporan selesai. Aku baca ulang berkali-kali. Rapiin formatnya. Pastikan semuanya masuk akal, ya seengganya buat aku sendiri.

Lalu aku klik *send.*

Setelah itu? Nggak bisa ngapa-ngapain selain nunggu. Perasaannya kayak habis ujian, udah dikerjain semaksimal mungkin, sekarang tinggal tunggu nilai keluar. *Datang, kerjakan, lupakan.*

Beberapa hari kemudian, balasannya datang. Aku diundang ke tahap berikutnya. Dan akhirnya, tawaran kerja itu datang juga.

---

## Hal yang Aku Sadari Sejak Saat Itu

Kalau dipikir-pikir ulang, ada empat hal yang beneran membekas di benakku sampai sekarang:

**1. Mulai dulu, sempurna belakangan**
Nggak ada yang siap 100% sebelum terjun langsung, ya kan? Yang penting: mulai. Sisanya dipelajari di jalan.

**2. Kalau nggak dikasih peta, buat sendiri**
Instruksi minim bukanlah suatu hambatan, apalagi di sesi technical test. Itu justru semacam ujian: seberapa jauh kita bisa berpikir mandiri? Di dunia kerja nyata, kemampuan itu nilainya mahal.

**3. Fokus ke proses, bukan hasil**
Hasil tentu bukan sesuatu yang bisa kita kontrol. Tapi kualitas usaha hari ini? Itu sepenuhnya ada di tangan kita.

**4. Yang nggak dicatat, dianggap nggak pernah ada**
Ini hukum wajib bagi QA dan menurutku berlaku di mana-mana. Bug yang nggak didokumentasikan dengan baik sama saja berarti nggak pernah ditemukan. Kerja keras yang nggak tercatat, bisa mudah dilupakan begitu aja.

---

## Buat Kamu yang Lagi di Posisi yang Sama

Mungkin kamu juga fresh graduate dengan latar belakang yang *"nggak nyambung langsung."* Mungkin kamu juga ada niat buat switch career, nyari peluang baru, terus lagi ngeliatin job posting tentang QA sambil mikir, *"Apa coba apply dulu ya?"* atau *"Ah tapi emangnya aku bisa ya?"*

Aku mau insert kata-kata ciamik dari Kak Sivia di Podcast The Catch Up Club:

> *"Ah, tapi... Ah, tapi... Ah, bagaimana mau SAKSES kalau terlalu banyak Ah Tapi??"*

*(yes, I'm the Catchers btw! hehehe)*

Jadi intinya apa? Betul, coba aja dulu.
Why not, kan?

Jadi QA bukan soal tahu segalanya dari awal. Jadi QA adalah soal jadi orang yang nggak langsung menyerah waktu ketemu sesuatu yang asing, dan punya niat buat mulai mencari tahu.

Itu *skill* yang bisa dilatih. Dan kamu mungkin sudah punya benih-benihnya tanpa sadar. 

---

Nanti aku sambung lagi artikel ini tentang apa aja yang aku tulis di hasil laporan technical test QA saat itu ya! (lagi nyari file nya dulu, hehehe). Sampai jumpa lagi!