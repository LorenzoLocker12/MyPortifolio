import { useState } from 'react';
import { profile } from '../data/content.js';
import { Icon } from './Icons.jsx';
import ParticlePanel, { SHAPE_NAMES } from '../three/ParticleUniverse.jsx';

export default function Hero() {
  const [shape, setShape] = useState(SHAPE_NAMES[0]);

  return (
    <section id="home" className="hero">
      <div className="container container-wide">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow mono">data scientist · são paulo → the world</p>
            <h1 className="hero-title">{profile.headline}</h1>
            <p className="hero-tagline">{profile.tagline}</p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                See the work <Icon name="arrow" size={17} />
              </a>
              <a className="btn btn-ghost" href={profile.cvFile} download>
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-canvas">
              <ParticlePanel onShape={setShape} />
            </div>
            <div className="visual-caption">
              <span className="caption-fig">fig. 01 · <span className="caption-shape">{shape}</span></span>
              <span>drag to rotate</span>
            </div>
          </div>
        </div>

        <dl className="hero-stats">
          {profile.stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt className="stat-value">{s.value}</dt>
              <dd className="stat-label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to about section">
        <span className="mono">scroll</span>
        <span className="scroll-wheel" />
      </a>
    </section>
  );
}
