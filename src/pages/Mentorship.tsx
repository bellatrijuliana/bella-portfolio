import styles from './Mentorship.module.css'

const ebooks = [
  {
    lang: 'Indonesian',
    title: 'The QA & Career Blueprint (Bahasa Indonesia)',
    platform: 'Lynk.id',
    desc: 'My complete, beginner-friendly guide to Software Quality Assurance. Learn the fundamentals, testing strategies, and how to survive your first QA job without the overwhelm.',
    href: 'https://lynk.id/bellatrijuliana',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  {
    lang: 'English',
    title: 'The QA & Career Blueprint (English Version)',
    platform: 'Gumroad',
    desc: 'The English edition of my QA guide. Packed with real-world scenarios, step-by-step documentation examples, and practical tips to accelerate your tech career.',
    href: 'https://gumroad.com/bellatrijuliana',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
]

{/*
const programs = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    type: '1-on-1',
    title: 'Private Coaching',
    desc: 'Private sessions tailored to your exact needs and goals, whether you are switching careers into QA or mastering a specific testing skill.',
    features: [
      'Sessions via Google Meet / Zoom',
      'Tailored learning materials',
      'CV & portfolio review',
      'Career guidance & roadmap',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    type: 'Group · Synchronous',
    title: 'Weekly Classes',
    desc: 'Learn together in small batches every week. Perfect if you thrive on live interaction, structured learning, and peer support.',
    features: [
      'Weekly live sessions',
      'Small groups for better focus',
      'Live Q&A discussions',
      'Supportive peer community',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <path d="M8 21h8m-4-4v4"/>
      </svg>
    ),
    type: 'Self-Paced · Asynchronous',
    title: 'Self-Paced Course',
    desc: 'Learn at your own pace and time. Highly structured materials you can access anywhere, without the pressure of strict schedules.',
    features: [
      'Lifetime access to materials',
      'Learn on your own schedule',
      'Video + written documentation',
      'Regular material updates',
    ],
  },
]
*/}

const Mentorship = () => {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>

        {/* HEADER */}
        <div className={styles.deco} />
        <span className={styles.tag}>Mentorship & Resources</span>
        <h1 className={styles.title}>
          Learn QA without<br />
          <em>the overwhelm.</em>
        </h1>
        <p className={styles.subtitle}>
          Whether you're switching careers, leveling up your skills, or
          just want someone to walk alongside you. I've been where you
          are, and I know what actually helps.
        </p>

        {/* EBOOKS SECTION (Moved to top) */}
        <div className={styles.ebooksSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Self-Study Resources</p>
            <h2 className={styles.sectionTitle}>Grab the Ebooks</h2>
          </div>
          
          <div className={styles.ebooksGrid}>
            {ebooks.map((e) => (
              <div key={e.platform} className={styles.ebookCard}>
                <div className={styles.ebookHeader}>
                  <div className={styles.ebookIcon}>{e.icon}</div>
                  <span className={styles.ebookLang}>{e.lang}</span>
                </div>
                <h3 className={styles.ebookTitle}>{e.title}</h3>
                <p className={styles.ebookDesc}>{e.desc}</p>
                
                <a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ebookBtn}
                >
                  View Details →
                </a>
              </div>
            ))}
          </div>
        </div>

        <hr className={styles.divider} />

         
        {/* PROGRAMS SECTION */}
         {/* 
        <div className={styles.programsSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Mentorship Programs</p>
            <h2 className={styles.sectionTitle}>Let's learn together</h2>
          </div>

          <div className={styles.programsGrid}>
            {programs.map((p) => (
              <div key={p.title} className={styles.programCard}>
                <div className={styles.programIcon}>{p.icon}</div>
                <div>
                  <p className={styles.programType}>{p.type}</p>
                  <h3 className={styles.programTitle}>{p.title}</h3>
                </div>
                <p className={styles.programDesc}>{p.desc}</p>
                <div className={styles.programFeatures}>
                  {p.features.map((f) => (
                    <div key={f} className={styles.programFeature}>
                      <div className={styles.featureDot} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.programCta}>
                  <span className={styles.promoNote}>
                    🎉 Special pricing available
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHATSAPP CTA */} 
        <div className={styles.whatsappCta}>
          <div className={styles.whatsappCtaText}>
            <h3>Interested? Let's chat.</h3>
            <p>
              Ask about the programs, special pricing, or share your career goals. 
              I'll help you find the best fit for your journey.
            </p>
          </div>
          <a
            href="https://wa.me/6285187880144"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Chat via WhatsApp
          </a>
        </div>
      </div> 
    </main>
  )
}

export default Mentorship