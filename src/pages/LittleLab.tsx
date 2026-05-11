import { useState } from 'react'
import styles from './LittleLab.module.css'

interface SkillDetail {
  emoji: string
  color: string
  title: string
  shortDesc: string
  definition: string
  dailyLife: string[]
  futureImpact: string[]
}

const thinkingSkills: SkillDetail[] = [
  {
    emoji: '🔁',
    color: 'mint',
    title: 'Computational Thinking',
    shortDesc: 'Belajar memecah masalah besar jadi langkah-langkah kecil yang bisa diselesaikan satu per satu.',
    definition:
      'Computational thinking adalah cara berpikir yang membantu kita menyelesaikan masalah secara sistematis — memecah sesuatu yang rumit menjadi bagian-bagian kecil, mencari pola, dan merancang langkah-langkah penyelesaian yang jelas. Ini bukan soal komputer, tapi soal cara otak bekerja secara terstruktur.',
    dailyLife: [
      'Menyusun urutan langkah mencuci tangan dengan benar',
      'Memilah mainan berdasarkan warna, ukuran, atau bentuk',
      'Merencanakan rute dari kamar ke dapur untuk ambil minum',
      'Menyelesaikan puzzle dengan mencari bagian tepi terlebih dahulu',
    ],
    futureImpact: [
      'Terbiasa menyelesaikan masalah kompleks secara terstruktur',
      'Lebih mudah belajar pemrograman, matematika, dan sains',
      'Mampu membuat keputusan yang logis dan bertahap',
      'Dasar kuat untuk karir di bidang teknologi, engineering, dan riset',
    ],
  },
  {
    emoji: '💡',
    color: 'yellow',
    title: 'Creative Thinking',
    shortDesc: 'Melatih anak berani punya ide sendiri, berpikir di luar kotak, dan mengekspresikan diri.',
    definition:
      'Creative thinking adalah kemampuan menghasilkan ide-ide baru, melihat sesuatu dari sudut pandang yang berbeda, dan menemukan solusi yang tidak biasa. Bukan hanya soal seni — kreativitas hadir dalam sains, teknologi, bisnis, bahkan cara kita berkomunikasi sehari-hari.',
    dailyLife: [
      'Membuat cerita sendiri dari gambar yang dilihat',
      'Menemukan cara baru bermain dengan mainan yang sama',
      'Menggambar sesuatu yang ada di imajinasinya, bukan menjiplak',
      'Mencari solusi alternatif saat cara pertama tidak berhasil',
    ],
    futureImpact: [
      'Tidak mudah menyerah saat menghadapi kebuntuan',
      'Mampu berinovasi dan menciptakan sesuatu yang baru',
      'Lebih adaptif dalam menghadapi perubahan dan tantangan',
      'Menjadi individu yang punya suara dan perspektif unik',
    ],
  },
  {
    emoji: '🔍',
    color: 'sky',
    title: 'Critical Thinking',
    shortDesc: 'Mengajak anak bertanya "kenapa?" dan mengevaluasi informasi sebelum percaya begitu saja.',
    definition:
      'Critical thinking adalah kemampuan berpikir jernih dan rasional — mempertanyakan asumsi, mengevaluasi bukti, dan membuat kesimpulan berdasarkan logika bukan sekadar ikut-ikutan. Di era banjir informasi seperti sekarang, ini adalah skill yang sangat krusial.',
    dailyLife: [
      'Bertanya "kenapa?" ketika diberi aturan atau penjelasan',
      'Membandingkan dua pilihan sebelum memutuskan mana yang lebih baik',
      'Tidak langsung percaya cerita teman tanpa bertanya lebih lanjut',
      'Mengamati sebab-akibat dari tindakannya sendiri',
    ],
    futureImpact: [
      'Tidak mudah terpengaruh hoaks atau informasi yang menyesatkan',
      'Mampu membuat keputusan yang bijak berdasarkan data dan fakta',
      'Menjadi pendengar dan pembaca yang aktif dan kritis',
      'Dasar penting untuk bidang hukum, jurnalisme, riset, dan kepemimpinan',
    ],
  },
  {
    emoji: '🕸️',
    color: 'rose',
    title: 'Systems Thinking',
    shortDesc: 'Memahami bahwa segala sesuatu saling terhubung — tindakan kecil bisa punya dampak besar.',
    definition:
      'Systems thinking adalah kemampuan melihat gambaran besar — memahami bahwa setiap elemen dalam suatu sistem saling mempengaruhi satu sama lain. Bukan hanya fokus pada satu bagian, tapi memahami bagaimana keseluruhan bekerja bersama.',
    dailyLife: [
      'Memahami bahwa menyiram tanaman → tanaman tumbuh → ada buah → bisa dimakan',
      'Menyadari bahwa membuang sampah sembarangan berdampak pada lingkungan',
      'Melihat bagaimana satu anggota keluarga yang sakit mempengaruhi seluruh keluarga',
      'Memahami rantai sebab-akibat dalam cerita atau permainan peran',
    ],
    futureImpact: [
      'Mampu merancang solusi yang tidak menimbulkan masalah baru',
      'Berpikir jangka panjang, bukan hanya keuntungan sesaat',
      'Penting untuk bidang manajemen, kebijakan publik, dan lingkungan hidup',
      'Menjadi pemimpin yang mempertimbangkan dampak keputusan secara menyeluruh',
    ],
  },
]

