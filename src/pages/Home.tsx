import { useState } from "react"
import {
  BirdDecor,
  ArrowRight,
  GoldDivider,
  GoldButton,
  useFadeIn,
  C,
} from "../shared"

/* ── Quality feature icons ── */
const IconNatural = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" stroke="#B8860B" strokeWidth="1" />
    <path
      d="M14 20c0-4 4-7 4-7s-1 4-4 4c0 0 3-1 3-5 0 0-4 2-4 7"
      stroke="#B8860B"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M14 20c0-4-4-7-4-7s1 4 4 4"
      stroke="#B8860B"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
)
const IconPremium = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" stroke="#B8860B" strokeWidth="1" />
    <path
      d="M14 8l1.8 4h4.2l-3.4 2.5 1.3 4-3.9-2.8-3.9 2.8 1.3-4L8 12h4.2z"
      stroke="#B8860B"
      strokeWidth="1.2"
      fill="none"
      strokeLinejoin="round"
    />
  </svg>
)
const IconCleaned = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" stroke="#B8860B" strokeWidth="1" />
    <path
      d="M14 8C14 8 10 12 10 15.5C10 18 11.8 20 14 20C16.2 20 18 18 18 15.5C18 12 14 8 14 8z"
      stroke="#B8860B"
      strokeWidth="1.2"
      fill="none"
    />
    <path
      d="M11.5 17C12 18.5 13 19.5 14 19.5"
      stroke="#B8860B"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
)
const IconHeritage = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" stroke="#B8860B" strokeWidth="1" />
    <rect
      x="9"
      y="16"
      width="10"
      height="4"
      rx="0.5"
      stroke="#B8860B"
      strokeWidth="1"
    />
    <path
      d="M9 16 L14 11 L19 16"
      stroke="#B8860B"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M7 16 H21"
      stroke="#B8860B"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <rect
      x="12.5"
      y="16"
      width="3"
      height="4"
      stroke="#B8860B"
      strokeWidth="0.8"
    />
  </svg>
)
const IconTrusted = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" stroke="#B8860B" strokeWidth="1" />
    <path
      d="M14 8 L20 11 V15 C20 18.5 17 21 14 22 C11 21 8 18.5 8 15 V11 Z"
      stroke="#B8860B"
      strokeWidth="1.2"
      fill="none"
    />
    <path
      d="M11 14.5 L13 16.5 L17 12.5"
      stroke="#B8860B"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const QUALITY_FEATURES = [
  {
    icon: <IconNatural />,
    title: "100% NATURAL",
    desc: "No additives, no bleaching, pure and safe.",
  },
  {
    icon: <IconPremium />,
    title: "PREMIUM QUALITY",
    desc: "Handpicked from the best natural habitats.",
  },
  {
    icon: <IconCleaned />,
    title: "CAREFULLY CLEANED",
    desc: "Meticulously cleaned to preserve purity and nutrients.",
  },
  {
    icon: <IconHeritage />,
    title: "ASIAN HERITAGE",
    desc: "Rooted in tradition and trusted by generations.",
  },
  {
    icon: <IconTrusted />,
    title: "TRUSTED BRAND",
    desc: "Committed to quality and customer satisfaction.",
  },
]

const PRODUCTS = [
  {
    name: "PREMIUM BIRD'S NEST",
    desc: "Top grade raw bird's nest with long strands.",
    img: "https://sgbestbirdnest.sg/wp-content/uploads/2024/07/262cfe37e5464916b1e9e0609c3f965-resize-crop.jpg",
    alt: "Premium raw bird's nest on dark plate",
  },
  {
    name: "CLEANED BIRD'S NEST",
    desc: "Meticulously cleaned and ready to cook.",
    img: "https://shandonbirdnest.com/data/product/prestige-4.png",
    alt: "Cleaned bird's nest on textile",
  },
  {
    name: "READY-TO-DRINK NEST",
    desc: "Convenient and nutritious, ready to enjoy.",
    img: "https://brotenders.com/wp-content/uploads/2021/06/Birdnest.jpg",
    alt: "White ceramic bowl ready to drink",
  },
  {
    name: "PREMIUM GIFT BOX",
    desc: "Perfect gift for your loved ones on special occasions.",
    img: "https://yensaohoangkim.vn/image/catalog/y-image-san-pham-yen-sao-hoang-kim/Hop-quan-tang/Hop-tam-hu/cs-danh-cho-nguoi-an-kieng-2_30_11zon.webp",
    alt: "Premium luxury gift box packaging",
  },
]

