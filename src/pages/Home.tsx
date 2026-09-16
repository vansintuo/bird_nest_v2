import { useState, useRef, useCallback } from "react";
import {
  BirdDecor,
  ArrowRight,
  GoldDivider,
  GoldButton,
  useFadeIn,
  C,
} from "../shared";
import storyImagePrim from "../images/bird_nest_prim_preview.png";
import storyImageChia from "../images/chia_bn.png";
import storyImageGinseng from "../images/ginseng_bn.png";
import storyImageOriginal from "../images/original_bn.png";
import storyImagePandan from "../images/pandan_bn.png";
import storyImageZeroSugar from "../images/zero_sugar_bn.png";
import storyImageCertificate from "../images/certificate.png";

const truncate = (s: string, n = 18) =>
  s.length > n ? s.slice(0, n) + "..." : s;

const truncateCertDesc = (s: string, n = 58) =>
  s.length > n ? s.slice(0, n) + "..." : s;
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
);
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
);
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
);
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
);
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
);

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
];

const PRODUCTS = [
  {
    name: "CHIA BIRD'S NEST",
    desc: "Top grade raw bird's nest with long strands.",
    img: storyImageChia,
    alt: "Premium raw bird's nest on dark plate",
  },
  {
    name: "Original BIRD'S NEST",
    desc: "Meticulously cleaned and ready to cook.",
    img: storyImageOriginal,
    alt: "Cleaned bird's nest on textile",
  },
  {
    name: "GINSENG BIRD'S NEST",
    desc: "Convenient and nutritious, ready to enjoy.",
    img: storyImageGinseng,
    alt: "White ceramic bowl ready to drink",
  },
  {
    name: "Pandan BIRD'S NEST",
    desc: "Perfect gift for your loved ones on special occasions.",
    img: storyImagePandan,
    alt: "Premium luxury gift box packaging",
  },
  {
    name: "ZERO SUGAR BIRD'S NEST",
    desc: "Perfect gift for your loved ones on special occasions.",
    img: storyImageZeroSugar,
    alt: "Premium luxury gift box packaging",
  },
];

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
];

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
  );
}

function QualityFeatures() {
  const { ref, visible } = useFadeIn();
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
  );
}

function ProductCard({ p }: { p: (typeof PRODUCTS)[0] }) {
  const [hov, setHov] = useState(false);
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
        style={{
          overflow: "hidden",
          aspectRatio: "1 / 1.9",
          background: C.cream,
        }}
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
          {truncate(p.name)}
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
  );
}

function Products() {
  const { ref, visible } = useFadeIn();
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
            gridTemplateColumns: "repeat(5,1fr)",
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
  );
}

/* ── Queen of Bird's Nest Video ── */
function QueenVideo() {
  const { ref, visible } = useFadeIn();
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(180deg,#FAF7F2 0%,#F5ECD9 100%)",
        padding: "96px 0",
        borderTop: "1px solid rgba(184,134,11,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "0 24px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.22em",
              fontWeight: 700,
              color: C.gold,
              marginBottom: 12,
            }}
          >
            QUEEN OF BIRD'S NEST
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(28px,3.5vw,40px)",
              fontWeight: 700,
              color: C.brown,
              lineHeight: 1.2,
            }}
          >
            Discover the Royal Difference
          </h2>
        </div>

        <div
          style={{
            position: "relative",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(44,26,14,0.18)",
            cursor: "pointer",
            aspectRatio: "16/9",
            background: "#1a1008",
          }}
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="bird_nest_house.mp4"
            poster="https://www.damadingjiyanwo.com/images/section-image-4.jpg"
            preload="metadata"
            playsInline
            onEnded={() => setPlaying(false)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Play button overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: playing
                ? "transparent"
                : "linear-gradient(135deg,rgba(26,16,8,0.45) 0%,rgba(26,16,8,0.25) 100%)",
              transition: "background 0.4s ease",
              pointerEvents: "none",
            }}
          >
            {!playing && (
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "rgba(184,134,11,0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s ease",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#FAF7F2">
                  <polygon points="6,3 20,12 6,21" />
                </svg>
              </div>
            )}
          </div>

          {/* Bottom label */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "20px 28px",
              background:
                "linear-gradient(to top,rgba(26,16,8,0.7) 0%,transparent 100%)",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                fontSize: 9,
                letterSpacing: "0.16em",
                fontWeight: 700,
                color: C.goldLight,
                marginBottom: 4,
              }}
            >
              QUEEN OF BIRD'S NEST
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: 16,
                color: "#FAF7F2",
                fontWeight: 600,
              }}
            >
              A Legacy of Purity & Elegance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Certificate data ── */
