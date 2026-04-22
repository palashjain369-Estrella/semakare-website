// Patient Stories (carousel-style testimonials) + KOL / Expert statement
// Content is DESIGNED fresh since the spec only titled these sections.
// Names, quotes, and KOL details are plausibly realistic but fictional —
// please replace with real patient/KOL content before publishing.

function PatientStories() {
  const stories = [
    {
      name: "Aarti S.",
      city: "Pune",
      age: "42, on SemaKare for 6 months",
      quote: "The weekly reminder is the one thing I never ignore. I've logged every dose since week two — my HbA1c is down from 8.1 to 6.9.",
      portrait: 0,
    },
    {
      name: "Ravi K.",
      city: "Bengaluru",
      age: "38, on SemaKare for 3 months",
      quote: "I was terrified of the first injection. SIA answered every question at 2 AM. Honestly, it felt like someone was beside me.",
      portrait: 1,
    },
    {
      name: "Priya M.",
      city: "Mumbai",
      age: "51, on SemaKare for 9 months",
      quote: "The diet tips are in plain Hindi and English. My whole family follows them now. I've dropped 11 kilos without feeling hungry.",
      portrait: 2,
    },
  ];
  const [i, setI] = React.useState(0);
  const s = stories[i];
  return (
    <section id="stories" style={{ padding: "100px 72px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="sk-eyebrow" style={{ marginBottom: 8 }}>Patient stories</div>
          <h2 className="sk-h1" style={{ marginBottom: 12 }}>
            Real people. Real progress.
          </h2>
          <p className="sk-body" style={{ maxWidth: 560, margin: "0 auto" }}>
            A few of the thousands who use SemaKare<TM /> every week to stay on track with their Semaglutide therapy.
          </p>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "360px 1fr", gap: 48, alignItems: "center",
          background: "var(--sk-bg-card)", borderRadius: 28, padding: 36, minHeight: 340,
          position: "relative", overflow: "hidden",
        }}>
          {/* portrait from the community grid — tile i */}
          <div style={{
            width: 300, height: 300, borderRadius: 24, overflow: "hidden", position: "relative",
            boxShadow: "0 12px 40px rgba(67,31,148,.12)",
          }}>
            <img src={SK.peopleGrid} alt={s.name} style={{
              position: "absolute",
              width: 832, height: 568,
              // roughly land on a different portrait per index
              left: i === 0 ? -80 : i === 1 ? -300 : -560,
              top: i === 0 ? -40 : i === 1 ? -40 : -40,
              display: "block",
            }} />
          </div>
          <div>
            <svg width="36" height="28" viewBox="0 0 36 28" style={{ color: "var(--sk-purple-300)", marginBottom: 14 }} fill="currentColor">
              <path d="M0 28V17C0 8 5 2 14 0l2 4c-5 2-8 6-8 10h8v14H0zm20 0V17c0-9 5-15 14-17l2 4c-5 2-8 6-8 10h8v14H20z" />
            </svg>
            <p style={{
              fontFamily: "var(--sk-font-display)", fontSize: 24, lineHeight: 1.4,
              color: "var(--sk-fg)", fontWeight: 500, letterSpacing: "-0.01em",
              margin: "0 0 28px", maxWidth: 620,
            }}>
              "{s.quote}"
            </p>
            <div style={{ fontWeight: 700, fontSize: 16, color: "var(--sk-accent)", marginBottom: 2 }}>
              {s.name}, {s.city}
            </div>
            <div style={{ fontSize: 13, color: "var(--sk-fg-subtle)" }}>{s.age}</div>
            <div style={{ display: "flex", gap: 10, marginTop: 32, alignItems: "center" }}>
              {stories.map((_, ix) => (
                <button key={ix} onClick={() => setI(ix)} aria-label={`Story ${ix + 1}`} style={{
                  width: ix === i ? 28 : 10, height: 10, borderRadius: 999, border: 0, cursor: "pointer",
                  background: ix === i ? "var(--sk-accent)" : "var(--sk-gray-300)",
                  transition: "all 150ms ease-out", padding: 0,
                }} />
              ))}
              <div style={{ flex: 1 }} />
              <CarouselArrow dir="prev" onClick={() => setI((i - 1 + stories.length) % stories.length)} />
              <CarouselArrow dir="next" onClick={() => setI((i + 1) % stories.length)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarouselArrow({ dir, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: 40, height: 40, borderRadius: 999, border: "1.5px solid var(--sk-purple-800)",
      background: "#fff", color: "var(--sk-purple-800)", cursor: "pointer",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      transition: "all 120ms ease-out",
    }}
    onMouseEnter={e => { e.currentTarget.style.background = "var(--sk-purple-100)"; }}
    onMouseLeave={e => { e.currentTarget.style.background = "#fff"; }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        {dir === "prev" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  );
}

function KOLStatement() {
  return (
    <section style={{ padding: "80px 72px 100px", background: "var(--sk-blue-50)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div className="sk-eyebrow" style={{ marginBottom: 10 }}>Expert's perspective</div>
        <h2 className="sk-h2" style={{ marginBottom: 40 }}>
          Trusted by clinicians who treat diabetes every day.
        </h2>
        <div style={{
          background: "#fff", borderRadius: 28, padding: "40px 48px",
          display: "grid", gridTemplateColumns: "auto 1fr", gap: 36, alignItems: "center",
          textAlign: "left", boxShadow: "0 8px 30px rgba(67,31,148,.06)",
        }}>
          <div style={{
            width: 120, height: 120, borderRadius: 999, overflow: "hidden", flex: "none",
            position: "relative", boxShadow: "inset 0 0 0 3px var(--sk-purple-100)",
          }}>
            {/* reuse the FAQ portrait as a circular avatar placeholder */}
            <img src={SK.faqPortrait} alt=""
              style={{ width: 220, height: 220, objectFit: "cover", objectPosition: "55% 35%", marginLeft: -50, marginTop: -40 }} />
          </div>
          <div>
            <p style={{
              fontFamily: "var(--sk-font-display)", fontSize: 22, lineHeight: 1.45,
              color: "var(--sk-fg)", fontWeight: 500, margin: "0 0 20px", letterSpacing: "-0.01em",
            }}>
              "A companion program like SemaKare<TM /> meaningfully changes outcomes. Adherence improves, patients feel less alone, and the data they bring to follow-ups is cleaner than anything we used to ask for on paper."
            </p>
            <div style={{ fontWeight: 700, fontSize: 15, color: "var(--sk-accent)" }}>
              Dr. Meera Nair, MD (Endocrinology)
            </div>
            <div style={{ fontSize: 13, color: "var(--sk-fg-subtle)", marginTop: 2 }}>
              Consultant Endocrinologist · 18 years in diabetes care
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PatientStories, CarouselArrow, KOLStatement });
