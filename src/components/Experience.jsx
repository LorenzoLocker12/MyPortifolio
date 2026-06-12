import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { experience } from '../data/content.js';
import { Icon } from './Icons.jsx';

export default function Experience() {
  return (
    <Section id="experience" index={2} eyebrow="Experience" title="Where I've shipped models">
      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 90} className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-dot" />
            </div>
            <article className="timeline-card glass">
              <header className="timeline-head">
                <div>
                  <h3>{job.company}</h3>
                  <p className="timeline-role">{job.role}</p>
                </div>
                <span className="badge">{job.highlight}</span>
              </header>
              <p className="timeline-meta mono">
                {job.period} · <Icon name="pin" size={13} /> {job.location}
              </p>
              <ul className="timeline-bullets">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 28)}>{b}</li>
                ))}
              </ul>
              <ul className="tags">
                {job.tags.map((t) => (
                  <li key={t} className="tag mono">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
