// Tools.jsx — Health calculators: BMI, Waist-to-Hip Ratio, Ideal Body Weight, Cardiovascular Risk

// ─── Shared form primitives ──────────────────────────────────────────────────

function InputField({ label, placeholder, value, onChange, hint }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--sk-fg)", marginBottom: 6 }}>
        {label}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%", padding: "12px 14px", borderRadius: 10,
          border: `1.5px solid ${focused ? "var(--sk-accent)" : "var(--sk-border-soft)"}`,
          fontSize: 15, fontFamily: "var(--sk-font-sans)", color: "var(--sk-fg)",
          outline: "none", background: "#fff", boxSizing: "border-box",
          transition: "border-color 120ms ease-out",
        }}
      />
      {hint && <div style={{ fontSize: 12, color: "var(--sk-fg-subtle)", marginTop: 4 }}>{hint}</div>}
    </div>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--sk-fg)", marginBottom: 6 }}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <select
          value={value}
          onChange={onChange}
          style={{
            width: "100%", padding: "12px 14px", paddingRight: 40, borderRadius: 10,
            border: "1.5px solid var(--sk-border-soft)", fontSize: 15,
            fontFamily: "var(--sk-font-sans)", color: "var(--sk-fg)",
            outline: "none", background: "#fff", appearance: "none",
            cursor: "pointer", boxSizing: "border-box",
          }}
        >
          {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <svg style={{ position: "absolute", right: 13, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sk-gray-500)" strokeWidth="2" strokeLinecap="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}

function CalcButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%", padding: "14px 20px", borderRadius: 12, border: "none",
        background: "var(--sk-accent)", color: "#fff", fontSize: 15, fontWeight: 700,
        cursor: "pointer", marginTop: 4, fontFamily: "var(--sk-font-sans)",
        transition: "opacity 120ms ease-out",
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
      onMouseLeave={e => e.currentTarget.style.opacity = "1"}
    >
      {children}
    </button>
  );
}

function EmptyResultCard() {
  return (
    <div style={{
      background: "var(--sk-gray-50)", border: "2px dashed var(--sk-gray-200)",
      borderRadius: 20, padding: "48px 28px", textAlign: "center",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      minHeight: 300,
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: 999, background: "var(--sk-purple-100)",
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--sk-accent)" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>
        </svg>
      </div>
      <div style={{ fontWeight: 600, fontSize: 15, color: "var(--sk-fg)", marginBottom: 6 }}>
        Your result will appear here
      </div>
      <div style={{ fontSize: 13, color: "var(--sk-fg-subtle)" }}>
        Fill in the fields and tap Calculate.
      </div>
    </div>
  );
}

function CalcDisclaimer() {
  return (
    <div style={{
      marginTop: 20, padding: "12px 16px", borderRadius: 10,
      background: "var(--sk-blue-50)", border: "1px solid var(--sk-blue-100)",
      fontSize: 12, color: "var(--sk-fg-subtle)", lineHeight: 1.6,
    }}>
      <strong style={{ color: "var(--sk-fg)" }}>For information only.</strong>{" "}
      These tools are not a substitute for clinical assessment. Always discuss your results with your doctor.
    </div>
  );
}

// ─── BMI Calculator ──────────────────────────────────────────────────────────

function BMIGauge({ bmi }) {
  // Scale 10–40 = 30 units total
  // Zones: Underweight 10–18.5 (28.3%), Normal 18.5–23 (15%), Overweight 23–25 (6.7%), Obese I 25–30 (16.7%), Obese II+ 30–40 (33.3%)
  const zones = [
    { label: "Underweight", color: "#4da6e8", pct: 28.3 },
    { label: "Normal",      color: "#2dbf6b", pct: 15.0 },
    { label: "Overweight",  color: "#f6b93b", pct: 6.7  },
    { label: "Obese I",     color: "#e8553d", pct: 16.7 },
    { label: "Obese II+",   color: "#b03020", pct: 33.3 },
  ];
  const markerPct = Math.min(100, Math.max(0, ((bmi - 10) / 30) * 100));

  return (
    <div style={{ marginTop: 20 }}>
      {/* Zone colour bar */}
      <div style={{ display: "flex", borderRadius: 999, overflow: "hidden", height: 10, gap: 2 }}>
        {zones.map(z => (
          <div key={z.label} style={{ flex: `0 0 ${z.pct}%`, background: z.color }} />
        ))}
      </div>
      {/* Marker line */}
      <div style={{ position: "relative", height: 20, marginTop: 2 }}>
        <div style={{
          position: "absolute", left: `${markerPct}%`, transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center",
        }}>
          <div style={{ width: 2, height: 14, background: "var(--sk-fg)", borderRadius: 2 }} />
        </div>
      </div>
      {/* Zone labels */}
      <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
        {zones.map(z => (
          <div key={z.label} style={{ flex: `0 0 ${z.pct}%`, fontSize: 9, color: "var(--sk-fg-subtle)", textAlign: "center", overflow: "hidden" }}>
            {z.label}
          </div>
        ))}
      </div>
      {/* Scale */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 10, color: "var(--sk-gray-400)" }}>
        <span>10</span>
        <span>18.5</span>
        <span>23</span>
        <span>25</span>
        <span>30</span>
        <span>40</span>
      </div>
    </div>
  );
}

