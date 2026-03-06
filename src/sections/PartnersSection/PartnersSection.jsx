import './PartnersSection.css'
import partners1 from '../../images/partners1.png'
import partners2 from '../../images/partners2.png'
import partners3 from '../../images/partners3.png'
import partners4 from '../../images/partners4.png'
import partners5 from '../../images/partners5.png'
import partners6 from '../../images/partners6.png'
import partners7 from '../../images/partners7.png'
import partners8 from '../../images/partners8.png'
import partners9 from '../../images/partners9.png'
import partners10 from '../../images/partners10.png'

const partners = [
  { name: 'partner 1', src: partners1 },
  { name: 'partner 2', src: partners2 },
  { name: 'partner 3', src: partners3 },
  { name: 'partner 4', src: partners4 },
  { name: 'partner 5', src: partners5 },
  { name: 'partner 6', src: partners6 },
  { name: 'partner 7', src: partners7 },
  { name: 'partner 8', src: partners8 },
  { name: 'partner 9', src: partners9 },
  { name: 'partner 10', src: partners10 },
]

function PartnersSection() {
  return (
    <section id="partners" className="partners-section" aria-label="Trusted Brands">
      <div className="partners-section__container">
        <div className="partners-section__grid">
          {partners.map((partner) => (
            <article className="partners-section__item" key={partner.name}>
              <img src={partner.src} alt={partner.name} loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
