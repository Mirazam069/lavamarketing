import './PortfolioShowcase.css'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
import brand4 from '../../images/brand4.png'
import brand5 from '../../images/brand5.png'

const portfolioImages = [
  { src: brand4, size: 'small' },
  { src: brand2, size: 'medium' },
  { src: brand1, size: 'main' },
  { src: brand3, size: 'medium' },
  { src: brand5, size: 'small' },
]

function PortfolioShowcase() {
  const mobileLoopImages = [...portfolioImages, ...portfolioImages]

  return (
    <section id="portfolio-showcase" className="portfolio-showcase" aria-label="Portfolio Showcase">
      <div className="portfolio-showcase__container">
        <div className="portfolio-showcase__row">
          {portfolioImages.map((item, index) => (
            <article
              className={`portfolio-showcase__item portfolio-showcase__item--${item.size}`}
              key={item.src + index}
            >
              <img src={item.src} alt={`Portfolio site ${index + 1}`} />
            </article>
          ))}
        </div>

        <div className="portfolio-showcase__marquee" aria-hidden="true">
          <div className="portfolio-showcase__track">
            {mobileLoopImages.map((item, index) => (
              <article className="portfolio-showcase__marquee-item" key={`mobile-${item.src}-${index}`}>
                <img src={item.src} alt="" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioShowcase
