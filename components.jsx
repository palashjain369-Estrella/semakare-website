// Shared primitives for the Semakare website UI kit.
// Exposed on window so sibling <script type="text/babel"> files can use them.

const SK = {
  logo: "assets/logo-semakare.png",
  hero: "assets/hero-cyclist.png",
  phoneDiary: "assets/phone-diary.png",
  peopleGrid: "assets/people-grid.png",
  iphone14: "assets/iphone-14-diary.png",
  iphone16: "assets/iphone-16-streak.png",
  virtualAssistant: "assets/virtual-assistant.png",
  faqPortrait: "assets/faq-portrait.png",
};

function TM() {
  return <sup style={{ fontSize: "0.48em", fontWeight: 600, verticalAlign: "super" }}>TM</sup>;
}

function Brand({ children = "SemaKare", purple = true }) {
  return (
    <span style={{ color: purple ? "var(--sk-accent)" : "inherit", fontWeight: 700 }}>
      {children}<TM />
    </span>
  );
}

function ArrowUR({ size = 14, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function WhatsAppGlyph({ size = 20 }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: size, height: size, borderRadius: 999, background: "var(--sk-green-500)", color: "#fff"
    }}>
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 3.5A11 11 0 0 0 3.3 17.8L2 22l4.3-1.3A11 11 0 1 0 20.5 3.5zM12 20a8 8 0 0 1-4-1.1l-.3-.2-2.5.8.8-2.4-.2-.3A8 8 0 1 1 12 20zm4.4-5.8c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1-.6.8-.8 1-.3.1-.5 0a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2a.4.4 0 0 0 0-.4c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8A12 12 0 0 0 13 17a4 4 0 0 0 2.7.6 2.2 2.2 0 0 0 1.5-1 1.8 1.8 0 0 0 .1-1c0-.1-.2-.2-.4-.3z" />
      </svg>
    </span>
  );
}

function HelpGlyph({ size = 16 }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: size, height: size, borderRadius: 999, background: "var(--sk-accent)",
      color: "#fff", fontSize: size * 0.65, fontWeight: 700
    }}>?</span>
  );
}

function Button({ variant = "primary", size = "md", icon, children, onClick, style }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 10, border: 0, cursor: "pointer",
    fontFamily: "var(--sk-font-sans)", fontWeight: 600, lineHeight: 1,
    borderRadius: 999, transition: "all 120ms ease-out", whiteSpace: "nowrap",
  };
  const sizes = {
    sm: { padding: "10px 18px", fontSize: 14 },
    md: { padding: "14px 24px", fontSize: 15 },
    lg: { padding: "16px 28px", fontSize: 16 },
  };
  const variants = {
    primary: { background: "var(--sk-purple-900)", color: "#fff", boxShadow: "0 4px 14px rgba(67,31,148,.18)" },
    secondary: { background: "#fff", color: "var(--sk-purple-800)", boxShadow: "inset 0 0 0 1.5px var(--sk-purple-800)" },
    ghost: { background: "#fff", color: "var(--sk-purple-800)", boxShadow: "inset 0 0 0 1.5px var(--sk-border)" },
  };
  return (
    <button onClick={onClick} style={{ ...base, ...sizes[size], ...variants[variant], ...style }}
      onMouseDown={e => e.currentTarget.style.transform = "translateY(1px)"}
      onMouseUp={e => e.currentTarget.style.transform = ""}
      onMouseLeave={e => e.currentTarget.style.transform = ""}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
}

function Eyebrow({ children }) {
  return <div className="sk-eyebrow" style={{ marginBottom: 8 }}>{children}</div>;
}

// Filled purple circle holding a white Lucide-style glyph
function PillarIcon({ name, size = 46 }) {
  const paths = {
    bell: <><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10 21a2 2 0 0 0 4 0" /></>,
    utensils: <><path d="M5 21h14" /><path d="M6 10h12l-1 8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    heart: <><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" /></>,
    clipboard: <><rect x="6" y="4" width="12" height="18" rx="2" /><rect x="9" y="2" width="6" height="4" rx="1" /><path d="M9 12h6M9 16h4" /></>,
    sparkle: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /><circle cx="12" cy="12" r="2.5" /></>,
  };
  return (
    <div style={{
      width: size, height: size, borderRadius: 999, flex: "none",
      background: "var(--sk-accent)", color: "#fff",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
    }}>
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </svg>
    </div>
  );
}

// Rainbow flower medal — approximated from the app's SIA avatar
function FlowerMedal({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        <radialGradient id="fm" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="45%" stopColor="#fff" />
          <stop offset="100%" stopColor="#e4eef6" />
        </radialGradient>
        <linearGradient id="p1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff9f6b" /><stop offset="1" stopColor="#ffd86b" /></linearGradient>
        <linearGradient id="p2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5fd38f" /><stop offset="1" stopColor="#2dbf6b" /></linearGradient>
        <linearGradient id="p3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#4da6e8" /><stop offset="1" stopColor="#7a4ed0" /></linearGradient>
        <linearGradient id="p4" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#c3b2ea" /><stop offset="1" stopColor="#ff9fd0" /></linearGradient>
      </defs>
      {[0, 60, 120, 180, 240, 300].map((r, i) => (
        <ellipse key={i} cx="32" cy="14" rx="9" ry="14"
          fill={`url(#p${(i % 4) + 1})`}
          transform={`rotate(${r} 32 32)`} opacity="0.9" />
      ))}
      <circle cx="32" cy="32" r="12" fill="url(#fm)" />
    </svg>
  );
}

