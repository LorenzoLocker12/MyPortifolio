// Minimal inline icon set (stroke-based, inherits currentColor)
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function Icon({ name, size = 22 }) {
  const paths = {
    model: (
      <>
        <path d="M3 20L8 12l4 5 4-9 5 7" />
        <path d="M3 4v16h18" />
      </>
    ),
    genai: (
      <>
        <path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5z" />
        <path d="M18.5 15l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" />
      </>
    ),
    vision: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    quantum: (
      <>
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
      </>
    ),
    recsys: (
      <>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="17" r="2" />
        <circle cx="19" cy="17" r="2" />
        <circle cx="12" cy="13" r="1.4" />
        <path d="M12 7v4.6M10.9 14.1L6.5 15.9M13.1 14.1l4.4 1.8" />
      </>
    ),
    medical: (
      <>
        <path d="M12 4v16M4 12h16" />
        <rect x="3" y="3" width="18" height="18" rx="4" />
      </>
    ),
    logistics: (
      <>
        <path d="M3 16V8l9-5 9 5v8l-9 5z" />
        <path d="M3 8l9 5 9-5M12 13v8" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v7M7 7v.1M11 17v-4a2.5 2.5 0 015 0v4" />
      </>
    ),
    github: (
      <path d="M12 2.5a9.5 9.5 0 00-3 18.5c.5.1.65-.2.65-.45v-1.7c-2.65.6-3.2-1.25-3.2-1.25-.45-1.1-1.05-1.4-1.05-1.4-.85-.6.05-.6.05-.6.95.05 1.45 1 1.45 1 .85 1.45 2.2 1.05 2.75.8.1-.6.35-1.05.6-1.3-2.1-.25-4.3-1.05-4.3-4.7 0-1.05.35-1.9 1-2.55-.1-.25-.45-1.2.1-2.55 0 0 .8-.25 2.6 1a9 9 0 014.75 0c1.8-1.25 2.6-1 2.6-1 .55 1.35.2 2.3.1 2.55.6.65 1 1.5 1 2.55 0 3.65-2.25 4.45-4.35 4.7.35.3.65.85.65 1.75v2.6c0 .25.15.55.65.45A9.5 9.5 0 0012 2.5z" />
    ),
    pin: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12M7 10l5 5 5-5" />
        <path d="M4 19h16" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    spark: (
      <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
    ),
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      {paths[name] || paths.spark}
    </svg>
  );
}
