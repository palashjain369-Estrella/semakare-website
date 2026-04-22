// HCP page — healthcare-professional-facing surface.
// Visual language: same Semakare purple/blue system.
// Tone: clinical, credible, utility-driven. Copy is DESIGNED (not provided);
// flag for user review before publishing.

function HCPHeader() {
  // Different active state vs homepage — HCP tab lit
  return (
    <header style={{
      padding: "22px 72px", display: "flex", alignItems: "center", gap: 48,
      position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
    }}>
      <a href="index.html" aria-label="SemaKare home" style={{ display: "inline-flex" }}><img src="../../assets/logo-semakare.png" alt="SemaKare" style={{ height: 38 }} /></a>
      <nav style={{ display: "flex", gap: 6, flex: 1, justifyContent: "center" }}>
        {[
          { id: "home", label: "Home", href: "index.html" },
          { id: "tools",         label: "Tools",         href: "tools.html" },
          { id: "affordability", label: "Affordability", href: "affordability.html" },
          { id: "support",       label: "Get Support",   href: "getsupport.html" },
          { id: "hcp", label: "HCP" },
        ].map(l => (
          <a key={l.id} href={l.href || `#${l.id}`} style={{
            padding: "10px 16px", borderRadius: 999, fontSize: 14, fontWeight: 600,
            color: l.id === "hcp" ? "var(--sk-accent)" : "var(--sk-fg)",
            background: l.id === "hcp" ? "var(--sk-purple-100)" : "transparent",
            textDecoration: "none",
          }}>{l.label}</a>
        ))}
      </nav>
      <Button variant="ghost" size="sm" icon={<HelpGlyph size={18} />}>Need Help?</Button>
    </header>
  );
}

