import { useParams, Link } from 'react-router-dom'
import { useState } from 'react' // Tambahkan useState
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { getArticleById } from '../lib/articles'
import styles from './ArticleDetail.module.css'

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>()
  const article = getArticleById(id!)
  const [commentName, setCommentName] = useState('')
  const [commentText, setCommentText] = useState('')

  if (!article) return (
    <main className={styles.page}>
      <div className={styles.notFound}>
        <p>Artikel tidak ditemukan.</p>
        <Link to="/articles">← Kembali ke semua artikel</Link>
      </div>
    </main>
  )

  const shareUrl = window.location.href;
  const shareTitle = article.title;

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      x: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`,
      threads: `https://www.threads.net/intent/post?text=${shareTitle}%20${shareUrl}`,
      // Instagram tidak punya direct share URL untuk web ke feed/story, biasanya via mobile app
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      alert('Link disalin!');
    } else if (urls[platform]) {
      window.open(urls[platform], '_blank');
    }
  };

  return (
    <main className={styles.page}>
      <article className={styles.inner}>
        <Link to="/articles" className={styles.back}>← Semua Artikel</Link>
        
        <p className={styles.category}>{article.category}</p>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.date}>{article.date}</p>

        {/* 1. Share Minimalis di Bawah Judul */}
        <div className={styles.miniShare}>
          <button onClick={() => handleShare('x')}>𝕏</button>
          <button onClick={() => handleShare('linkedin')}>in</button>
          <button onClick={() => handleShare('copy')}>🔗</button>
        </div>

        <div className={styles.deco} />

        <div className={styles.content}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {article.content}
          </ReactMarkdown>
        </div>

        {/* 2. Share Section Besar di Bawah Artikel */}
        <div className={styles.shareSection}>
          <p className={styles.shareLabel}>Like this article? Share it with your friends:</p>
          <div className={styles.shareGrid}>
            <button onClick={() => handleShare('linkedin')} className={styles.shareBtn}>LinkedIn</button>
            <button onClick={() => handleShare('x')} className={styles.shareBtn}>X (Twitter)</button>
            <button onClick={() => handleShare('threads')} className={styles.shareBtn}>Threads</button>
            <button onClick={() => handleShare('copy')} className={styles.shareBtn}>Copy Link</button>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* 3. Komentar Section */}
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
              placeholder="What do you think about this article?" 
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

export default ArticleDetail