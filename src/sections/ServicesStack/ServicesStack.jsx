import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiClock, FiDollarSign, FiUsers } from 'react-icons/fi'
import './ServicesStack.css'
import card1Image from '../../images/card1.png'
import card2Image from '../../images/card2.png'
import card3Image from '../../images/card3.png'
import card4Image from '../../images/card4.png'
import card5Image from '../../images/card5.png'
import card6Image from '../../images/card6.png'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    number: '01',
    title: 'Sarbon Universiteti',
    duration: '8 oy',
    result: '5 700 ta talaba va $6 000 000 sotuv',
    className: 'card1',
    image: card1Image,
  },
  {
    number: '02',
    title: 'Toshkent Gumanitar Universiteti',
    duration: '8 oy',
    result: '3 100 ta talaba va $3 000 000 sotuv',
    className: 'card2',
    image: card2Image,
  },
  {
    number: '03',
    title: 'EMAX Logistics',
    duration: '3 yil',
    subscribers: '37k obunachi',
    result: '$300 000 oylik aylanma',
    className: 'card3',
    image: card3Image,
  },
  {
    number: '04',
    title: 'Business House',
    duration: '20 oy',
    result: '1 150 ta uy sotuvi',
    className: 'card4',
    image: card4Image,
  },
  {
    number: '05',
    title: 'Baraka Development',
    duration: '8 oy',
    result: "Onlaynda oyiga 700 000 000 so'm sotuv",
    className: 'card1',
    image: card5Image,
  },
  {
    number: '06',
    title: 'Akobir Logist',
    duration: '1 yil',
    result: '0 dan $100 000 aylanmagacha',
    className: 'card2',
    image: card6Image,
  },
]

const cardSixNotePrimary = [
  'Business towers',
  'Shashlik marinad',
  'Medion',
  'Estet house',
  'Nurhayat',
  'Impuls tibbiyot institu',
]

const cardSixNoteSecondary = ['Mosap universiteti', 'Amerikalik doktor']

function ServicesStack() {
  const sectionRef = useRef(null)
  const sectionHeight = `${cards.length * 100}vh`

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 901px)', () => {
        const stackCards = gsap.utils.toArray('.services-stack__card')
        const xStep = 100

        stackCards.forEach((card, index) => {
          gsap.set(card, {
            x: index * xStep,
            y: 240,
            autoAlpha: 0,
            zIndex: index + 1,
          })
        })

        gsap.set(stackCards[0], { y: 0, autoAlpha: 1 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        })

        stackCards.slice(1).forEach((card) => {
          tl.to(card, {
            y: 0,
            autoAlpha: 1,
            ease: 'none',
            duration: 1,
          })
        })
      })

      mm.add('(max-width: 900px)', () => {
        const stackCards = gsap.utils.toArray('.services-stack__card')
        gsap.set(stackCards, { clearProps: 'all' })
      })

      return () => mm.revert()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services-stack"
      className="services-stack"
      ref={sectionRef}
      aria-label="Services Stack"
      style={{ '--stack-height': sectionHeight }}
    >
      <div className="services-stack__container">
        <div className="services-stack__wrapper">
          {cards.map((card) => {
            return (
              <article className={`services-stack__card ${card.className}`} key={card.number}>
              <div className="services-stack__content">
                <h2 className="services-stack__number">{card.number}</h2>
                <h3 className="services-stack__title">{card.title}</h3>
                <div className="services-stack__meta-list">
                  <p className="services-stack__meta-item">
                    <FiClock className="services-stack__meta-icon" aria-hidden="true" />
                    <span className="services-stack__meta-label">Vaqt</span>
                    <span className="services-stack__meta-value">{card.duration}</span>
                  </p>

                  {card.subscribers && (
                    <p className="services-stack__meta-item">
                      <FiUsers className="services-stack__meta-icon" aria-hidden="true" />
                      <span className="services-stack__meta-label">Obunachi</span>
                      <span className="services-stack__meta-value">{card.subscribers}</span>
                    </p>
                  )}

                  <p className="services-stack__meta-item">
                    <FiDollarSign className="services-stack__meta-icon" aria-hidden="true" />
                    <span className="services-stack__meta-label">Narxi</span>
                    <span className="services-stack__meta-value">{card.result}</span>
                  </p>
                </div>
              </div>

              <div className="services-stack__visual">
                <img src={card.image} alt="" aria-hidden="true" />
              </div>

              {card.number === '06' && (
                <aside className="services-stack__note" aria-label="Loyihalar ro'yxati">
                  <p className="services-stack__note-title">50+ loyihalar</p>
                  <span className="services-stack__note-divider" aria-hidden="true" />

                  <div className="services-stack__note-list">
                    {cardSixNotePrimary.map((item) => (
                      <span className="services-stack__note-item" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="services-stack__note-list">
                    {cardSixNoteSecondary.map((item) => (
                      <span className="services-stack__note-item" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </aside>
              )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesStack
