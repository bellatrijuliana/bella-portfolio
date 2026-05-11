import { Link } from 'react-router-dom'
import { getAllArticles } from '../lib/articles'
import styles from './Home.module.css'
import ArticleCard from '../components/ui/ArticleCard'

const skills = [
  'Empathy-Driven Testing',
  'Zero-Overwhelm QA Mentorship',
  'Precision API & Performance Testing',
  'Technical Writing with Clarity',
  'Strategic Test Documentation',
  'Community-Centric Resources',
  'AI-Driven Quality Assurance',
  'Building Quality as a Culture',
]

const Home = () => {
  const articles = getAllArticles().slice(0, 3)

  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.heroTag}>
            Software QA Engineer · Technical Educator
          </span>
          <h1 className={styles.heroName}>
            Quality isn't just<br />a checklist,<br />
            <span>it's a culture.</span>
          </h1>
          <p className={styles.heroRole}>
            Because code should serve people, not the other way around.
          </p>
          <p className={styles.heroDesc}>
            I help teams ship software they're proud of — and help people
            break into QA without the overwhelm.
          </p>
          <div className={styles.heroCta}>
            <Link to="/services" className={styles.btnPrimary}>
              Let's Connect
            </Link>
            <Link to="/articles" className={styles.btnSecondary}>
              Explore My Thoughts →
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.heroImageFrame} />
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.about}>
        <div>
          <div className={styles.decoLine} />
          <h2 className={styles.aboutTitle}>
            I believe good QA is about<br />
            <em>asking better questions.</em>
          </h2>
          <p className={styles.aboutText}>
            I started as the only QA in a fast-paced startup — a trial by fire
            that taught me to think in systems and communicate with empathy.
          </p>
          <p className={styles.aboutText}>
            Today, I turn those lessons into robust software and accessible
            resources for everyone.
          </p>
          <Link to="/portfolio" className={styles.aboutLink}>
            Browse my Portfolio →
          </Link>
        </div>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill} className={styles.skillTag}>{skill}</div>
          ))}
        </div>
      </section>

{/* ARTICLES PREVIEW */}
<section className={styles.articlesSection}>
  {/* Tambahkan div pembungkus (inner) di sini untuk mengatur lebar */}
  <div className={styles.articlesInner}> 
    <div className={styles.sectionHeader}>
      <div>
        <p className={styles.sectionLabel}>From the blog</p>
        <h2 className={styles.sectionTitle}>
          Things I've been<br />thinking about.
        </h2>
      </div>
      <Link to="/articles" className={styles.viewAll}>
        All articles →
      </Link>
    </div>

    <div className={styles.articlesContainer}>
      {articles.length > 0 && (
        <div className={styles.homeGrid}>
          {/* Artikel 1: Featured di Kiri */}
          <div className={styles.homeFeatured}>
            <ArticleCard article={articles[0]} variant="featured" />
          </div>
          
          {/* Artikel 2, 3, 4: Menumpuk di Kanan (slice 1 sampai 4) */}
          <div className={styles.homeSidebar}>
            {articles.slice(1, 4).map((article) => (
              <ArticleCard key={article.id} article={article} variant="small" />
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
</section>

      {/* CONNECT */}
      <section className={styles.connect} id="connect">
        <div className={styles.connectInner}>
          <div className={styles.connectDeco} />
          <h2 className={styles.connectTitle}>
            Let's build something<br />
            <span>good together.</span>
          </h2>
          <p className={styles.connectDesc}>
            Whether you're looking for a QA collaborator, want to discuss how
            to build a quality culture, or found your way here through my
            Threads — I'm always down for a good chat.
          </p>
          <div className={styles.connectLinks}>
            <a href="mailto:bellatrij@gmail.com" className={styles.connectLinkPrimary}>
              ✉ Send me an email
            </a>
            
<a 
              href="https://lynk.id/bellatrijuliana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.connectLinkSecondary}
            >
              📚 Learn with me (Ebooks)
            </a>
            
<a 
              href="https://threads.net/@bellialiana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.connectLinkSecondary}
            >
              🧵 Threads
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home