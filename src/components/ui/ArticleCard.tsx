import { Link } from 'react-router-dom'
import styles from './ArticleCard.module.css'

export interface ArticleMeta {
  theme: any
  id: string
  title: string
  category: string
  date: string
  excerpt: string
  featured?: boolean
  image?: string
}

const categoryColors: Record<string, string> = {
  'Performance Testing': 'linear-gradient(135deg, #F5EAEC 0%, #EDD5DB 100%)',
  'API Testing': 'linear-gradient(135deg, #E8F0EA 0%, #D5E6D8 100%)',
  'Career': 'linear-gradient(135deg, #EAE8F0 0%, #D5D3E6 100%)',
  'default': 'linear-gradient(135deg, #FAF8F5 0%, #E8E4E0 100%)',
}

function getFallbackColor(category: string): string {
  return categoryColors[category] || categoryColors['default']
}

interface Props {
  article: ArticleMeta
  variant: 'featured' | 'small'
}

const ArticleCard = ({ article, variant }: Props) => {
  const fallback = getFallbackColor(article.category)

  const image = article.image ? (
    <img
      src={article.image}
      alt={article.title}
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
      style={{ background: fallback, display: article.image ? 'none' : 'flex' }}
    />
  )

  if (variant === 'featured') {
    return (
      <Link to={`/articles/${article.id}`} className={styles.cardFeatured}>
        {image}
        {fallbackDiv}
        <div className={styles.bodyFeatured}>
          <p className={styles.category}>{article.category}</p>
          <h3 className={styles.titleFeatured}>{article.title}</h3>
          {article.excerpt && (
            <p className={styles.excerpt}>{article.excerpt}</p>
          )}
          <p className={styles.date}>{article.date}</p>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/articles/${article.id}`} className={styles.cardSmall}>
      {image}
      {fallbackDiv}
      <div className={styles.bodySmall}>
        <p className={styles.category}>{article.category}</p>
        <h3 className={styles.titleSmall}>{article.title}</h3>
        <p className={styles.date}>{article.date}</p>
      </div>
      <div className={`${styles.placeholder} ${styles[article.theme]}`} />
    </Link>
  )
}

export default ArticleCard