function BMICalculator() {
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [result, setResult] = React.useState(null);
  const [error, setError]   = React.useState("");

  function calculate() {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w || h < 50 || h > 250 || w < 20 || w > 400) {
      setError("Please enter a valid height (50–250 cm) and weight (20–400 kg).");
      setResult(null);
      return;
    }
    setError("");
    const bmi = w / Math.pow(h / 100, 2);
    let cat, color, advice;
    if (bmi < 18.5) {
      cat = "Underweight"; color = "#4da6e8";
      advice = "You may benefit from nutritional support. Discuss with your care team before any dose changes.";
    } else if (bmi < 23) {
      cat = "Normal weight"; color = "#2dbf6b";
      advice = "Great — your BMI is in a healthy range for South Asian adults. Keep up your current habits.";
    } else if (bmi < 25) {
      cat = "Overweight"; color = "#f6b93b";
      advice = "Slightly above the healthy range. SemaKare™ coaching and your Semaglutide therapy can help.";
    } else if (bmi < 30) {
      cat = "Obese Class I"; color = "#e8553d";
      advice = "This range increases cardio-metabolic risk. Your treatment plan and SemaKare™ support are well-timed.";
    } else {
      cat = "Obese Class II+"; color = "#b03020";
      advice = "Significant health risk. Regular check-ins with your doctor are important — your team is here to help.";
    }
    setResult({ bmi: bmi.toFixed(1), cat, color, advice });
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
      {/* Input card */}
      <div style={{ background: "var(--sk-bg-card)", borderRadius: 20, padding: 28 }}>
        <h3 style={{ fontFamily: "var(--sk-font-display)", fontSize: 20, fontWeight: 700, color: "var(--sk-fg)", margin: "0 0 8px" }}>
          Body Mass Index (BMI)
        </h3>
        <p style={{ fontSize: 14, color: "var(--sk-fg-subtle)", lineHeight: 1.6, margin: "0 0 24px" }}>
          BMI measures weight relative to height. South Asian populations use lower cutoffs (≥23 = overweight, ≥25 = obese) compared to global standards.
        </p>
        <InputField label="Height (cm)" placeholder="e.g. 165" value={height} onChange={e => setHeight(e.target.value)} hint="Enter your height without shoes." />
        <InputField label="Weight (kg)" placeholder="e.g. 70"  value={weight} onChange={e => setWeight(e.target.value)} hint="Enter your current weight." />
        {error && <div style={{ fontSize: 13, color: "#e8553d", marginBottom: 12 }}>{error}</div>}
        <CalcButton onClick={calculate}>Calculate BMI</CalcButton>
        <CalcDisclaimer />
      </div>

      {/* Result card */}
      {result ? (
        <div style={{ background: "#fff", border: "1.5px solid var(--sk-border-soft)", borderRadius: 20, padding: 28 }}>
          <div style={{ fontSize: 13, color: "var(--sk-fg-subtle)", marginBottom: 6 }}>Your BMI</div>
          <div style={{
            fontSize: 76, fontWeight: 700, lineHeight: 1,
            color: result.color, fontFamily: "var(--sk-font-display)",
            letterSpacing: "-0.03em", marginBottom: 10,
          }}>
            {result.bmi}
          </div>
          <span style={{
            display: "inline-block", padding: "6px 14px", borderRadius: 999,
            background: result.color + "20", color: result.color,
            fontWeight: 700, fontSize: 14,
          }}>{result.cat}</span>

          <BMIGauge bmi={parseFloat(result.bmi)} />

          <p style={{ fontSize: 14, color: "var(--sk-fg)", lineHeight: 1.6, marginTop: 20 }}>
            {result.advice}
          </p>
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--sk-border-soft)" }}>
            <Button variant="ghost" size="sm" icon={<HelpGlyph size={16} />}>Talk to a Sema Counsellor</Button>
          </div>
        </div>
      ) : <EmptyResultCard />}
    </div>
  );
}