function HCPHero() {
  return (
    <section style={{ position: "relative", background: "linear-gradient(180deg,#ffffff 0%, #eaf6ff 100%)", padding: "150px 72px 80px", overflow: "hidden" }}>
      <HCPHeader />
      {/* soft purple petal decorations */}
      <svg viewBox="0 0 1440 600" preserveAspectRatio="none" style={{ position: "absolute", top: 0, right: -100, width: 700, height: "100%", opacity: 0.5, pointerEvents: "none" }}>
        <ellipse cx="500" cy="200" rx="180" ry="230" fill="#c3b2ea" transform="rotate(-18 500 200)" />
        <ellipse cx="600" cy="320" rx="140" ry="190" fill="#a7d4f3" transform="rotate(25 600 320)" />
      </svg>
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", borderRadius: 999, background: "var(--sk-purple-100)", color: "var(--sk-accent)", fontSize: 13, fontWeight: 600, marginBottom: 20 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
            For Healthcare Professionals
          </div>
          <h1 style={{
            fontFamily: "var(--sk-font-display)", fontSize: 52, lineHeight: 1.08, letterSpacing: "-0.015em",
            fontWeight: 700, margin: "0 0 20px", color: "var(--sk-fg)",
          }}>
            Support your patients<br />beyond the prescription.
          </h1>
          <p className="sk-lead" style={{ maxWidth: 540, marginBottom: 28 }}>
            Earn CME credits, stay current with the latest in GLP-1 therapy, and generate co-branded patient education — all in one place, backed by Dr. Reddy's.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Button variant="primary" icon={<ArrowUR />}>Access DocVidya</Button>
            <Button variant="secondary">Start a module</Button>
          </div>
          <div style={{ display: "flex", gap: 28, marginTop: 36, flexWrap: "wrap" }}>
            {[
              { num: "30+", label: "CME hours available" },
              { num: "IMA", label: "Accredited modules" },
              { num: "14k+", label: "Clinicians on DocVidya" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "var(--sk-font-display)", fontSize: 28, fontWeight: 700, color: "var(--sk-accent)", letterSpacing: "-0.01em" }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "var(--sk-fg-subtle)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* DocVidya branded card */}
        <div style={{ position: "relative" }}>
          <div style={{
            background: "#fff", borderRadius: 28, padding: 32,
            boxShadow: "0 24px 60px rgba(67,31,148,.12)", border: "1px solid var(--sk-border-soft)",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <img src="../../assets/docvidya-logo.png" alt="DocVidya" style={{ height: 30 }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "var(--sk-fg-subtle)", letterSpacing: "0.06em" }}>BY DR. REDDY'S</span>
            </div>
            <div style={{ background: "var(--sk-purple-100)", borderRadius: 18, padding: 20, marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--sk-accent)", letterSpacing: "0.06em", marginBottom: 6 }}>LIVE MODULE</div>
              <div style={{ fontWeight: 700, fontSize: 17, color: "var(--sk-fg)", marginBottom: 4, lineHeight: 1.3 }}>
                GLP-1 therapy in T2D: titration, tolerance & long-term outcomes
              </div>
              <div style={{ fontSize: 12, color: "var(--sk-fg-muted)", marginBottom: 14 }}>45 min · 2 CME credits</div>
              <button style={{ background: "var(--sk-purple-900)", color: "#fff", border: 0, borderRadius: 999, padding: "10px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Resume module <ArrowUR size={12} />
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { title: "Obesity as chronic disease", meta: "30 min · 1 CME" },
                { title: "Patient-sharable content", meta: "Co-branded with your clinic" },
              ].map((m, i) => (
                <div key={i} style={{ background: "var(--sk-gray-100)", borderRadius: 14, padding: 14 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: "var(--sk-fg)", lineHeight: 1.3, marginBottom: 4 }}>{m.title}</div>
                  <div style={{ fontSize: 11, color: "var(--sk-fg-subtle)" }}>{m.meta}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HCPPillars() {
  return (
    <section style={{ padding: "100px 72px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="sk-eyebrow" style={{ marginBottom: 8 }}>What you get</div>
          <h2 className="sk-h1" style={{ marginBottom: 12, maxWidth: 720, margin: "0 auto" }}>
            Two ways DocVidya works alongside your practice.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          {/* Pillar A — CME */}
          <div style={{ background: "var(--sk-bg-card)", borderRadius: 28, padding: 36, minHeight: 440, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "6px 12px", borderRadius: 999, background: "#fff", color: "var(--sk-accent)", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--sk-accent)" }} />
              CME · LEARNING
            </div>
            <h3 style={{ fontFamily: "var(--sk-font-display)", color: "var(--sk-accent)", fontSize: 30, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: "-0.015em" }}>
              IMA accredited.<br />Earn CME credits.
            </h3>
            <p className="sk-body" style={{ fontSize: 15, marginBottom: 24 }}>
              Take exclusive modules on GLP-1 therapy in T2D and obesity as a chronic disease. Courses count toward your mandatory 30-hour requirement for medical council re-registration.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "grid", gap: 10 }}>
              {[
                "Curated by endocrinology faculty",
                "Certificate issued on completion",
                "Bite-sized, 15–45 min modules",
              ].map((t, i) => (
                <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: "var(--sk-fg)" }}>
                  <span style={{ flex: "none", width: 20, height: 20, borderRadius: 999, background: "var(--sk-accent)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "auto" }}>
              <a href="#" style={{ color: "var(--sk-accent)", fontWeight: 600, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                Access courses on DocVidya <ArrowUR size={12} />
              </a>
            </div>
          </div>
          {/* Pillar B — Practice Growth */}
          <div style={{ background: "var(--sk-purple-900)", color: "#fff", borderRadius: 28, padding: 36, minHeight: 440, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
            <svg viewBox="0 0 400 300" style={{ position: "absolute", right: -60, bottom: -40, width: 360, opacity: 0.15, pointerEvents: "none" }}>
              <ellipse cx="200" cy="150" rx="130" ry="170" fill="#a7d4f3" transform="rotate(-20 200 150)" />
              <ellipse cx="260" cy="180" rx="100" ry="140" fill="#c3b2ea" transform="rotate(20 260 180)" />
            </svg>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", padding: "6px 12px", borderRadius: 999, background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "#a7d4f3" }} />
              PRACTICE GROWTH
            </div>
            <h3 style={{ fontFamily: "var(--sk-font-display)", fontSize: 30, lineHeight: 1.15, fontWeight: 700, margin: "0 0 16px", letterSpacing: "-0.015em", position: "relative" }}>
              Patient-sharable<br />content, co-branded.
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,.82)", marginBottom: 24, position: "relative" }}>
              Generate high-quality, clinical educational materials for your patients. Everything you download from DocVidya automatically carries your clinic branding at the bottom — building trust and engagement at a glance.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "grid", gap: 10, position: "relative" }}>
              {[
                "Auto-stamped with your clinic logo",
                "Print-ready + WhatsApp-ready",
                "Updated as guidelines evolve",
              ].map((t, i) => (
                <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14 }}>
                  <span style={{ flex: "none", width: 20, height: 20, borderRadius: 999, background: "#a7d4f3", color: "var(--sk-purple-900)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "auto", position: "relative" }}>
              <a href="#" style={{ color: "#fff", fontWeight: 600, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                Generate branded content <ArrowUR size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyDocVidya() {
  return (
    <section style={{ padding: "100px 72px", background: "var(--sk-blue-50)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div className="sk-eyebrow" style={{ marginBottom: 8 }}>Why DocVidya?</div>
        <h2 className="sk-h1" style={{ marginBottom: 18 }}>
          A bridge between the doctor's chamber and the patient's journey.
        </h2>
        <p className="sk-lead" style={{ maxWidth: 760, margin: "0 auto 56px" }}>
          DocVidya is a dedicated engagement platform created by Dr. Reddy's to support healthcare professionals — a seamless experience for continuing education and for empowering patients with accurate, branded information.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, textAlign: "left" }}>
          {[
            { ic: "book", title: "Stay current", body: "CME modules on GLP-1 therapy, obesity, and T2D — curated by faculty, updated as guidelines evolve." },
            { ic: "share", title: "Share with confidence", body: "Download and share clinically-reviewed patient education, auto-branded with your clinic identity." },
            { ic: "trend", title: "Grow your practice", body: "Build patient trust, improve adherence, and strengthen engagement — one conversation at a time." },
          ].map((b, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 20, padding: 28, border: "1px solid var(--sk-border-soft)" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--sk-purple-100)", color: "var(--sk-accent)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {b.ic === "book" && <><path d="M4 4h7a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H4z"/><path d="M20 4h-7a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h8z"/></>}
                  {b.ic === "share" && <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></>}
                  {b.ic === "trend" && <><path d="M3 17l6-6 4 4 7-7"/><path d="M14 8h6v6"/></>}
                </svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "var(--sk-fg)", marginBottom: 6 }}>{b.title}</div>
              <div className="sk-body" style={{ fontSize: 14 }}>{b.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HCPHeader, HCPHero, HCPPillars, WhyDocVidya });
