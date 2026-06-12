import { profile, sections } from '../data/content.js';
import { Icon } from './Icons.jsx';

export default function Nav({ active }) {
  return (
    <header className="nav">
      <a className="nav-logo" href="#home" aria-label="Back to top">
        <span className="nav-mark">LL</span>
        <span className="nav-name">{profile.name}</span>
      </a>
      <nav className="nav-links" aria-label="Sections">
        {sections.slice(1).map((s, i) => (
          <a key={s.id} href={`#${s.id}`} className={active === i + 1 ? 'active' : ''}>
            {s.label}
          </a>
        ))}
      </nav>
      <a className="btn btn-ghost btn-sm nav-cv" href={profile.cvFile} download>
        <Icon name="download" size={16} />
        CV
      </a>
    </header>
  );
}
