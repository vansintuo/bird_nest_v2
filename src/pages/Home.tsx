import { useState, useRef, useEffect, useCallback } from "react";
import {
  BirdDecor,
  ArrowRight,
  GoldDivider,
  CheckIcon,
  useFadeIn,
  C,
  SectionLabel,
  GoldButton,
} from "../shared";
import storyImagePrim from "../images/bird_nest_prim_preview.png";
import storyImagePrimV2 from "../images/grand/premier_projpg.jpg";
import storyImageClean2 from "../images/grand/clean_birdnest.jpg";
import storyImageChia from "../images/standard/quality_select_chia.png";
import storyImageGinseng from "../images/standard/quality_select_gaiseng.png";
import storyImageOriginal from "../images/standard/quality_select_original.png";
import storyImagePandan from "../images/standard/quality_select_pandan.png";
// for box flavor
import storyImageChiaBox from "../images/standard/chia_box.png";
import storyImageGinsengBox from "../images/standard/ginseng_box.png";
import storyImageOriginalBox from "../images/standard/original_box.png";
import storyImagePandanBox from "../images/standard/pandan_box.png";
// grad bird nest
import gradeImgB1Logo from "../images/grand/grad_b4.png";
import gradeImgA from "../images/grand/grad_a1.jpg";
import gradeImgA2 from "../images/grand/grad_a2.jpg";
import gradeImgA3 from "../images/grand/grad_a3.jpg";
import gradeImgA4 from "../images/grand/grad_a4.png";
import gradeImgA5 from "../images/grand/grad_a5.png";
import gradeImgB from "../images/grand/grad_b1.png";
import gradeImgB2 from "../images/grand/grad_b2.png";
import gradeImgB3 from "../images/grand/grad_b3.png";
import gradeImgB4 from "../images/grand/grad_b4.png";
import gradeImgC from "../images/grand/grad_c1.jpg";
import gradeImgC2 from "../images/grand/grad_c2.jpg";
import gradeImgC3 from "../images/grand/grad_c3.jpg";
// process bird nest
import birdNestHouseMp4 from "../video/bird_nest_house.mp4";
import finalProcess from "../images/process/final_process.jpg";
import houseBird from "../images/process/house_bird.jpg";
import carefulSelect from "../images/process/careful_select.jpg";
import qualitySelect from "../images/process/quality_select.jpg";
import selectedNest from "../images/process/selected_nest.jpg";
import sgoutNest from "../images/process/sgout_nest.jpg";
import giftPackage from "../images/process/gift_pagkage.jpg";
import CheckProcess from "../images/process/checking_process.jpg";
//certificate
import Certificate1 from "../images/certificate/certificate_1.jpg";
import Certificate2 from "../images/certificate/certificate_2.jpg";
import Certificate3 from "../images/certificate/certificate_3.jpg";
import Certificate4 from "../images/certificate/certificate_4.jpg";
import readyToEatPackage from "../images/process/ready_to_eat_pagkage.jpg";
import { title } from "process";

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
    desc: "Handpicked from trusted swiftlet farms.",
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

type Product = {
  name: string;
  desc: string;
  img: string;
  alt: string;
  imageScale?: number;
};