const PROCESS_STEPS = [
  {
    num: "01",
    label: "HARVEST",
    icon: "⛰",
    desc: "Nests are carefully harvested from natural caves.",
  },
  {
    num: "02",
    label: "CLEANING",
    icon: "✦",
    desc: "Impurities are removed through a meticulous cleaning process.",
  },
  {
    num: "03",
    label: "QUALITY CHECK",
    icon: "◎",
    desc: "Every nest is inspected for quality and purity.",
  },
  {
    num: "04",
    label: "PREPARATION",
    icon: "❧",
    desc: "Prepared with care to preserve nutrition and texture.",
  },
  {
    num: "05",
    label: "PACKAGING",
    icon: "▣",
    desc: "Hygienically packed to ensure freshness and safety.",
  },
]

/* ── Sections ── */
function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#FAF7F2 0%,#F5ECD9 40%,#FAF7F2 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(201,168,76,0.18) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "2%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(184,134,11,0.1) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{ position: "absolute", top: 130, left: "55%", opacity: 0.2 }}
        className="bird-float"
      >
        <BirdDecor size={40} opacity={1} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 180,
          right: "10%",
          opacity: 0.15,
        }}
        className="bird-float"
      >
        <BirdDecor size={28} opacity={1} />
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        <div>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.22em",
              fontWeight: 600,
              color: C.gold,
              marginBottom: 20,
              textTransform: "uppercase",
            }}
          >
            Premium Edible Bird's Nest
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(48px,6vw,76px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: C.brown,
              marginBottom: 8,
            }}
          >
            Nature's
          </h1>
          <h1
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(48px,6vw,76px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: C.gold,
              marginBottom: 28,
              fontStyle: "italic",
            }}
          >
            Purest Gift
          </h1>
          <GoldDivider className="home-divider" />
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: C.muted,
              maxWidth: 420,
              marginBottom: 40,
              marginTop: 28,
            }}
          >
            Carefully harvested from pristine caves and traditionally prepared
            to preserve nature's finest nutrition for your loved ones.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 520,
              aspectRatio: "1/1",
              borderRadius: "50% 50% 50% 50%/60% 60% 40% 40%",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(44,26,14,0.2)",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/aee2a8_9c2bda02e2314826af6d0a03d450f34f~mv2.jpg/v1/fill/w_2500,h_1666,al_c/aee2a8_9c2bda02e2314826af6d0a03d450f34f~mv2.jpg"
              alt="Premium edible bird's nest in golden plate"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: -16,
              background: "rgba(250,247,242,0.96)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(184,134,11,0.2)",
              padding: "14px 20px",
              boxShadow: "0 8px 32px rgba(44,26,14,0.12)",
            }}
          >
            <div
              style={{
                fontSize: 9,
                color: C.gold,
                letterSpacing: "0.16em",
                fontWeight: 600,
                marginBottom: 3,
              }}
            >
              GRADE AAA
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: 15,
                color: C.brown,
                fontWeight: 600,
              }}
            >
              Premium Quality
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){ .hero-grid{grid-template-columns:1fr!important;gap:40px!important} }
        @keyframes float{0%,100%{transform:translateY(0)rotate(-5deg)}50%{transform:translateY(-10px)rotate(0deg)}}
        .bird-float{animation:float 4s ease-in-out infinite}
      `}</style>
    </section>
  )
}

function QualityFeatures() {
  const { ref, visible } = useFadeIn()
  return (
    <section
      ref={ref}
      style={{
        background: C.ivory,
        borderTop: `1px solid rgba(184,134,11,0.1)`,
        borderBottom: `1px solid rgba(184,134,11,0.1)`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "56px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
        }}
        className="quality-grid"
      >
        {QUALITY_FEATURES.map((f, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "36px 24px",
              borderRight: i < 4 ? `1px solid rgba(184,134,11,0.12)` : "none",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.5s ease ${i * 0.1}s,transform 0.5s ease ${i * 0.1}s`,
            }}
          >
            <div style={{ marginBottom: 14 }}>{f.icon}</div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: C.gold,
                letterSpacing: "0.14em",
                marginBottom: 10,
              }}
            >
              {f.title}
            </div>
            <p style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.65 }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:900px){.quality-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){.quality-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

function ProductCard({ p }: { p: typeof PRODUCTS[0] }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: C.ivory,
        border: `1px solid rgba(184,134,11,0.12)`,
        transition: "all 0.3s ease",
        cursor: "pointer",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? "0 16px 48px rgba(44,26,14,0.12)" : "none",
      }}
    >
      <div
        style={{ overflow: "hidden", aspectRatio: "4/3", background: C.cream }}
      >
        <img
          src={p.img}
          alt={p.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hov ? "scale(1.06)" : "scale(1)",
          }}
        />
      </div>
      <div style={{ padding: "28px 24px 24px" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 15,
            fontWeight: 600,
            color: C.brown,
            letterSpacing: "0.04em",
            marginBottom: 10,
          }}
        >
          {p.name}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: C.muted,
            lineHeight: 1.65,
            marginBottom: 22,
          }}
        >
          {p.desc}
        </p>
      </div>
    </div>
  )
}