// ─── Waist-to-Hip Ratio ──────────────────────────────────────────────────────

function WHRCalculator() {
  const [waist,  setWaist]  = React.useState("");
  const [hip,    setHip]    = React.useState("");
  const [sex,    setSex]    = React.useState("female");
  const [result, setResult] = React.useState(null);
  const [error,  setError]  = React.useState("");

  function calculate() {
    const w = parseFloat(waist);
    const h = parseFloat(hip);
    if (!w || !h || w < 40 || w > 200 || h < 50 || h > 250 || h <= w) {
      setError("Please enter valid waist (40–200 cm) and hip (50–250 cm) measurements. Hip must be larger than waist.");
      setResult(null);
      return;
    }
    setError("");
    const ratio = w / h;

    let risk, color, advice;
    if (sex === "male") {
      if (ratio < 0.90)      { risk = "Low risk";      color = "#2dbf6b"; advice = "Your ratio indicates a healthy fat distribution pattern."; }
      else if (ratio < 1.00) { risk = "Moderate risk"; color = "#f6b93b"; advice = "Moderate central fat. Diet and exercise can help improve your ratio."; }
      else                   { risk = "High risk";      color = "#e8553d"; advice = "Higher central adiposity increases cardio-metabolic risk. Discuss with your doctor."; }
    } else {
      if (ratio < 0.80)      { risk = "Low risk";      color = "#2dbf6b"; advice = "Your ratio indicates a healthy fat distribution pattern."; }
      else if (ratio < 0.85) { risk = "Moderate risk"; color = "#f6b93b"; advice = "Moderate central fat. Diet and exercise can help improve your ratio."; }
      else                   { risk = "High risk";      color = "#e8553d"; advice = "Higher central adiposity increases cardio-metabolic risk. Discuss with your doctor."; }
    }

    const healthy = sex === "male" ? "< 0.90" : "< 0.80";
    setResult({ ratio: ratio.toFixed(2), risk, color, advice, healthy });
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
      <div style={{ background: "var(--sk-bg-card)", borderRadius: 20, padding: 28 }}>
        <h3 style={{ fontFamily: "var(--sk-font-display)", fontSize: 20, fontWeight: 700, color: "var(--sk-fg)", margin: "0 0 8px" }}>
          Waist-to-Hip Ratio (WHR)
        </h3>
        <p style={{ fontSize: 14, color: "var(--sk-fg-subtle)", lineHeight: 1.6, margin: "0 0 24px" }}>
          WHR measures where your body stores fat. Central (abdominal) fat is a stronger predictor of cardio-metabolic risk than BMI alone.
        </p>
        <SelectField label="Sex" value={sex} onChange={e => setSex(e.target.value)} options={[
          { value: "female", label: "Female" },
          { value: "male",   label: "Male" },
        ]} />
        <InputField label="Waist circumference (cm)" placeholder="e.g. 88"
          value={waist} onChange={e => setWaist(e.target.value)}
          hint="Measure at the narrowest point (between ribs and hips)." />
        <InputField label="Hip circumference (cm)" placeholder="e.g. 100"
          value={hip} onChange={e => setHip(e.target.value)}
          hint="Measure at the widest point around the buttocks." />
        {error && <div style={{ fontSize: 13, color: "#e8553d", marginBottom: 12 }}>{error}</div>}
        <CalcButton onClick={calculate}>Calculate WHR</CalcButton>
        <CalcDisclaimer />
      </div>

      {result ? (
        <div style={{ background: "#fff", border: "1.5px solid var(--sk-border-soft)", borderRadius: 20, padding: 28 }}>
          <div style={{ fontSize: 13, color: "var(--sk-fg-subtle)", marginBottom: 6 }}>Your Waist-to-Hip Ratio</div>
          <div style={{
            fontSize: 76, fontWeight: 700, lineHeight: 1,
            color: result.color, fontFamily: "var(--sk-font-display)",
            letterSpacing: "-0.03em", marginBottom: 10,
          }}>
            {result.ratio}
          </div>
          <span style={{
            display: "inline-block", padding: "6px 14px", borderRadius: 999,
            background: result.color + "20", color: result.color,
            fontWeight: 700, fontSize: 14,
          }}>{result.risk}</span>

          {/* Visual bar — 3 zones */}
          <div style={{ marginTop: 24 }}>
            <div style={{ display: "flex", borderRadius: 999, overflow: "hidden", height: 10, gap: 2 }}>
              <div style={{ flex: "0 0 40%", background: "#2dbf6b" }} />
              <div style={{ flex: "0 0 25%", background: "#f6b93b" }} />
              <div style={{ flex: "0 0 35%", background: "#e8553d" }} />
            </div>
            <div style={{ display: "flex", gap: 2, marginTop: 6, fontSize: 11, color: "var(--sk-fg-subtle)" }}>
              <div style={{ flex: "0 0 40%", textAlign: "center" }}>Low</div>
              <div style={{ flex: "0 0 25%", textAlign: "center" }}>Moderate</div>
              <div style={{ flex: "0 0 35%", textAlign: "center" }}>High</div>
            </div>
          </div>

          <div style={{ marginTop: 20, padding: "14px 16px", borderRadius: 12, background: "var(--sk-gray-50)" }}>
            <div style={{ fontSize: 12, color: "var(--sk-fg-subtle)", marginBottom: 4 }}>Healthy target for you</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "var(--sk-fg)" }}>{result.healthy}</div>
          </div>

          <p style={{ fontSize: 14, color: "var(--sk-fg)", lineHeight: 1.6, marginTop: 16 }}>{result.advice}</p>
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--sk-border-soft)" }}>
            <Button variant="ghost" size="sm" icon={<HelpGlyph size={16} />}>Talk to a Sema Counsellor</Button>
          </div>
        </div>
      ) : <EmptyResultCard />}
    </div>
  );
}

