function CommunityBand() {
  // Collage is cropped-from-right in the source asset. Right-align it flush
  // with the page's right edge (no gutter on the right side of the collage).
  return (
    <section style={{ background: "var(--sk-blue-50)", padding: "80px 0", overflow: "hidden", position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: 40 }}>
        <div style={{ padding: "0 72px 0 120px" }}>
          <div className="sk-eyebrow" style={{ marginBottom: 10 }}>You're not alone</div>
          <h2 className="sk-h1" style={{ marginBottom: 28 }}>
            Start your journey with<br /><Brand>SemaKare</Brand> today
          </h2>
          <div style={{ display: "flex", gap: 14 }}>
            <Button variant="primary" icon={<ArrowUR />}>Get the app now</Button>
            <Button variant="secondary" icon={<WhatsAppGlyph size={20} />}>Chat on WhatsApp</Button>
          </div>
        </div>
        <div style={{ justifySelf: "end", alignSelf: "center" }}>
          <img src={SK.peopleGrid} alt="Community" style={{ display: "block", maxWidth: "100%" }} />
        </div>
      </div>
    </section>
  );
}

function WhyPillars() {
  const left = [
    { icon: <FlowerMedal size={42} />, title: "Get Personalized Care", body: "Your dedicated Virtual Assistant for instant answers, motivation, and guidance" },
    { icon: <PillarIcon name="clipboard" size={42} />, title: "Log Dose, Glucose & Weight", body: "Simple tracking for better control" },
  ];
  const right = [
    { icon: <PillarIcon name="bell" size={42} />, title: "Set Smart Dose Reminders", body: "Never miss a dose, stay on schedule effortlessly" },
    { icon: <PillarIcon name="utensils" size={42} />, title: "Build Healthy Habits", body: "Clear nutrition and exercise tips to make healthy choices easy" },
  ];
  return (
    <section style={{ padding: "100px 72px", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <div className="sk-eyebrow" style={{ marginBottom: 6 }}>Why SemaKare<TM />?</div>
        <h2 className="sk-h1" style={{ marginBottom: 60 }}>
          <Brand>SemaKare</Brand> your care companion — Helps you..
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px 1fr", gap: 48, alignItems: "center", textAlign: "left" }}>
          <div style={{ display: "grid", gap: 48 }}>
            {left.map((p, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 16, justifyItems: "start" }}>
                {p.icon}
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17, color: "var(--sk-fg)", marginBottom: 6 }}>{p.title}</div>
                  <div className="sk-body" style={{ fontSize: 13 }}>{p.body}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={SK.phoneDiary} alt="App" style={{ width: 340, maxWidth: "100%" }} />
          </div>
          <div style={{ display: "grid", gap: 48 }}>
            {right.map((p, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 16 }}>
                {p.icon}
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17, color: "var(--sk-fg)", marginBottom: 6 }}>{p.title}</div>
                  <div className="sk-body" style={{ fontSize: 13 }}>{p.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 50 }}>
          <Button variant="primary" icon={<ArrowUR />}>Get the app now</Button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CommunityBand, WhyPillars });
