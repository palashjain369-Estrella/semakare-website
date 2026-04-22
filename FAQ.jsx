function FAQ() {
  const [open, setOpen] = React.useState(3);
  const items = [
    { q: <>Is Semakare<TM /> free?</>, a: "Yes — SemaKare™ is a complimentary support program offered at no cost to patients prescribed Semaglutide." },
    { q: <>What if I miss a dose?</>, a: "SemaKare™ reminders help you recover gracefully — follow the in-app guidance or chat with your Sema Counsellor." },
    { q: <>Who can enroll in Semakare<TM />?</>, a: "Adults in India starting or continuing Semaglutide therapy under a physician's care." },
    { q: <>Is my information safe?</>, a: "Yes. Your data is secure and privacy-protected, following healthcare standards." },
    { q: <>How do I contact a Sema Counsellor?</>, a: "Call us, tap WhatsApp Quick Answers in the app, or request a diet consult from the Get Support page." },
  ];
  return (
    <section style={{ padding: "90px 72px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80, alignItems: "start" }}>
        <div>
          <h2 className="sk-h1" style={{ marginBottom: 10 }}>Frequently Asked Questions</h2>
          <p className="sk-body" style={{ marginBottom: 28 }}>Find answers about enrollment, features, and how Semakare<TM /> supports you.</p>
          <div style={{ display: "grid", gap: 12 }}>
            {items.map((it, i) => (
              <FAQRow key={i} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} q={it.q} a={it.a} />
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <img src={SK.faqPortrait} alt="" style={{ width: "100%", borderRadius: 24, display: "block" }} />
        </div>
      </div>
    </section>
  );
}

function FAQRow({ open, onClick, q, a }) {
  return (
    <div onClick={onClick} style={{
      borderRadius: 14, cursor: "pointer",
      background: open ? "var(--sk-bg-faq)" : "#fff",
      border: open ? "2px solid var(--sk-blue-500)" : "1px solid var(--sk-border-soft)",
      padding: open ? "16px 20px" : "18px 20px",
      transition: "all 150ms ease-out",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 600, fontSize: 14 }}>
        <span>{q}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sk-accent)" strokeWidth="2.5" strokeLinecap="round"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 150ms" }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      {open && <div className="sk-body" style={{ fontSize: 13, marginTop: 10 }}>{a}</div>}
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--sk-blue-50)", padding: "60px 72px 50px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 60 }}>
        <div>
          <img src={SK.logo} alt="SemaKare" style={{ height: 32, marginBottom: 16 }} />
          <div style={{ fontSize: 13, fontWeight: 500, color: "var(--sk-fg)", marginBottom: 12 }}>Download app from</div>
          <div style={{ display: "flex", gap: 10 }}>
            <StoreBadge kind="app" /><StoreBadge kind="play" />
          </div>
        </div>
        <FooterCol title="Get started" items={["How it works", <>About SemaKare<TM /></>, <>Why SemaKare<TM />?</>, "FAQs"]} />
        <FooterCol title="Resources" items={["Privacy policy", "Terms of service", "Contact us", "Cookie Policy", "Manage Cookie Preferences"]} />
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h5 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 14px", color: "var(--sk-fg)" }}>{title}</h5>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
        {items.map((t, i) => <li key={i}><a style={{ color: "var(--sk-fg-muted)", textDecoration: "none", fontSize: 13, cursor: "pointer" }}>{t}</a></li>)}
      </ul>
    </div>
  );
}

function StoreBadge({ kind }) {
  const common = { background: "#0f1424", color: "#fff", borderRadius: 10, padding: "8px 14px", display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11, lineHeight: 1.15 };
  if (kind === "app") return (
    <div style={common}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 12.5c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.7-1.7-3.3-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 6.9 1.2 9.1.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.8 3-.8s1.8.8 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.6-1-2.6-3.7M15.3 5.8c.6-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.1-.5 2.7-1.3" /></svg>
      <div><div style={{ fontSize: 9, opacity: .7 }}>Download on the</div><div style={{ fontWeight: 600, fontSize: 13 }}>App Store</div></div>
    </div>
  );
  return (
    <div style={common}>
      <svg width="16" height="16" viewBox="0 0 24 24"><path d="M3 20V4l12 8-12 8z" fill="#34a853" /><path d="M3 4v16l9-8-9-8z" fill="#4285f4" /><path d="M15 12l-6 6 9-3-3-3z" fill="#fbbc04" /><path d="M15 12l-6-6 9 3-3 3z" fill="#ea4335" /></svg>
      <div><div style={{ fontSize: 9, opacity: .7 }}>GET IT ON</div><div style={{ fontWeight: 600, fontSize: 13 }}>Google Play</div></div>
    </div>
  );
}

Object.assign(window, { FAQ, FAQRow, Footer, FooterCol, StoreBadge });
