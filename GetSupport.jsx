// GetSupport.jsx — Sema Counsellor, WhatsApp Quick Answers, Diet Consulting

function SupportEyebrow({ children }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
      textTransform: "uppercase", color: "var(--sk-accent)", marginBottom: 16,
    }}>
      <div style={{ width: 24, height: 2, background: "var(--sk-accent)", borderRadius: 2 }} />
      {children}
    </div>
  );
}

function SupportBullet({ children }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
      <div style={{
        width: 22, height: 22, borderRadius: 999, background: "var(--sk-purple-100)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1,
      }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="var(--sk-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span style={{ fontSize: 15, color: "var(--sk-fg)", lineHeight: 1.5 }}>{children}</span>
    </div>
  );
}

function TopicChip({ children }) {
  return (
    <span style={{
      display: "inline-block", padding: "7px 14px", borderRadius: 999,
      background: "rgba(255,255,255,0.15)", color: "#fff",
      fontSize: 13, fontWeight: 600, border: "1px solid rgba(255,255,255,0.25)",
    }}>
      {children}
    </span>
  );
}

// ─── Sema Counsellor ─────────────────────────────────────────────────────────

function CounsellorSection() {
  return (
    <section style={{ padding: "80px 120px", background: "#fff" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        {/* Left: text */}
        <div>
          <SupportEyebrow>Sema Counsellor</SupportEyebrow>
          <h2 style={{
            fontFamily: "var(--sk-font-display)", fontSize: 40, fontWeight: 700,
            color: "var(--sk-fg)", letterSpacing: "-0.02em", margin: "0 0 20px", lineHeight: 1.15,
          }}>
            A real person, in your corner.
          </h2>
          <p style={{ fontSize: 16, color: "var(--sk-fg-subtle)", lineHeight: 1.7, marginBottom: 28 }}>
            Your SemaKare™ Counsellor is a trained healthcare support professional who knows Semaglutide therapy inside out. They're here to help with the day-to-day questions your doctor doesn't always have time for.
          </p>
          <div style={{ marginBottom: 32 }}>
            <SupportBullet>Injection technique and pen device guidance</SupportBullet>
            <SupportBullet>Managing nausea, appetite loss, and other side effects</SupportBullet>
            <SupportBullet>Understanding your dose escalation schedule</SupportBullet>
            <SupportBullet>Staying motivated through weight-loss plateaus</SupportBullet>
            <SupportBullet>Coordinating with your doctor when needed</SupportBullet>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Button variant="primary" size="lg">Call Now</Button>
            <Button variant="ghost" size="lg">Request Callback</Button>
          </div>
        </div>

        {/* Right: availability card */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Availability */}
          <div style={{
            background: "var(--sk-bg-card)", borderRadius: 20, padding: 28,
            border: "1.5px solid var(--sk-border-soft)",
          }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "var(--sk-fg)", marginBottom: 20 }}>
              Availability
            </div>
            {[
              { icon: "🕘", label: "Hours", value: "Mon – Sat, 9am – 6pm IST" },
              { icon: "📞", label: "Toll-free", value: "1800-XXX-XXXX" },
              { icon: "⏱️", label: "Response", value: "Answered within 2 rings" },
              { icon: "🌐", label: "Languages", value: "English, Hindi, Tamil, Telugu, Kannada" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: i < 3 ? 16 : 0, paddingBottom: i < 3 ? 16 : 0, borderBottom: i < 3 ? "1px solid var(--sk-border-soft)" : "none" }}>
                <span style={{ fontSize: 20 }}>{r.icon}</span>
                <div>
                  <div style={{ fontSize: 12, color: "var(--sk-fg-subtle)", marginBottom: 2 }}>{r.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--sk-fg)" }}>{r.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Callback card */}
          <div style={{
            background: "var(--sk-purple-100)", borderRadius: 20, padding: 24,
            display: "flex", gap: 16, alignItems: "center",
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 999, background: "var(--sk-accent)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.8 12.07 19.79 19.79 0 0 1 1.76 3.48 2 2 0 0 1 3.74 1.3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/>
              </svg>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "var(--sk-fg)", marginBottom: 4 }}>
                Can't call right now?
              </div>
              <div style={{ fontSize: 13, color: "var(--sk-fg-subtle)" }}>
                Leave your number and we'll call you back within 2 hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── WhatsApp Section ─────────────────────────────────────────────────────────

const WA_TOPICS = [
  "Injection technique", "Nausea tips", "Missed dose",
  "Dose schedule", "Storage advice", "Side effects",
  "Diet & food", "Next appointment", "Pen device help", "Motivation",
];

function WhatsAppSection() {
  return (
    <section style={{
      padding: "80px 120px",
      background: "linear-gradient(135deg, #1ebe5d 0%, #0d9e4b 100%)",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        {/* Left: visual */}
        <div>
          {/* Mock chat bubble */}
          <div style={{
            background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)",
            borderRadius: 24, padding: 28,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, paddingBottom: 18, borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
              <div style={{
                width: 44, height: 44, borderRadius: 999, background: "rgba(255,255,255,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <WhatsAppGlyph size={24} color="#fff" />
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>SemaKare Assistant</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>● Online 24/7</div>
              </div>
            </div>

            {[
              { from: "bot",  text: "Hi! I'm your SemaKare Assistant. How can I help today?" },
              { from: "user", text: "I forgot my injection last night. What should I do?" },
              { from: "bot",  text: "Don't worry — take your dose as soon as you remember, as long as your next dose isn't due within 5 days. If it's too close, skip it and resume your regular schedule. Never take two doses together." },
            ].map((m, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start",
                marginBottom: 12,
              }}>
                <div style={{
                  maxWidth: "80%", padding: "10px 14px", borderRadius: 14,
                  background: m.from === "user" ? "#dcf8c6" : "#fff",
                  color: "#1a1a1a", fontSize: 13, lineHeight: 1.5,
                }}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: text */}
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16,
            fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.85)",
          }}>
            <div style={{ width: 24, height: 2, background: "rgba(255,255,255,0.85)", borderRadius: 2 }} />
            WhatsApp Quick Answers
          </div>
          <h2 style={{
            fontFamily: "var(--sk-font-display)", fontSize: 40, fontWeight: 700,
            color: "#fff", letterSpacing: "-0.02em", margin: "0 0 20px", lineHeight: 1.15,
          }}>
            Instant answers, any time of day.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 28 }}>
            Our WhatsApp assistant answers your most common Semaglutide questions instantly — available 24 hours a day, 7 days a week. No hold time, no waiting.
          </p>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 14 }}>Topics you can ask about:</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {WA_TOPICS.map(t => <TopicChip key={t}>{t}</TopicChip>)}
            </div>
          </div>
          <button style={{
            display: "flex", alignItems: "center", gap: 10, padding: "14px 24px",
            borderRadius: 12, border: "none", background: "#fff", color: "#1ebe5d",
            fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "var(--sk-font-sans)",
            transition: "opacity 120ms ease-out",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            <WhatsAppGlyph size={20} color="#1ebe5d" />
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Diet Consulting Section ──────────────────────────────────────────────────

function DietSection() {
  const topics = [
    "Meal planning around Semaglutide dose days",
    "Managing nausea through food choices",
    "High-protein, Indian diet recommendations",
    "Preventing muscle loss during weight loss",
    "Safe eating during Ramadan / fasting periods",
    "Adjusting diet as your appetite changes",
  ];

  return (
    <section style={{ padding: "80px 120px", background: "var(--sk-blue-50)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        {/* Left: text */}
        <div>
          <SupportEyebrow>Diet Consulting</SupportEyebrow>
          <h2 style={{
            fontFamily: "var(--sk-font-display)", fontSize: 40, fontWeight: 700,
            color: "var(--sk-fg)", letterSpacing: "-0.02em", margin: "0 0 20px", lineHeight: 1.15,
          }}>
            Nutrition that works<br />with your treatment.
          </h2>
          <p style={{ fontSize: 16, color: "var(--sk-fg-subtle)", lineHeight: 1.7, marginBottom: 28 }}>
            Our registered dietitians specialise in Semaglutide therapy. They understand how your appetite and digestion change — and how to build an eating plan that supports your goals, not fights them.
          </p>
          <div style={{ marginBottom: 32 }}>
            {topics.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 999, background: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1,
                  border: "1.5px solid var(--sk-accent)",
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="var(--sk-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{ fontSize: 14, color: "var(--sk-fg)", lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
          <Button variant="primary" size="lg">Book a Diet Consult</Button>
        </div>

        {/* Right: consult card */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{
            background: "#fff", borderRadius: 20, padding: 28,
            border: "1.5px solid var(--sk-border-soft)",
          }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "var(--sk-fg)", marginBottom: 20 }}>
              How a consult works
            </div>
            {[
              { step: "1", title: "Book your slot", body: "Choose a 30-minute video or phone session that fits your schedule. Available 7 days a week." },
              { step: "2", title: "Share your background", body: "You'll fill in a short form about your current diet, lifestyle, and health goals before the session." },
              { step: "3", title: "Your session", body: "A 1-on-1 call with your dietitian — no scripts, just a real conversation about your eating habits and goals." },
              { step: "4", title: "Receive your plan", body: "Get a personalised 7-day Indian meal plan and a set of Semaglutide-specific eating tips, shared on WhatsApp." },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 999, background: "var(--sk-purple-100)",
                    color: "var(--sk-accent)", display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: 14, flexShrink: 0, fontFamily: "var(--sk-font-display)",
                  }}>{item.step}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "var(--sk-fg)", marginBottom: 3 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: "var(--sk-fg-subtle)", lineHeight: 1.6 }}>{item.body}</div>
                  </div>
                </div>
                {i < 3 && <div style={{ height: 1, background: "var(--sk-border-soft)", margin: "16px 0" }} />}
              </div>
            ))}
          </div>

          <div style={{
            background: "var(--sk-purple-100)", borderRadius: 16, padding: 20,
            display: "flex", gap: 14, alignItems: "center",
          }}>
            <div style={{ fontSize: 28 }}>🌿</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "var(--sk-fg)", marginBottom: 2 }}>
                First consult is complimentary
              </div>
              <div style={{ fontSize: 13, color: "var(--sk-fg-subtle)" }}>
                Free for all SemaKare™-registered patients. Book via WhatsApp or your Counsellor.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Full Page ────────────────────────────────────────────────────────────────

function GetSupportPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <InnerHeader active="support" />

      {/* Page hero */}
      <section style={{
        background: "linear-gradient(170deg, var(--sk-blue-50) 0%, #fff 100%)",
        padding: "72px 120px 60px", textAlign: "center",
      }}>
        <Eyebrow style={{ justifyContent: "center", marginBottom: 16 }}>Get Support</Eyebrow>
        <h1 style={{
          fontFamily: "var(--sk-font-display)", fontSize: 52, fontWeight: 700,
          color: "var(--sk-fg)", letterSpacing: "-0.03em",
          margin: "0 0 20px", lineHeight: 1.1,
        }}>
          Expert guidance,<br />whenever you need it.
        </h1>
        <p style={{ fontSize: 18, color: "var(--sk-fg-subtle)", lineHeight: 1.6, maxWidth: 560, margin: "0 auto 36px" }}>
          Sema Counsellors, WhatsApp quick answers, and specialist diet consultants — all trained specifically for Semaglutide therapy.
        </p>
        {/* Quick jump links */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          {[
            { label: "Sema Counsellor", href: "#counsellor" },
            { label: "WhatsApp Answers", href: "#whatsapp" },
            { label: "Diet Consulting", href: "#diet" },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ textDecoration: "none" }}>
              <button style={{
                padding: "10px 18px", borderRadius: 999, border: "1.5px solid var(--sk-border-soft)",
                background: "#fff", fontSize: 14, fontWeight: 600, color: "var(--sk-fg)",
                cursor: "pointer", fontFamily: "var(--sk-font-sans)",
                transition: "all 120ms ease-out",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--sk-accent)"; e.currentTarget.style.color = "var(--sk-accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--sk-border-soft)"; e.currentTarget.style.color = "var(--sk-fg)"; }}
              >{l.label}</button>
            </a>
          ))}
        </div>
      </section>

      <div id="counsellor"><CounsellorSection /></div>
      <div id="whatsapp">  <WhatsAppSection />   </div>
      <div id="diet">      <DietSection />        </div>

      {/* Bottom CTA */}
      <section style={{
        background: "var(--sk-purple-100)", padding: "52px 120px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700, fontFamily: "var(--sk-font-display)", color: "var(--sk-fg)", marginBottom: 8 }}>
            Ready to start?
          </div>
          <div style={{ fontSize: 16, color: "var(--sk-fg-subtle)" }}>
            Your first step is one message away. A counsellor will respond within minutes.
          </div>
        </div>
        <Button variant="primary" size="lg" icon={<WhatsAppGlyph size={20} />}>
          Chat on WhatsApp
        </Button>
      </section>

      <Footer />
    </div>
  );
}
