// Affordability.jsx — PAP, Insurance Navigation, Home Delivery

const PAP_NUMBER = "1800-XXX-0003"; // Replace with actual PAP helpline number
const PAP_HOURS  = "Mon–Sat, 10am–7pm IST";

function CheckItem({ children }) {
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

function StepCard({ number, title, body }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <div style={{
        width: 36, height: 36, borderRadius: 999, background: "var(--sk-accent)",
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
        fontWeight: 700, fontSize: 16, flexShrink: 0, fontFamily: "var(--sk-font-display)",
      }}>
        {number}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 15, color: "var(--sk-fg)", marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 14, color: "var(--sk-fg-subtle)", lineHeight: 1.6 }}>{body}</div>
      </div>
    </div>
  );
}

function SectionEyebrow({ children, color = "var(--sk-accent)" }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      fontSize: 12, fontWeight: 700, letterSpacing: "0.08em",
      textTransform: "uppercase", color, marginBottom: 16,
    }}>
      <div style={{ width: 24, height: 2, background: color, borderRadius: 2 }} />
      {children}
    </div>
  );
}

// ─── PAP Section ─────────────────────────────────────────────────────────────

function PAPSection() {
  return (
    <section style={{ padding: "80px 120px", background: "#fff" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        {/* Left: description */}
        <div>
          <SectionEyebrow>Patient Assistance Program</SectionEyebrow>
          <h2 style={{
            fontFamily: "var(--sk-font-display)", fontSize: 40, fontWeight: 700,
            color: "var(--sk-fg)", letterSpacing: "-0.02em", margin: "0 0 20px", lineHeight: 1.15,
          }}>
            We'll help you get the medicine you need.
          </h2>
          <p style={{ fontSize: 16, color: "var(--sk-fg-subtle)", lineHeight: 1.7, marginBottom: 28 }}>
            Dr. Reddy's Patient Assistance Program helps eligible patients access Semared at reduced or no cost. If affordability is a concern, you don't have to navigate it alone.
          </p>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--sk-fg)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              You may be eligible if you:
            </div>
            <CheckItem>Have a valid prescription for Semaglutide from a registered doctor</CheckItem>
            <CheckItem>Meet income eligibility criteria set by the program</CheckItem>
            <CheckItem>Do not have insurance that fully covers your treatment cost</CheckItem>
            <CheckItem>Are a resident of India and a citizen</CheckItem>
          </div>
          <CallNowButton
            number={PAP_NUMBER}
            label="Patient Assistance Program Helpline"
            hours={PAP_HOURS}
          />
          <p style={{ fontSize: 12, color: "var(--sk-fg-subtle)", marginTop: 12 }}>
            A Sema Counsellor will guide you through the full application. No paperwork hassle.
          </p>
        </div>

        {/* Right: how to apply card */}
        <div style={{
          background: "var(--sk-bg-card)", borderRadius: 24, padding: 36,
          border: "1.5px solid var(--sk-border-soft)",
        }}>
          <div style={{ fontFamily: "var(--sk-font-display)", fontSize: 20, fontWeight: 700, color: "var(--sk-fg)", marginBottom: 28 }}>
            How to apply
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <StepCard number={1} title="Talk to your doctor"
              body="Ask your prescribing doctor to fill in the PAP referral form at your next visit. They already know the process." />
            <div style={{ height: 1, background: "var(--sk-border-soft)" }} />
            <StepCard number={2} title="Call or WhatsApp us"
              body="Contact a SemaKare™ Counsellor on 1800-XXX-XXXX (toll-free). They'll verify your eligibility over the phone — takes under 10 minutes." />
            <div style={{ height: 1, background: "var(--sk-border-soft)" }} />
            <StepCard number={3} title="Submit documents"
              body="Upload your prescription and income proof through WhatsApp or email. We'll handle the rest." />
            <div style={{ height: 1, background: "var(--sk-border-soft)" }} />
            <StepCard number={4} title="Receive your medicine"
              body="Approved patients receive their Semared supply within 5–7 business days, delivered to their door." />
          </div>
          <div style={{ marginTop: 28 }}>
            <Button variant="ghost" size="sm" icon={<WhatsAppGlyph size={16} />}>Start on WhatsApp</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Insurance Section ───────────────────────────────────────────────────────

const INS_FAQS = [
  {
    q: "Is Semaglutide covered by health insurance in India?",
    a: "Coverage varies widely. Some group health policies cover it under diabetes or obesity management, especially post a specialist referral. Individual policies often require pre-authorisation. Our counsellors know which insurers have approved claims — call us before assuming it isn't covered.",
  },
  {
    q: "What documents do I need for a reimbursement claim?",
    a: "Typically: your doctor's prescription, a diagnosis letter (ICD code for diabetes or obesity), purchase receipts, and your policy number. We can help you prepare a complete claim file.",
  },
  {
    q: "My insurer rejected my claim. What now?",
    a: "Don't give up. Many initial rejections are overturned on appeal when the right clinical documentation is provided. A SemaKare™ Counsellor can help you draft an appeal with your doctor's support.",
  },
  {
    q: "Can I claim under a corporate / employer health policy?",
    a: "Yes — corporate policies tend to be more flexible. Your HR or TPA (Third Party Administrator) can confirm. We can also write a clinical justification letter to support your request.",
  },
];

function InsuranceSection() {
  const [open, setOpen] = React.useState(null);

  return (
    <section style={{ padding: "80px 120px", background: "var(--sk-blue-50)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 72, alignItems: "start" }}>
        {/* Left */}
        <div style={{ position: "sticky", top: 100 }}>
          <SectionEyebrow>Insurance coverage</SectionEyebrow>
          <h2 style={{
            fontFamily: "var(--sk-font-display)", fontSize: 40, fontWeight: 700,
            color: "var(--sk-fg)", letterSpacing: "-0.02em", margin: "0 0 20px", lineHeight: 1.15,
          }}>
            Navigate insurance with confidence.
          </h2>
          <p style={{ fontSize: 16, color: "var(--sk-fg-subtle)", lineHeight: 1.7, marginBottom: 28 }}>
            Insurance policies for Semaglutide are complicated — but they're not impossible. Our counsellors have helped hundreds of patients get claims approved.
          </p>
          <Button variant="primary" size="lg">Speak to a Counsellor</Button>
          <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 999, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sk-accent)" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.8 12.07 19.79 19.79 0 0 1 1.76 3.48 2 2 0 0 1 3.74 1.3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--sk-fg)" }}>1800-XXX-XXXX</div>
              <div style={{ fontSize: 12, color: "var(--sk-fg-subtle)" }}>Toll-free · Mon–Sat 9am–6pm</div>
            </div>
          </div>
        </div>

        {/* Right: FAQ accordion */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--sk-fg-subtle)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20 }}>
            Common questions
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {INS_FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{
                  background: "#fff", borderRadius: 14,
                  border: `1.5px solid ${isOpen ? "var(--sk-accent)" : "var(--sk-border-soft)"}`,
                  overflow: "hidden", transition: "border-color 120ms ease-out",
                }}>
                  <button onClick={() => setOpen(isOpen ? null : i)} style={{
                    width: "100%", padding: "20px 22px", border: "none", background: "transparent",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    cursor: "pointer", fontFamily: "var(--sk-font-sans)", textAlign: "left", gap: 16,
                  }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "var(--sk-fg)", lineHeight: 1.4 }}>
                      {item.q}
                    </span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sk-fg-subtle)" strokeWidth="2" strokeLinecap="round"
                      style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 200ms ease-out" }}>
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 22px 20px", fontSize: 14, color: "var(--sk-fg-subtle)", lineHeight: 1.7 }}>
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Home Delivery Section ───────────────────────────────────────────────────