const PRODUCTS: Product[] = [
  {
    name: "CHIA BIRD'S NEST",
    desc: "Queen's White Bird's Nest – Chia Seed Flavor is made with premium natural bird's nest and nutritious chia seeds. Rich in dietary fiber,",
    img: storyImageChia,
    alt: "Premium raw bird's nest on dark plate",
    imageScale: 1,
  },
  {
    name: "Original BIRD'S NEST",
    desc: "Queen's White Bird's Nest – Original Flavor (No Added Sugar) ",
    img: storyImageOriginal,
    alt: "Cleaned bird's nest on text1ile",
    imageScale: 1,
  },
  {
    name: "GINSENG BIRD'S NEST",
    desc: "Queen's White Bird's Nest – Red Ginseng Flavor is made with premium natural bird's nest blended ",
    img: storyImageGinseng,
    alt: "White ceramic bowl ready to drink",
    imageScale: 1,
  },
  {
    name: "Pandan BIRD'S NEST",
    desc: "Queen's White Bird's Nest – Red Ginseng Flavor is made with premium natural bird's nest blended with the goodness of red ginseng.",
    img: storyImagePandan,
    alt: "Premium luxury gift box packaging",
    imageScale: 1,
  },
  {
    name: "ZERO SUGAR BIRD'S NEST",
    desc: "Queen's White Bird's Nest – Original Flavor is made with premium natural bird's nest to preserve",
    img: storyImageOriginal,
    alt: "Premium luxury gift box packaging",
    imageScale: 1,
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    label: "HARVEST",
    icon: "⌂",
    desc: "Nests are carefully harvested from managed swiftlet farms.",
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

/* ── Hero slider slides ── */
const HERO_SLIDES = [
  {
    img: gradeImgA,
    label: "GRADE A",
    title: "Superior Long Strands",
    alt: "Grade A extra long strand bird's nest",
  },
  {
    img: gradeImgB1Logo,
    label: "GRADE B",
    title: "Premium Quality",
    alt: "Premium grade bird's nest",
  },

  {
    img: gradeImgC2,
    label: "GRADE C",
    title: "Smart Value",
    alt: "Grade C soft texture bird's nest",
  },
];

/* ── Sections ── */
const HERO_SLIDE_MS = 6000;
const HERO_TRANSITION_MS = 700;

function Hero() {
  const total = HERO_SLIDES.length;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    let timer: number;

    const tick = () => {
      const next = indexRef.current + 1;
      if (next > total) {
        // Wrap silently: no transition so the loop looks continuous.
        indexRef.current = 0;
        setAnimate(false);
        setIndex(0);
        timer = window.setTimeout(() => setAnimate(true), 60);
      } else {
        indexRef.current = next;
        setIndex(next);
      }
      timer = window.setTimeout(tick, HERO_SLIDE_MS);
    };

    timer = window.setTimeout(tick, HERO_SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [total]);

  return (
    <section
      id="top"
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
            QUEEN'S
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
            Whte Bird Nest
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
            Queen Bird Nest is committed to providing premium-quality bird’s
            nest products, with its bird’s nest house strategically located near
            the natural Tonle Sap, an ideal environment for swiftlets. Our
            operations are officially recognized by relevant government
            ministries, and we strictly follow established production standards
            to ensure product quality, safety, and authenticity.
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
              maxWidth: 620,
              aspectRatio: "1/1",
              borderRadius: "50% 50% 50% 50%/60% 60% 40% 40%",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(44,26,14,0.2)",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "100%",
                width: "100%",
                transition: animate
                  ? `transform ${HERO_TRANSITION_MS}ms ease`
                  : "none",
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {[...HERO_SLIDES, HERO_SLIDES[0]].map((s, i) => (
                <img
                  key={i}
                  src={s.img}
                  alt={s.alt}
                  aria-hidden={i > total - 1}
                  style={{
                    flex: "0 0 100%",
                    minWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Slide caption */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              right: 0,
              background: "rgba(250,247,242,0.96)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(184,134,11,0.2)",
              padding: "14px 20px",
              boxShadow: "0 8px 32px rgba(44,26,14,0.12)",
              textAlign: "right",
            }}
          >
            <div
              key={`l-${index}`}
              className="hero-caption"
              style={{
                fontSize: 9,
                color: C.gold,
                letterSpacing: "0.16em",
                fontWeight: 600,
                marginBottom: 3,
              }}
            >
              {HERO_SLIDES[index % total].label}
            </div>
            <div
              key={`t-${index}`}
              className="hero-caption"
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: 15,
                color: C.brown,
                fontWeight: 600,
              }}
            >
              {HERO_SLIDES[index % total].title}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){ .hero-grid{grid-template-columns:1fr!important;gap:40px!important} }
        @keyframes float{0%,100%{transform:translateY(0)rotate(-5deg)}50%{transform:translateY(-10px)rotate(0deg)}}
        .bird-float{animation:float 4s ease-in-out infinite}
        .hero-caption{animation:heroFade 0.5s ease}
        @keyframes heroFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
      `}</style>
    </section>
  );
}

function ProductCard({ p }: { p: Product }) {
  const [hov, setHov] = useState(false);
  const scale = (p.imageScale ?? 1) * (hov ? 1.06 : 1);
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
          loading="lazy"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: `scale(${scale})`,
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
            marginBottom: 18,
          }}
        >
          {truncate(p.desc, 50)}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            paddingTop: 14,
            borderTop: `1px solid rgba(184,134,11,0.12)`,
            fontSize: 10,
            letterSpacing: "0.14em",
            fontWeight: 600,
            color: C.gold,
            textTransform: "uppercase",
          }}
        >
          <span>150ml</span>
          <span
            style={{
              flex: 1,
              height: 1,
              background: "rgba(184,134,11,0.25)",
            }}
          />
          <span>One Cup</span>
        </div>
      </div>
    </div>
  );
}

function Products() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} style={{ background: C.cream, padding: "28px 0" }}>
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
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                fontWeight: 700,
                color: C.gold,
                marginBottom: 12,
              }}
            >
              STANDARD PRODUCTS
            </p>
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

/* ── Grade data ── */
const GRADES = [
  {
    grade: "GRADE A",
    badge: "PREMIUM AAA",
    title: "Superior Long Strands",
    desc: "Hand-selected long strands with exceptional length, colour, and thickness. Our top tier, reserved for the finest nests with perfect integrity and a natural, rich aroma.",
    features: [
      "Extra long strands",
      "Uniform golden colour",
      "Highest nutrient density",
    ],
    products: [
      {
        name: "Extra Long Strand",
        desc: "The longest strands in our range, hand-picked one nest at a time.",
        img: gradeImgA,
        alt: "Grade A extra long strand bird's nest",
      },
      {
        name: "Whole Nest Selection",
        desc: "Complete unbroken nests graded for shape and strand density.",
        img: gradeImgA2,
        alt: "Grade A whole nest bird's nest",
      },
      {
        name: "Premium Cleaned",
        desc: "Meticulously cleaned, retaining the nest's natural richness.",
        img: gradeImgA3,
        alt: "Grade A premium cleaned bird's nest",
      },
      {
        name: "AAA White",
        desc: "Pure white colour with smooth strands and exceptional texture.",
        img: gradeImgA4,
        alt: "Grade A premium cleaned bird's nest",
      },
      {
        name: "AAA Silver",
        desc: "Rich silver tone with a balance of texture and aroma.",
        img: gradeImgA5,
        alt: "Grade A premium cleaned bird's nest",
      },
    ],
  },
  {
    grade: "GRADE B",
    badge: "AAA STANDARD",
    title: "Classic Quality",
    desc: "Balanced quality with medium-length strands and a clean, consistent finish. An excellent everyday choice that keeps the full taste and nutrition of premium nests.",
    features: ["Medium strands", "Clean finish", "Consistent batches"],
    products: [
      {
        name: "Classic Strand",
        desc: "Balanced medium strands with a clean, consistent finish.",
        img: gradeImgB,
        alt: "Grade B classic strand bird's nest",
      },
      {
        name: "Everyday Blend",
        desc: "An easy everyday nest that keeps the full taste and nutrition.",
        img: gradeImgB2,
        alt: "Grade B everyday blend bird's nest",
      },
      {
        name: "Everyday Blend",
        desc: "An easy everyday nest that keeps the full taste and nutrition.",
        img: gradeImgB3,
        alt: "Grade B everyday blend bird's nest",
      },
      {
        name: "Everyday Blend",
        desc: "An easy everyday nest that keeps the full taste and nutrition.",
        img: gradeImgB4,
        alt: "Grade B everyday blend bird's nest",
      },
    ],
  },
  {
    grade: "GRADE C",
    badge: "AA STANDARD",
    title: "Smart Value",
    desc: "Shorter strands and a soft natural texture at a friendly price. Every nest is still carefully cleaned and quality-checked for a genuine, safe experience.",
    features: ["Soft texture", "Ideal for cooking", "Great everyday value"],
    products: [
      {
        name: "Soft Texture",
        desc: "Shorter strands that soften beautifully in the pot.",
        img: gradeImgC,
        alt: "Grade C soft texture bird's nest",
      },
      {
        name: "Everyday Value",
        desc: "A friendly price without compromising on cleaning standards.",
        img: gradeImgC2,
        alt: "Grade C everyday value bird's nest",
      },
      {
        name: "Cooking Blend",
        desc: "Ideal for cooking, with a gentle natural aroma.",
        img: gradeImgC3,
        alt: "Grade C cooking blend bird's nest",
      },
    ],
  },
];

// Grad Birdnest
function Grades() {
  const { ref, visible } = useFadeIn();
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0);

  const grade = GRADES[active];
  const total = grade.products.length;

  const selectGrade = (i: number) => {
    setActive(i);
    setSlide(0);
  };
  const nextProduct = () => setSlide((s) => (s + 1) % total);
  const prevProduct = () => setSlide((s) => (s - 1 + total) % total);

  return (
    <section ref={ref} style={{ background: C.cream, padding: "28px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
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
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                fontWeight: 700,
                color: C.gold,
                marginBottom: 12,
              }}
            >
              OUR GRADES
            </p>
            <GoldDivider />
          </div>
          <p
            style={{
              fontSize: 14,
              color: C.muted,
              maxWidth: 380,
              lineHeight: 1.75,
            }}
          >
            Pick a grade, then slide through every product available in it. Each
            one is harvested, cleaned, and quality-checked to the same trusted
            standard.
          </p>
        </div>

        {/* Grade tabs */}
        <div
          style={{
            display: "flex",
            gap: 14,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
          className="grade-tabs"
        >
          {GRADES.map((g, i) => (
            <button
              key={i}
              onClick={() => selectGrade(i)}
              style={{
                padding: "14px 36px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                border: `1px solid ${
                  active === i ? C.gold : "rgba(184,134,11,0.3)"
                }`,
                background: active === i ? C.gold : C.cream,
                color: active === i ? "#FAF7F2" : C.brown,
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow:
                  active === i ? "0 8px 28px rgba(184,134,11,0.3)" : "none",
              }}
            >
              {g.grade}
            </button>
          ))}
        </div>

        {/* Grade card */}
        <div
          className="grade-slider"
          style={{
            position: "relative",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.5s ease,transform 0.5s ease",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: C.cream,
              border: `1px solid rgba(184,134,11,0.12)`,
            }}
            className="grade-preview"
          >
            {/* Product slider — slides between products of the active grade */}
            <div style={{ position: "relative", minHeight: 460 }}>
              <div
                style={{
                  display: "flex",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                {grade.products.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      flex: "0 0 100%",
                      minWidth: "100%",
                      position: "relative",
                      transform: `translateX(-${slide * 100}%)`,
                      transition: "transform 0.55s ease",
                    }}
                  >
                    <img
                      src={p.img}
                      alt={p.alt}
                      loading="lazy"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top,rgba(44,26,14,0.75) 0%,rgba(44,26,14,0.15) 45%,rgba(44,26,14,0.05) 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Product caption */}
              <div
                style={{
                  position: "absolute",
                  left: 32,
                  right: 32,
                  bottom: 32,
                  color: "#FAF7F2",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.2em",
                    fontWeight: 700,
                    color: C.goldLight,
                    marginBottom: 8,
                  }}
                >
                  {grade.products[slide].name.toUpperCase()}
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.7,
                    color: "rgba(250,247,242,0.8)",
                    marginBottom: 14,
                  }}
                >
                  {grade.products[slide].desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    color: "rgba(250,247,242,0.6)",
                    fontWeight: 600,
                  }}
                >
                  {String(slide + 1).padStart(2, "0")}
                  <span
                    style={{
                      flex: 1,
                      maxWidth: 90,
                      height: 1,
                      background: "rgba(201,168,76,0.5)",
                    }}
                  />
                  {String(total).padStart(2, "0")}
                </div>
              </div>

              {/* Product arrows */}
              {total > 1 && (
                <>
                  <button
                    onClick={prevProduct}
                    aria-label="Previous product"
                    className="grade-arrow"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 16,
                      marginTop: -22,
                    }}
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextProduct}
                    aria-label="Next product"
                    className="grade-arrow"
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: 16,
                      marginTop: -22,
                    }}
                  >
                    ›
                  </button>
                </>
              )}

              {/* Product dots */}
              {total > 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    right: 32,
                    display: "flex",
                    gap: 8,
                  }}
                >
                  {grade.products.map((_, d) => (
                    <button
                      key={d}
                      onClick={() => setSlide(d)}
                      aria-label={`Show product ${d + 1}`}
                      style={{
                        width: slide === d ? 22 : 8,
                        height: 8,
                        borderRadius: 999,
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        background:
                          slide === d ? C.goldLight : "rgba(250,247,242,0.4)",
                        transition: "all 0.25s ease",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Grade info */}
            <div
              style={{
                padding: "56px 48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 18,
                }}
              >
                <div
                  style={{
                    width: "fit-content",
                    padding: "6px 14px",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: C.gold,
                    border: `1px solid rgba(184,134,11,0.3)`,
                  }}
                >
                  {grade.badge}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    color: C.brown,
                  }}
                >
                  {grade.grade}
                </div>
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(26px,3vw,36px)",
                  fontWeight: 700,
                  color: C.brown,
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                {grade.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: C.muted,
                  lineHeight: 1.85,
                  marginBottom: 28,
                }}
              >
                {grade.desc}
              </p>
              <div
                style={{
                  borderTop: `1px solid rgba(184,134,11,0.12)`,
                  paddingTop: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {grade.features.map((f, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      fontSize: 13.5,
                      color: C.charcoal,
                    }}
                  >
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        border: `1px solid rgba(184,134,11,0.35)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: C.gold,
                        fontSize: 10,
                      }}
                    >
                      ✓
                    </div>
                    {f}
                  </div>
                ))}
              </div>

              {/* Product list for this grade */}
              <div
                style={{
                  marginTop: 28,
                  paddingTop: 20,
                  borderTop: `1px solid rgba(184,134,11,0.12)`,
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: C.gold,
                    marginBottom: 14,
                  }}
                >
                  {total} PRODUCT{total > 1 ? "S" : ""} IN THIS GRADE
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  {grade.products.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "8px 10px",
                        background:
                          slide === i ? "rgba(184,134,11,0.08)" : "none",
                        border: `1px solid ${
                          slide === i
                            ? "rgba(184,134,11,0.3)"
                            : "rgba(184,134,11,0.1)"
                        }`,
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <img
                        src={p.img}
                        alt={p.alt}
                        loading="lazy"
                        style={{
                          width: 40,
                          height: 40,
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: C.brown,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {truncate(p.name, 22)}
                        </div>
                        <div
                          style={{
                            fontSize: 10,
                            color: C.muted,
                            marginTop: 2,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .grade-arrow{width:44px;height:44px;border-radius:50%;border:1px solid rgba(184,134,11,0.35);background:rgba(250,247,242,0.92);color:${C.gold};cursor:pointer;box-shadow:0 6px 20px rgba(44,26,14,0.15);display:flex;align-items:center;justify-content:center;font-size:24px;line-height:1;backdrop-filter:blur(6px);transition:background 0.25s ease,transform 0.25s ease}
          .grade-arrow:hover{background:#FAF7F2;transform:translateY(-2px)}
          @media(max-width:768px){.grade-preview{grid-template-columns:1fr!important}.grade-preview>div:first-child{min-height:420px!important}}
          @media(max-width:520px){.grade-arrow{display:none!important}}
        `}</style>
      </div>
    </section>
  );
}

/* ── Bird's nest guide data ── */
const WHAT_IT_IS = [
  {
    icon: "◈",
    title: "Built by the Swiftlet",
    desc: "A bird's nest is neither plant nor mineral. It is the nest a swiftlet builds from its own saliva, layered and shaped into a small cup over several weeks.",
  },
  {
    icon: "◎",
    title: "Harvested, Never Taken",
    desc: "Harvesting does not harm the bird. Collectors take the nest only after the swiftlets have finished nesting, and the birds rebuild for the next season.",
  },
  {
    icon: "✦",
    title: "Raw, Then Everything Else",
    desc: "What you buy as a raw nest is the harvested nest after careful cleaning. Every flavour, powder and ready-to-eat pack begins from that same cleaned nest.",
  },
];

const WHAT_INSIDE = [
  {
    label: "STRUCTURAL PROTEIN",
    desc: "The nest is built from protein, which is why properly cleaned strands set into a soft, silky gel when cooked.",
  },
  {
    label: "GLYCOPROTEINS",
    desc: "Natural sugars bound to protein. These compounds are a focus of the research behind bird's nest's place in traditional wellness.",
  },
  {
    label: "SIALIC ACID",
    desc: "A compound found naturally in bird's nest. It is one of the reasons raw nest has always been valued in Chinese and Southeast Asian kitchens.",
  },
  {
    label: "TRACE MINERALS",
    desc: "Small but real amounts of calcium, iron, potassium and zinc, present because the nest is an animal product.",
  },
];

const WAYS_TO_ENJOY = [
  {
    img: storyImageOriginal,
    title: "Cook It Yourself",
    desc: "Soak the raw nest, then double-boil it with rock sugar or ginger. The classic way, and the one most people fall in love with.",
  },
  {
    img: qualitySelect,
    title: "Double-Boiled Classic",
    desc: "The long-simmered method gives the lightest texture and the clearest flavour. Add bird's pear, red date or goji if you like.",
  },
  {
    img: readyToEatPackage,
    title: "Ready to Enjoy",
    desc: "No soaking, no boiling, no judgement about your schedule. Chilled straight from the pack, it is our most convenient format.",
  },
  {
    img: giftPackage,
    title: "Give It, Don't Cook It",
    desc: "A large share of our nests are bought as gifts. The presentation is designed to be handed over as it arrives.",
  },
];

const MYTHS = [
  {
    myth: "A whiter nest is a better nest.",
    fact: "Colour runs from pale cream to amber and follows the bird's diet and the season. A darker nest is not automatically a lower grade.",
  },
  {
    myth: "The most expensive nest is always the best.",
    fact: "How a nest was handled matters more than price. A well-cleaned everyday grade is better food than a badly processed premium one.",
  },
  {
    myth: "Cleaning strips the goodness out of it.",
    fact: "Careful hand cleaning removes feathers and impurities. It is harsh chemical bleaching that destroys quality, and we never use it.",
  },
  {
    myth: "A bigger nest is a better nest.",
    fact: "Strand length, cleanliness and shape tell you far more than size. Some of the best nests we handle are small.",
  },
];

/* ── Queen of Bird's Nest Video ── */
function QueenVideo() {
  const { ref, visible } = useFadeIn();
  const [playing, setPlaying] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Lazy load video when it approaches the viewport
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
      },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const togglePlay = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;

    // Don't play until the video source is loaded
    if (!shouldLoad) {
      setShouldLoad(true);
      return;
    }

    if (v.paused) {
      try {
        await v.play();
        setPlaying(true);
      } catch (error) {
        console.error("Video playback failed:", error);
      }
    } else {
      v.pause();
      setPlaying(false);
    }
  }, [shouldLoad]);

  return (
    <section
      ref={ref}
      style={{
        background: C.ivory,
        padding: "28px 0",
        borderTop: "1px solid rgba(184,134,11,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
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
            src={shouldLoad ? birdNestHouseMp4 : undefined}
            poster={houseBird}
            preload="none"
            playsInline
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
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
    img: Certificate2,
    alt: "Food safety certificate",
    badge: "FOOD SAFETY",
    title: "",
    desc: "Produced under strict food safety handling and hygiene protocols, verified through regular audits and review.",
    year: "Maintained annually",
  },
  {
    img: Certificate1,
    alt: "Hygiene certified facility certificate",
    badge: "FACILITY",
    title: "",
    desc: "Our processing environment meets rigorous hygiene and sanitation requirements in a clean, controlled setting.",
    year: "Certified production facility",
  },
  {
    img: Certificate3,
    alt: "AAA grade standard certificate",
    badge: "QUALITY",
    title: "",
    desc: "Every nest is assessed against Premium AAA criteria for strand integrity, colour consistency, purity, and aroma.",
    year: "Applied to every batch",
  },
  {
    img: Certificate4,
    alt: "Responsible and ethical sourcing certificate",
    badge: "ETHICAL",
    title: "",
    desc: "We work with certified swiftlet farms committed to humane, sustainable harvesting practices.",
    year: "Farm-audited supply chain",
  },
];

function CertificateCard({
  cert,
  index,
  visible,
  onPreview,
}: {
  cert: (typeof CERTIFICATES)[0];
  index: number;
  visible: boolean;
  onPreview: (cert: (typeof CERTIFICATES)[0]) => void;
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: C.ivory,
        border: `1px solid ${
          hov ? "rgba(184,134,11,0.35)" : "rgba(184,134,11,0.12)"
        }`,
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: hov
          ? "0 18px 48px rgba(44,26,14,0.12)"
          : "0 4px 18px rgba(44,26,14,0.04)",
        transform: hov ? "translateY(-4px)" : "none",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {/* Certificate frame */}
      <button
        type="button"
        onClick={() => onPreview(cert)}
        aria-label={`Preview ${cert.title}`}
        style={{
          display: "block",
          width: "100%",
          position: "relative",
          padding: 18,
          background:
            "linear-gradient(135deg,#F5ECD9 0%,#FAF7F2 50%,#F0E6C8 100%)",
          border: "none",
          borderBottom: "1px solid rgba(184,134,11,0.12)",
          cursor: "pointer",
          textAlign: "inherit",
        }}
      >
        <div
          style={{
            position: "relative",
            background: "#fffdf8",
            border: "1px solid rgba(184,134,11,0.25)",
            boxShadow: "inset 0 0 0 4px rgba(250,247,242,0.9)",
            padding: 10,
            minHeight: 260,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={cert.img}
            alt={cert.alt}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              maxHeight: 360,
              objectFit: "contain",
              display: "block",
              transition: "transform 0.4s ease",
              transform: hov ? "scale(1.02)" : "scale(1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              padding: "5px 10px",
              fontSize: 8,
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: C.gold,
              background: "rgba(250,247,242,0.96)",
              border: "1px solid rgba(184,134,11,0.3)",
            }}
          >
            {cert.badge}
          </div>
          <div
            style={{
              position: "absolute",
              right: 10,
              bottom: 10,
              padding: "6px 10px",
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: C.brown,
              background: "rgba(250,247,242,0.96)",
              border: "1px solid rgba(184,134,11,0.25)",
            }}
          >
            VIEW
          </div>
        </div>
      </button>

      {/* Content */}
      <div style={{ padding: "24px 22px 22px" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 18,
            fontWeight: 600,
            color: C.brown,
            lineHeight: 1.25,
            marginBottom: 10,
          }}
        >
          {cert.title}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: C.muted,
            lineHeight: 1.75,
            marginBottom: 16,
          }}
        >
          {cert.desc}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            paddingTop: 14,
            borderTop: "1px solid rgba(184,134,11,0.12)",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              border: "1px solid rgba(184,134,11,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: C.gold,
              fontSize: 10,
              flexShrink: 0,
            }}
          >
            ✓
          </div>
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
  const [preview, setPreview] = useState<(typeof CERTIFICATES)[0] | null>(null);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [preview]);

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
            <CertificateCard
              key={i}
              cert={cert}
              index={i}
              visible={visible}
              onPreview={setPreview}
            />
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
                No exceptions — quality is not optional at QUEEN.
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
      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={preview.title}
          onClick={() => setPreview(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(26,16,8,0.82)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(100%, 980px)",
              maxHeight: "90vh",
              background:
                "linear-gradient(135deg,#F5ECD9 0%,#FAF7F2 50%,#F0E6C8 100%)",
              border: "1px solid rgba(184,134,11,0.35)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
              padding: 16,
            }}
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              aria-label="Close preview"
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1px solid rgba(184,134,11,0.35)",
                background: "rgba(250,247,242,0.96)",
                color: C.brown,
                cursor: "pointer",
                fontSize: 20,
                lineHeight: 1,
                zIndex: 1,
              }}
            >
              ×
            </button>
            <div
              style={{
                background: "#fffdf8",
                border: "1px solid rgba(184,134,11,0.2)",
                padding: 12,
              }}
            >
              <img
                src={preview.img}
                alt={preview.alt || preview.title}
                loading="lazy"
                style={{
                  width: "100%",
                  maxHeight: "calc(90vh - 140px)",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                padding: "14px 4px 2px",
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    color: C.gold,
                    marginBottom: 4,
                  }}
                >
                  {preview.badge}
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 20,
                    color: C.brown,
                  }}
                >
                  {preview.title}
                </div>
              </div>
              <div style={{ fontSize: 12, color: C.muted }}>{preview.year}</div>
            </div>
          </div>
        </div>
      )}

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
            loading="lazy"
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
            Premium Packaging
            <BirdDecor size={16} opacity={0.7} />
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
              marginBottom: 32,
              maxWidth: 440,
            }}
          >
            At QUEEN, we believe the finest bird's nest comes from nature and
            careful hands. Each nest is ethically harvested from pristine caves,
            meticulously cleaned and quality-checked to retain its natural
            nutrients.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              maxWidth: 440,
            }}
            className="packaging-specs"
          >
            {[
              {
                label: "Premium Packaging",
                volume: "80ml",
                serving: "Per cup",
              },
              {
                label: "Standard Products",
                volume: "150ml",
                serving: "Per cup",
              },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: C.cream,
                  border: `1px solid rgba(184,134,11,0.16)`,
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.16em",
                    fontWeight: 700,
                    color: C.gold,
                    marginBottom: 8,
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: C.brown,
                    lineHeight: 1,
                  }}
                >
                  {s.volume}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: C.muted,
                    marginTop: 6,
                    textTransform: "uppercase",
                  }}
                >
                  {s.serving}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.story-grid{grid-template-columns:1fr!important}}@media(max-width:420px){.packaging-specs{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROCESS — merged from /our-process
   ═══════════════════════════════════════════════════════════ */

const PROCESS_DETAIL = [
  {
    num: "01",
    label: "Ethical Sourcing",
    subtitle: "From QUEEN finest habitats",
    desc: "We partner with responsible swiftlet farmers who maintain natural, humane bird house environments. Our nests are sourced from certified farms in Southeast Asia where swiftlets nest freely, and no birds are harmed in the process.",
    detail:
      "Carefully selected natural bird's nests — sustainably and ethically sourced.",
    img: houseBird,
    alt: "Bird house in natural field environment",
    bg: C.ivory,
  },
  {
    num: "02",
    label: "Careful Selection",
    subtitle: "Only the finest pass our eyes",
    desc: "Each nest is individually inspected by our skilled team. We assess strand length, colour, shape, and overall integrity. Only nests that meet our premium grade standards are accepted into our processing line.",
    detail:
      "Visual inspection ensures authenticity and natural premium quality.",
    img: qualitySelect,
    alt: "Close-up of premium raw bird's nest",
    bg: C.cream,
  },
  {
    num: "03",
    label: "Quality Processing",
    subtitle: "Controlled and hygienic",
    desc: "After cleaning, nests are processed under strict hygiene protocols in our controlled environment. Temperature, humidity, and handling are carefully monitored to maintain purity and preserve natural nutrients throughout.",
    detail: "Prepared under rigorous hygiene and processing standards.",
    img: carefulSelect,
    alt: "Clean food processing facility",
    bg: C.cream,
  },
  {
    num: "04",
    label: "Final Inspection",
    subtitle: "Every piece, verified",
    desc: "Before packaging, each nest undergoes a final quality review. Our team checks for consistency, cleanliness, and grade classification. Only products that pass every checkpoint are approved for the next stage.",
    detail:
      "No nest leaves our facility without passing a thorough final review.",
    img: finalProcess,
    alt: "Premium product inspection",
    bg: C.ivory,
  },
  {
    num: "05",
    label: "Premium Packaging",
    subtitle: "Worthy of what's inside",
    desc: "Each product is carefully packed in our premium packaging, designed to maintain freshness and present the product beautifully. Premium packaging is portioned at 80ml per cup, while our standard products are portioned at 150ml per cup. Our packaging reflects the care and craftsmanship of everything inside.",
    detail: "Premium: 80ml per cup. Standard: 150ml per cup.",
    img: storyImagePrimV2,
    alt: "Elegant premium product packaging",
    bg: C.cream,
  },
];

const PROCESS_PRIM = [
  {
    num: "01",
    label: "Checking Process",
    subtitle: "Only the finest pass our eyes",
    desc: "Each bird’s nest is carefully inspected and checked for quality, ensuring its natural shape, cleanliness, and overall condition meet our quality standards before proceeding to the next stage of processing",
    detail:
      "Visual inspection ensures authenticity and natural premium quality.",
    img: CheckProcess,
    alt: "Close-up of premium raw bird's nest",
    bg: C.cream,
  },
  {
    num: "02",
    label: "Careful Selection",
    subtitle: "Only the finest pass our eyes",
    desc: "Each nest is individually inspected by our skilled team. We assess strand length, colour, shape, and overall integrity. Only nests that meet our premium grade standards are accepted into our processing line.",
    detail:
      "Visual inspection ensures authenticity and natural premium quality.",
    img: selectedNest,
    alt: "Close-up of premium raw bird's nest",
    bg: C.cream,
  },
  {
    num: "03",
    label: "Quality Select",
    subtitle: "Controlled and hygienic",
    desc: "After cleaning, nests are processed under strict hygiene protocols in our controlled environment. Temperature, humidity, and handling are carefully monitored to maintain purity and preserve natural nutrients throughout.",
    detail: "Prepared under rigorous hygiene and processing standards.",
    img: sgoutNest,
    alt: "Clean food processing facility",
    bg: C.cream,
  },
  {
    num: "04",
    label: "Final Inspection",
    subtitle: "Every piece, verified",
    desc: "Before packaging, each nest undergoes a final quality review. Our team checks for consistency, cleanliness, and grade classification. Only products that pass every checkpoint are approved for the next stage.",
    detail:
      "No nest leaves our facility without passing a thorough final review.",
    img: storyImageClean2,
    alt: "Premium product inspection",
    bg: C.ivory,
  },
  {
    num: "05",
    label: "Premium Packaging",
    subtitle: "Worthy of what's inside",
    desc: "Each product is carefully packed in our premium packaging, designed to maintain freshness and present the product beautifully. Premium packaging is portioned at 80ml per cup, while our standard products are portioned at 150ml per cup. Our packaging reflects the care and craftsmanship of everything inside.",
    detail: "Premium: 80ml per cup. Standard: 150ml per cup.",
    img: readyToEatPackage,
    alt: "Elegant premium product packaging",
    bg: C.cream,
  },
];
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
      id="process"
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
            From Farm to Cup
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

function ProcessSteps() {
  const { ref, visible } = useFadeIn();
  const rows = Math.max(PROCESS_DETAIL.length, PROCESS_PRIM.length);
  return (
    <section id="process-detail" ref={ref}>
      <div style={{ background: C.ivory, padding: "72px 0 56px" }}>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <GoldDivider className="justify-center" />
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.85,
              color: C.muted,
              marginTop: 32,
            }}
          >
            At QUEEN, every bird's nest passes through a carefully designed
            journey from its natural source to your home. We believe that true
            premium quality is built step by step — through ethical sourcing,
            patient hand-cleaning, and rigorous quality standards. This is how
            we ensure that every product we offer is worthy of the name QUEEN.
          </p>
        </div>
      </div>

      <div style={{ background: C.cream, padding: "48px 0 88px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div
            className="process-columns"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: 120,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                textAlign: "right",
                fontSize: 10,
                letterSpacing: "0.22em",
                fontWeight: 700,
                color: C.gold,
                textTransform: "uppercase",
              }}
            >
              DRINK PROCESS DETAIL
            </div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                fontWeight: 700,
                color: C.gold,
                textTransform: "uppercase",
              }}
            >
              Bird's Nest Drying Process
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div
              className="process-timeline-line"
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "50%",
                width: 1,
                background:
                  "linear-gradient(to bottom,transparent,rgba(184,134,11,0.35) 6%,rgba(184,134,11,0.35) 94%,transparent)",
                pointerEvents: "none",
              }}
            />
            <div
              className="process-timeline-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: 120,
                rowGap: 40,
                alignItems: "start",
              }}
            >
              {Array.from({ length: rows }).flatMap((_, i) => [
                <div key={`detail-${i}`} className="process-timeline-item">
                  {PROCESS_DETAIL[i] ? (
                    <ProcessPreviewCard
                      step={PROCESS_DETAIL[i]}
                      index={i}
                      side="left"
                      visible={visible}
                    />
                  ) : null}
                </div>,
                <div key={`prim-${i}`} className="process-timeline-item">
                  {PROCESS_PRIM[i] ? (
                    <ProcessPreviewCard
                      step={PROCESS_PRIM[i]}
                      index={i}
                      side="right"
                      visible={visible}
                    />
                  ) : null}
                </div>,
              ])}
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:1100px){
            .process-preview-img{width:150px!important}
          }
          @media(max-width:900px){
            .process-columns{display:none!important}
            .process-timeline-grid{grid-template-columns:1fr!important;row-gap:24px!important;column-gap:0!important}
            .process-timeline-item{grid-column:1 / -1!important}
            .process-timeline-line,.process-step-connector,.process-step-dot{display:none!important}
            .process-preview{flex-direction:column!important}
            .process-preview-img{width:100%!important;aspect-ratio:16 / 9!important}
            .process-preview-text{text-align:left!important}
          }
          @media(max-width:600px){
            .process-preview-img{aspect-ratio:4 / 3!important}
          }
        `}</style>
      </div>
    </section>
  );
}

function ProcessPreviewCard({
  step,
  index,
  side,
  visible,
}: {
  step: (typeof PROCESS_DETAIL)[0];
  index: number;
  side: "left" | "right";
  visible: boolean;
}) {
  const isLeft = side === "left";
  return (
    <div
      style={{
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.08}s,transform 0.6s ease ${index * 0.08}s`,
      }}
    >
      <div
        className="process-step-connector"
        style={{
          position: "absolute",
          top: "50%",
          width: 60,
          height: 1,
          background: "rgba(184,134,11,0.35)",
          ...(isLeft ? { right: -60 } : { left: -60 }),
        }}
      />
      <div
        className="process-step-dot"
        style={{
          position: "absolute",
          top: "50%",
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: C.cream,
          border: `2px solid ${C.gold}`,
          boxShadow: "0 0 0 4px rgba(184,134,11,0.12)",
          zIndex: 2,
          ...(isLeft
            ? { right: -60, transform: "translate(50%,-50%)" }
            : { left: -60, transform: "translate(-50%,-50%)" }),
        }}
      />

      <div
        className="process-preview"
        style={{
          display: "flex",
          flexDirection: isLeft ? "row-reverse" : "row",
          background: C.ivory,
          border: "1px solid rgba(184,134,11,0.14)",
          boxShadow: "0 16px 40px rgba(44,26,14,0.06)",
          overflow: "hidden",
        }}
      >
        <div
          className="process-preview-img"
          style={{
            width: 190,
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
            aspectRatio: "1 / 1",
          }}
        >
          <img
            src={step.img}
            alt={step.alt}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top,rgba(44,26,14,0.35),transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: isLeft ? "auto" : 12,
              right: isLeft ? 12 : "auto",
              fontFamily: "'Playfair Display',serif",
              fontSize: 22,
              fontWeight: 700,
              color: "rgba(250,247,242,0.85)",
              lineHeight: 1,
            }}
          >
            {step.num}
          </div>
        </div>

        <div
          className="process-preview-text"
          style={{
            padding: "24px 24px",
            flex: 1,
            minWidth: 0,
            textAlign: isLeft ? "right" : "left",
          }}
        >
          <div
            style={{
              fontSize: 9,
              letterSpacing: "0.2em",
              fontWeight: 700,
              color: C.gold,
              marginBottom: 6,
            }}
          >
            STEP {step.num}
          </div>
          <h3
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 19,
              fontWeight: 700,
              color: C.brown,
              lineHeight: 1.25,
              marginBottom: 6,
            }}
          >
            {step.label}
          </h3>
          <p
            style={{
              fontSize: 12,
              color: C.gold,
              fontStyle: "italic",
              letterSpacing: "0.04em",
              marginBottom: 8,
            }}
          >
            {step.subtitle}
          </p>
          <p
            style={{
              fontSize: 12.5,
              color: C.muted,
              lineHeight: 1.65,
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function NestToNourishment() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} style={{ background: C.brown, padding: "28px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionLabel>
            <span style={{ color: "rgba(201,168,76,0.85)" }}>
              TRANSFORMATION
            </span>
          </SectionLabel>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(32px,4vw,48px)",
              fontWeight: 700,
              color: C.goldLight,
              lineHeight: 1.2,
            }}
          >
            From Nest to Nourishment
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(250,247,242,0.5)",
              maxWidth: 520,
              margin: "16px auto 0",
            }}
          >
            Witness the remarkable transformation from a raw natural nest to the
            premium product in your home.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 32,
            alignItems: "center",
          }}
          className="before-after-grid"
        >
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease,transform 0.6s ease",
            }}
          >
            <div
              style={{
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={selectedNest}
                alt="Raw bird's nest from nature"
                loading="lazy"
                style={{ width: "100%", height: 400, objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "40px 28px 28px",
                  background:
                    "linear-gradient(to top,rgba(28,15,7,0.85),transparent)",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: C.goldLight,
                    letterSpacing: "0.18em",
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  BEFORE
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 22,
                    color: "#FAF7F2",
                    fontWeight: 600,
                  }}
                >
                  Raw from Nature
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(250,247,242,0.6)",
                    marginTop: 6,
                  }}
                >
                  Natural nest, as harvested
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s ease 0.3s",
            }}
          >
            <div
              style={{
                width: 1,
                height: 60,
                background: "rgba(184,134,11,0.3)",
              }}
            />
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                border: `1px solid ${C.goldLight}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: C.goldLight,
                fontSize: 22,
              }}
            >
              →
            </div>
            <div
              style={{
                width: 1,
                height: 60,
                background: "rgba(184,134,11,0.3)",
              }}
            />
            <div
              style={{
                fontSize: 10,
                color: "rgba(201,168,76,0.5)",
                letterSpacing: "0.14em",
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              OUR
              <br />
              PROCESS
            </div>
          </div>

          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.6s ease 0.15s,transform 0.6s ease 0.15s",
            }}
          >
            <div
              style={{
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={storyImagePrim}
                alt="Premium cleaned bird's nest product"
                loading="lazy"
                style={{ width: "100%", height: 400, objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "40px 28px 28px",
                  background:
                    "linear-gradient(to top,rgba(28,15,7,0.85),transparent)",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: C.goldLight,
                    letterSpacing: "0.18em",
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  AFTER
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 22,
                    color: "#FAF7F2",
                    fontWeight: 600,
                  }}
                >
                  Premium Product
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(250,247,242,0.6)",
                    marginTop: 6,
                  }}
                >
                  Cleaned, inspected, ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.before-after-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   QUALITY — merged from /quality
   ═══════════════════════════════════════════════════════════ */

const STANDARDS = [
  {
    num: "01",
    title: "Authenticity",
    icon: "◈",
    desc: "Every nest is carefully selected and verified for its natural origin and authenticity before entering our processing chain.",
  },
  {
    num: "02",
    title: "Purity",
    icon: "◎",
    desc: "Careful cleaning and preparation preserve the natural quality and active compounds found in genuine premium bird's nest.",
  },
  {
    num: "03",
    title: "Hygiene",
    icon: "✦",
    desc: "Our nests are prepared under strict hygiene and handling standards in a controlled, monitored environment throughout.",
  },
  {
    num: "04",
    title: "Consistency",
    icon: "◇",
    desc: "Every batch is inspected against our premium grade criteria to ensure a consistent, reliable product every single time.",
  },
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

const TEXT_BREAK = "\n\n\n";

function TrustStats() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} style={{ background: C.brown, padding: "80px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 1,
            border: "1px solid rgba(184,134,11,0.2)",
          }}
          className="stats-grid"
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "48px 32px",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(184,134,11,0.2)" : "none",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.12}s,transform 0.5s ease ${i * 0.12}s`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 48,
                  fontWeight: 700,
                  color: C.goldLight,
                  marginBottom: 12,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(250,247,242,0.45)",
                  letterSpacing: "0.12em",
                  fontWeight: 600,
                }}
              >
                {s.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT US — merged from /about-use
   ═══════════════════════════════════════════════════════════ */

const ABOUT_PRODUCTS = [
  {
    title: "Premium Bird's Nest",
    subtitle: "Pure natural nourishment",
    description:
      "Carefully selected and processed edible bird's nest prepared for customers who value authenticity and premium quality.",
    image: storyImagePrimV2,
  },
  {
    title: "Ready-to-Enjoy Nest",
    subtitle: "Convenience meets quality",
    description:
      "Thoughtfully prepared products designed to make enjoying premium bird's nest simple and convenient.",
    image: gradeImgB1Logo,
  },
  {
    title: "Gift Collection",
    subtitle: "A meaningful expression of care",
    description:
      "Beautifully presented QUEEN products created for gifting, celebrations, and meaningful moments.",
    image: giftPackage,
  },
];

const TIMELINE = [
  {
    year: "01",
    img: storyImageOriginalBox,
    title: "Original Bird's Nest",
    imageScale: 11,
    text: `រសជាតិដើម ផលិតពីសំបុកត្រចៀកកាំគុណភាពខ្ពស់ រក្សាបាននូវរសជាតិធម្មជាតិដ៏ពិសេស។ សំបូរទៅដោយប្រូតេអ៊ីនល្អៗ អាស៊ីតអាមីណូនិងអាហារូបត្ថម្ភសំខាន់ៗ និងខូឡាជែនជួយបំប៉នសុខភាពរាងកាយ ថែរក្សាស្បែកឲ្យមានសំណើម ភ្លឺថ្លាពីខាងក្នុង។ ជួយស្តារប្រព័ន្ធរាងកាយ ជួសជុលកោសិកាចាស់ៗ ធ្វើអោយក្មេងជាងវ័យ។${TEXT_BREAK}Queen's White Bird's Nest – Original Flavor (No Added Sugar) is made with premium natural bird's nest to preserve its authentic taste and delicate texture without added sugar. Rich in protein, amino acids, collagen, and essential nutrients, it helps nourish the body, supports healthy-looking skin, and promotes overall wellness and daily vitality. An ideal choice`,
  },
  {
    year: "02",
    img: storyImageChiaBox,
    imageScale: 11,
    title: "Chia Flavor Bird's Nest",
    text: `ទឹកមាត់ត្រចៀកកាំ Queen's White Bird Nest គ្រាប់ឈៀមានប្រភពពីអាហារបំប៉នសុខភាព អូមេហ្គា 3 ជាតិរ៉ែ ថាមពល ហ្វាយប័រ ក្រុមការងារថ្នាក់ទឹកយូមជួយជាតិ រក្សាទឹក ថែរក្សាសុខភាព សុខភាពប្រចាំថ្ងៃ។ ពិសេស បំផុតសម្រាប់អ្នកស្រលាញ់សុខភាព។${TEXT_BREAK}Queen's White Bird's Nest – Chia Seed Flavor is made with premium natural bird's nest and nutritious chia seeds. Rich in dietary fiber, Omega-3, protein, calcium, magnesium, and essential minerals, it helps support hydration, overall wellness, natural beauty, and daily vitality. An ideal choice for health-conscious individuals.`,
  },

  {
    year: "03",
    img: storyImageGinsengBox,
    title: "Ginseng Flavor Bird's Nest",
    text: `ទឹកមាត់ត្រចៀកកាំ Queen's White Bird Nest រស់ជាតិយុិនសុិនក្រហម​ ជាកាបញ្ចូលគ្នារវាងសំបុកត្រជៀកកាំធម្មជាតិជាមួយនឹងយុិនសុិនក្រហមដ៏មានតម្លៃ។ ជួយបង្កើនថាមពល ប៉ូវកម្លាំង នឹងប្រព័ន្ធភាពសុំាក្នុងរាងកាយ ជាពិសេស បង្កើនភាពស្រស់ស្រាយពេញមួយថ្ងៃ។​ សាកសមសម្រាប់​ មនុស្សពេញវ័យកណ្តាលឡើងទៅ។${TEXT_BREAK}Queen's White Bird's Nest – Red Ginseng Flavor is made with premium natural bird's nest blended with the goodness of red ginseng. This nourishing beverage helps support vitality, promotes overall wellness, and keeps you feeling energized throughout the day. An ideal choice for adults, especially middle-aged individuals.`,
  },
  {
    year: "04",
    img: storyImagePandanBox,
    imageScale: 11,
    title: "Pandan Flavor Bird's Nest",
    text: `ទឹកមាត់ត្រចៀកកាំ Queen's White Bird Nest ស្លឹកតយគឺ​ជា​សង្កាត់ត្រចៀកកាំធម្មជាតិនឹងលក្ខណៈពិសេសឈ្ងុយឆ្ងាញ់ពីស្លឹកតយ អារម្មណ៍ធូរស្រាល ថយចុះតានតឹងដល់ប្រព័ន្ធដំណើរការថែរក្សាសម្រស់ ផ្តល់ថាមពលសម្រាប់ជីវិតប្រចាំថ្ងៃ។${TEXT_BREAK}Queen's White Bird's Nest – Red Ginseng Flavor is made with premium natural bird's nest blended with the goodness of red ginseng. This nourishing beverage helps support vitality, promotes overall wellness, and keeps you feeling energizedthroughout the day. An ideal choice for adults, especially middle-aged individuals.`,
  },
  {
    year: "05",
    img: storyImageOriginalBox,
    imageScale: 11,
    title: "Zero Sugar Bird's Nest",
    text: `ទឹកមាត់ត្រចៀកកាំ Queen's white Bird Nest  រសជាតិដើម ផលិតពីសំបុកត្រចៀកកាំ រក្សាបាននូវរសជាតិ ធម្មជាតិ។ ក្នុងតំបន់ទៅដោយប្រូតេអ៊ីយូននឹង អាស៊ីតអាមីណូអាហារូបត្ថម្ភពិសេសនឹងជំនួយដល់ សុខភាពរាងកាយ សុខភាពស្បែកអោយមានផាសុខភាព ពីខាងក្នុង។ ជំនួយប្រព័ន្ធរាងកាយជួសជុល កោសិកាចាស់ធ្វើឱ្យក្មេងជាងវ័យ។ រៀបចំសម្រាប់ អ្នកកំពុងគ្រប់គ្រងជាតិស្ករ។${TEXT_BREAK}Queen's White Bird's Nest – Original Flavor is made with premium natural bird's nest to preserve its authentic taste and delicate texture. Rich in protein, amino acids, collagen, and essential nutrients, it helps nourish the body, supports healthy-looking skin, and promotes overall wellness and daily vitality.`,
  },
];

function OurStoryTimeline() {
  const { ref, visible } = useFadeIn();
  const [preview, setPreview] = useState<(typeof TIMELINE)[0] | null>(null);

  useEffect(() => {
    if (!preview) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [preview]);

  return (
    <section ref={ref}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto 64px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity .7s ease, transform .7s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(32px,4vw,48px)",
              color: C.brown,
              margin: "20px 0 16px",
            }}
          >
            From a Simple Idea
            <br />
            <span style={{ color: C.gold }}>to QUEEN</span>
          </h2>
          <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8 }}>
            Our journey began with a desire to bring authentic, carefully
            processed bird's nest to people who appreciate natural quality.
          </p>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background: "rgba(184,134,11,.25)",
            }}
            className="story-line"
          />

          {TIMELINE.map((item, index) => {
            const left = index % 2 === 0;
            return (
              <div
                key={item.year}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 80px 1fr",
                  marginBottom: 60,
                  alignItems: "center",
                }}
                className="story-item"
              >
                <div
                  style={{
                    gridColumn: left ? 1 : 3,
                    gridRow: 1,
                    textAlign: left ? "right" : "left",
                    padding: "0 24px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: 40,
                      color: "rgba(184,134,11,.25)",
                      fontWeight: 700,
                    }}
                  >
                    {item.year}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: 24,
                      color: C.brown,
                      margin: "8px 0 10px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="timeline-description"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.8,
                      color: C.muted,
                      textAlign: "left",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.text}
                  </p>
                </div>

                <div
                  style={{
                    gridColumn: 2,
                    gridRow: 1,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    border: `3px solid ${C.cream}`,
                    background: C.gold,
                    justifySelf: "center",
                    boxShadow: "0 0 0 5px rgba(184,134,11,.12)",
                    zIndex: 2,
                  }}
                />

                <div
                  style={{
                    gridColumn: left ? 3 : 1,
                    gridRow: 1,
                    padding: "0 24px",
                  }}
                  className="story-item-media"
                >
                  <div
                    className="timeline-text"
                    role="button"
                    tabIndex={0}
                    aria-label={`Preview ${item.title}`}
                    onClick={() => setPreview(item)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setPreview(item);
                    }}
                    style={{
                      overflow: "hidden",
                      borderRadius: 4,
                      cursor: "zoom-in",
                      background: C.cream,
                      // border: "1px solid rgba(184,134,11,0.18)",
                      aspectRatio: "4 / 3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "box-shadow 0.3s ease",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "100%",
                        maxHeight: "calc(90vh - 140px)",
                        objectFit: "contain",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .timeline-description {
          font-size: 14px;
          line-height: 1.8;
          color: var(--text-muted);
          white-space: pre-line;
          overflow-wrap: break-word;
        }
        @media(max-width:768px){
          .story-line{left:7px!important}
          .story-item{grid-template-columns:30px 1fr!important;margin-bottom:40px!important}
          .story-item > div:first-child{grid-column:2!important;text-align:left!important;padding:0 0 0 20px!important}
          .story-item > div:nth-child(2){grid-column:1!important;grid-row:1!important}
          .story-item > div.story-item-media{grid-column:2!important;grid-row:2!important;padding:0 0 0 20px!important;margin-top:20px}
        }
      `}</style>

      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={preview.title}
          onClick={() => setPreview(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(26,16,8,0.82)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(100%, 1100px)",
              background:
                "linear-gradient(135deg,#F5ECD9 0%,#FAF7F2 50%,#F0E6C8 100%)",
              border: "1px solid rgba(184,134,11,0.35)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
              padding: 16,
            }}
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              aria-label="Close preview"
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1px solid rgba(184,134,11,0.35)",
                background: "rgba(250,247,242,0.96)",
                color: C.brown,
                cursor: "pointer",
                fontSize: 20,
                lineHeight: 1,
                zIndex: 1,
              }}
            >
              ×
            </button>
            <div
              style={{
                background: "#fffdf8",
                border: "1px solid rgba(184,134,11,0.2)",
                padding: 12,
              }}
            >
              <img
                src={preview.img}
                alt={preview.title}
                loading="lazy"
                style={{
                  width: "100%",
                  maxHeight: "calc(90vh - 140px)",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "14px 4px 2px", textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 20,
                  color: C.brown,
                }}
              >
                {preview.title}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   Product Area 
   ═══════════════════════════════════════════════════════════ */
function ProductArea() {
  return (
    <section id="products" aria-label="Products">
      {/* <WhoWeAre /> */}
      <OurStory />
      <Products />
      <OurStoryTimeline />
      <AboutProducts />
    </section>
  );
}

function AboutProducts() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} style={{ background: C.cream, padding: "28px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: 50,
          }}
          className="product-heading"
        >
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(32px,4vw,48px)",
                color: C.brown,
                marginTop: 16,
              }}
            >
              Crafted for
              <span style={{ color: C.gold }}> a Gift</span>
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
          }}
          className="product-grid"
        >
          {ABOUT_PRODUCTS.map((product, index) => (
            <div
              key={index}
              style={{
                background: C.ivory,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity .7s ease ${index * 0.12}s, transform .7s ease ${index * 0.12}s`,
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 330,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div style={{ padding: "28px 26px 30px" }}>
                <div
                  style={{
                    fontSize: 10,
                    color: C.gold,
                    letterSpacing: ".16em",
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  {product.subtitle.toUpperCase()}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 25,
                    color: C.brown,
                    marginBottom: 12,
                  }}
                >
                  {product.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: C.muted }}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .product-heading{display:block!important}
          .product-heading > p{margin-top:20px}
          .product-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT — merged from /faq
   ═══════════════════════════════════════════════════════════ */

const CONTACTS = [
  {
    icon: "✉",
    label: "Email",
    value: "queenwhitebirdnest@gmail.com",
    sub: "Reply within 1 business day",
    href: "",
  },
  {
    icon: "✆",
    label: "Phone",
    value: "+855 69 272 211",
    sub: "Mon-Sun, 9am - 6pm (GMT+7)",
    href: "",
  },
  {
    icon: "⊕",
    label: "Location",
    value: "សង្កាត់គោកឃ្លាង ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ",
    sub: "Showroom by appointment",
    href: "",
  },
];

function Contact() {
  const { ref, visible } = useFadeIn();
  return (
    <section
      ref={ref}
      style={{ background: C.ivory, padding: "80px 0" }}
      id="contact"
    >
      <div
        style={{
          maxWidth: "80%",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
        className="contact-cta-grid"
      >
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease,transform 0.6s ease 0.1s",
            overflow: "hidden",
            borderRadius: 16,
            border: "1px solid rgba(184,134,11,0.2)",
            boxShadow: "0 12px 32px rgba(184,134,11,0.12)",
            position: "relative",
          }}
        >
          <iframe
            title="QUEEN Showroom Location"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7817.318230214045!2d104.864979!3d11.576277!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM0JzM0LjYiTiAxMDTCsDUxJzUzLjkiRQ!5e0!3m2!1sen!2skh!4v1794815196458!5m2!1sen!2skh"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", minHeight: 420 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://maps.app.goo.gl/Zq7mc2BtviGMzd2A9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open QUEEN location in Google Maps"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 18,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                borderRadius: 999,
                background: C.charcoal,
                color: C.ivory,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.02em",
                boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                pointerEvents: "none",
              }}
            >
              Open in Google Maps ↗
            </span>
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <SectionLabel>
              <span style={{ color: C.gold }}>GET IN TOUCH</span>
            </SectionLabel>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(28px,3.5vw,40px)",
                fontWeight: 700,
                color: C.brown,
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              We Would Love to
              <br />
              <span style={{ color: C.gold }}>Hear From You</span>
            </h2>
            <p
              style={{
                fontSize: 14,
                color: C.muted,
                lineHeight: 1.8,
                marginBottom: 32,
                maxWidth: 380,
              }}
            >
              Questions about our grades, sourcing, or where to find us? Reach
              out and our team will get back to you shortly.
            </p>
          </div>

          {CONTACTS.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              style={{
                display: "flex",
                gap: 20,
                padding: "20px 24px",
                background: C.ivory,
                border: "1px solid rgba(184,134,11,0.12)",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(184,134,11,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(184,134,11,0.12)";
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(184,134,11,0.08)",
                  border: "1px solid rgba(184,134,11,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  color: C.gold,
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 10,
                    color: C.gold,
                    letterSpacing: "0.14em",
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  {c.label.toUpperCase()}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: C.charcoal,
                    fontWeight: 500,
                    marginBottom: 3,
                  }}
                >
                  {c.value}
                </div>
                <div style={{ fontSize: 12, color: C.muted }}>{c.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.contact-cta-grid{grid-template-columns:1fr!important;max-width:100%!important}}`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SINGLE PAGE
   ═══════════════════════════════════════════════════════════ */

const scrollToId = (id: string) => document.getElementById(id);
const JOURNEY = [
  {
    year: "Origins",
    title: "A Simple Beginning",
    text: "QUEEN started with a small family concern and one conviction — that a bird's nest should be handled with the same care as the harvest itself. What began as sourcing nests for a handful of local families grew, over time, into a business built on repeat customers and word of mouth.",
  },
  {
    year: "Sourcing",
    title: "Building Trusted Supply",
    text: "Rather than chase volume, we built long-term relationships with a small circle of swiftlet farmers. Today every nest we buy comes from farms we know by name and audit in person, which is how we protect both the birds and the purity of the raw material.",
  },
  {
    year: "Facility",
    title: "Our Own Processing House",
    text: "We moved from third-party processing to our own controlled facility so that cleaning, grading and packaging all happened under one roof. This let us document every step and hold ourselves to a single, consistent standard.",
  },
  {
    year: "Product",
    title: "From Raw Nest to Table",
    text: "Our range now covers the full experience — original, chia, ginseng, pandan and zero sugar — so customers can choose a nest that fits their routine, whether they cook it from scratch or want it ready to enjoy.",
  },
  {
    year: "Today",
    title: "A Cambodian Brand, Growing",
    text: "From Phnom Penh we now serve families and gift-givers across the region, with a showroom and a team that answers directly. The scale has changed; the standard has not.",
  },
];

const PILLARS = [
  {
    icon: "◈",
    title: "Authentic Sourcing",
    desc: "We buy only from swiftlet farms we have visited and audited ourselves, so every nest has a traceable origin and the birds are never harmed in the process.",
  },
  {
    icon: "◎",
    title: "Gentle Processing",
    desc: "Raw nests are cleaned by hand using traditional methods that strip feathers and impurities while leaving the strands, nutrients and natural aroma intact.",
  },
  {
    icon: "✦",
    title: "Honest Grading",
    desc: "Every batch is graded for strand length, colour, shape and cleanliness. If a nest does not meet our criteria it does not carry the QUEEN name.",
  },
  {
    icon: "◇",
    title: "Consistent Care",
    desc: "The same protocol runs from harvest to pack-out, so the product you receive today matches the one you trusted last time.",
  },
];

const VALUES = [
  {
    title: "Quality Before Everything",
    desc: "We would rather turn down a batch than pass on something below our standard. Reputation takes years to build and one careless batch to lose.",
  },
  {
    title: "Respect for the Source",
    desc: "Swiftlets are wild birds, not livestock. We work with farms that protect their colonies and harvest only what the nests naturally produce.",
  },
  {
    title: "Tradition, Not Shortcuts",
    desc: "Modern equipment helps, but the craft is still manual. The judgements that matter most — cleaning, grading, drying — are made by experienced hands.",
  },
  {
    title: "Clarity With Customers",
    desc: "We describe our products plainly, show our process openly, and never dress up a nest to be something it is not.",
  },
];

const PRACTICES = [
  "Direct relationships with audited swiftlet farms",
  "Hand cleaning with no chemical bleaching or fillers",
  "Sorting by strand length, colour, shape and cleanliness",
  "Batch-level quality checks before release",
  "Hygienic, sealed and clearly labelled packaging",
  "Traceability from source nest to finished product",
];

const PROMISES = [
  {
    num: "01",
    title: "Authenticity",
    desc: "Every nest is selected and verified for its natural origin before it enters our processing chain.",
  },
  {
    num: "02",
    title: "Purity",
    desc: "Careful cleaning preserves the natural quality and active compounds found in genuine premium bird's nest.",
  },
  {
    num: "03",
    title: "Hygiene",
    desc: "Nests are prepared under strict handling standards in a controlled, monitored environment throughout.",
  },
  {
    num: "04",
    title: "Consistency",
    desc: "Each batch is inspected against our grade criteria so the product is reliable every single time.",
  },
];

function CompanyIntro() {
  const { ref, visible } = useFadeIn();
  return (
    <section
      ref={ref}
      style={{ background: C.ivory, padding: "28px 0" }}
      id="about"
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="about-intro-grid"
      >
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity .7s ease, transform .7s ease",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 4,
              boxShadow: "0 24px 64px rgba(44,26,14,.14)",
            }}
          >
            <img
              src={storyImagePrim}
              alt="Natural premium ingredients"
              loading="lazy"
              style={{
                width: "100%",
                height: 520,
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 24,
                bottom: 24,
                fontFamily: "'Playfair Display',serif",
                fontSize: 72,
                color: "rgba(255,255,255,.15)",
                fontWeight: 700,
              }}
            >
              Q
            </div>
          </div>
        </div>

        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(30px)",
            transition: "opacity .7s ease .15s, transform .7s ease .15s",
          }}
        >
          <SectionLabel>
            <span style={{ color: C.gold }}>WHO WE ARE</span>
          </SectionLabel>

          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(32px,4vw,48px)",
              color: C.brown,
              lineHeight: 1.2,
              margin: "20px 0 24px",
            }}
          >
            More Than a Bird's Nest.
            <br />
            <span style={{ color: C.gold }}>A Tradition of Care.</span>
          </h2>

          <p
            style={{
              fontSize: 16,
              color: C.muted,
              lineHeight: 1.9,
              marginBottom: 20,
            }}
          >
            QUEEN is a premium edible bird's nest company built around one
            simple belief: quality begins with care.
          </p>

          <p
            style={{
              fontSize: 15,
              color: C.muted,
              lineHeight: 1.9,
              marginBottom: 20,
            }}
          >
            We are based in Phnom Penh, Cambodia, close to the caves and farms
            where swiftlet nests are traditionally harvested. That proximity
            shapes everything about how we work — it means we know our sources
            personally, we can visit them without notice, and we see the raw
            material before anyone else does.
          </p>

          <p
            style={{
              fontSize: 15,
              color: C.muted,
              lineHeight: 1.9,
              marginBottom: 28,
            }}
          >
            From carefully selecting our nests to preparing and packaging every
            product, we focus on authenticity, craftsmanship and consistency.
            Our goal is to bring the natural value of bird's nest to modern
            families in a way that is trusted, beautiful and meaningful.
          </p>

          <GoldDivider />
        </div>
      </div>

      <style>{`@media(max-width:768px){.about-intro-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  );
}

function CompanyStats() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} style={{ background: C.brown, padding: "80px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 1,
            border: "1px solid rgba(184,134,11,0.2)",
          }}
          className="stats-grid"
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "48px 32px",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(184,134,11,0.2)" : "none",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.12}s,transform 0.5s ease ${i * 0.12}s`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 48,
                  fontWeight: 700,
                  color: C.goldLight,
                  marginBottom: 12,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(250,247,242,0.45)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}.stats-grid>div{border-right:none!important;border-bottom:1px solid rgba(184,134,11,0.2)}}
        @media(max-width:480px){.stats-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

function CompanyJourney() {
  const { ref, visible } = useFadeIn();
  return (
    <section
      ref={ref}
      style={{ background: C.cream, padding: "28px 0" }}
      id="story"
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto 64px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity .7s ease, transform .7s ease",
          }}
        >
          <SectionLabel>
            <span style={{ color: C.gold }}>OUR STORY</span>
          </SectionLabel>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(32px,4vw,48px)",
              color: C.brown,
              margin: "20px 0 16px",
            }}
          >
            From a Simple Idea
            <br />
            <span style={{ color: C.gold }}>to QUEEN</span>
          </h2>
          <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8 }}>
            How a family sourcing concern became one of Cambodia's most trusted
            names in edible bird's nest.
          </p>
        </div>

        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          {JOURNEY.map((item, index) => (
            <div
              key={item.title}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: 40,
                padding: "36px 0",
                borderTop: `1px solid rgba(184,134,11,0.18)`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity .6s ease ${index * 0.1}s, transform .6s ease ${index * 0.1}s`,
              }}
              className="journey-row"
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 28,
                    color: C.gold,
                    lineHeight: 1.2,
                  }}
                >
                  {item.year}
                </div>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 24,
                    color: C.brown,
                    margin: "0 0 12px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.85,
                    color: C.muted,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:768px){.journey-row{grid-template-columns:1fr!important;gap:12px!important}}`}</style>
    </section>
  );
}

