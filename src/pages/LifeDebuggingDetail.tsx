import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { getLifePostById, getAllLifePosts } from '../lib/lifedebugging'
import { supabase } from '../lib/supabase'
import styles from './LifeDebuggingDetail.module.css'

const LifeDebuggingDetail = () => {
  const { id } = useParams<{ id: string }>()
  const post = getLifePostById(id!)
  const [views, setViews] = useState<number | null>(null)
  const [commentName, setCommentName] = useState('')
  const [commentText, setCommentText] = useState('')

  // Next / Prev
  const all = getAllLifePosts()
  const index = all.findIndex(p => p.id === (id ?? ''))
  const prev = index < all.length - 1 ? all[index + 1] : null
  const next = index > 0 ? all[index - 1] : null

  useEffect(() => {
    if (!id) return

    const incrementViews = async () => {
      const { data } = await supabase.rpc('increment_life_views', { article_id_input: id })
      setViews(data ?? null)
    }

    incrementViews()
  }, [id])

  if (!post) return (
    <main className={styles.page}>
      <div className={styles.notFound}>
        <p>Post tidak ditemukan.</p>
        <Link to="/lifedebugging">← Kembali</Link>
      </div>
    </main>
  )

  const shareUrl = window.location.href
  const shareTitle = post.title

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      x: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`,
      threads: `https://www.threads.net/intent/post?text=${shareTitle}%20${shareUrl}`,
    }

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl)
      alert('Link disalin!')
    } else if (urls[platform]) {
      window.open(urls[platform], '_blank')
    }
  }

  return (
    <main className={styles.page}>
      <article className={styles.inner}>
        <Link to="/lifedebugging" className={styles.back}>← Life Debugging</Link>

        <p className={styles.category}>{post.category}</p>
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.meta}>
          <p className={styles.date}>{post.date}</p>
          {views !== null && (
            <p className={styles.views}>👁 {views} views</p>
          )}
        </div>

        <div className={styles.miniShare}>
          <button onClick={() => handleShare('x')}>𝕏</button>
          <button onClick={() => handleShare('linkedin')}>in</button>
          <button onClick={() => handleShare('copy')}>🔗</button>
        </div>

        <div className={styles.deco} />

        <div className={styles.content}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Share Section */}
        <div className={styles.shareSection}>
          <p className={styles.shareLabel}>Like this post? Share it:</p>
          <div className={styles.shareGrid}>
            <button onClick={() => handleShare('linkedin')} className={styles.shareBtn}>LinkedIn</button>
            <button onClick={() => handleShare('x')} className={styles.shareBtn}>X (Twitter)</button>
            <button onClick={() => handleShare('threads')} className={styles.shareBtn}>Threads</button>
            <button onClick={() => handleShare('copy')} className={styles.shareBtn}>Copy Link</button>
          </div>
        </div>

        {/* Next / Prev */}
        <div className={styles.articleNav}>
          {prev ? (
            <Link to={`/lifedebugging/${prev.id}`} className={styles.navPrev}>
              <span>← Previous</span>
              <strong>{prev.title}</strong>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/lifedebugging/${next.id}`} className={styles.navNext}>
              <span>Next →</span>
              <strong>{next.title}</strong>
            </Link>
          ) : <div />}
        </div>

        <hr className={styles.divider} />

        {/* Comment Section */}
        <section className={styles.commentSection}>
          <h3 className={styles.commentTitle}>Leave a Comment</h3>
          <form className={styles.commentForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.input}
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
            />
            <textarea
              placeholder="What do you think about this post?"
              className={styles.textarea}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button type="submit" className={styles.submitBtn}>Send</button>
          </form>
        </section>

      </article>
    </main>
  )
}

export default LifeDebuggingDetail