// ─── Ideal Body Weight ───────────────────────────────────────────────────────

function IBWCalculator() {
  const [height,  setHeight]  = React.useState("");
  const [current, setCurrent] = React.useState("");
  const [sex,     setSex]     = React.useState("female");
  const [result,  setResult]  = React.useState(null);
  const [error,   setError]   = React.useState("");

  function calculate() {
    const h = parseFloat(height);
    if (!h || h < 100 || h > 250) {
      setError("Please enter a valid height (100–250 cm).");
      setResult(null);
      return;
    }
    setError("");
    // Robinson formula
    const inchesOver5ft = (h - 152.4) / 2.54;
    const ibw = sex === "male"
      ? 52 + 1.9 * inchesOver5ft
      : 49 + 1.7 * inchesOver5ft;
    const ibwLow  = Math.max(30, ibw * 0.90);
    const ibwHigh = ibw * 1.10;
    const w = parseFloat(current);
    let comparison = null;
    if (w && w > 0) {
      const diff = w - ibw;
      if (Math.abs(diff) <= ibw * 0.10) {
        comparison = { label: "Within ideal range", color: "#2dbf6b", diff: null };
      } else if (diff > 0) {
        comparison = { label: `${diff.toFixed(1)} kg above ideal`, color: "#e8553d", diff };
      } else {
        comparison = { label: `${Math.abs(diff).toFixed(1)} kg below ideal`, color: "#f6b93b", diff };
      }
    }
    setResult({ ibw: ibw.toFixed(1), ibwLow: ibwLow.toFixed(1), ibwHigh: ibwHigh.toFixed(1), comparison });
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
      <div style={{ background: "var(--sk-bg-card)", borderRadius: 20, padding: 28 }}>
        <h3 style={{ fontFamily: "var(--sk-font-display)", fontSize: 20, fontWeight: 700, color: "var(--sk-fg)", margin: "0 0 8px" }}>
          Ideal Body Weight (IBW)
        </h3>
        <p style={{ fontSize: 14, color: "var(--sk-fg-subtle)", lineHeight: 1.6, margin: "0 0 24px" }}>
          Calculates a healthy weight range for your height using the Robinson formula. This is a goal reference — not a strict target.
        </p>
        <SelectField label="Sex" value={sex} onChange={e => setSex(e.target.value)} options={[
          { value: "female", label: "Female" },
          { value: "male",   label: "Male" },
        ]} />
        <InputField label="Height (cm)" placeholder="e.g. 160" value={height} onChange={e => setHeight(e.target.value)} />
        <InputField label="Current weight (kg) — optional" placeholder="e.g. 75"
          value={current} onChange={e => setCurrent(e.target.value)}
          hint="Enter to see how far you are from the ideal range." />
        {error && <div style={{ fontSize: 13, color: "#e8553d", marginBottom: 12 }}>{error}</div>}
        <CalcButton onClick={calculate}>Calculate Ideal Weight</CalcButton>
        <CalcDisclaimer />
      </div>

      {result ? (
        <div style={{ background: "#fff", border: "1.5px solid var(--sk-border-soft)", borderRadius: 20, padding: 28 }}>
          <div style={{ fontSize: 13, color: "var(--sk-fg-subtle)", marginBottom: 6 }}>Ideal body weight</div>
          <div style={{
            fontSize: 76, fontWeight: 700, lineHeight: 1,
            color: "var(--sk-accent)", fontFamily: "var(--sk-font-display)",
            letterSpacing: "-0.03em", marginBottom: 6,
          }}>
            {result.ibw} <span style={{ fontSize: 28, fontWeight: 500, color: "var(--sk-fg-subtle)" }}>kg</span>
          </div>

          <div style={{ marginTop: 16, padding: "14px 16px", borderRadius: 12, background: "var(--sk-purple-50)" }}>
            <div style={{ fontSize: 12, color: "var(--sk-fg-subtle)", marginBottom: 2 }}>Healthy weight range (±10%)</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "var(--sk-fg)" }}>
              {result.ibwLow} – {result.ibwHigh} kg
            </div>
          </div>

          {result.comparison && (
            <div style={{ marginTop: 16, padding: "14px 16px", borderRadius: 12, background: result.comparison.color + "15" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: result.comparison.color }}>
                {result.comparison.label}
              </div>
            </div>
          )}

          <p style={{ fontSize: 13, color: "var(--sk-fg-subtle)", lineHeight: 1.6, marginTop: 16 }}>
            This is a reference range. Your doctor may set a different personalised target based on your full health picture.
          </p>
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--sk-border-soft)" }}>
            <Button variant="ghost" size="sm" icon={<HelpGlyph size={16} />}>Book a Diet Consult</Button>
          </div>
        </div>
      ) : <EmptyResultCard />}
    </div>
  );
}

// ─── Cardiovascular Risk ─────────────────────────────────────────────────────

function CVDRiskGauge({ level }) {
  const levels = ["Low", "Moderate", "High", "Very High"];
  const colors = ["#2dbf6b", "#f6b93b", "#e8553d", "#b03020"];
  const idx = levels.indexOf(level);
  return (
    <div style={{ display: "flex", gap: 4, marginTop: 20 }}>
      {levels.map((l, i) => (
        <div key={l} style={{ flex: 1 }}>
          <div style={{
            height: 8, borderRadius: 4, background: i <= idx ? colors[i] : "var(--sk-gray-200)",
            transition: "background 300ms ease-out",
          }} />
          <div style={{ fontSize: 10, color: i === idx ? colors[i] : "var(--sk-fg-subtle)", textAlign: "center", marginTop: 5, fontWeight: i === idx ? 700 : 400 }}>
            {l}
          </div>
        </div>
      ))}
    </div>
  );
}

function CVDRiskCalculator() {
  const [age,     setAge]     = React.useState("lt40");
  const [sex,     setSex]     = React.useState("female");
  const [bp,      setBp]      = React.useState("normal");
  const [bpMeds,  setBpMeds]  = React.useState("no");
  const [smoking, setSmoking] = React.useState("never");
  const [diabetes,setDiabetes]= React.useState("yes");
  const [famHist, setFamHist] = React.useState("no");
  const [result,  setResult]  = React.useState(null);

  function calculate() {
    let score = 0;

    // Age (men carry higher base risk at younger ages)
    if (sex === "male") {
      score += { lt40: 0, "40-49": 3, "50-59": 5, "60-69": 7, "70plus": 8 }[age] ?? 0;
    } else {
      score += { lt40: 0, "40-49": 2, "50-59": 4, "60-69": 6, "70plus": 8 }[age] ?? 0;
    }
    // Systolic BP
    score += { normal: 0, elevated: 1, high1: 2, high2: 3 }[bp] ?? 0;
    // BP meds
    if (bpMeds === "yes") score += 1;
    // Smoking
    score += { never: 0, former: 1, current: 3 }[smoking] ?? 0;
    // Diabetes
    if (diabetes === "yes") score += 2;
    // Family history
    if (famHist === "yes") score += 1;

    let level, color, pct, advice;
    if (score <= 3) {
      level = "Low"; color = "#2dbf6b"; pct = "<10%";
      advice = "Your estimated 10-year cardiovascular risk is low. Keep up your healthy habits and attend regular check-ups.";
    } else if (score <= 6) {
      level = "Moderate"; color = "#f6b93b"; pct = "10–20%";
      advice = "Moderate risk. Lifestyle changes and managing your existing risk factors can meaningfully reduce this.";
    } else if (score <= 10) {
      level = "High"; color = "#e8553d"; pct = "20–30%";
      advice = "Higher risk. Work closely with your doctor on a comprehensive cardio-protection plan.";
    } else {
      level = "Very High"; color = "#b03020"; pct = ">30%";
      advice = "Very high risk. Discuss urgent risk-reduction strategies with your doctor — do not delay.";
    }

    const factors = [];
    if (age !== "lt40") factors.push("Age");
    if (bp !== "normal") factors.push("Blood pressure");
    if (bpMeds === "yes") factors.push("On BP medication");
    if (smoking !== "never") factors.push(smoking === "current" ? "Current smoker" : "Former smoker");
    if (diabetes === "yes") factors.push("Diabetes");
    if (famHist === "yes") factors.push("Family history");

    setResult({ level, color, pct, advice, score, factors });
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
      <div style={{ background: "var(--sk-bg-card)", borderRadius: 20, padding: 28 }}>
        <h3 style={{ fontFamily: "var(--sk-font-display)", fontSize: 20, fontWeight: 700, color: "var(--sk-fg)", margin: "0 0 8px" }}>
          Cardiovascular Risk
        </h3>
        <p style={{ fontSize: 14, color: "var(--sk-fg-subtle)", lineHeight: 1.6, margin: "0 0 24px" }}>
          A simplified assessment of your 10-year cardiovascular risk based on key risk factors. Answer 7 quick questions.
        </p>
        <SelectField label="Age group" value={age} onChange={e => setAge(e.target.value)} options={[
          { value: "lt40",   label: "Under 40" },
          { value: "40-49",  label: "40 – 49" },
          { value: "50-59",  label: "50 – 59" },
          { value: "60-69",  label: "60 – 69" },
          { value: "70plus", label: "70 or above" },
        ]} />
        <SelectField label="Sex" value={sex} onChange={e => setSex(e.target.value)} options={[
          { value: "female", label: "Female" },
          { value: "male",   label: "Male" },
        ]} />
        <SelectField label="Systolic blood pressure" value={bp} onChange={e => setBp(e.target.value)} options={[
          { value: "normal",   label: "Normal (< 120 mmHg)" },
          { value: "elevated", label: "Elevated (120–139 mmHg)" },
          { value: "high1",    label: "High Stage 1 (140–159 mmHg)" },
          { value: "high2",    label: "High Stage 2 (≥ 160 mmHg)" },
        ]} />
        <SelectField label="Currently taking blood pressure medication?" value={bpMeds} onChange={e => setBpMeds(e.target.value)} options={[
          { value: "no",  label: "No" },
          { value: "yes", label: "Yes" },
        ]} />
        <SelectField label="Smoking status" value={smoking} onChange={e => setSmoking(e.target.value)} options={[
          { value: "never",   label: "Never smoked" },
          { value: "former",  label: "Former smoker (quit > 1 yr)" },
          { value: "current", label: "Current smoker" },
        ]} />
        <SelectField label="Diagnosed with diabetes?" value={diabetes} onChange={e => setDiabetes(e.target.value)} options={[
          { value: "yes", label: "Yes" },
          { value: "no",  label: "No" },
        ]} />
        <SelectField label="Family history of heart disease?" value={famHist} onChange={e => setFamHist(e.target.value)} options={[
          { value: "no",  label: "No" },
          { value: "yes", label: "Yes — parent or sibling before age 65" },
        ]} />
        <CalcButton onClick={calculate}>Assess My Risk</CalcButton>
        <CalcDisclaimer />
      </div>

      {result ? (
        <div style={{ background: "#fff", border: "1.5px solid var(--sk-border-soft)", borderRadius: 20, padding: 28 }}>
          <div style={{ fontSize: 13, color: "var(--sk-fg-subtle)", marginBottom: 6 }}>
            Estimated 10-year cardiovascular risk
          </div>
          <div style={{
            fontSize: 72, fontWeight: 700, lineHeight: 1,
            color: result.color, fontFamily: "var(--sk-font-display)",
            letterSpacing: "-0.03em", marginBottom: 6,
          }}>
            {result.pct}
          </div>
          <span style={{
            display: "inline-block", padding: "6px 14px", borderRadius: 999,
            background: result.color + "20", color: result.color,
            fontWeight: 700, fontSize: 14,
          }}>{result.level} risk</span>

          <CVDRiskGauge level={result.level} />

          {result.factors.length > 0 && (
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 12, color: "var(--sk-fg-subtle)", marginBottom: 8 }}>Contributing risk factors</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {result.factors.map(f => (
                  <span key={f} style={{
                    padding: "5px 10px", borderRadius: 999, fontSize: 12, fontWeight: 600,
                    background: "var(--sk-gray-100)", color: "var(--sk-fg)",
                  }}>{f}</span>
                ))}
              </div>
            </div>
          )}

          <p style={{ fontSize: 14, color: "var(--sk-fg)", lineHeight: 1.6, marginTop: 20 }}>{result.advice}</p>
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--sk-border-soft)" }}>
            <Button variant="ghost" size="sm" icon={<HelpGlyph size={16} />}>Talk to a Sema Counsellor</Button>
          </div>
        </div>
      ) : <EmptyResultCard />}
    </div>
  );
}

