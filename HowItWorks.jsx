function HowItWorks() {
  return (
    <section style={{ padding: "100px 72px 60px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <h2 className="sk-h1" style={{ marginBottom: 12 }}>
          Your <Brand>SemaKare</Brand>. Your Complimentary Companion.
        </h2>
        <p className="sk-body" style={{ maxWidth: 640, margin: "0 auto 48px", fontSize: 16 }}>
          Managing treatment shouldn't feel overwhelming. SemaKare<TM /> supports you to make your journey simpler, clearer, and stress-free.
        </p>
        <VideoHero />
      </div>
    </section>
  );
}

function VideoHero() {
  return (
    <div style={{
      position: "relative", borderRadius: 28, overflow: "hidden",
      background: "linear-gradient(135deg,#f4f2f8 0%,#ece6f3 45%,#e7dff0 100%)",
      minHeight: 480, display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch",
    }}>
      {/* left copy block */}
      <div style={{ padding: "40px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={SK.logo} alt="" style={{ height: 42 }} />
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, position: "relative" }}>
          <h3 style={{
            fontFamily: "var(--sk-font-display)", fontSize: 44, fontWeight: 700,
            lineHeight: 1.1, color: "var(--sk-accent)", margin: 0, letterSpacing: "-0.015em",
          }}>
            How Semakare<TM /><br />will help you in your<br />diabetes journey
          </h3>
          <button style={{
            flex: "none", width: 64, height: 64, borderRadius: 999, border: 0, cursor: "pointer",
            background: "var(--sk-purple-800)", color: "#fff", display: "inline-flex",
            alignItems: "center", justifyContent: "center", boxShadow: "0 10px 24px rgba(67,31,148,.28)",
            alignSelf: "center",
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </button>
        </div>
        <div style={{ color: "var(--sk-blue-500)", fontSize: 13 }}>www.semakare.com</div>
      </div>
      {/* right blob + portrait area */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* purple blob */}
        <svg viewBox="0 0 500 480" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <g opacity="0.85">
            <ellipse cx="280" cy="180" rx="130" ry="170" fill="#c3b2ea" transform="rotate(-15 280 180)" />
            <ellipse cx="360" cy="240" rx="110" ry="150" fill="#a7d4f3" transform="rotate(20 360 240)" />
            <ellipse cx="260" cy="320" rx="120" ry="150" fill="#7a4ed0" opacity="0.6" transform="rotate(40 260 320)" />
          </g>
        </svg>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 60% 60%, transparent 40%, rgba(250,240,255,0.7) 100%)",
        }} />
      </div>
    </div>
  );
}

function DayOne() {
  const cards = [
    { title: "Guidance that meets\nyou where you are", body: "Set your dose day, learn storage tips, and prepare with confidence before your first injection.", visual: "phone-left" },
    { title: "Virtual Assistant,\nalways there when\nyou need it", body: "Plain answers for first dose nerves, injection basics, hydration, and building routines that stick.", visual: "phone-center" },
    { title: "Tracking that shows\nreal progress", body: "Helpful reminders, quick logging, and progress worth celebrating to build momentum week by week.", visual: "phone-right" },
  ];
  return (
    <section style={{ padding: "80px 72px 100px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 30, marginBottom: 32 }}>
          <div>
            <h2 className="sk-h1" style={{ marginBottom: 12 }}>
              How <Brand>SemaKare</Brand> supports you from day one
            </h2>
            <p className="sk-body" style={{ maxWidth: 560 }}>
              From the very first step, SemaKare<TM /> gives you the tools and confidence to stay on track with your treatment.
            </p>
          </div>
          <Button variant="primary" icon={<ArrowUR />}>Get the app now</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {cards.map((c, i) => (
            <div key={i} style={{
              background: "var(--sk-bg-card)", borderRadius: 28, padding: 30,
              minHeight: 520, position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              <div>
                <h3 style={{
                  fontFamily: "var(--sk-font-display)", color: "var(--sk-accent)",
                  fontSize: 24, lineHeight: 1.15, fontWeight: 700, margin: "0 0 12px",
                  whiteSpace: "pre-line", letterSpacing: "-0.01em",
                }}>{c.title}</h3>
                <p className="sk-body" style={{ fontSize: 14, maxWidth: 300 }}>{c.body}</p>
              </div>
              <div style={{ position: "relative", height: 260 }}>
                {c.visual === "phone-left" && <img src={SK.iphone14} style={{ position: "absolute", left: -30, bottom: -60, width: 340 }} />}
                {c.visual === "phone-center" && <img src={SK.virtualAssistant} style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: -40, width: 340 }} />}
                {c.visual === "phone-right" && <img src={SK.iphone16} style={{ position: "absolute", right: -40, bottom: -60, width: 320 }} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HowItWorks, DayOne });
