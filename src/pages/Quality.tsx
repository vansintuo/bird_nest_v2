import { CheckIcon, BirdDecor, GoldDivider, GoldButton, ArrowRight, useFadeIn, C, PageHero, SectionLabel } from "../shared";
import { useNavigate } from "react-router";

const STANDARDS = [
  { num: "01", title: "Authenticity", icon: "◈", desc: "Every nest is carefully selected and verified for its natural origin and authenticity before entering our processing chain." },
  { num: "02", title: "Purity", icon: "◎", desc: "Careful cleaning and preparation preserve the natural quality and active compounds found in genuine premium bird's nest." },
  { num: "03", title: "Hygiene", icon: "✦", desc: "Our nests are prepared under strict hygiene and handling standards in a controlled, monitored environment throughout." },
  { num: "04", title: "Consistency", icon: "◇", desc: "Every batch is inspected against our premium grade criteria to ensure a consistent, reliable product every single time." },
];

const CHECKLIST = [
  "Source verification",
  "Visual inspection",
  "Cleaning standards",
  "Processing control",
  "Packaging inspection",
];

const STATS = [
  { value: "100%", label: "Carefully Selected" },
  { value: "6+", label: "Quality Checkpoints" },
  { value: "AAA", label: "Premium Processing" },
  { value: "0%", label: "Artificial Additives" },
];

