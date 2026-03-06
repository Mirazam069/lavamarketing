import { useEffect, useRef } from 'react'
import './HeroPixora.css'

function HeroPixora({ onOpenAudit }) {
  const sectionRef = useRef(null)
  const bodyLine1 = 'Ko\u2018p bizneslarda muammo reklamada emas.'
  const bodyLine2 =
    'Muammo \u2014 lidni sotuvga aylantiradigan tizim yo\u2018qligi: admin javob beradi, lekin sotuvlar o\u2019smaydi!'

  useEffect(() => {
    const applyStaticMobileHeight = () => {
      if (!sectionRef.current) {
        return
      }

      sectionRef.current.style.setProperty('--hero-mobile-static-height', `${window.innerHeight}px`)
    }

    applyStaticMobileHeight()
    window.addEventListener('orientationchange', applyStaticMobileHeight)

    return () => {
      window.removeEventListener('orientationchange', applyStaticMobileHeight)
    }
  }, [])

  return (
    <section id="hero-pixora" className="hero-pixora" aria-label="Hero Pixora" ref={sectionRef}>
      <div className="hero-pixora__shell">
        <div className="hero-pixora__content">
          <h1 className="hero-pixora__title">
            <span className="hero-pixora__word" style={{ '--word-delay': '0.12s' }}>
              BIZNESGA
            </span>{' '}
            <span className="hero-pixora__word" style={{ '--word-delay': '0.34s' }}>
              SMM
            </span>
            <span className="hero-pixora__title-space-desktop"> </span>
            <br className="hero-pixora__break hero-pixora__break--mobile" />
            <span className="hero-pixora__word" style={{ '--word-delay': '0.56s' }}>
              EMAS,
            </span>
            <br className="hero-pixora__break hero-pixora__break--desktop" />
            <span
              className="hero-pixora__title-accent hero-pixora__word"
              style={{ '--word-delay': '0.78s' }}
            >
              NATIJA
            </span>
            <br className="hero-pixora__break hero-pixora__break--mobile" />
            <span className="hero-pixora__word" style={{ '--word-delay': '1s' }}>
              BERAMIZ!
            </span>
          </h1>

          <p className="hero-pixora__text">
            {bodyLine1}
            <br />
            {bodyLine2}
          </p>


          <button
            type="button"
            className="hero-pixora__cta"
            onClick={onOpenAudit}
          >
            BEPUL AUDITGA YOZILISH
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroPixora
