import { Link } from 'react-router-dom'
import type { LifePostMeta } from '../../lib/lifedebugging'
import styles from './LifePostCard.module.css'

const moodColors: Record<string, string> = {
  'Career':        'linear-gradient(135deg, #EAE8F0 0%, #D5D3E6 100%)',
  'Mindset':       'linear-gradient(135deg, #E8F0EA 0%, #D5E6D8 100%)',
  'Everyday Life': 'linear-gradient(135deg, #F5EAEC 0%, #EDD5DB 100%)',
  'Learning':      'linear-gradient(135deg, #FAF3E8 0%, #EDE0CC 100%)',
  'default':       'linear-gradient(135deg, #FAF8F5 0%, #E8E4E0 100%)',
}

function getFallbackColor(mood: string): string {
  return moodColors[mood] || moodColors['default']
}

interface Props {
  post: LifePostMeta
  variant: 'featured' | 'small'
}

const LifePostCard = ({ post, variant }: Props) => {
  const fallback = getFallbackColor(post.mood)

  const image = post.image ? (
    <img
      src={post.image}
      alt={post.title}
      className={variant === 'featured' ? styles.imageFeatured : styles.imageSmall}
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.style.display = 'none'
        const next = target.nextElementSibling as HTMLElement
        if (next) next.style.display = 'flex'
      }}
    />
  ) : null

  const fallbackDiv = (
    <div
      className={variant === 'featured' ? styles.imageFallbackFeatured : styles.imageFallbackSmall}
      style={{ background: fallback, display: post.image ? 'none' : 'flex' }}
    />
  )

  if (variant === 'featured') {
    return (
      <Link to={`/life-debugging/${post.id}`} className={styles.cardFeatured}>
        {image}
        {fallbackDiv}
        <div className={styles.bodyFeatured}>
          <p className={styles.mood}>{post.mood}</p>
          <h3 className={styles.titleFeatured}>{post.title}</h3>
          {post.excerpt && (
            <p className={styles.excerpt}>{post.excerpt}</p>
          )}
          <p className={styles.date}>{post.date}</p>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/life-debugging/${post.id}`} className={styles.cardSmall}>
      {image}
      {fallbackDiv}
      <div className={styles.bodySmall}>
        <p className={styles.mood}>{post.mood}</p>
        <h3 className={styles.titleSmall}>{post.title}</h3>
        <p className={styles.date}>{post.date}</p>
      </div>
      <div className={`${styles.placeholder} ${styles[post.theme]}`} />
    </Link>
  )
}

export default LifePostCard