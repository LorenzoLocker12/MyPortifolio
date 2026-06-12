import Reveal from './Reveal.jsx';

export default function Section({ id, index, eyebrow, title, children, wide = false }) {
  return (
    <section id={id} className="section">
      <div className={`container ${wide ? 'container-wide' : ''}`}>
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-num">0{index}</span>
            <span className="eyebrow-line" />
            {eyebrow}
          </p>
          <h2 className="section-title">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
