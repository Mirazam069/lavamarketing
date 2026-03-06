import './ServicesSection.css'
import { FiMap, FiSearch, FiSettings, FiTrendingUp, FiUsers } from 'react-icons/fi'

const services = [
  {
    icon: FiSearch,
    text: 'Bozor va raqobatchilar tahlili',
  },
  {
    icon: FiMap,
    text: 'Marketing strategiyasi',
  },
  {
    icon: FiUsers,
    text: "Marketing bo'limi qurish va boshqarish",
  },
  {
    icon: FiTrendingUp,
    text: 'Performance marketing',
  },
  {
    icon: FiSettings,
    text: "Sotuv bo'limini qurish va boshqarish",
  },
]

function ServicesSection() {
  return (
    <section id="services" className="services-list-section" aria-label="Xizmatlarimiz">
      <div className="services__container">
        <div className="services-list-section__layout">
          <header className="services-list-section__intro">
            <p className="services-list-section__eyebrow">LAVA MARKETING</p>
            <h2 className="services-list-section__title">Xizmatlarimiz</h2>
            <p className="services-list-section__lead">
              Biznes bosqichiga mos, natijaga yo&apos;naltirilgan xizmatlar.
            </p>
          </header>

          <div className="services-list-section__rail">
            {services.map((service, index) => (
              <article
                className={`services-list-section__card ${index % 2 ? 'services-list-section__card--offset' : ''}`}
                key={service.text}
              >
                <div className="services-list-section__meta">
                  <span className="services-list-section__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="services-list-section__divider" aria-hidden="true" />
                </div>

                <div className="services-list-section__body">
                  <span className="services-list-section__icon-wrap">
                    <service.icon className="services-list-section__icon" aria-hidden="true" />
                  </span>
                  <p className="services-list-section__text">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