const worksheets = [
  {
    color: 'mint',
    age: 'PAUD · Usia 4–6 tahun',
    title: 'Worksheet Vol. 1',
    desc: 'Pengenalan pola, urutan, dan pemecahan masalah sederhana melalui gambar dan aktivitas bermain.',
  },
  {
    color: 'yellow',
    age: 'PAUD · Usia 4–6 tahun',
    title: 'Worksheet Vol. 2',
    desc: 'Eksplorasi kreativitas dan ekspresi diri lewat aktivitas menggambar, mewarnai, dan bercerita.',
  },
  {
    color: 'sky',
    age: 'PAUD · Usia 4–6 tahun',
    title: 'Worksheet Vol. 3',
    desc: 'Latihan berpikir kritis melalui teka-teki sederhana, pertanyaan terbuka, dan eksplorasi lingkungan.',
  },
]

const LittleLab = () => {
  const [activeSkill, setActiveSkill] = useState<SkillDetail | null>(null)

  return (
    <main className={styles.page}>
      <div className={styles.inner}>

        {/* HEADER */}
        <div className={styles.deco} />
        <span className={styles.tag}>Little Lab</span>
        <p className={styles.label}>For the curious little minds</p>
        <h1 className={styles.title}>
          Big ideas,<br />
          <em>tiny hands.</em>
        </h1>
        <p className={styles.description}>
          Tempat di mana belajar terasa seperti bermain.. dan bermain terasa seperti{' '}
          <strong>mempersiapkan masa depan</strong>. Worksheet dan panduan gratis untuk
          anak-anak usia dini, dirancang untuk menumbuhkan cara berpikir yang akan
          menemani mereka seumur hidup.
        </p>

        {/* WHY I BELIEVE THIS */}
        <div className={styles.whySection}>
          <div className={styles.whyCard}>
            <p className={styles.whyEyebrow}>Mengapa saya membuat ini?</p>
            <h2 className={styles.whyTitle}>
              Cara berpikir yang baik adalah fondasi dari segalanya.
            </h2>
            <div className={styles.whyBody}>
              <p>
                Melewati berbagai fase: belajar, bekerja, dan terus bertumbuh, saya menyadari
                satu hal yang selalu konsisten:{' '}
                <strong>bukan apa yang kamu tahu yang menentukan seberapa jauh kamu bisa
                melangkah, tapi bagaimana cara kamu berpikir ketika menghadapi sesuatu yang
                belum pernah kamu temui sebelumnya.</strong>
              </p>
              <p>
                Pengetahuan bisa dipelajari kapan saja. Tapi kebiasaan berpikir, cara otak
                mendekati masalah, mempertanyakan asumsi, melihat gambaran besar, dan menemukan
                solusi kreatif, itu dibangun jauh lebih awal, seringkali tanpa kita sadari.
              </p>
              <p>
                Itulah mengapa saya percaya bahwa mengenalkan cara berpikir yang baik kepada
                anak-anak bukan sekadar investasi pendidikan.{' '}
                <strong>Ini adalah hadiah jangka panjang yang akan menemani mereka melewati
                tantangan yang bahkan belum bisa kita bayangkan hari ini.</strong>{' '}
                Bukan dengan cara yang kaku atau terasa seperti belajar, tapi lewat bermain,
                eksplorasi, dan rasa ingin tahu yang dijaga tetap menyala.
              </p>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* THINKING SKILLS */}
        <div className={styles.skillsSection}>
          <p className={styles.sectionLabel}>Apa yang akan dipelajari</p>
          <h2 className={styles.sectionTitle}>4 Cara Berpikir untuk Masa Depan</h2>
          <p className={styles.sectionDesc}>
            Klik setiap kartu untuk melihat penjelasan lengkap — apa artinya, bagaimana bentuknya
            dalam keseharian anak, dan dampaknya di masa depan.
          </p>
          <div className={styles.skillsGrid}>
            {thinkingSkills.map((skill) => (
              <button
                key={skill.title}
                className={`${styles.skillCard} ${styles[skill.color]}`}
                onClick={() => setActiveSkill(skill)}
              >
                <span className={styles.skillEmoji}>{skill.emoji}</span>
                <h3 className={styles.skillTitle}>{skill.title}</h3>
                <p className={styles.skillDesc}>{skill.shortDesc}</p>
                <span className={styles.skillCta}>Pelajari lebih lanjut →</span>
              </button>
            ))}
          </div>
        </div>

        <hr className={styles.divider} />

        {/* WORKSHEETS */}
        <div className={styles.worksheetSection}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabel}>Free Resources</p>
              <h2 className={styles.sectionTitle}>Worksheet & Buku Panduan</h2>
              <p className={styles.sectionDesc}>
                Semua worksheet tersedia <strong>gratis</strong> beserta buku panduan untuk orang tua
                dan guru. Dirancang untuk anak usia PAUD dengan pendekatan bermain sambil berpikir.
              </p>
            </div>
            <span className={styles.freeBadge}>100% Gratis</span>
          </div>

          <div className={styles.worksheetGrid}>
            {worksheets.map((ws) => (
              <div key={ws.title} className={`${styles.worksheetCard} ${styles[ws.color]}`}>
                <div className={styles.worksheetThumb}>
                  <span className={styles.worksheetIcon}>📄</span>
                </div>
                <div className={styles.worksheetBody}>
                  <p className={styles.worksheetAge}>{ws.age}</p>
                  <h3 className={styles.worksheetTitle}>{ws.title}</h3>
                  <p className={styles.worksheetDesc}>{ws.desc}</p>
                  <div className={styles.comingSoonBadge}>✨ Coming Soon</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.notifyBox}>
            <div>
              <p className={styles.notifyTitle}>Mau tahu duluan saat worksheet siap?</p>
              <p className={styles.notifyDesc}>
                Hubungi saya via WhatsApp atau email, saya akan kabari kamu langsung saat worksheet pertama siap diunduh.
              </p>
            </div>
            <div className={styles.notifyActions}>
              <a href="https://wa.me/6285187880144" target="_blank" rel="noopener noreferrer" className={styles.btnWhatsapp}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a href="mailto:bellatrij@gmail.com" className={styles.btnEmail}>
                ✉️ Email
              </a>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* CONSULTATION */}
        <div className={styles.consultSection}>
          <p className={styles.sectionLabel}>Ada pertanyaan?</p>
          <h2 className={styles.sectionTitle}>Konsultasi Langsung</h2>
          <p className={styles.sectionDesc}>
            Orang tua atau guru yang ingin tahu lebih lanjut tentang pendekatan pembelajaran ini,
            atau butuh saran aktivitas yang sesuai untuk anak, jangan ragu untuk menghubungi saya.
          </p>
          <div className={styles.consultGrid}>
            <a href="https://wa.me/6285187880144" target="_blank" rel="noopener noreferrer" className={styles.consultCard}>
              <div className={`${styles.consultIcon} ${styles.mint}`}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h3 className={styles.consultTitle}>Chat via WhatsApp</h3>
                <p className={styles.consultDesc}>Respon cepat, cocok untuk pertanyaan singkat atau diskusi santai.</p>
              </div>
              <span className={styles.consultArrow}>→</span>
            </a>
            <a href="mailto:bellatrij@gmail.com" className={styles.consultCard}>
              <div className={`${styles.consultIcon} ${styles.yellow}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <h3 className={styles.consultTitle}>Kirim Email</h3>
                <p className={styles.consultDesc}>Untuk pertanyaan yang lebih detail atau kolaborasi jangka panjang.</p>
              </div>
              <span className={styles.consultArrow}>→</span>
            </a>
          </div>
        </div>

      </div>

      {/* SKILL MODAL */}
      {activeSkill && (
        <div className={styles.modalOverlay} onClick={() => setActiveSkill(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setActiveSkill(null)}>✕</button>

            <div className={`${styles.modalHeader} ${styles[activeSkill.color]}`}>
              <span className={styles.modalEmoji}>{activeSkill.emoji}</span>
              <h2 className={styles.modalTitle}>{activeSkill.title}</h2>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalSection}>
                <p className={styles.modalSectionLabel}>Apa itu?</p>
                <p className={styles.modalText}>{activeSkill.definition}</p>
              </div>

              <div className={styles.modalSection}>
                <p className={styles.modalSectionLabel}>Seperti apa dalam keseharian anak?</p>
                <ul className={styles.modalList}>
                  {activeSkill.dailyLife.map((item) => (
                    <li key={item} className={styles.modalListItem}>
                      <span className={styles.modalDot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <p className={styles.modalSectionLabel}>Dampak di masa depan</p>
                <ul className={styles.modalList}>
                  {activeSkill.futureImpact.map((item) => (
                    <li key={item} className={styles.modalListItem}>
                      <span className={styles.modalDot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}

export default LittleLab