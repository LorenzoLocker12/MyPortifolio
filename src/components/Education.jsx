import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { education } from '../data/content.js';
import { Icon } from './Icons.jsx';

export default function Education() {
  return (
    <Section id="education" index={5} eyebrow="Education" title="Always in training">
      <div className="edu-grid">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 90} className={`edu-card glass ${e.badge ? 'edu-featured' : ''}`}>
            {e.badge && (
              <span className="badge badge-amber">
                <Icon name="spark" size={13} /> {e.badge}
              </span>
            )}
            <h3>{e.school}</h3>
            <p className="edu-degree">{e.degree}</p>
            <p className="timeline-meta mono">
              {e.period} · <Icon name="pin" size={13} /> {e.location}
            </p>
            <p className="edu-text">{e.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