function CompanyPillars() {
  const { ref, visible } = useFadeIn();
  return (
    <section
      ref={ref}
      style={{ background: C.ivory, padding: "28px 0" }}
      id="what-we-do"
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto 56px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity .7s ease, transform .7s ease",
          }}
        >
          <SectionLabel>
            <span style={{ color: C.gold }}>WHAT WE DO</span>
          </SectionLabel>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(32px,4vw,48px)",
              color: C.brown,
              margin: "20px 0 16px",
            }}
          >
            Four Disciplines,
            <br />
            <span style={{ color: C.gold }}>One Standard</span>
          </h2>
          <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8 }}>
            Everything we sell passes through all four of these steps. None of
            them is optional.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 24,
          }}
          className="pillar-grid"
        >
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              style={{
                background: C.cream,
                border: "1px solid rgba(184,134,11,0.12)",
                padding: "36px 28px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity .6s ease ${i * 0.1}s, transform .6s ease ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  border: "1px solid rgba(184,134,11,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: C.gold,
                  fontSize: 18,
                  marginBottom: 20,
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 19,
                  color: C.brown,
                  margin: "0 0 12px",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  color: C.muted,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1000px){.pillar-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:560px){.pillar-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

function CompanyCraft() {
  const { ref, visible } = useFadeIn();
  const stages = [
    {
      img: houseBird,
      label: "Source",
      text: "Nests collected from audited farms.",
    },
    {
      img: selectedNest,
      label: "Select",
      text: "Sorted by strand, colour and shape.",
    },
    {
      img: qualitySelect,
      label: "Quality Processing",
      text: "Hand-cleaned, feather by feather.",
    },
    {
      img: carefulSelect,
      label: "Final Inspection",
      text: "Checked against our AAA criteria.",
    },
    { img: finalProcess, label: "Pack", text: "Sealed, labelled and ready." },
  ];
  return (
    <section
      ref={ref}
      style={{ background: C.cream, padding: "28px 0" }}
      id="craft"
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
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
            <SectionLabel>
              <span style={{ color: C.gold }}>THE CRAFT</span>
            </SectionLabel>
            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(32px,4vw,48px)",
                color: C.brown,
                margin: "20px 0 16px",
              }}
            >
              FROM FARM TO FACTORY
            </h2>
            <p
              style={{
                fontSize: 15,
                color: C.muted,
                lineHeight: 1.8,
                maxWidth: 520,
              }}
            >
              The steps below look simple. Doing them properly, at scale, is
              what takes years to learn.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: 20,
          }}
          className="craft-grid"
        >
          {stages.map((s, i) => (
            <div
              key={s.label}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity .6s ease ${i * 0.1}s, transform .6s ease ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                  aspectRatio: "1/1",
                  background: C.creamDark,
                  marginBottom: 16,
                }}
              >
                <img
                  src={s.img}
                  alt={s.label}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: C.gold,
                  marginBottom: 8,
                }}
              >
                {String(i + 1).padStart(2, "0")} — {s.label.toUpperCase()}
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: C.muted,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1000px){.craft-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:700px){.craft-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:420px){.craft-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

function CompanyValues() {
  const { ref, visible } = useFadeIn();
  return (
    <section
      ref={ref}
      style={{ background: C.ivory, padding: "28px 0" }}
      id="values"
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto 56px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity .7s ease, transform .7s ease",
          }}
        >
          <SectionLabel>
            <span style={{ color: C.gold }}>OUR VALUES</span>
          </SectionLabel>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(32px,4vw,48px)",
              color: C.brown,
              margin: "20px 0 16px",
            }}
          >
            What We Stand For
          </h2>
          <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8 }}>
            Four commitments that decide how we buy, how we make and how we
            answer to our customers.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 32,
          }}
          className="values-grid"
        >
          {VALUES.map((v, i) => (
            <div
              key={v.title}
              style={{
                display: "flex",
                gap: 20,
                padding: "32px 28px",
                background: C.cream,
                border: "1px solid rgba(184,134,11,0.12)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity .6s ease ${i * 0.1}s, transform .6s ease ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 30,
                  color: "rgba(184,134,11,.35)",
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 19,
                    color: C.brown,
                    margin: "0 0 10px",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: C.muted,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:768px){.values-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function CompanyAbout() {
  return (
    <>
      <CompanyIntro />
      <CompanyJourney />
      <CompanyCraft />
    </>
  );
}

/* ── Certificate carousel slides ── */
const CERTIFICATE_SLIDES = [
  {
    img: Certificate1,
    fit: "cover" as const,
    label: "",
    title: "",
    desc: "Produced under strict food safety handling and hygiene protocols, verified through regular internal audits and external review.",
    meta: "Maintained annually",
  },
  {
    img: Certificate2,
    fit: "cover" as const,
    label: "Facility",
    title: "",
    desc: "Our processing environment meets rigorous hygiene and sanitation requirements, so every product is handled in a clean, controlled setting.",
    meta: "Certified production facility",
  },
  {
    img: Certificate3,
    fit: "cover" as const,
    label: "Quality",
    title: "",
    desc: "Every nest is assessed against our Premium AAA grading criteria — covering strand integrity, colour consistency, purity, and natural aroma.",
    meta: "Applied to every batch",
  },
  {
    img: Certificate4,
    fit: "cover" as const,
    label: "Quality",
    title: "",
    desc: "Every nest is assessed against our Premium AAA grading criteria — covering strand integrity, colour consistency, purity, and natural aroma.",
    meta: "Applied to every batch",
  },
];

function CertificateSlider() {
  const [preview, setPreview] = useState<(typeof CERTIFICATE_SLIDES)[0] | null>(
    null,
  );

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [preview]);

  return (
    <section
      className="cert-section"
      aria-label="Certifications gallery"
      style={{
        background: C.ivory,
        padding: "28px 0 12px",
        borderTop: "1px solid rgba(184,134,11,0.08)",
        borderBottom: "1px solid rgba(184,134,11,0.08)",
      }}
    >
      <div className="cert-marquee">
        <div className="cert-marquee-track">
          {[0, 1, 2].map((group) => (
            <div
              className="cert-marquee-group"
              key={group}
              aria-hidden={group !== 0}
            >
              {CERTIFICATE_SLIDES.map((slide, index) => (
                <button
                  type="button"
                  className="cert-marquee-item"
                  key={index}
                  onClick={() => setPreview(slide)}
                  aria-label={`Preview ${slide.title}`}
                >
                  <img
                    src={slide.img}
                    alt={group === 0 ? `${slide.title} certificate` : ""}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={preview.title}
          onClick={() => setPreview(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(26,16,8,0.82)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(100%, 980px)",
              maxHeight: "90vh",
              background:
                "linear-gradient(135deg,#F5ECD9 0%,#FAF7F2 50%,#F0E6C8 100%)",
              border: "1px solid rgba(184,134,11,0.35)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
              padding: 16,
            }}
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              aria-label="Close preview"
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1px solid rgba(184,134,11,0.35)",
                background: "rgba(250,247,242,0.96)",
                color: C.brown,
                cursor: "pointer",
                fontSize: 20,
                lineHeight: 1,
                zIndex: 1,
              }}
            >
              ×
            </button>
            <div
              style={{
                background: "#fffdf8",
                border: "1px solid rgba(184,134,11,0.2)",
                padding: 12,
              }}
            >
              <img
                src={preview.img}
                alt={preview.title}
                loading="lazy"
                style={{
                  width: "100%",
                  maxHeight: "calc(90vh - 140px)",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: "14px 4px 2px" }}>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  color: C.gold,
                  marginBottom: 4,
                }}
              >
                {preview.label}
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  color: C.brown,
                }}
              >
                {preview.title}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .cert-marquee {
          width: 100%;
          overflow: hidden;
        }

        .cert-marquee-track {
          display: flex;
          width: max-content;
          animation: certMarquee 18s linear infinite;
          will-change: transform;
        }

        .cert-marquee-group {
          display: flex;
          align-items: stretch;
          gap: 20px;
          padding-right: 20px;
          flex: 0 0 auto;
        }

        .cert-marquee-item {
          width: clamp(180px, 22vw, 300px);
          aspect-ratio: 17 / 22;
          flex: 0 0 auto;
          overflow: hidden;
          padding: 12px;
          background: linear-gradient(135deg,#F5ECD9 0%,#FAF7F2 55%,#F0E6C8 100%);
          border: 1px solid rgba(184,134,11,0.2);
          box-shadow: 0 8px 24px rgba(44,26,14,0.06);
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
        }

        .cert-marquee-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #fffdf8;
          border: 1px solid rgba(184,134,11,0.12);
        }

        @keyframes certMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333333%);
          }
        }

        @media (max-width: 768px) {
          .cert-marquee-item {
            width: clamp(150px, 42vw, 220px);
            padding: 8px;
          }
          .cert-marquee-group {
            gap: 12px;
            padding-right: 12px;
          }
        }
      `}</style>
    </section>
  );
}
export default function Home() {
  return (
    <>
      <Hero />
      <CertificateSlider />
      <QueenVideo />
      <Grades />
      <ProductArea />
      <Process />
      <ProcessSteps />
      <NestToNourishment />
      <TrustStats />
      <Certificates />
      <CompanyAbout />
      <Contact />
    </>
  );
}
