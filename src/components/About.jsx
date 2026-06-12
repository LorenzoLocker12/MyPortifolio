import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { about } from '../data/content.js';
import { Icon } from './Icons.jsx';

export default function About() {
  return (
    <Section id="about" index={1} eyebrow="About" title="From São Paulo to Munich, one model at a time">
      <div className="about-grid">
        <Reveal className="about-text" delay={80}>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <ul className="about-facts">
            {about.facts.map((f) => (
              <li key={f.label}>
                <span className="mono fact-label">{f.label}</span>
                <span className="fact-value">{f.value}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="pillars">
          {about.pillars.map((p, i) => (
            <Reveal key={p.title} delay={120 + i * 90} className="pillar glass">
              <span className="pillar-icon">
                <Icon name={p.icon} />
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
