import './FloatingAside.css'

function FloatingAside() {
  return (
    <aside className="floating-aside" aria-label="Quick actions">
      <a href="tel:+998952590059" className="floating-aside__item" aria-label="Call">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.2 3.5h2.3l1 4.2-1.8 1.8a14.2 14.2 0 0 0 5.8 5.8l1.8-1.8 4.2 1v2.3c0 .9-.7 1.7-1.7 1.7A15.8 15.8 0 0 1 5.5 5.2c0-1 .7-1.7 1.7-1.7Z" />
        </svg>
      </a>

      <a href="https://t.me/marketing_28" className="floating-aside__item" aria-label="Telegram" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21.5 4.7 18.3 19a1.1 1.1 0 0 1-1.7.7l-4.1-3-2.1 2.1a.8.8 0 0 1-1.4-.5V14l8.6-7.8-10.5 6.1-4-1.3a1 1 0 0 1 0-1.9l17-6a1.1 1.1 0 0 1 1.4 1.6Z" />
        </svg>
      </a>

      <a
        href="https://www.instagram.com/lava_marketing_uz/"
        className="floating-aside__item"
        aria-label="Instagram"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2.8h10A4.2 4.2 0 0 1 21.2 7v10a4.2 4.2 0 0 1-4.2 4.2H7A4.2 4.2 0 0 1 2.8 17V7A4.2 4.2 0 0 1 7 2.8Zm0 1.8A2.4 2.4 0 0 0 4.6 7v10A2.4 2.4 0 0 0 7 19.4h10a2.4 2.4 0 0 0 2.4-2.4V7A2.4 2.4 0 0 0 17 4.6H7Zm11 1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3Zm0 1.8A2.9 2.9 0 1 0 14.9 12 2.9 2.9 0 0 0 12 9.1Z" />
        </svg>
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61588227418819&sk=about"
        className="floating-aside__item"
        aria-label="Facebook"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.6 21v-8h2.7l.4-3.2h-3V7.7c0-.9.3-1.5 1.6-1.5h1.5V3.3c-.3 0-1.2-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.4H8V13h2.4v8h3.2Z" />
        </svg>
      </a>
    </aside>
  )
}

export default FloatingAside
