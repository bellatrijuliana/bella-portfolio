import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
<footer className={styles.footer}>
  <div className={styles.left}>
    <Link to="/" className={styles.logo}>One More Test</Link>
    <p className={styles.copy}>© 2026</p>
  </div>
  <div className={styles.links}>
    <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="#" target="_blank" rel="noopener noreferrer">Threads</a>
  </div>
</footer>
  )
}

export default Footer