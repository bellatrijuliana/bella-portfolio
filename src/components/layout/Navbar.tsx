import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const thoughtsItems = [
  { label: 'QA – Articles', path: '/articles' },
  { label: 'Life Debugging', path: '/lifedebugging' },
]

const educationItems = [
  { label: 'Mentorship', path: '/mentorship' },
  { label: 'Little Lab', path: '/littlelab' },
]

const Navbar = () => {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [thoughtsOpen, setThoughtsOpen] = useState(false)
  const [educationOpen, setEducationOpen] = useState(false)

  const thoughtsRef = useRef<HTMLLIElement>(null)
  const educationRef = useRef<HTMLLIElement>(null)

  // Tutup dropdown kalau klik di luar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (thoughtsRef.current && !thoughtsRef.current.contains(e.target as Node)) {
        setThoughtsOpen(false)
      }
      if (educationRef.current && !educationRef.current.contains(e.target as Node)) {
        setEducationOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isThoughtsActive = thoughtsItems.some(i => pathname === i.path)
  const isEducationActive = educationItems.some(i => pathname === i.path)

  const closeAll = () => {
    setIsOpen(false)
    setThoughtsOpen(false)
    setEducationOpen(false)
  }

  return (
    <nav className={styles.nav}>
      {/* LOGO */}
      <Link to="/" className={styles.logo} onClick={closeAll}>
        One More Test
      </Link>

      {/* HAMBURGER (Mobile) */}
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {/* NAV LINKS */}
      <ul className={`${styles.links} ${isOpen ? styles.activeMenu : ''}`}>

        {/* Home */}
        <li className={styles.navItem}>
          <Link
            to="/"
            className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
            onClick={closeAll}
          >
            Home
          </Link>
        </li>

        {/* Portfolio */}
        <li className={styles.navItem}>
          <Link
            to="/portfolio"
            className={`${styles.link} ${pathname === '/portfolio' ? styles.active : ''}`}
            onClick={closeAll}
          >
            Portfolio
          </Link>
        </li>

        {/* THOUGHTS dropdown */}
        <li
          className={`${styles.navItem} ${styles.dropdown}`}
          ref={thoughtsRef}
          onMouseEnter={() => setThoughtsOpen(true)}
          onMouseLeave={() => setThoughtsOpen(false)}
        >
          <button
            className={`${styles.link} ${styles.dropdownTrigger} ${isThoughtsActive ? styles.active : ''}`}
            onClick={() => setThoughtsOpen(prev => !prev)}
          >
            Thoughts
            <span className={`${styles.chevron} ${thoughtsOpen ? styles.chevronUp : ''}`}>▾</span>
          </button>
          <ul className={`${styles.dropdownMenu} ${thoughtsOpen ? styles.dropdownOpen : ''}`}>
            {thoughtsItems.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`${styles.dropdownLink} ${pathname === path ? styles.active : ''}`}
                  onClick={closeAll}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* EDUCATION LAB dropdown */}
        <li
          className={`${styles.navItem} ${styles.dropdown}`}
          ref={educationRef}
          onMouseEnter={() => setEducationOpen(true)}
          onMouseLeave={() => setEducationOpen(false)}
        >
          <button
            className={`${styles.link} ${styles.dropdownTrigger} ${isEducationActive ? styles.active : ''}`}
            onClick={() => setEducationOpen(prev => !prev)}
          >
            Education Lab
            <span className={`${styles.chevron} ${educationOpen ? styles.chevronUp : ''}`}>▾</span>
          </button>
          <ul className={`${styles.dropdownMenu} ${educationOpen ? styles.dropdownOpen : ''}`}>
            {educationItems.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`${styles.dropdownLink} ${pathname === path ? styles.active : ''}`}
                  onClick={closeAll}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* Collab With Me */}
        <li className={styles.navItem}>
          <Link
            to="/services"
            className={`${styles.link} ${pathname === '/services' ? styles.active : ''}`}
            onClick={closeAll}
          >
            Collab With Me
          </Link>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar