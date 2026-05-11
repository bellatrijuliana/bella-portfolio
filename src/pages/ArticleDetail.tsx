import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { getArticleById, getAdjacentArticles } from '../lib/articles'
import { supabase } from '../lib/supabase'
import styles from './ArticleDetail.module.css'

interface Comment {
  id: string
  name: string
  message: string
  created_at: string
  parent_id: string | null
  replies?: Comment[]
}

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>()
  const article = getArticleById(id!)
  const { prev, next } = getAdjacentArticles(id ?? '')
  const [commentName, setCommentName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [views, setViews] = useState<number | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyName, setReplyName] = useState('')
  const [replyText, setReplyText] = useState('')
  const [replySubmitting, setReplySubmitting] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (!id) return
    incrementViews()
    fetchComments()
  }, [id])

  const incrementViews = async () => {
    const { data } = await supabase.rpc('increment_views', { article_id_input: id })
    setViews(data ?? null)
  }

  const fetchComments = async () => {
    const { data } = await supabase
      .from('comments')
      .select('id, name, message, created_at, parent_id')
      .eq('article_id', id)
      .order('created_at', { ascending: true })

    if (data) {
      // Nest replies under their parent
      const topLevel = data.filter(c => !c.parent_id)
      const nested = topLevel.map(comment => ({
        ...comment,
        replies: data.filter(c => c.parent_id === comment.id)
      }))
      setComments(nested)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!commentName.trim() || !commentText.trim() || !id) return

    setSubmitting(true)

    const { error } = await supabase
      .from('comments')
      .insert({ article_id: id, name: commentName.trim(), message: commentText.trim(), parent_id: null })

    if (!error) {
      setCommentName('')
      setCommentText('')
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      await fetchComments()
    }

    setSubmitting(false)
  }

  const handleReplySubmit = async (parentId: string) => {
    if (!replyName.trim() || !replyText.trim() || !id) return

    setReplySubmitting(true)

    const { error } = await supabase
      .from('comments')
      .insert({ article_id: id, name: replyName.trim(), message: replyText.trim(), parent_id: parentId })

    if (!error) {
      setReplyName('')
      setReplyText('')
      setReplyingTo(null)
      await fetchComments()
    }

    setReplySubmitting(false)
  }

  if (!article) return (
    <main className={styles.page}>
      <div className={styles.notFound}>
        <p>Artikel tidak ditemukan.</p>
        <Link to="/articles">← Kembali ke semua artikel</Link>
      </div>
    </main>
  )

  const shareUrl = window.location.href
  const shareTitle = article.title

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

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    })
  }

  const totalComments = comments.reduce((acc, c) => acc + 1 + (c.replies?.length ?? 0), 0)

  return (
    <main className={styles.page}>
      <article className={styles.inner}>
        <Link to="/articles" className={styles.back}>← Semua Artikel</Link>

        <p className={styles.category}>{article.category}</p>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.meta}>
          <p className={styles.date}>{article.date}</p>
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
            {article.content}
          </ReactMarkdown>
        </div>

        <div className={styles.shareSection}>
          <p className={styles.shareLabel}>Like this article? Share it with your friends:</p>
          <div className={styles.shareGrid}>
            <button onClick={() => handleShare('linkedin')} className={styles.shareBtn}>LinkedIn</button>
            <button onClick={() => handleShare('x')} className={styles.shareBtn}>X (Twitter)</button>
            <button onClick={() => handleShare('threads')} className={styles.shareBtn}>Threads</button>
            <button onClick={() => handleShare('copy')} className={styles.shareBtn}>Copy Link</button>
          </div>
        </div>

        <div className={styles.articleNav}>
          {prev ? (
            <Link to={`/articles/${prev.id}`} className={styles.navPrev}>
              <span>← Previous</span>
              <strong>{prev.title}</strong>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/articles/${next.id}`} className={styles.navNext}>
              <span>Next →</span>
              <strong>{next.title}</strong>
            </Link>
          ) : <div />}
        </div>

        <hr className={styles.divider} />

        {/* Comment Section */}
        <section className={styles.commentSection}>
          <h3 className={styles.commentTitle}>
            Leave a Comment
            {totalComments > 0 && (
              <span className={styles.commentCount}>{totalComments}</span>
            )}
          </h3>

          <form className={styles.commentForm} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.input}
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
              required
            />
            <textarea
              placeholder="What do you think about this article?"
              className={styles.textarea}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              required
            />
            <button type="submit" className={styles.submitBtn} disabled={submitting}>
              {submitting ? 'Sending...' : submitted ? 'Sent! ✓' : 'Send'}
            </button>
          </form>

          {/* Comment List */}
          {comments.length > 0 && (
            <div className={styles.commentList}>
              {comments.map((comment) => (
                <div key={comment.id} className={styles.commentItem}>

                  {/* Top-level comment */}
                  <div className={styles.commentHeader}>
                    <div className={styles.commentAvatar}>
                      {comment.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className={styles.commentName}>{comment.name}</p>
                      <p className={styles.commentDate}>{formatDate(comment.created_at)}</p>
                    </div>
                  </div>
                  <p className={styles.commentMessage}>{comment.message}</p>

                  <button
                    className={styles.replyBtn}
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                  >
                    {replyingTo === comment.id ? 'Cancel' : '↩ Reply'}
                  </button>

                  {/* Reply form */}
                  {replyingTo === comment.id && (
                    <div className={styles.replyForm}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className={styles.input}
                        value={replyName}
                        onChange={(e) => setReplyName(e.target.value)}
                      />
                      <textarea
                        placeholder={`Reply to ${comment.name}...`}
                        className={styles.textarea}
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                      />
                      <button
                        className={styles.submitBtn}
                        onClick={() => handleReplySubmit(comment.id)}
                        disabled={replySubmitting || !replyName.trim() || !replyText.trim()}
                      >
                        {replySubmitting ? 'Sending...' : 'Send Reply'}
                      </button>
                    </div>
                  )}

                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className={styles.replyList}>
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className={styles.replyItem}>
                          <div className={styles.commentHeader}>
                            <div className={styles.commentAvatarSmall}>
                              {reply.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className={styles.commentName}>{reply.name}</p>
                              <p className={styles.commentDate}>{formatDate(reply.created_at)}</p>
                            </div>
                          </div>
                          <p className={styles.commentMessage}>{reply.message}</p>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>
          )}
        </section>

      </article>
    </main>
  )
}

export default ArticleDetail