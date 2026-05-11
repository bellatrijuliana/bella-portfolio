import styles from './Services.module.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="12" cy="12" r="10"/>
        <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>
      </svg>
    ),
    title: 'QA Process Optimization',
    desc: 'Auditing your testing workflow end-to-end, identifying where quality slips through the cracks and building processes that catch it earlier, consistently.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
      </svg>
    ),
    title: 'Technical Testing',
    desc: 'End-to-end validation covering API, functional, and integration testing, focused on precision, system stability, and making sure the product behaves the way real users expect.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <line x1="8" y1="6" x2="16" y2="6"/>
        <line x1="8" y1="10" x2="16" y2="10"/>
      </svg>
    ),
    title: 'Education & Documentation',
    desc: 'Translating complex technical concepts into clear, usable documentation, QA knowledge bases, technical writing, and mentoring for teams who want quality to stick.',
  },
]

const methodology = [
  {
    title: 'Beyond surface testing',
    desc: 'Every bug is a symptom of something deeper. I trace issues back to where the process actually breaks, so the same problem does not resurface in the next sprint.',
  },
  {
    title: 'Data-driven quality',
    desc: 'Gut feel is not a strategy. I use metrics, structured analysis, and documented standards to make quality decisions that teams can track, repeat, and improve over time.',
  },
]

const interests = [
  'Software Quality Assurance positions',
  'Technical Writing projects',
  'Test Automation consulting',
  'Documentation strategy',
  'Process improvement initiatives',
]

const Services = () => {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>

        {/* HEADER */}
        <div className={styles.deco} />
        <span className={styles.tag}>Services</span>
        <h1 className={styles.title}>
          Quality isn't an afterthought.<br />
          <em>It's something you design.</em>
        </h1>
        <p className={styles.subtitle}>
  I don't just find bugs, I look at where the process breaks and why.
  Good software quality starts long before the first test is written,
  and I help teams build it in from the beginning.
        </p>

        {/* SERVICES */}
        <p className={styles.sectionLabel}>What I offer</p>
        <div className={styles.servicesList}>
          {services.map((s) => (
            <div key={s.title} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{s.icon}</div>
              <div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* METHODOLOGY */}
        <div className={styles.methodSection}>
          <p className={styles.sectionLabel}>How I think about quality</p>
          <div className={styles.methodGrid}>
            {methodology.map((m) => (
              <div key={m.title} className={styles.methodCard}>
                <div className={styles.methodDeco} />
                <h3 className={styles.methodTitle}>{m.title}</h3>
                <p className={styles.methodDesc}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COLLABORATE */}
        <div className={styles.collaborateBox}>
          <h2 className={styles.collaborateTitle}>Let's Collaborate</h2>
          <p className={styles.collaborateSubtitle}>
            I'm particularly interested in:
          </p>
          <ul className={styles.collaborateList}>
            {interests.map((item) => (
              <li key={item} className={styles.collaborateItem}>
                <div className={styles.collaborateDot} />
                {item}
              </li>
            ))}
          </ul>
        </div>

{/* CONTACT */}
<div className={styles.contactSection}>
  <div className={styles.contactGrid}>

    {/* Form */}
    <div className={styles.contactForm}>
      <p className={styles.sectionLabel}>Send an email</p>
      <form
        action="https://formspree.io/f/mwvweawo"
        method="POST"
        className={styles.form}
      >
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className={styles.formInput}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Subject</label>
          <input
            type="text"
            name="subject"
            required
            placeholder="What's this about?"
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Message</label>
          <textarea
            name="message"
            required
            placeholder="Tell me about your project or opportunity..."
            className={styles.formTextarea}
            rows={4}
          />
        </div>
        <button type="submit" className={styles.formBtn}>
          Send an Email →
        </button>
      </form>
    </div>

    {/* Contact Info */}
<div className={styles.contactInfo}>
  <p className={styles.sectionLabel}>Or reach out directly</p>

  <a
    href="https://wa.me/6285187880144"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactItem}
  >
    <div className={styles.contactIcon}>
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    </div>
    <div>
      <p className={styles.contactLabel}>WhatsApp</p>
      
    </div>
  </a>

  <a
    href="https://linkedin.com/in/bellatrijuliana"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactItem}
  >
    <div className={styles.contactIcon}>
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </div>
    <div>
      <p className={styles.contactLabel}>LinkedIn</p>

    </div>
  </a>

  <a
    href="https://threads.net/@bellialiana"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactItem}
  >
    <div className={styles.contactIcon}>
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.689-2.044 1.kredit48-1.544 2.042-3.981 2.054-7.2v-.058h-5.523v-1.98h7.441v1.038c-.012 3.99-.747 6.987-2.694 9.003-1.708 1.772-4.083 2.659-7.075 2.659l-.092.001z"/>
      </svg>
    </div>
    <div>
      <p className={styles.contactLabel}>Threads</p>
      
    </div>
  </a>

  <div className={styles.responseNote}>
    <p>I typically respond within 24 hours. For urgent matters, WhatsApp is the fastest way to reach me.</p>
  </div>
</div>

  </div>
</div>

      </div>
    </main>
  )
}

export default Services