// ─── Tools Page ──────────────────────────────────────────────────────────────

const TABS = [
  { id: "bmi", label: "BMI",                 sub: "Body Mass Index" },
  { id: "whr", label: "Waist-to-Hip",        sub: "WHR & Abdominal Fat" },
  { id: "ibw", label: "Ideal Weight",        sub: "IBW Calculator" },
  { id: "cvd", label: "Cardiovascular Risk", sub: "10-Year Risk Score" },
];

function ToolsPage() {
  const [activeTab, setActiveTab] = React.useState("bmi");

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <InnerHeader active="tools" />

      {/* Page hero */}
      <section style={{
        background: "linear-gradient(170deg, var(--sk-blue-50) 0%, #fff 100%)",
        padding: "72px 120px 60px", textAlign: "center",
      }}>
        <Eyebrow style={{ justifyContent: "center", marginBottom: 16 }}>Health Tools</Eyebrow>
        <h1 style={{
          fontFamily: "var(--sk-font-display)", fontSize: 52, fontWeight: 700,
          color: "var(--sk-fg)", letterSpacing: "-0.03em",
          margin: "0 0 20px", lineHeight: 1.1,
        }}>
          Know your numbers.<br />Take control.
        </h1>
        <p style={{ fontSize: 18, color: "var(--sk-fg-subtle)", lineHeight: 1.6, maxWidth: 580, margin: "0 auto" }}>
          Free health calculators designed for people managing obesity, diabetes, and metabolic health — using Indian-specific cutoffs where they matter.
        </p>
      </section>

      {/* Calculator section */}
      <section style={{ flex: 1, padding: "60px 120px 80px", background: "#fff" }}>
        {/* Tab strip */}
        <div style={{
          display: "flex", gap: 8, marginBottom: 40,
          borderBottom: "1.5px solid var(--sk-border-soft)", paddingBottom: 0,
        }}>
          {TABS.map(t => {
            const active = t.id === activeTab;
            return (
              <button key={t.id} onClick={() => setActiveTab(t.id)}
                style={{
                  padding: "14px 22px", border: "none", background: "transparent",
                  cursor: "pointer", fontFamily: "var(--sk-font-sans)",
                  borderBottom: active ? "2.5px solid var(--sk-accent)" : "2.5px solid transparent",
                  marginBottom: -1.5,
                  transition: "all 120ms ease-out",
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700, color: active ? "var(--sk-accent)" : "var(--sk-fg)" }}>
                  {t.label}
                </div>
                <div style={{ fontSize: 11, color: active ? "var(--sk-accent)" : "var(--sk-fg-subtle)", marginTop: 2 }}>
                  {t.sub}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active calculator */}
        {activeTab === "bmi" && <BMICalculator />}
        {activeTab === "whr" && <WHRCalculator />}
        {activeTab === "ibw" && <IBWCalculator />}
        {activeTab === "cvd" && <CVDRiskCalculator />}
      </section>

      {/* CTA band */}
      <section style={{
        background: "var(--sk-purple-100)", padding: "52px 120px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700, fontFamily: "var(--sk-font-display)", color: "var(--sk-fg)", marginBottom: 8 }}>
            Want to make sense of your results?
          </div>
          <div style={{ fontSize: 16, color: "var(--sk-fg-subtle)" }}>
            A SemaKare™ Counsellor can walk you through what your numbers mean and what to do next.
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
