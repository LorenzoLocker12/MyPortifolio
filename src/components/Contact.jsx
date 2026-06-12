import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { profile } from '../data/content.js';
import { Icon } from './Icons.jsx';

export default function Contact() {
  return (
    <Section id="contact" index={6} eyebrow="Contact" title="Let's build something intelligent">
      <Reveal delay={80}>
        <p className="contact-lede">
          Whether it's a predictive model, a GenAI system, or a conversation about quantum
          machine learning: my inbox is open.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal delay={120}>
          <a className="contact-card glass" href={`mailto:${profile.email}`}>
            <Icon name="mail" />
            <div>
              <h3>Email</h3>
              <p className="mono">{profile.email}</p>
            </div>
            <span className="contact-arrow">
              <Icon name="arrow" size={18} />
            </span>
          </a>
        </Reveal>
        <Reveal delay={190}>
          <a className="contact-card glass" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Icon name="linkedin" />
            <div>
              <h3>LinkedIn</h3>
              <p className="mono">in/lorenzo-locker</p>
            </div>
            <span className="contact-arrow">
              <Icon name="arrow" size={18} />
            </span>
          </a>
        </Reveal>
        <Reveal delay={260}>
          <a className="contact-card glass" href={profile.github} target="_blank" rel="noreferrer">
            <Icon name="github" />
            <div>
              <h3>GitHub</h3>
              <p className="mono">LorenzoLocker12</p>
            </div>
            <span className="contact-arrow">
              <Icon name="arrow" size={18} />
            </span>
          </a>
        </Reveal>
      </div>

      <Reveal delay={320}>
        <div className="contact-cv">
          <a className="btn btn-primary" href={profile.cvFile} download>
            <Icon name="download" size={17} /> Download full CV
          </a>
        </div>
      </Reveal>

      <footer className="footer">
        <p>
          Designed &amp; built by {profile.name} · React · Three.js
        </p>
        <a href="#home" className="mono back-top">
          back to top ↑
        </a>
      </footer>
    </Section>
  );
}
