import './HeroSection.css'
import arrowImage from '../../images/arrow.png'

function HeroSection() {
  return (
    <section id="hero-results" className="hero-section" aria-label="Hero Section">
      <div className="hero-section__container">
        <h1 className="hero-section__title">
          BIZ HAQIMIZDA
          <br />
          NATIJALARIMIZ
          <br className="hero-section__break-mobile" />
          <span className="hero-section__gap-desktop"> </span>
          GAPIRSIN!
        </h1>

        <img src={arrowImage} alt="" aria-hidden="true" className="hero-section__arrow-image" />
      </div>
    </section>
  )
}

export default HeroSection
