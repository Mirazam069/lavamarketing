import { useEffect, useState } from 'react'
import './AuditModal.css'

function AuditModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  const submitLead = async (event) => {
    event.preventDefault()
    setError('')

    const trimmedName = name.trim()
    const trimmedPhone = phone.trim()

    if (!trimmedName || !trimmedPhone) {
      setError('Ism va raqamni to‘ldiring.')
      return
    }

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      setError('Telegram sozlamalari topilmadi: VITE_TELEGRAM_BOT_TOKEN va VITE_TELEGRAM_CHAT_ID.')
      return
    }

    setStatus('sending')

    const message = [
      'Yangi audit so‘rovi:',
      `Ism: ${trimmedName}`,
      `Raqam: ${trimmedPhone}`,
      `Sana: ${new Date().toLocaleString('uz-UZ')}`,
    ].join('\n')

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      })

      if (!response.ok) {
        throw new Error('Telegram API xato qaytardi')
      }

      setStatus('success')
      setName('')
      setPhone('')
    } catch (err) {
      setStatus('idle')
      setError('Yuborishda xatolik bo‘ldi. Qayta urinib ko‘ring.')
    }
  }

  return (
    <div className="audit-modal" onClick={onClose} role="presentation">
      <div className="audit-modal__panel" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="audit-modal__close" onClick={onClose} aria-label="Yopish">
          ×
        </button>

        <h3 className="audit-modal__title">Bepul Auditga Yozilish</h3>
        <p className="audit-modal__subtitle">Ismingiz va telefon raqamingizni qoldiring.</p>

        <form className="audit-modal__form" onSubmit={submitLead}>
          <label className="audit-modal__label" htmlFor="audit-name">
            Ism
          </label>
          <input
            id="audit-name"
            className="audit-modal__input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ismingiz"
            autoComplete="name"
          />

          <label className="audit-modal__label" htmlFor="audit-phone">
            Telefon raqami
          </label>
          <input
            id="audit-phone"
            className="audit-modal__input"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="95 259 00 59"
            autoComplete="tel"
          />

          {error && <p className="audit-modal__error">{error}</p>}
          {status === 'success' && (
            <p className="audit-modal__success">Ma&apos;lumot yuborildi. Tez orada bog&apos;lanamiz.</p>
          )}

          <button type="submit" className="audit-modal__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Yuborilmoqda...' : 'Yuborish'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AuditModal
