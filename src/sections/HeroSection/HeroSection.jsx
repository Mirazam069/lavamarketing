import './HeroSection.css'
import arrowImage from '../../images/arrow.png'

function HeroSection() {
  return (
    <section id="hero-results" className="hero-section" aria-label="Hero Section">
      <div className="hero-section__container">
        <h1 className="hero-section__title">
          <span className="hero-section__title-word" style={{ '--word-delay': '0.12s' }}>
            BIZ
          </span>
          <span className="hero-section__title-word" style={{ '--word-delay': '0.3s' }}>
            HAQIMIZDA
          </span>
          <br />
          <span className="hero-section__title-word" style={{ '--word-delay': '0.48s' }}>
            NATIJALARIMIZ
          </span>
          <br className="hero-section__break-mobile" />
          <span className="hero-section__gap-desktop"> </span>
          <span className="hero-section__title-word" style={{ '--word-delay': '0.66s' }}>
            GAPIRSIN!
          </span>
        </h1>

        <img src={arrowImage} alt="" aria-hidden="true" className="hero-section__arrow-image" />
      </div>
    </section>
  )
}

export default HeroSection