function DeliveryCard({ name, tagline, benefits, ctaLabel, ctaHref, accent }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 24, padding: 36,
      border: `2px solid ${accent}30`,
      display: "flex", flexDirection: "column",
    }}>
      <div style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        background: accent + "15", borderRadius: 14, padding: "12px 20px", marginBottom: 20,
        alignSelf: "flex-start",
      }}>
        <span style={{ fontSize: 17, fontWeight: 800, color: accent, letterSpacing: "-0.01em" }}>
          {name}
        </span>
      </div>
      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--sk-fg)", marginBottom: 8 }}>{tagline}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 24 }}>
        {benefits.map((b, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div style={{ width: 6, height: 6, borderRadius: 999, background: accent, marginTop: 7, flexShrink: 0 }} />
            <span style={{ fontSize: 14, color: "var(--sk-fg-subtle)", lineHeight: 1.5 }}>{b}</span>
          </div>
        ))}
      </div>
      <a href={ctaHref} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <button style={{
          width: "100%", padding: "14px", borderRadius: 12, border: `2px solid ${accent}`,
          background: "transparent", color: accent, fontSize: 14, fontWeight: 700,
          cursor: "pointer", fontFamily: "var(--sk-font-sans)", transition: "all 120ms ease-out",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.color = "#fff"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = accent; }}
        >
          {ctaLabel} →
        </button>
      </a>
    </div>
  );
}

