import { useState } from "react";
import { BirdDecor, GoldDivider, GoldButton, ArrowRight, useFadeIn, C, PageHero, SectionLabel } from "../shared";
import { useNavigate } from "react-router";
import storyImagePrim from "../images/bird_nest_prim_preview.png";

const STEPS = [
  {
    num: "01",
    label: "Ethical Sourcing",
    subtitle: "From nature's finest habitats",
    desc: "We partner with responsible swiftlet farmers who maintain natural, humane bird house environments. Our nests are sourced from certified farms in Southeast Asia where swiftlets nest freely, and no birds are harmed in the process.",
    detail: "Carefully selected natural bird's nests — sustainably and ethically sourced.",
    img: "https://static01.nyt.com/images/2024/03/20/multimedia/00Indonesia-birdnest-dispatch-01-lkhg/00Indonesia-birdnest-dispatch-01-lkhg-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale",
    alt: "Bird house in natural field environment",
    bg: C.ivory,
  },
  {
    num: "02",
    label: "Careful Selection",
    subtitle: "Only the finest pass our eyes",
    desc: "Each nest is individually inspected by our skilled team. We assess strand length, colour, shape, and overall integrity. Only nests that meet our premium grade standards are accepted into our processing line.",
    detail: "Visual inspection ensures authenticity and natural premium quality.",
    img: "https://sgbestbirdnest.sg/wp-content/uploads/2024/07/014-%E7%87%95%E7%AA%9D%E5%B7%A5%E5%8E%82%E5%9B%BE%E7%89%872-scaled.jpg",
    alt: "Close-up of premium raw bird's nest",
    bg: C.cream,
  },
  {
    num: "03",
    label: "Hand Cleaning",
    subtitle: "Craft, patience, and precision",
    desc: "Our skilled artisans meticulously remove impurities by hand using fine tools and pure water. This delicate process preserves the natural strand structure and active compounds that make bird's nest so prized.",
    detail: "Every feather and foreign particle removed by patient, trained hands.",
    img: "https://cvsumberalam.co.id/data/production/8.jpg",
    alt: "Hands carefully cleaning bird's nest",
    bg: C.ivory,
  },
  {
    num: "04",
    label: "Quality Processing",
    subtitle: "Controlled and hygienic",
    desc: "After cleaning, nests are processed under strict hygiene protocols in our controlled environment. Temperature, humidity, and handling are carefully monitored to maintain purity and preserve natural nutrients throughout.",
    detail: "Prepared under rigorous hygiene and processing standards.",
    img: "https://hitang-birdnest.com/wp-content/themes/hitang-storefront-child/assets/images/cleaning-5-dry.png",
    alt: "Clean food processing facility",
    bg: C.cream,
  },
  {
    num: "05",
    label: "Final Inspection",
    subtitle: "Every piece, verified",
    desc: "Before packaging, each nest undergoes a final quality review. Our team checks for consistency, cleanliness, and grade classification. Only products that pass every checkpoint are approved for the next stage.",
    detail: "No nest leaves our facility without passing a thorough final review.",
    img: "https://www.euyansang.com/cdn/shop/articles/HealthReads_4_5Ways_Birds_Nest1.jpg?v=1775466492",
    alt: "Premium product inspection",
    bg: C.ivory,
  },
  {
    num: "06",
    label: "Premium Packaging",
    subtitle: "Worthy of what's inside",
    desc: "Each product is carefully packed in our premium packaging, designed to maintain freshness and present the product beautifully. Our packaging reflects the care and craftsmanship of everything inside.",
    detail: "Elegant, hygienic packaging that protects and presents with pride.",
    img: storyImagePrim,
    alt: "Elegant premium product packaging",
    bg: C.cream,
  },
];

