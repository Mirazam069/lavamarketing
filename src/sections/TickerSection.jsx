import "./TickerSection.css";

export default function ScrollingBanner() {
  return (
    <section className="scroll-banner">

      <div className="scroll-track">

        <div className="scroll-content">
          <span className="big-text">OTHER</span>

          <div className="talk-badge">
            <span>LET'S</span>
            <span>TALK</span>
          </div>

          <span className="big-text">WEB DESIGN & DEVELOPMENT</span>

          <div className="talk-badge">
            <span>LET'S</span>
            <span>TALK</span>
          </div>
        </div>

        {/* duplicate for infinite */}
        <div className="scroll-content">
          <span className="big-text">OTHER</span>

          <div className="talk-badge">
            <span>LET'S</span>
            <span>TALK</span>
          </div>

          <span className="big-text">WEB DESIGN & DEVELOPMENT</span>

          <div className="talk-badge">
            <span>LET'S</span>
            <span>TALK</span>
          </div>
        </div>

      </div>

      <div className="bottom-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </section>
  );
}