function HomeDeliverySection() {
  return (
    <section style={{ padding: "80px 120px", background: "#fff" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <SectionEyebrow>Home Delivery</SectionEyebrow>
        <h2 style={{
          fontFamily: "var(--sk-font-display)", fontSize: 40, fontWeight: 700,
          color: "var(--sk-fg)", letterSpacing: "-0.02em", margin: "0 0 16px", lineHeight: 1.15,
        }}>
          Delivered to your door.<br />Never miss a refill.
        </h2>
        <p style={{ fontSize: 16, color: "var(--sk-fg-subtle)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
          Order Semared through our trusted pharmacy partners — with fast delivery, genuine medicines, and competitive pricing across India.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 800, margin: "0 auto 48px" }}>
        <DeliveryCard
          name="Tata 1mg"
          tagline="Fast delivery, genuine medicines"
          accent="#E40D2B"
          benefits={[
            "Authenticity-guaranteed supply chain",
            "Delivery in 2–4 hours in major cities",
            "Upload prescription directly via app",
            "Auto-refill reminders linked to your dose schedule",
          ]}
          ctaLabel="Order on Tata 1mg"
          ctaHref="https://www.1mg.com"
        />
        <DeliveryCard
          name="PharmEasy"
          tagline="Best prices, doorstep delivery"
          accent="#F47820"
          benefits={[
            "Price comparison and cashback offers",
            "Pan-India delivery network",
            "Prescription storage in-app",
            "SemaKare™ counsellor hand-off for queries",
          ]}
          ctaLabel="Order on PharmEasy"
          ctaHref="https://pharmeasy.in"
        />
      </div>

    </section>
  );
}

// ─── Full Page ────────────────────────────────────────────────────────────────

function AffordabilityPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <InnerHeader active="affordability" />

      {/* Page hero */}
      <section style={{
        background: "linear-gradient(170deg, var(--sk-blue-50) 0%, #fff 100%)",
        padding: "72px 120px 60px", textAlign: "center",
      }}>
        <Eyebrow style={{ justifyContent: "center", marginBottom: 16 }}>Affordability</Eyebrow>
        <h1 style={{
          fontFamily: "var(--sk-font-display)", fontSize: 52, fontWeight: 700,
          color: "var(--sk-fg)", letterSpacing: "-0.03em",
          margin: "0 0 20px", lineHeight: 1.1,
        }}>
          Your treatment<br />shouldn't have to wait.
        </h1>
        <p style={{ fontSize: 18, color: "var(--sk-fg-subtle)", lineHeight: 1.6, maxWidth: 560, margin: "0 auto 36px" }}>
          From patient assistance programs to insurance navigation and home delivery — SemaKare™ removes the financial barriers between you and your health.
        </p>
        {/* Anchor links */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          {[
            { label: "Patient Assistance", href: "#pap" },
            { label: "Insurance Help", href: "#insurance" },
            { label: "Home Delivery", href: "#delivery" },
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

      <div id="pap">    <PAPSection />      </div>
      <div id="insurance"><InsuranceSection /></div>
      <div id="delivery"><HomeDeliverySection /></div>

      {/* Bottom CTA */}
      <section style={{
        background: "var(--sk-purple-100)", padding: "52px 120px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700, fontFamily: "var(--sk-font-display)", color: "var(--sk-fg)", marginBottom: 8 }}>
            Not sure which option is right for you?
          </div>
          <div style={{ fontSize: 16, color: "var(--sk-fg-subtle)" }}>
            A Sema Counsellor will find the best fit for your situation — no cost, no obligation.
          </div>
        </div>
        <Button variant="primary" size="lg">Speak to a Counsellor</Button>
      </section>

      <Footer />
    </div>
  );
}
