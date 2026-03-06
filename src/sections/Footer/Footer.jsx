import './Footer.css'

function Footer({ onOpenAudit }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="footer-contact" className="footer" aria-label="Footer">
      <div className="footer__container">
        <div className="footer__top-row">
          <h2 className="footer__headline">
            BIZNESIZDA SOTUVLARNI O&apos;STIRISH UCHUN, MARKETING VA SOTUV BO&apos;LIMINGIZNI{' '}
            <span className="footer__headline-accent">BEPULGA</span> AUDIT QILIB BERAMIZ!
          </h2>

          <button type="button" className="footer__cta" onClick={onOpenAudit}>
            BEPUL AUDITGA YOZILISH
          </button>
        </div>

        <div className="footer__divider" />

        <div className="footer__middle-row">
          <div className="footer__contact-grid">
            <div className="footer__contact-col">
              <p className="footer__contact-label">Manzil</p>
              <p className="footer__contact-value footer__contact-value--with-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="footer__contact-icon">
                  <path d="M12 2.8a7 7 0 0 1 7 7c0 5.1-7 11.4-7 11.4S5 14.9 5 9.8a7 7 0 0 1 7-7Zm0 9.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z" />
                </svg>
                <span>Toshkent shahar, Olmazor tumani, малая кольцевая 19</span>
              </p>
            </div>

            <div className="footer__contact-col footer__contact-col--bordered">
              <p className="footer__contact-label">Telefon</p>
              <a className="footer__contact-value" href="tel:+998952590059">
                95 259 00 59
              </a>
            </div>

            <div className="footer__contact-col footer__contact-col--bordered">
              <p className="footer__contact-label">Email</p>
              <a className="footer__contact-value" href="mailto:lavamarketing@gmail.com">
                lavamarketing@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom-row">
          <p className="footer__copyright">© 2026 Lava Marketing. Toshkentdagi yirik marketing agentligi.</p>

          <button
            type="button"
            className="footer__top-btn"
            onClick={scrollToTop}
            aria-label="Yuqoriga qaytish"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