function Products() {
  const { ref, visible } = useFadeIn()
  return (
    <section ref={ref} style={{ background: C.cream, padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(32px,4vw,44px)",
                fontWeight: 700,
                color: C.brown,
                marginBottom: 8,
              }}
            >
              OUR PRODUCTS
            </h2>
            <GoldDivider />
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 24,
          }}
          className="products-grid"
        >
          {PRODUCTS.map((p, i) => (
            <div
              key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.5s ease ${i * 0.12}s,transform 0.5s ease ${i * 0.12}s`,
              }}
            >
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.products-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){.products-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

function OurStory() {
  const { ref, visible } = useFadeIn()
  return (
    <section ref={ref} style={{ background: C.ivory }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
        className="story-grid"
      >
        <div
          style={{ position: "relative", minHeight: 520, overflow: "hidden" }}
        >
          <img
            src="https://www.gosupps.com/media/catalog/product/cache/25/image/1500x/040ec09b1e35df139433887a97daa66f/5/1/51oIYB6D-iL._AC_SL1000__1.jpg"
            alt="Bird's nest soup"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              minHeight: 520,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right,transparent 70%,#FAF7F2)",
            }}
          />
        </div>
        <div
          style={{
            padding: "80px 64px 80px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.7s ease,transform 0.7s ease",
          }}
        >
          <div
            style={{ position: "absolute", right: 24, top: 40, opacity: 0.07 }}
          >
            <svg width="180" height="300" viewBox="0 0 180 300" fill="none">
              <path
                d="M90 10 C60 40 20 80 30 140 C40 200 80 230 90 290"
                stroke="#B8860B"
                strokeWidth="1"
              />
              <path
                d="M90 10 C120 40 160 80 150 140 C140 200 100 230 90 290"
                stroke="#B8860B"
                strokeWidth="1"
              />
              <circle
                cx="90"
                cy="10"
                r="4"
                stroke="#B8860B"
                strokeWidth="0.8"
              />
            </svg>
          </div>
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.22em",
              fontWeight: 700,
              color: C.gold,
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            OUR STORY <BirdDecor size={16} opacity={0.7} />
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(32px,4vw,48px)",
              fontWeight: 700,
              color: C.brown,
              lineHeight: 1.2,
              marginBottom: 28,
            }}
          >
            From Nature,
            <br />
            With Care
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: C.muted,
              marginBottom: 40,
              maxWidth: 440,
            }}
          >
            At NESTURA, we believe the finest bird's nest comes from nature and
            careful hands. Each nest is ethically harvested from pristine caves,
            meticulously cleaned and quality-checked to retain its natural
            nutrients.
          </p>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              fontWeight: 600,
              color: C.gold,
              letterSpacing: "0.1em",
              textDecoration: "none",
              borderBottom: `1px solid ${C.gold}`,
              paddingBottom: 4,
              width: "fit-content",
            }}
          >
            LEARN MORE ABOUT US <ArrowRight />
          </a>
        </div>
      </div>
      <style>{`@media(max-width:768px){.story-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

function Process() {
  const { ref, visible } = useFadeIn()
  return (
    <section
      ref={ref}
      style={{
        background: C.brown,
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 80%,rgba(184,134,11,0.08) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(184,134,11,0.06) 0%,transparent 50%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.22em",
              fontWeight: 700,
              color: "rgba(201,168,76,0.85)",
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            OUR PROCESS <BirdDecor size={16} opacity={0.8} />
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(28px,4vw,40px)",
              fontWeight: 700,
              color: C.goldLight,
            }}
          >
            From Cave to Cup
          </h2>
        </div>
        <div
          style={{ display: "flex", alignItems: "flex-start" }}
          className="process-steps"
        >
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "flex-start", flex: 1 }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 1,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.15}s,transform 0.5s ease ${i * 0.15}s`,
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    border: `1.5px solid ${C.goldLight}`,
                    color: C.goldLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    marginBottom: 20,
                    background: "rgba(184,134,11,0.08)",
                    boxShadow: "0 0 0 8px rgba(184,134,11,0.05)",
                  }}
                >
                  {step.icon}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: "rgba(184,134,11,0.55)",
                    letterSpacing: "0.18em",
                    marginBottom: 6,
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: C.goldLight,
                    letterSpacing: "0.1em",
                    marginBottom: 12,
                    textAlign: "center",
                  }}
                >
                  {step.label}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(250,247,242,0.45)",
                    lineHeight: 1.65,
                    textAlign: "center",
                    maxWidth: 160,
                  }}
                >
                  {step.desc}
                </p>
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div
                  style={{
                    paddingTop: 32,
                    color: "rgba(184,134,11,0.35)",
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.process-steps{flex-direction:column!important;gap:32px!important}}`}</style>
    </section>
  )
}



export default function Home() {
  return (
    <>
      <Hero />
      <QualityFeatures />
      <Products />
      <OurStory />
      <Process />
    </>
  )
}
