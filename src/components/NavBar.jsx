import { useEffect, useState, useRef } from 'react'
import useTheme from '../hooks/useTheme'
import './NavBar.css'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Work' },
  { href: '#achievements', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const sentinelRef = useRef(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sectionIds = links.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id)
          }
        })
      },
      { threshold: 0.15, rootMargin: '-100px 0px -40% 0px' }
    )

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleMenuLink = (href) => {
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <div ref={sentinelRef} style={{ position: 'absolute', top: 0, left: 0, width: 1, height: 1 }} />
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <a href="#hero" className="navbar-logo" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) }}>AM.</a>
          <div className="navbar-links">
            {links.slice(1).map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`navbar-link ${activeSection === href ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                {label}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-knob" />
            </span>
            <span className="theme-toggle-label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
          <button
            className={`navbar-hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <div className={`menu-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)}>
        <nav className="menu-nav">
          {links.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              className={`menu-link ${activeSection === href ? 'active' : ''}`}
              style={{ transitionDelay: mobileOpen ? `${0.2 + i * 0.06}s` : '0s' }}
              onClick={(e) => { e.preventDefault(); handleMenuLink(href) }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
