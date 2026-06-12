import { useRef } from 'react';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { projects } from '../data/content.js';
import { Icon } from './Icons.jsx';

function TiltCard({ children, className }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-5px)`;
  };
  const onLeave = () => {
    ref.current.style.transform = '';
  };

  return (
    <article ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" index={3} eyebrow="Projects" title="Selected work & research" wide>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 90}>
            <TiltCard className="project-card glass">
              <header className="project-head">
                <span className="project-icon">
                  <Icon name={p.icon} />
                </span>
                <span className="badge">{p.impact}</span>
              </header>
              <h3>{p.title}</h3>
              <p className="project-context mono">{p.context}</p>
              <p className="project-text">{p.text}</p>
              <ul className="tags">
                {p.tags.map((t) => (
                  <li key={t} className="tag mono">
                    {t}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
