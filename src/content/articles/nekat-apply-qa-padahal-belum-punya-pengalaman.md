---
title: "Nekat Apply Loker QA Tanpa Pengalaman (Ini caraku survive Technical Test)"
category: "Career"
level : "Beginner"
date: "2026-03-25"
excerpt: "Tidak punya latar belakang spesifik QA sebelumnya, tapi nekat apply loker. Saat interview user, dikasih proyek website dan file JSON tanpa instruksi lebih lanjut. Ini yang terjadi."
featured: false
image: "/images/articles/jmeter.jpg"
---

*Estimasi baca: 5–6 menit*

---
### Baru lulus kuliah, terus selanjutnya apa? 
Saat itu, aku coba untuk apply ke berbagai posisi lowongan pekerjaan. Nyiapin berbagai macam file CV, yang penting coba dulu aja, aku pikir. Hal yang aku butuhkan saat itu adalah latihan interview. Jadi, posisi apapun, selagi itu masih ada di spektrum minatku, aku apply saja. Hingga, aku apply loker QA, padahal saat itu aku tidak punya latar belakang QA.

Tidak punya sertifikasi berkaitan. Tidak ada pengalaman formal yang spesifik. Namun, sebenarnya yang berkaitan dengan pengembangan perangkat lunak itu, aku sudah cukup familiar. Namun, untuk kali itu, yang ada cuma keberanian, atau mungkin lebih tepatnya, modal nekat untuk apply ke posisi Software QA di sebuah startup.

Saat itu, aku merasa Interview HR berjalan lancar. Bahkan terasa terlalu lancar (barangkali karena sebelumnya aku sudah pernah melewati beberapa kali sesi interview di posisi lain), tapi ternyata...

Di akhir sesi, salah satu user berkata santai: *"Oh iya, ini ada satu link website dan satu file JSON. Kami ingin tahu pandangan kamu tentang ini."*

Tidak ada instruksi lebih lanjut. Tidak ada deadline yang disebutkan. Sama sekali tidak diberi penjelasan lebih detail, bilangnya sih '\silakan dieksplor saja'. Panggilan Skype terputus, dan aku berlanjut menatap layar.

*"Okey. Game-nya baru dimulai nih."*

---

## Apa Itu File JSON dan Kenapa Itu Menakutkan

Buat yang belum familiar: file JSON itu kurang lebih seperti ini

