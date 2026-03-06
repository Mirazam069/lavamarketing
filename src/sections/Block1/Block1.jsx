import './Block1.css'

function Block1() {
  return (
    <section className="block1" aria-label="Block 1">
      <div className="block1__container">
        <span className="block1__badge">SOTUVGA ISHLAYDIGAN TIZIM</span>

        <h1 className="block1__title">BIZNESGA SMM EMAS, NATIJA BERAMIZ!</h1>

        <div className="block1__card">
          <p className="block1__paragraph">
            Ko‘p bizneslarda muammo reklamada emas.
            <br />
            Muammo — lidni sotuvga aylantiradigan tizim yo‘qligi: admin javob
            beradi, lekin sotuvlar o’smaydi!
          </p>
        </div>

        <h2 className="block1__subtitle">
          Marketing va sotuvni yagona tizimga birlashtiramiz
        </h2>
      </div>
    </section>
  )
}

export default Block1
