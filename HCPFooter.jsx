// HCP page — flow: CTAs + trust/credibility + HCP-specific footer.

function HCPCTAs() {
  const actions = [
    { ic: "login", title: "Access the platform", body: "Sign in or register with your MCI number.", btn: "Sign in to DocVidya" },
    { ic: "play", title: "Start learning", body: "Pick up a module. New content monthly.", btn: "Browse modules" },
    { ic: "doc", title: "Generate content", body: "Download co-branded handouts for your patients.", btn: "Open library" },
  ];
  return (
    <section style={{ padding: "100px 72px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="sk-eyebrow" style={{ marginBottom: 8 }}>Quick actions</div>
          <h2 className="sk-h1">Pick up where you left off.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {actions.map((a, i) => (
            <div key={i} style={{
              background: "#fff", border: "1px solid var(--sk-border-soft)", borderRadius: 22,
              padding: 28, display: "flex", flexDirection: "column", gap: 14, minHeight: 220,
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--sk-purple-100)", color: "var(--sk-accent)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {a.ic === "login" && <><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><path d="M10 17l5-5-5-5M15 12H3" /></>}
                  {a.ic === "play" && <><circle cx="12" cy="12" r="9"/><path d="M10 9l6 3-6 3z" fill="currentColor" stroke="none"/></>}
                  {a.ic === "doc" && <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></>}
                </svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "var(--sk-fg)" }}>{a.title}</div>
              <div className="sk-body" style={{ fontSize: 14, marginTop: -4, marginBottom: 6, flex: 1 }}>{a.body}</div>
              <div>
                <Button variant="secondary" size="sm" icon={<ArrowUR size={12} />}>{a.btn}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustLayer() {
  return (
    <section style={{ padding: "80px 72px", background: "var(--sk-bg-card)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, alignItems: "center" }}>
        <div>
          <div className="sk-eyebrow" style={{ marginBottom: 8 }}>Trust &amp; credibility</div>
          <h2 className="sk-h2" style={{ marginBottom: 16 }}>Built for the way Indian clinicians actually work.</h2>
          <p className="sk-body">DocVidya content is created with endocrinology faculty, reviewed against current guidelines, and delivered on a platform backed by Dr. Reddy's — one of India's most trusted names in diabetes care.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            { t: "IMA Accredited", s: "CME hours counted toward council re-registration" },
            { t: "Clinically reviewed", s: "Every module signed off by faculty" },
            { t: "Backed by Dr. Reddy's", s: "India's diabetes-care legacy" },
            { t: "Privacy-first", s: "Patient data never leaves your chamber" },
          ].map((b, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 18, padding: 20, border: "1px solid var(--sk-border-soft)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: 999, background: "var(--sk-accent)", color: "#fff", marginBottom: 12 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "var(--sk-fg)", marginBottom: 4 }}>{b.t}</div>
              <div style={{ fontSize: 12, color: "var(--sk-fg-muted)", lineHeight: 1.5 }}>{b.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HCPFooter() {
  return (
    <footer style={{ background: "#0f1424", color: "#e4e5ea", padding: "60px 72px 36px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 44 }}>
          <div>
            <img src="../../assets/logo-semakare.png" alt="SemaKare" style={{ height: 30, filter: "brightness(0) invert(1)", marginBottom: 10 }} />
            <div style={{ fontSize: 11, opacity: 0.6, letterSpacing: "0.06em", marginBottom: 14 }}>FOR HEALTHCARE PROFESSIONALS</div>
            <img src="../../assets/docvidya-logo.png" alt="DocVidya" style={{ height: 26, opacity: 0.95, filter: "brightness(0) invert(1)" }} />
            <p style={{ fontSize: 12, lineHeight: 1.6, marginTop: 16, opacity: 0.6, maxWidth: 320 }}>
              An engagement platform by Dr. Reddy's for Indian healthcare professionals treating type-2 diabetes and obesity.
            </p>
          </div>
          {[
            { h: "DocVidya", items: ["CME modules", "Content library", "Clinic branding", "Faculty"] },
            { h: "For patients", items: ["SemaKare™ Home", "Get Support", "Affordability", "Tools"] },
            { h: "Compliance", items: ["For HCPs only", "Regulatory notice", "Privacy policy", "Terms of service"] },
          ].map((c, i) => (
            <div key={i}>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 14 }}>{c.h}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 9 }}>
                {c.items.map((t, j) => <li key={j} style={{ fontSize: 12, opacity: 0.7, cursor: "pointer" }}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 24, display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}>
          <div style={{ fontSize: 11, opacity: 0.55, lineHeight: 1.7, maxWidth: 820 }}>
            This site is intended for registered healthcare professionals in India only. Information presented on DocVidya is for medical education purposes and does not replace clinical judgment. Semaglutide should be prescribed in accordance with local regulations and product labelling. CME credits are issued subject to module completion and IMA accreditation policies. © {new Date().getFullYear()} Dr. Reddy's Laboratories.
          </div>
          <a href="index.html" style={{ color: "#a7d4f3", fontSize: 12, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
            Back to patient site <ArrowUR size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { HCPCTAs, TrustLayer, HCPFooter });
