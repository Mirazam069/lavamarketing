import './HeroPixora.css'

function HeroPixora({ onOpenAudit }) {
  const bodyLine1 = 'Ko\u2018p bizneslarda muammo reklamada emas.'
  const bodyLine2 =
    'Muammo \u2014 lidni sotuvga aylantiradigan tizim yo\u2018qligi: admin javob beradi, lekin sotuvlar o\u2019smaydi!'

  return (
    <section id="hero-pixora" className="hero-pixora" aria-label="Hero Pixora">
      <div className="hero-pixora__shell">
        <div className="hero-pixora__content">
          <h1 className="hero-pixora__title">
            BIZNESGA SMM 
            <br className="hero-pixora__break hero-pixora__break--mobile" />
             EMAS
            <br className="hero-pixora__break hero-pixora__break--desktop" />
            <span className="hero-pixora__title-accent">NATIJA</span>
            <br className="hero-pixora__break hero-pixora__break--mobile" />
            BERAMIZ!
          </h1>

          <p className="hero-pixora__text">
            {bodyLine1}
            <br />
            {bodyLine2}
          </p>


          <button type="button" className="hero-pixora__cta" onClick={onOpenAudit}>
            BEPUL AUDITGA YOZILISH
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroPixora
