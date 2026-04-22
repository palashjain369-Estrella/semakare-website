// Header — now includes the nav links the user asked for.
// Order matches Semakare Website.md sections: Home, Tools, Affordability, Get Support, HCP.

function Header({ active = "home" }) {
  const links = [
    { id: "home",          label: "Home",          href: "index.html" },
    { id: "tools",         label: "Tools",         href: "tools.html" },
    { id: "affordability", label: "Affordability", href: "affordability.html" },
    { id: "support",       label: "Get Support",   href: "getsupport.html" },
    { id: "hcp",           label: "HCP",           href: "hcp.html" },
  ];
  return (
    <header style={{
      padding: "22px 72px", display: "flex", alignItems: "center", gap: 48,
      position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
    }}>
      <img src={SK.logo} alt="SemaKare" style={{ height: 38 }} />
      <nav style={{ display: "flex", gap: 6, flex: 1, justifyContent: "center" }}>
        {links.map(l => (
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

function Hero() {
  // The hero PNG (1440×834) IS the full-bleed backdrop — it already carries its
  // own transparent left margin + built-in purple protection blob. Render at
  // natural aspect so the cyclist's face stays fully visible.
  return (
    <section style={{ position: "relative", background: "#fff", overflow: "hidden" }}>
      <Header />
      {/* full-bleed hero image */}
      <img src={SK.hero} alt=""
        style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "right center" }} />
      {/* overlaid copy block, absolutely positioned on the left where the image is transparent */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "50%", height: "100%",
        padding: "160px 72px 100px", display: "flex", flexDirection: "column", justifyContent: "center",
      }}>
        <h1 style={{
          fontFamily: "var(--sk-font-display)", fontSize: 48, lineHeight: 1.1,
          letterSpacing: "-0.015em", fontWeight: 700, margin: "0 0 20px", color: "var(--sk-fg)",
          textWrap: "balance",
        }}>
          SemaKare<TM /><br />
          Personalized support<br />
          program to make your<br />
          Semaglutide journey{" "}
          <span style={{ color: "var(--sk-blue-600)" }}>Simpler</span>
        </h1>
        <p className="sk-body" style={{ maxWidth: 420, marginBottom: 32 }}>
          Smart reminders, real-time answers and personalized guidance — so you never feel alone.
        </p>
        <div style={{ display: "flex", gap: 14 }}>
          <Button variant="primary" icon={<ArrowUR />}>Get the app now</Button>
          <Button variant="secondary" icon={<WhatsAppGlyph size={20} />}>Chat on WhatsApp</Button>
        </div>
      </div>
      {/* soft curve into the next band */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ position: "absolute", bottom: -1, left: 0, width: "100%", height: 80, display: "block" }}>
        <path d="M0,80 L1440,80 L1440,30 C1080,80 360,80 0,30 Z" fill="var(--sk-blue-50)" />
      </svg>
    </section>
  );
}

function CompanionStrip() {
  return (
    <section style={{ background: "var(--sk-blue-50)", padding: "80px 72px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, maxWidth: 1200, margin: "0 auto" }}>
        <h2 className="sk-h1" style={{ maxWidth: 460 }}>
          <Brand>Semakare</Brand> is your<br />complimentary companion for<br />better care
        </h2>
        <p className="sk-body" style={{ fontSize: 16, maxWidth: 460, alignSelf: "center" }}>
          With SemaKare<TM /> you get free tools that help you stay committed to your goals through progress tracking, smart reminders, and healthy habit support.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, CompanionStrip });
