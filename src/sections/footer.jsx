import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <h2 className="footer-title">
            BIZNESIZDA SOTUVLARNI O'STIRISH UCHUN, MARKETING VA SOTUV BO'LIMINGIZNI BEPULGA AUDIT QILIB BERAMIZ!
          </h2>

          <button className="footer-btn">
            LET'S TALK!
          </button>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-middle">

          <div className="newsletter">
            <h3>Our Newsletter</h3>

            <div className="newsletter-input">

              <input
                type="email"
                placeholder="Your email address"
              />

              <button className="newsletter-send">
                ✉
              </button>

            </div>
          </div>


          <div className="footer-contact">

            <div>
              <span>Call us</span>
              <p>+(213) 555-8573</p>
            </div>

            <div>
              <span>Drop us a line</span>
              <p>inquiry@pixora.com</p>
            </div>

            <div>
              <span>Skype</span>
              <p>pixoraagency</p>
            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <p>© 2026 Pixora, All rights reserved.</p>

          <button className="scroll-top">
            ↑
          </button>

        </div>

      </div>

    </footer>
  );
}