const CERTIFICATES = [
  {
    img: storyImageCertificate,
    ratio: "1700 / 2200",
    alt: "",
    badge: "",
    title: "Food Safety Standard",
    desc: "Our products are produced under strict food safety handling and hygiene protocols verified through regular internal audits and external review.",
    year: "Maintained annually",
    color: "#4CAF82",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0825/4157/6505/files/VIET_SUN_BIRDNEST_-_FDA_480x480.jpg?v=1723985475",
    ratio: "1700 / 2200",
    alt: "",
    badge: "",
    title: "Hygiene Certified Facility",
    desc: "Our processing environment meets rigorous hygiene and sanitation requirements, ensuring every product is handled in a clean, controlled setting.",
    year: "Certified production facility",
    color: "#4CAF82",
  },
  {
    img: "https://xiaoxiandunbirdnest.com/wp-content/uploads/2026/03/7191376245-CHM26-CL.png",
    ratio: "1700 / 2200",
    alt: "",
    badge: "",
    title: "AAA Grade Standard",
    desc: "Every nest is assessed against our Premium AAA grading criteria — covering strand integrity, colour consistency, purity, and natural aroma.",
    year: "Applied to every batch",
    color: "#4CAF82",
  },
  {
    img: "https://xiaoxiandunbirdnest.com/wp-content/uploads/2026/03/7191376245-CHM26-CL.png",
    ratio: "",
    alt: "",
    badge: "",
    title: "Responsible & Ethical",
    desc: "We work exclusively with certified swiftlet farms committed to humane, sustainable harvesting practices — protecting both the nests and the birds.",
    year: "Farm-audited supply chain",
    color: "#4CAF82",
  },
];

function CertificateCard({
  cert,
  index,
  visible,
}: {
  cert: (typeof CERTIFICATES)[0];
  index: number;
  visible: boolean;
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: C.ivory,
        border: `1px solid ${hov ? "rgba(184,134,11,0.3)" : "rgba(184,134,11,0.1)"}`,
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: hov ? "0 16px 48px rgba(44,26,14,0.1)" : "none",
        transform: hov ? "translateY(-4px)" : "none",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: cert.ratio,
          background: C.creamDark,
        }}
      >
        <img
          src={cert.img}
          alt={cert.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hov ? "scale(1.05)" : "scale(1)",
          }}
        />
        {/* Gold seal watermark */}
        <div
          style={{
            position: "absolute",
            bottom: -20,
            right: -20,
            width: 88,
            height: 88,
            borderRadius: "50%",
            border: `1.5px solid rgba(184,134,11,0.25)`,
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -12,
            right: -12,
            width: 72,
            height: 72,
            borderRadius: "50%",
            border: `1px solid rgba(184,134,11,0.2)`,
            opacity: 0.5,
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "28px 24px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 14,
          }}
        >
          {/* Circular seal icon */}
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: `1.5px solid ${cert.color}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              background: `rgba(184,134,11,0.04)`,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={cert.color}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 16,
              fontWeight: 600,
              color: C.brown,
              lineHeight: 1.25,
            }}
          >
            {truncate(cert.title)}
          </h3>
          <div
            style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: C.gold,
            }}
          >
            {truncate(cert.alt)}
          </div>
        </div>
        <p
          style={{
            fontSize: 13,
            color: C.muted,
            lineHeight: 1.75,
            marginBottom: 18,
          }}
        >
          {truncateCertDesc(cert.desc)}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            paddingTop: 16,
            borderTop: `1px solid rgba(184,134,11,0.1)`,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: cert.color,
              flexShrink: 0,
            }}
          />
          <span
            style={{ fontSize: 11, color: C.muted, letterSpacing: "0.06em" }}
          >
            {cert.year}
          </span>
        </div>
      </div>
    </div>
  );
}

function Certificates() {
  const { ref, visible } = useFadeIn();
  return (
    <section
      ref={ref}
      style={{
        background: C.cream,
        padding: "80px 0 96px",
        borderTop: `1px solid rgba(184,134,11,0.1)`,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                fontWeight: 700,
                color: C.gold,
                marginBottom: 12,
              }}
            >
              QUALITY & STANDARDS
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px,3.5vw,40px)",
                fontWeight: 700,
                color: C.brown,
                lineHeight: 1.15,
              }}
            >
              Our Certifications &<br />
              Quality Standards
            </h2>
          </div>
          <p
            style={{
              fontSize: 14,
              color: C.muted,
              maxWidth: 380,
              lineHeight: 1.75,
            }}
          >
            Every commitment we make to quality is reflected in the standards we
            uphold — from our sourcing partners to our packaging line.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
          className="cert-cards-grid"
        >
          {CERTIFICATES.map((cert, i) => (
            <CertificateCard key={i} cert={cert} index={i} visible={visible} />
          ))}
        </div>

        {/* Bottom trust bar */}
        <div
          style={{
            marginTop: 56,
            padding: "28px 40px",
            background: C.brown,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: `1px solid rgba(201,168,76,0.3)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: C.goldLight,
                fontSize: 18,
              }}
            >
              ✦
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 15,
                  color: "rgba(250,247,242,0.9)",
                  fontWeight: 600,
                }}
              >
                Every product. Every standard. Every time.
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(250,247,242,0.4)",
                  marginTop: 2,
                }}
              >
                No exceptions — quality is not optional at NESTURA.
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 32 }}>
            {[
              { v: "100%", l: "Natural" },
              { v: "0%", l: "Additives" },
              { v: "AAA", l: "Grade" },
            ].map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: C.goldLight,
                    lineHeight: 1,
                  }}
                >
                  {s.v}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "rgba(250,247,242,0.35)",
                    letterSpacing: "0.1em",
                    marginTop: 4,
                  }}
                >
                  {s.l.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.cert-cards-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){.cert-cards-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function OurStory() {
  const { ref, visible } = useFadeIn();
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
            src={storyImagePrim}
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
            OUR PRODUCTS <BirdDecor size={16} opacity={0.7} />
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
           Premium
            <br />
            Packaging
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
  );
}

function Process() {
  const { ref, visible } = useFadeIn();
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
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      {/* <QualityFeatures /> */}
      <Process />
      <QueenVideo />
      <Products />
      <Certificates />
      <OurStory />
    </>
  );
}