```json
{
  "api": {
    "title": "Example API",
    "links": {
      "author": "mailto:api-admin@example.com",
      "describedBy": "https://example.com/api-docs/"
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

Ini adalah kumpulan endpoint API, semacam "peta" dari backend sebuah aplikasi yang menunjukkan apa saja yang bisa dilakukan sistem, dan bagaimana cara mengaksesnya.

Waktu itu, aku baru pertama kali melihat isi file sepanjang dan sebanyak itu dengan format seperti ini secara langsung. Panik? Banget. Pusing? Jangan ditanya.

Tapi aku sadar satu hal: panik tidak akan menyelesaikan apapun. Yang bisa aku lakukan adalah mulai.

---

## Strategi: Bagi Jadi Dua, Kerjakan Satu per Satu

Setelah ngumpulin nyawa, aku mencoba untuk membedah "harta karun" yang diberikan:

- **Link website** → ternyata ini adalah proyek setengah jadi yang perlu diuji
- **File JSON** → dan ini adalah kumpulan endpoint API yang perlu divalidasi

Karena tidak ada instruksi, maka aku buat strateginya sendiri:

- 🖥️ **Website**: Kulik dengan functionality testing, usability testing, dan compatibility testing
- ⚙️ **JSON**: Test API-nya pakai Postman

Lalu aku buat jadwal sederhana:

> **Hari 1**: Fokus total bedah website-nya  
> **Hari 2**: Fokus total kulik API-nya

Dicicil seperti ini, beban kerasa lebih ringan dan kerjaan jadi lebih fokus. Ini pelajaran pertama yang aku dapat dari pengalaman ini — *deadline mepet bukan alasan untuk chaos, justru saat itulah manajemen waktu jadi paling penting.*

---

## Proses yang Sama Sekali Tidak Mulus

Jujur saja: prosesnya berantakan.

Aku cukup jungkir balik cari referensi di Google dan YouTube. Banyak istilah yang baru pertama kali aku praktikkan secara mendalam, yang pada akhirnya bukan sekadar baca teori, tapi aku coba langsung apply ke kasus nyata tanpa safety net.

Beberapa hal yang aku lakukan:

**Untuk website testing**, aku dokumentasikan setiap temuan secara sistematis — mulai dari broken link, inkonsistensi UI, hingga behavior yang tidak sesuai ekspektasi user. Aku tidak tahu apakah standar dokumentasiku sesuai dengan yang perusahaan biasa pakai, tapi aku pastikan setiap bug yang aku temukan bisa dijelaskan dengan jelas: *apa yang terjadi, di mana terjadinya, langkah reproduksi, dan dampaknya.*

**Untuk API testing**, aku pelajari struktur JSON-nya dulu sebelum mulai test. Endpoint mana saja yang tersedia, HTTP method apa yang didukung, response apa yang diharapkan. Baru setelah itu aku mulai kirim request satu per satu di Postman dan catat hasilnya.

Tidak sempurna. Tapi yang penting selesai dulu saja.

---

## Dua Hari Kemudian

Singkat cerita, 2 hari kemudian laporanku selesai.

Gatau bener atau salah. Gatau sesuai standar perusahaannya atau tidak.

Yang penting: aku kirim dokumen laporan pengujian yang paling rapi dan detail yang aku bisa buat waktu itu. Setelah email terkirim, sisanya pasrah dan berdoa. 🙏

Beberapa waktu kemudian, email balasan masuk. Aku diundang ke kantor untuk tahap selanjutnya — yang berujung pada *offering*.

Alhamdulillah.

---

## Apa yang Aku Pelajari dari Pengalaman Ini

Dari pengalaman ini, setidaknya ada empat hal yang aku bawa sampai sekarang:

### 1. Nekat > Diam
Keberanian untuk apply, meskipun belum merasa siap adalah pintu pertama. Kalau menunggu "siap", mungkin tidak akan pernah ada yang dimulai. Banyak orang yang lebih kompeten tidak dapat kesempatan ini hanya karena tidak mencoba.

### 2. Inisiatif > Instruksi
Saat mendapat instruksi yang minim, inisiatif kita jadi penentu. Tidak ada yang akan pegang tangan kita dan jelaskan langkah per langkah — terutama di dunia kerja nyata. Kemampuan untuk *membaca situasi dan membuat keputusan sendiri* adalah skill yang sangat dihargai.

### 3. Proses > Hasil
Fokuslah pada mengerjakan sebaik dan semaksimal yang bisa dilakukan hari ini. Hasil di luar kendali kita — tapi kualitas proses ada di tangan kita. Laporan yang rapi dan detail akan selalu bicara lebih keras dari laporan yang asal-asalan.

### 4. Dokumentasi adalah Segalanya
Ini mungkin pelajaran paling relevan untuk QA: hasil kerja kita harus bisa "berbicara" lewat laporan. Bug yang ditemukan tapi tidak terdokumentasi dengan baik sama saja seperti tidak ditemukan. Cara kamu mendokumentasikan temuan mencerminkan cara kamu berpikir sebagai QA.

---

## Untuk Kamu yang Sedang di Posisi yang Sama

Kalau sekarang kamu sedang mempertimbangkan untuk apply ke posisi QA tanpa pengalaman formal atau sedang di tengah proses rekrutmen yang terasa overwhelm, ini yang ingin aku sampaikan:

**Kamu tidak harus tahu segalanya sebelum mulai.**

QA bukan tentang menjadi orang yang tidak pernah merasa bingung. QA adalah tentang menjadi orang yang tahu *bagaimana cara berpikir ketika dihadapkan dengan sesuatu yang tidak familiar*.

Dan itu bisa dipelajari.

---

*Ini adalah episode pertama dari seri **#BelceritaTentangQA**, tempat aku berbagi perjalanan nyata di dunia Quality Assurance*.

*Ada istilah dari tulisan ini yang belum familiar? Drop pertanyaanmu di kolom komentar yuk, kita bahas satu persatu.*
