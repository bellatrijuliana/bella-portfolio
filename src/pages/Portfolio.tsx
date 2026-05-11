import styles from './Portfolio.module.css'

const experience = {
  title: 'Quality Assurance Specialist',
  company: 'PT. Satu Nol Tujuh',
  period: 'Nov 2023 – Present',
  location: 'Bandung, Indonesia · Remote',
  type: 'Full-time',
  achievements: [
    'Led QA initiatives across enterprise-level systems covering UI/UX, frontend, and backend layers.',
    'Delivered full-spectrum technical documentation — from internal test cases to public-facing user guides in two languages.',
    'Proactively identified process improvement opportunities that enhanced overall product quality.',
  ],
  tags: ['Manual Testing', 'Performance Testing', 'API Testing', 'Automated Testing', 'User Acceptance Testing', 'Technical Documentation', 'Agile'],
}

const projects = [
  {
    id: '1',
    type: 'Quality Assurance',
    title: 'End-to-End Testing for Ad Distribution Platform',
    desc: 'Dynamic testing strategy for a Japanese ad-tech client, handling frequent spec changes through adaptive regression suites.',
    tags: ['Exploratory Testing', 'Regression Testing', 'API Testing'],
    link: '#',
  },
  {
    id: '2',
    type: 'Technical Writing',
    title: 'Full-Spectrum Documentation for Multiple Platforms',
    desc: 'API references, user guides, and multilingual documentation using a GenAI-assisted workflow.',
    tags: ['API Docs', 'User Guides', 'GenAI Prompting', 'Notion'],
    link: '#',
  },
  {
    id: '3',
    type: 'Quality Assurance',
    title: 'Multi-Faceted QA for a FinTech Ed-Tech Platform',
    desc: 'Comprehensive QA for a trading education app covering functional, automation, and performance testing.',
    tags: ['Performance Testing', 'Manual Testing', 'Test Case Development'],
    link: '#',
  },
  {
    id: '4',
    type: 'Quality Assurance',
    title: 'Data Integrity Testing for School Management System',
    desc: 'Resolved data inconsistencies between admin and client portals across a multi-module system.',
    tags: ['Data Integrity', 'Manual Testing', 'Regression Testing'],
    link: '#',
  },
]

const skills = [
  {
    group: 'QA & Testing',
    items: ['Manual Testing', 'API Testing', 'Performance Testing', 'Automation Testing', 'Exploratory Testing'],
  },
  {
    group: 'Testing Tools',
    items: ['Postman', 'JMeter', 'Selenium', 'Cypress', 'TestRail', 'JIRA'],
  },
  {
    group: 'Technical Writing',
    items: ['API Documentation', 'User Guides', 'Test Plans', 'Process Docs', 'Knowledge Base'],
  },
  {
    group: 'Documentation Tools',
    items: ['Notion', 'Confluence', 'GitBook', 'Markdown', 'Figma', 'Google Workspace'],
  },
]

const certifications = [
  { name: 'Microsoft Certified: Azure AI Fundamentals', issuer: 'Microsoft', year: '2022', link: '#' },
  { name: 'Microsoft Certified: Dynamics 365 Fundamentals', issuer: 'Microsoft', year: '2022', link: '#' },
  { name: 'Microsoft Certified: Azure Data Fundamentals', issuer: 'Microsoft', year: '2022', link: '#' },
  { name: 'Microsoft Certified: Power Platform Fundamentals', issuer: 'Microsoft', year: '2022', link: '#' },
  { name: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services', year: '2022', link: '#' },
  { name: 'Cisco CyberOps Associate', issuer: 'Cisco', year: '2022', link: '#' },
]

const Portfolio = () => {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>

{/* HEADER */}
<div className={styles.header}>
          <div className={styles.deco} />
        <span className={styles.tag}>Selected Work</span>

  {/* Profile row */}
  <div className={styles.profileRow}>
    <div className={styles.profileInfo}>
      <span className={styles.profileName}>Bella Tri Juliana</span>
      <span className={styles.profileRole}>
        QA Specialist & Technical Writer · Bandung, Indonesia
      </span>
    </div>
    
    <a
      href="https://www.linkedin.com/in/bellatrijuliana"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkedinBadge}
    >
      <svg className={styles.linkedinLogo} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      View on LinkedIn
    </a>
  </div>

<h1 className={styles.title}>
  3+ years building<br />quality into software.
</h1>
<p className={styles.subtitle}>
  Started with an engineering degree, grew into QA through years of 
  real-world pressure, and now expanding into process design and quality 
  systems through graduate school. I bring more than testing. I bring a way of thinking about quality.
</p>
</div>

        {/* EXPERIENCE */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Experience</p>
          <div className={styles.expCard}>
            <div className={styles.expHeader}>
              <h2 className={styles.expTitle}>{experience.title}</h2>
              <span className={styles.expBadge}>{experience.type}</span>
            </div>
            <p className={styles.expCompany}>{experience.company}</p>
            <p className={styles.expMeta}>{experience.period} · {experience.location}</p>
            <div className={styles.expAchievements}>
              {experience.achievements.map((a, i) => (
                <div key={i} className={styles.expAchievement}>
                  <div className={styles.expDot} />
                  <span>{a}</span>
                </div>
              ))}
            </div>
            <div className={styles.expTags}>
              {experience.tags.map((tag) => (
                <span key={tag} className={styles.expTag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Featured Projects</p>
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <a key={p.id} href={p.link} className={styles.projectCard}>
                <p className={styles.projectType}>{p.type}</p>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.projectDesc}>{p.desc}</p>
                <div className={styles.projectTags}>
                  {p.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Skills & Tools</p>
          <div className={styles.skillsGrid}>
            {skills.map((s) => (
              <div key={s.group} className={styles.skillGroup}>
                <p className={styles.skillGroupTitle}>{s.group}</p>
                <div className={styles.skillList}>
                  {s.items.map((item) => (
                    <span key={item} className={styles.skillItem}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Certifications</p>
          <div className={styles.certGrid}>
            {certifications.map((cert) => (
              <a key={cert.name} href={cert.link} className={styles.certCard}>
                <p className={styles.certName}>{cert.name}</p>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <p className={styles.certYear}>{cert.year}</p>
              </a>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}

export default Portfolio