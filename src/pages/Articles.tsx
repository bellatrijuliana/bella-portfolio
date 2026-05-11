import { useState, useMemo } from 'react'
import { getAllArticles } from '../lib/articles'
import ArticleCard from '../components/ui/ArticleCard'
import styles from './Article.module.css'

const Articles = () => {
  const allArticles = getAllArticles()
  
  // State untuk Filter & Pagination
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [visibleCount, setVisibleCount] = useState(7)

  // Data Unik untuk Dropdown
  const categories = ['All', ...new Set(allArticles.map(a => a.category))]
  const years = ['All', ...new Set(allArticles.map(a => new Date(a.date).getFullYear().toString()))]
  const levels = ['All', 'Beginner', 'Mid-Level', 'Advanced', 'General']

  // Logic Filtering & Sorting (FIXED: matchLevel included)
  const filteredArticles = useMemo(() => {
    return allArticles
      .filter(article => {
        const matchCategory = selectedCategory === 'All' || article.category === selectedCategory
        const matchYear = selectedYear === 'All' || new Date(article.date).getFullYear().toString() === selectedYear
        // Saring berdasarkan Level dari Pills
        const matchLevel = selectedLevel === 'All' || article.level === selectedLevel
        
        return matchCategory && matchYear && matchLevel
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [allArticles, selectedCategory, selectedYear, selectedLevel]) // Dependency array lengkap

  const currentArticles = filteredArticles.slice(0, visibleCount)
  const hasMore = visibleCount < filteredArticles.length

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        
        {/* --- HEADER SECTION --- */}
      <div className={styles.deco} />
        <span className={styles.tag}>Articles</span>
        
        <p className={styles.label}>From the blog</p>
        <h1 className={styles.title}>
          Things I've been<br />thinking about.
        </h1>

        <p className={styles.description}>
          Explore a collection of articles focused on <strong>Quality Assurance learning</strong>, 
          industry <strong>insights</strong>, and real-world experiences to help you grow 
          your career.
        </p>

        {/* --- JOURNEY PILLS (LEVEL FILTER) --- */}
        <div className={styles.journeySection}>
          <p className={styles.journeyLabel}>CHOOSE YOUR JOURNEY:</p>
          <div className={styles.pillContainer}>
            {levels.map((lvl) => {
              // Hitung jumlah artikel per level untuk UX yang lebih baik
              const count = allArticles.filter(a => lvl === 'All' ? true : a.level === lvl).length;
              return (
                <button
                  key={lvl}
                  onClick={() => { setSelectedLevel(lvl); setVisibleCount(7); }}
                  className={`${styles.pill} ${selectedLevel === lvl ? styles.activePill : ''}`}
                >
                  {lvl} <span className={styles.pillCount}>({count})</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* --- TOOLBAR (CATEGORY & YEAR) --- */}
        <div className={styles.toolbar}>
          <div className={styles.filterGroup}>
            <label>CATEGORY:</label>
            <select value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value); setVisibleCount(7); }}>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>YEAR:</label>
            <select value={selectedYear} onChange={(e) => { setSelectedYear(e.target.value); setVisibleCount(7); }}>
              {years.map(yr => <option key={yr} value={yr}>{yr}</option>)}
            </select>
          </div>
        </div>

        {/* --- ARTICLE GRID --- */}
        <div className={styles.articleGrid}>
          {currentArticles.length > 0 ? (
            currentArticles.map((article, index) => (
              <div 
                key={article.id} 
                className={index === 0 ? styles.featuredItem : styles.regularItem}
              >
                <ArticleCard 
                  article={article} 
                  variant={index === 0 ? "featured" : "small"} 
                />
              </div>
            ))
          ) : (
            <div className={styles.noResult}>
              <h3>No articles found.</h3>
              <p>Try adjusting your journey level or filters.</p>
            </div>
          )}
        </div>

        {/* --- PAGINATION --- */}
        {hasMore && (
          <div className={styles.pagination}>
            <button onClick={() => setVisibleCount(prev => prev + 6)} className={styles.loadMoreBtn}>
              SHOW MORE
            </button>
          </div>
        )}
      </div>
    </main>
  )
}

export default Articles