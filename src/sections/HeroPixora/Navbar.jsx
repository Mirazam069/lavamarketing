import { useEffect, useState } from 'react'
import './Navbar.css'
import navbarLogo from '../../images/navbarLogo.png'

const navItems = [
  { id: '01', label: 'Bosh Sahifa', href: '#hero-pixora' },
  { id: '02', label: 'Portfolio', href: '#portfolio-showcase' },
  { id: '03', label: 'Natijalar', href: '#hero-results' },
  { id: '04', label: 'Jarayonlar', href: '#services-stack' },
  { id: '05', label: 'Hamkorlar', href: '#partners' },
  { id: '06', label: 'Xizmatlar', href: '#services' },
  { id: '07', label: 'Aloqa', href: '#footer-contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isMenuOpen])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className={`hero-navbar-wrap ${isScrolled ? 'is-scrolled' : ''}`}>
        <header className="hero-navbar">
          <div className="hero-navbar__brand">
            <img
              src={navbarLogo}
              alt="Lava Marketing"
              className="hero-navbar__brand-logo"
            />
            <span className="hero-navbar__brand-name">Lava Marketing</span>
          </div>
          <button
            type="button"
            className={`hero-navbar__hamburger ${isMenuOpen ? 'is-open' : ''}`}
            aria-label="Open menu"
            aria-controls="hero-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </header>
      </div>

      {isMenuOpen && (
        <div className="hero-menu" id="hero-menu" role="dialog" aria-modal="true">
          <div className="hero-menu__head">
            <span className="hero-menu__title">Menyu</span>
            <button
              type="button"
              className="hero-menu__close"
              aria-label="Yopish"
              onClick={() => setIsMenuOpen(false)}
            >
              ×
            </button>
          </div>

          <nav className="hero-menu__nav" aria-label="Bo'limlar">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="hero-menu__link"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="hero-menu__index">{item.id}</span>
                <span className="hero-menu__label">{item.label}</span>
              </a>
            ))}
          </nav>

          <a className="hero-menu__phone" href="tel:+998952590059">
            95 259 00 59
          </a>
        </div>
      )}
    </>
  )
}

export default Navbar
