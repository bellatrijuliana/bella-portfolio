import { useState, useMemo } from 'react'
import { getAllLifePosts } from '../lib/lifedebugging'
import LifePostCard from '../components/ui/LifePostCard'
import styles from './LifeDebugging.module.css'

const MOODS = ['All', 'Career', 'Mindset', 'Everyday Life', 'Learning'] as const
type Mood = typeof MOODS[number]

const LifeDebugging = () => {
  const allPosts = getAllLifePosts()

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [selectedMood, setSelectedMood] = useState<Mood>('All')
  const [visibleCount, setVisibleCount] = useState(7)

  const categories = ['All', ...new Set(allPosts.map(p => p.category))]
  const years = ['All', ...new Set(allPosts.map(p => new Date(p.date).getFullYear().toString()))]

  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchCategory = selectedCategory === 'All' || post.category === selectedCategory
      const matchYear = selectedYear === 'All' || new Date(post.date).getFullYear().toString() === selectedYear
      const matchMood = selectedMood === 'All' || post.mood === selectedMood
      return matchCategory && matchYear && matchMood
    })
  }, [allPosts, selectedCategory, selectedYear, selectedMood])

  const currentPosts = filteredPosts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPosts.length

  return (
    <main className={styles.page}>
      <div className={styles.inner}>

        {/* HEADER */}
        <div className={styles.deco} />
        <span className={styles.tag}>Life Debugging</span>

        <p className={styles.label}>Raw thoughts, unfiltered</p>
        <h1 className={styles.title}>
          Things I'm still<br />figuring out.
        </h1>

        <p className={styles.description}>
          Not every thought fits neatly into a tutorial. This is where I write about{' '}
          <strong>the messy middle</strong> — career doubts, lessons from everyday life,
          and things that made me pause and <strong>think</strong>.
        </p>

        {/* MOOD PILLS */}
        <div className={styles.journeySection}>
          <p className={styles.journeyLabel}>BROWSE BY MOOD:</p>
          <div className={styles.pillContainer}>
            {MOODS.map((mood) => {
              const count = mood === 'All'
                ? allPosts.length
                : allPosts.filter(p => p.mood === mood).length
              return (
                <button
                  key={mood}
                  onClick={() => { setSelectedMood(mood); setVisibleCount(7) }}
                  className={`${styles.pill} ${selectedMood === mood ? styles.activePill : ''}`}
                >
                  {mood} <span className={styles.pillCount}>({count})</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* TOOLBAR */}
        <div className={styles.toolbar}>
          <div className={styles.filterGroup}>
            <label>CATEGORY:</label>
            <select
              value={selectedCategory}
              onChange={(e) => { setSelectedCategory(e.target.value); setVisibleCount(7) }}
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>YEAR:</label>
            <select
              value={selectedYear}
              onChange={(e) => { setSelectedYear(e.target.value); setVisibleCount(7) }}
            >
              {years.map(yr => <option key={yr} value={yr}>{yr}</option>)}
            </select>
          </div>
        </div>

        {/* GRID */}
        <div className={styles.articleGrid}>
          {currentPosts.length > 0 ? (
            currentPosts.map((post, index) => (
              <div
                key={post.id}
                className={index === 0 ? styles.featuredItem : styles.regularItem}
              >
                <LifePostCard
                  post={post}
                  variant={index === 0 ? 'featured' : 'small'}
                />
              </div>
            ))
          ) : (
            <div className={styles.noResult}>
              <h3>No posts found.</h3>
              <p>Try adjusting your mood filter or category.</p>
            </div>
          )}
        </div>

        {/* PAGINATION */}
        {hasMore && (
          <div className={styles.pagination}>
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className={styles.loadMoreBtn}
            >
              SHOW MORE
            </button>
          </div>
        )}

      </div>
    </main>
  )
}

export default LifeDebugging