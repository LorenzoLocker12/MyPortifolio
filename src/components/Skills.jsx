import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { skills, languages } from '../data/content.js';

export default function Skills() {
  return (
    <Section id="skills" index={4} eyebrow="Skills" title="The toolbox">
      <div className="skills-grid">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 80} className="skill-group glass">
            <h3>{g.group}</h3>
            <ul className="chips">
              {g.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150} className="languages glass">
        <h3>Human languages</h3>
        <div className="lang-grid">
          {languages.map((l) => (
            <div className="lang" key={l.name}>
              <div className="lang-head">
                <span>{l.name}</span>
                <span className="mono lang-level">{l.level}</span>
              </div>
              <div className="lang-bar">
                <span className="lang-fill" style={{ '--w': `${l.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