// ─── Phone number modal — shown when user clicks any "Call Now" CTA ──────────
function CallModal({ number, label, hours, onClose }) {
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "rgba(15,20,36,0.55)", backdropFilter: "blur(4px)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#fff", borderRadius: 24, padding: "40px 44px",
        width: 400, boxShadow: "0 24px 60px rgba(15,20,36,0.2)", textAlign: "center",
      }}>
        <div style={{ fontSize: 13, color: "var(--sk-fg-subtle)", marginBottom: 10 }}>{label}</div>
        <div style={{
          fontSize: 38, fontWeight: 800, color: "var(--sk-accent)",
          fontFamily: "var(--sk-font-display)", letterSpacing: "-0.02em", marginBottom: 8,
        }}>{number}</div>
        <div style={{
          display: "inline-block", padding: "6px 14px", borderRadius: 999,
          background: "var(--sk-green-500)" + "18", color: "var(--sk-green-500)",
          fontSize: 13, fontWeight: 600, marginBottom: 28,
        }}>{hours}</div>
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <a href={`tel:${number.replace(/[-\s]/g, "")}`} style={{ textDecoration: "none" }}>
            <button style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "13px 24px", borderRadius: 999, border: "none",
              background: "var(--sk-accent)", color: "#fff",
              fontSize: 15, fontWeight: 700, cursor: "pointer",
              fontFamily: "var(--sk-font-sans)",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.8 12.07 19.79 19.79 0 0 1 1.76 3.48 2 2 0 0 1 3.74 1.3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/>
              </svg>
              Tap to Call
            </button>
          </a>
          <button onClick={onClose} style={{
            padding: "13px 20px", borderRadius: 999,
            border: "1.5px solid var(--sk-border-soft)", background: "#fff",
            fontSize: 15, fontWeight: 600, cursor: "pointer",
            color: "var(--sk-fg)", fontFamily: "var(--sk-font-sans)",
          }}>Close</button>
        </div>
        <div style={{ fontSize: 12, color: "var(--sk-fg-subtle)", marginTop: 16 }}>
          Toll-free · Works from all networks across India
        </div>
      </div>
    </div>
  );
}

// Reusable "Call Now" button that triggers the modal
function CallNowButton({ number, label, hours, variant = "primary", size = "lg" }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant={variant} size={size} onClick={() => setOpen(true)}>Call Now</Button>
      {open && <CallModal number={number} label={label} hours={hours} onClose={() => setOpen(false)} />}
    </>
  );
}

// Sticky white header for inner pages (Tools, Affordability, Get Support, HCP-derived)
function InnerHeader({ active = "home" }) {
  const items = [
    { id: "home",         label: "Home",          href: "index.html" },
    { id: "tools",        label: "Tools",         href: "tools.html" },
    { id: "affordability",label: "Affordability", href: "affordability.html" },
    { id: "support",      label: "Get Support",   href: "getsupport.html" },
    { id: "hcp",          label: "HCP",           href: "hcp.html" },
  ];
  return (
    <header style={{
      background: "#fff", boxShadow: "0 1px 0 var(--sk-border-soft)",
      padding: "18px 72px", display: "flex", alignItems: "center", gap: 48,
      position: "sticky", top: 0, zIndex: 20,
    }}>
      <a href="index.html" style={{ display: "inline-flex", flexShrink: 0 }}>
        <img src="assets/logo-semakare.png" alt="SemaKare" style={{ height: 36 }} />
      </a>
      <nav style={{ display: "flex", gap: 6, flex: 1, justifyContent: "center" }}>
        {items.map(l => (
          <a key={l.id} href={l.href} style={{
            padding: "10px 16px", borderRadius: 999, fontSize: 14, fontWeight: 600,
            color: l.id === active ? "var(--sk-accent)" : "var(--sk-fg)",
            background: l.id === active ? "var(--sk-purple-100)" : "transparent",
            textDecoration: "none", transition: "all 120ms ease-out",
          }}
          onMouseEnter={e => { if (l.id !== active) e.currentTarget.style.background = "var(--sk-gray-100)"; }}
          onMouseLeave={e => { if (l.id !== active) e.currentTarget.style.background = "transparent"; }}
          >{l.label}</a>
        ))}
      </nav>
      <Button variant="ghost" size="sm" icon={<HelpGlyph size={18} />}>Need Help?</Button>
    </header>
  );
}

Object.assign(window, { SK, TM, Brand, ArrowUR, WhatsAppGlyph, HelpGlyph, Button, Eyebrow, PillarIcon, FlowerMedal, CallModal, CallNowButton, InnerHeader });