function Standards() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} style={{ background: C.cream, padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel>OUR STANDARDS</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4vw,44px)", fontWeight: 700, color: C.brown }}>Built on Four Pillars</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }} className="standards-grid">
          {STANDARDS.map((s, i) => (
            <div key={i} style={{
              background: C.ivory, border: `1px solid rgba(184,134,11,0.14)`,
              padding: "40px 28px", textAlign: "center",
              opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.5s ease ${i * 0.12}s,transform 0.5s ease ${i * 0.12}s`,
            }}>
              <div style={{ fontSize: 32, color: C.goldLight, marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontSize: 9, color: C.gold, letterSpacing: "0.18em", fontWeight: 700, marginBottom: 12 }}>{s.num}</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 600, color: C.brown, marginBottom: 16 }}>{s.title}</h3>
              <div style={{ width: 32, height: 1, background: C.goldLight, margin: "0 auto 20px" }} />
              <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.standards-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){.standards-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function Certifications() {
  const { ref, visible } = useFadeIn();
  const certs = [
    { label: "Food Safety", sub: "Compliant with food safety handling standards" },
    { label: "Hygiene Certified", sub: "Production facility hygiene verified" },
    { label: "Natural Product", sub: "No artificial additives or bleaching agents" },
    { label: "Ethical Sourcing", sub: "Responsibly harvested from certified farms" },
    { label: "Premium Grade", sub: "AAA grade classification standard" },
    { label: "Quality Assured", sub: "Multi-stage quality inspection protocol" },
  ];
  return (
    <section ref={ref} style={{ background: C.ivory, padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel>CERTIFICATIONS & STANDARDS</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, color: C.brown, marginBottom: 12 }}>Our Quality Commitments</h2>
          <p style={{ fontSize: 15, color: C.muted, maxWidth: 520, margin: "0 auto" }}>Placeholder for official certifications — this space is reserved for your verified quality credentials.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="cert-grid">
          {certs.map((c, i) => (
            <div key={i} style={{
              border: `1px solid rgba(184,134,11,0.18)`,
              padding: "32px 28px",
              display: "flex", alignItems: "center", gap: 20,
              opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease ${i * 0.08}s,transform 0.5s ease ${i * 0.08}s`,
            }}>
              {/* Placeholder badge */}
              <div style={{ width: 56, height: 56, borderRadius: "50%", border: `1.5px solid rgba(184,134,11,0.3)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: `rgba(184,134,11,0.05)` }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", border: `1px solid rgba(184,134,11,0.2)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: `rgba(184,134,11,0.4)` }} />
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 600, color: C.brown, marginBottom: 6 }}>{c.label}</div>
                <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6 }}>{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.cert-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){.cert-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function Inspection() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} style={{ background: C.cream }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr" }} className="inspection-grid">
        {/* Image */}
        <div style={{ position: "relative", minHeight: 560, overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1623133894375-ce20135ee521?w=800&h=700&fit=crop&auto=format" alt="Quality inspection and preparation" style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 560 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,transparent 60%,#F2EBE0)" }} />
        </div>

        {/* Checklist */}
        <div style={{
          padding: "80px 64px 80px 56px", display: "flex", flexDirection: "column", justifyContent: "center",
          opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)",
          transition: "opacity 0.7s ease,transform 0.7s ease",
        }}>
          <SectionLabel>QUALITY INSPECTION</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 700, color: C.brown, marginBottom: 12, lineHeight: 1.2 }}>
            Every Product,<br />Every Check
          </h2>
          <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.8, marginBottom: 40, maxWidth: 380 }}>
            Before any product is approved for packaging, it passes through our five-stage inspection protocol — ensuring nothing leaves our facility unless it meets our full standard.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CHECKLIST.map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "16px 20px",
                background: C.ivory, border: `1px solid rgba(184,134,11,0.12)`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(20px)",
                transition: `opacity 0.4s ease ${0.2 + i * 0.08}s,transform 0.4s ease ${0.2 + i * 0.08}s`,
              }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: `rgba(184,134,11,0.1)`, border: `1px solid rgba(184,134,11,0.25)`, display: "flex", alignItems: "center", justifyContent: "center", color: C.gold, flexShrink: 0 }}>
                  <CheckIcon />
                </div>
                <span style={{ fontSize: 14, color: C.charcoal, fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.inspection-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function TrustStats() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} style={{ background: C.brown, padding: "80px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, border: `1px solid rgba(184,134,11,0.2)` }} className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: "48px 32px", textAlign: "center",
              borderRight: i < 3 ? `1px solid rgba(184,134,11,0.2)` : "none",
              opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease ${i * 0.12}s,transform 0.5s ease ${i * 0.12}s`,
            }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 48, fontWeight: 700, color: C.goldLight, marginBottom: 12, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "rgba(250,247,242,0.45)", letterSpacing: "0.12em", fontWeight: 600 }}>{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  );
}

function QualityCTA() {
  const navigate = useNavigate();
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} style={{ background: C.cream, padding: "80px 0", textAlign: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 24px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease,transform 0.6s ease" }}>
        <BirdDecor size={32} opacity={0.3} />
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,3.5vw,36px)", fontWeight: 700, color: C.brown, margin: "24px 0 16px" }}>Have questions about our quality?</h2>
        <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.75, marginBottom: 40 }}>
          Our FAQ covers everything about our sourcing, cleaning, and quality standards.
        </p>
        <GoldButton onClick={() => navigate("/faq")}>View FAQ <ArrowRight /></GoldButton>
      </div>
    </section>
  );
}

export default function QualityPage() {
  return (
    <>
      <PageHero
        label="OUR COMMITMENT"
        title="Quality Assurance"
        subtitle="Pure by nature. Carefully verified by us."
        img="https://images.unsplash.com/photo-1779517935494-2fa87fd7178c?w=1400&h=700&fit=crop&auto=format"
        dimOverlay={0.5}
      />

      {/* Trust intro */}
      <section style={{ background: C.ivory, padding: "72px 0" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <GoldDivider />
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 700, color: C.brown, margin: "32px 0 20px", lineHeight: 1.2 }}>
            Our Commitment to Quality
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: C.muted }}>
            At NESTURA, quality is not a department — it is a philosophy that runs through everything we do. From the moment we select a nest from a partner farm to the second it is sealed in its final packaging, every step is guided by our commitment to purity, safety, and authenticity. We believe you deserve to know exactly what you are receiving, and we are proud to stand behind every product we offer.
          </p>
        </div>
      </section>

      <Standards />
      <Certifications />
      <Inspection />
      <TrustStats />
      <QualityCTA />
    </>
  );
}