function StepCard({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const { ref, visible } = useFadeIn();
  const isEven = index % 2 === 0;
  return (
    <div ref={ref} style={{ background: step.bg }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 24px", display: "grid", gridTemplateColumns: isEven ? "1fr 1fr" : "1fr 1fr", gap: 72, alignItems: "center" }} className="step-grid">
        {/* Image side */}
        <div
          style={{
            order: isEven ? 1 : 2,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : `translateX(${isEven ? -30 : 30}px)`,
            transition: "opacity 0.7s ease,transform 0.7s ease",
          }}
        >
          <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", boxShadow: "0 24px 64px rgba(255, 255, 255, 0.14)" }}>
            <img src={step.img} alt={step.alt} style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }} />
            {/* Number watermark */}
            <div style={{ position: "absolute", top: 20, left: 20, fontFamily: "'Playfair Display',serif", fontSize: 80, fontWeight: 700, color: "rgba(255,255,255,0.15)", lineHeight: 1, pointerEvents: "none" }}>
              {step.num}
            </div>
          </div>
        </div>

        {/* Content side */}
        <div
          style={{
            order: isEven ? 2 : 1,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : `translateX(${isEven ? 30 : -30}px)`,
            transition: "opacity 0.7s ease 0.15s,transform 0.7s ease 0.15s",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 56, fontWeight: 700, color: "rgba(184,134,11,0.15)", lineHeight: 1 }}>{step.num}</span>
            <div style={{ width: 1, height: 48, background: `rgba(184,134,11,0.2)` }} />
            <div>
              <div style={{ fontSize: 10, color: C.gold, letterSpacing: "0.2em", fontWeight: 600, marginBottom: 4 }}>STEP {step.num}</div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,3vw,36px)", fontWeight: 700, color: C.brown, lineHeight: 1.2 }}>{step.label}</h2>
            </div>
          </div>
          <p style={{ fontSize: 14, color: C.gold, letterSpacing: "0.06em", fontStyle: "italic", marginBottom: 20 }}>{step.subtitle}</p>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: C.muted, marginBottom: 24 }}>{step.desc}</p>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "16px 20px", background: `rgba(184,134,11,0.06)`, border: `1px solid rgba(184,134,11,0.15)` }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold, marginTop: 6, flexShrink: 0 }} />
            <p style={{ fontSize: 13, color: C.charcoal, lineHeight: 1.7 }}>{step.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NestToNourishment() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} style={{ background: C.brown, padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel><span style={{ color: "rgba(201,168,76,0.85)" }}>TRANSFORMATION</span></SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: C.goldLight, lineHeight: 1.2 }}>From Nest to Nourishment</h2>
          <p style={{ fontSize: 16, color: "rgba(250,247,242,0.5)", marginTop: 16, maxWidth: 520, margin: "16px auto 0" }}>
            Witness the remarkable transformation from a raw natural nest to the premium product in your home.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 32, alignItems: "center" }} className="before-after-grid">
          {/* Before */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)", transition: "opacity 0.6s ease,transform 0.6s ease" }}>
            <div style={{ borderRadius: 4, overflow: "hidden", position: "relative", boxShadow: "0 16px 48px rgba(0,0,0,0.4)" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OHgeFSRGRrF6BsDsNQaOM4Jgmu5kYW73ASbIBeDexphPVZFuY9PYqSfM&s=10" alt="Raw bird's nest from nature" style={{ width: "100%", height: 400, objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 28px 28px", background: "linear-gradient(to top,rgba(28,15,7,0.85),transparent)" }}>
                <div style={{ fontSize: 10, color: C.goldLight, letterSpacing: "0.18em", fontWeight: 600, marginBottom: 6 }}>BEFORE</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: "#FAF7F2", fontWeight: 600 }}>Raw from Nature</div>
                <p style={{ fontSize: 13, color: "rgba(250,247,242,0.6)", marginTop: 6 }}>Natural nest, as harvested</p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.3s" }}>
            <div style={{ width: 1, height: 60, background: `rgba(184,134,11,0.3)` }} />
            <div style={{ width: 56, height: 56, borderRadius: "50%", border: `1px solid ${C.goldLight}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.goldLight, fontSize: 22 }}>→</div>
            <div style={{ width: 1, height: 60, background: `rgba(184,134,11,0.3)` }} />
            <div style={{ fontSize: 10, color: "rgba(201,168,76,0.5)", letterSpacing: "0.14em", textAlign: "center", fontWeight: 600 }}>OUR<br/>PROCESS</div>
          </div>

          {/* After */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)", transition: "opacity 0.6s ease 0.15s,transform 0.6s ease 0.15s" }}>
            <div style={{ borderRadius: 4, overflow: "hidden", position: "relative", boxShadow: "0 16px 48px rgba(0,0,0,0.4)" }}>
              <img src="https://images.unsplash.com/photo-1567475918071-a93dca71dd11?w=600&h=450&fit=crop&auto=format" alt="Premium cleaned bird's nest product" style={{ width: "100%", height: 400, objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px 28px 28px", background: "linear-gradient(to top,rgba(28,15,7,0.85),transparent)" }}>
                <div style={{ fontSize: 10, color: C.goldLight, letterSpacing: "0.18em", fontWeight: 600, marginBottom: 6 }}>AFTER</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: "#FAF7F2", fontWeight: 600 }}>Premium Product</div>
                <p style={{ fontSize: 13, color: "rgba(250,247,242,0.6)", marginTop: 6 }}>Cleaned, inspected, ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.before-after-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function ProcessCTA() {
  const navigate = useNavigate();
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} style={{ background: C.cream, padding: "80px 0", textAlign: "center" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease,transform 0.6s ease" }}>
        <BirdDecor size={36} opacity={0.35} />
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, color: C.brown, margin: "24px 0 16px" }}>Discover Our Quality Standards</h2>
        <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.75, marginBottom: 40 }}>
          Every step of our process exists to guarantee the purity, safety, and premium quality of what reaches you.
        </p>
        <GoldButton onClick={() => navigate("/quality")}>Quality Assurance <ArrowRight /></GoldButton>
      </div>
    </section>
  );
}

export default function ProcessPage() {
  return (
    <>
      <PageHero
        label="HOW WE DO IT"
        title="Our Process"
        subtitle="From nature to your table, every detail matters."
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OHgeFSRGRrF6BsDsNQaOM4Jgmu5kYW73ASbIBeDexphPVZFuY9PYqSfM&s=10"
        dimOverlay={0.45}
      />

      {/* Intro */}
      <section style={{ background: C.ivory, padding: "72px 0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <GoldDivider className="justify-center" />
          <p style={{ fontSize: 17, lineHeight: 1.85, color: C.muted, marginTop: 32 }}>
            At NESTURA, every bird's nest passes through a carefully designed journey from its natural source to your home. We believe that true premium quality is built step by step — through ethical sourcing, patient hand-cleaning, and rigorous quality standards. This is how we ensure that every product we offer is worthy of the name NESTURA.
          </p>
        </div>
      </section>

      {STEPS.map((step, i) => <StepCard key={i} step={step} index={i} />)}
      <NestToNourishment />
      <ProcessCTA />
    </>
  );
}
