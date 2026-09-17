import { useState } from "react";
import {
  ArrowRight,
  BirdDecor,
  GoldDivider,
  C,
  PageHero,
  SectionLabel,
} from "../shared";

const CATEGORIES = [
  "All",
  "Wellness",
  "Bird's Nest",
  "Our Craft",
  "Recipes",
  "Lifestyle",
];

const ARTICLES = [
  {
    id: 1,
    title: "Understanding the Benefits of Edible Bird's Nest",
    excerpt:
      "Discover the centuries-old tradition of bird's nest consumption and the science behind its remarkable nutritional profile.",
    category: "Wellness",
    date: "August 18, 2026",
    img: "https://images.unsplash.com/photo-1623476663364-12de7c8b8b8d?w=800&h=540&fit=crop&auto=format",
    alt: "Bird's nest soup in elegant ceramic bowl",
    featured: true,
  },
  {
    id: 2,
    title: "How to Choose Premium Bird's Nest",
    excerpt:
      "A practical guide to identifying quality bird's nest — from strand length and colour to natural aroma and grade classification.",
    category: "Bird's Nest",
    date: "August 10, 2026",
    img: "https://images.unsplash.com/photo-1783876484797-9e18334ccf4e?w=600&h=400&fit=crop&auto=format",
    alt: "Premium raw bird's nest close-up",
    featured: false,
  },
  {
    id: 3,
    title: "From Tradition to Modern Wellness",
    excerpt:
      "How an ancient East Asian delicacy has found its place in contemporary health and beauty routines around the world.",
    category: "Lifestyle",
    date: "July 29, 2026",
    img: "https://images.unsplash.com/photo-1778488028552-be65c47f8d1a?w=600&h=400&fit=crop&auto=format",
    alt: "Wellness tea and traditional food",
    featured: false,
  },
  {
    id: 4,
    title: "How We Carefully Prepare Every Nest",
    excerpt:
      "A behind-the-scenes look at the meticulous hand-cleaning and preparation process that sets QUEEN apart.",
    category: "Our Craft",
    date: "July 15, 2026",
    img: "https://images.unsplash.com/photo-1623133894375-ce20135ee521?w=600&h=400&fit=crop&auto=format",
    alt: "Careful hand preparation of bird's nest",
    featured: false,
  },
  {
    id: 5,
    title: "A Guide to Preparing Bird's Nest at Home",
    excerpt:
      "Step-by-step instructions for soaking, double-boiling, and serving premium bird's nest — the traditional way.",
    category: "Recipes",
    date: "July 4, 2026",
    img: "https://images.unsplash.com/photo-1784448678101-51e8b1dfcee3?w=600&h=400&fit=crop&auto=format",
    alt: "Asian herbal soup preparation",
    featured: false,
  },
  {
    id: 6,
    title: "The Story Behind Our Craftsmanship",
    excerpt:
      "Meet the team behind QUEEN and learn how a shared passion for quality and heritage gave birth to our brand.",
    category: "Our Craft",
    date: "June 22, 2026",
    img: "https://images.unsplash.com/photo-1605712776874-fc7dea449fe8?w=600&h=400&fit=crop&auto=format",
    alt: "Artisan craftsmanship close-up",
    featured: false,
  },
  {
    id: 7,
    title: "Sustainable Practices in Bird's Nest Farming",
    excerpt:
      "Understanding the ethical standards that govern responsible bird's nest production and why it matters for the future.",
    category: "Lifestyle",
    date: "June 10, 2026",
    img: "https://images.unsplash.com/photo-1730978298852-8fb01400435a?w=600&h=400&fit=crop&auto=format",
    alt: "Bird house in natural environment",
    featured: false,
  },
];

function CategoryBadge({ cat }: { cat: string }) {
  const COLORS: Record<string, string> = {
    Wellness: "#4CAF82",
    "Bird's Nest": C.gold,
    "Our Craft": "#9A6F00",
    Recipes: "#C67C4E",
    Lifestyle: "#7A6553",
  };
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.14em",
        color: COLORS[cat] ?? C.gold,
        textTransform: "uppercase",
      }}
    >
      {cat}
    </span>
  );
}

function FeaturedArticle({ article }: { article: (typeof ARTICLES)[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.1fr 0.9fr",
        gap: 0,
        background: C.ivory,
        border: `1px solid rgba(184,134,11,0.12)`,
        overflow: "hidden",
        marginBottom: 64,
      }}
      className="featured-grid"
    >
      <div
        style={{ overflow: "hidden", minHeight: 460 }}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        <img
          src={article.img}
          alt={article.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            minHeight: 460,
            transition: "transform 0.6s ease",
            transform: hov ? "scale(1.04)" : "scale(1)",
          }}
        />
      </div>
      <div
        style={{
          padding: "56px 52px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "#fff",
              background: C.gold,
              padding: "4px 10px",
            }}
          >
            FEATURED
          </span>
          <CategoryBadge cat={article.category} />
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(24px,3vw,36px)",
            fontWeight: 700,
            color: C.brown,
            lineHeight: 1.25,
            marginBottom: 20,
          }}
        >
          {article.title}
        </h2>
        <p
          style={{
            fontSize: 15,
            color: C.muted,
            lineHeight: 1.8,
            marginBottom: 32,
          }}
        >
          {article.excerpt}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span
            style={{ fontSize: 12, color: C.muted, letterSpacing: "0.06em" }}
          >
            {article.date}
          </span>
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
              paddingBottom: 3,
            }}
          >
            READ STORY <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: (typeof ARTICLES)[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: C.ivory,
        border: `1px solid rgba(184,134,11,0.1)`,
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: hov ? "0 12px 36px rgba(44,26,14,0.1)" : "none",
        transform: hov ? "translateY(-4px)" : "none",
        cursor: "pointer",
      }}
    >
      <div style={{ overflow: "hidden", aspectRatio: "4/3" }}>
        <img
          src={article.img}
          alt={article.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hov ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>
      <div style={{ padding: "28px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <CategoryBadge cat={article.category} />
          <span
            style={{ width: 1, height: 12, background: "rgba(184,134,11,0.2)" }}
          />
          <span style={{ fontSize: 11, color: C.muted }}>{article.date}</span>
        </div>
        <h3
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 18,
            fontWeight: 600,
            color: C.brown,
            lineHeight: 1.35,
            marginBottom: 12,
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: C.muted,
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          {article.excerpt}
        </p>
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 11,
            fontWeight: 600,
            color: C.gold,
            letterSpacing: "0.1em",
            textDecoration: "none",
          }}
        >
          READ MORE <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section style={{ background: C.brown, padding: "80px 0" }}>
      <div
        style={{
          maxWidth: 560,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <BirdDecor size={32} opacity={0.4} />
        <h2
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(26px,3.5vw,36px)",
            fontWeight: 700,
            color: C.goldLight,
            margin: "24px 0 12px",
          }}
        >
          Receive stories from our world.
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "rgba(250,247,242,0.45)",
            marginBottom: 36,
            lineHeight: 1.7,
          }}
        >
          Thoughtful articles on wellness, heritage, and the craft behind every
          nest — delivered gently to your inbox.
        </p>
        {done ? (
          <div
            style={{
              padding: "20px 32px",
              border: `1px solid rgba(184,134,11,0.4)`,
              color: C.goldLight,
              fontSize: 14,
            }}
          >
            Thank you — welcome to the QUEEN journal.
          </div>
        ) : (
          <div
            style={{ display: "flex", gap: 0, maxWidth: 420, margin: "0 auto" }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              style={{
                flex: 1,
                padding: "14px 20px",
                background: "rgba(250,247,242,0.07)",
                border: `1px solid rgba(184,134,11,0.3)`,
                borderRight: "none",
                color: "#FAF7F2",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              onClick={() => email && setDone(true)}
              style={{
                padding: "14px 24px",
                background: C.gold,
                border: "none",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              SUBSCRIBE
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const featured = ARTICLES[0];
  const grid = ARTICLES.slice(1);

  const filtered = grid.filter((a) => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchSearch =
      !search ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <PageHero
        label="QUEEN JOURNAL"
        title="Journal"
        subtitle="Discover stories, knowledge and inspiration from the world of edible bird's nest."
        img="https://images.unsplash.com/photo-1623476663364-12de7c8b8b8d?w=1400&h=600&fit=crop&auto=format"
        dimOverlay={0.55}
      />

      <section
        style={{
          background: C.cream,
          padding: "0",
          borderBottom: `1px solid rgba(184,134,11,0.1)`,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              padding: "24px 0",
              flexWrap: "wrap",
            }}
          >
            {/* Category filter */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setPage(1);
                  }}
                  style={{
                    padding: "8px 18px",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    background: activeCategory === cat ? C.gold : "transparent",
                    color: activeCategory === cat ? "#fff" : C.muted,
                    border: `1px solid ${activeCategory === cat ? C.gold : "rgba(184,134,11,0.2)"}`,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
            {/* Search */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: C.ivory,
                border: `1px solid rgba(184,134,11,0.18)`,
                padding: "10px 16px",
                minWidth: 240,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={C.muted}
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search articles..."
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  fontSize: 13,
                  color: C.charcoal,
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: C.cream, padding: "64px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          {/* Featured */}
          {activeCategory === "All" && !search && (
            <FeaturedArticle article={featured} />
          )}

          {/* Grid */}
          {filtered.length === 0 ? (
            <div
              style={{ textAlign: "center", padding: "80px 0", color: C.muted }}
            >
              <BirdDecor size={40} opacity={0.25} />
              <p style={{ marginTop: 20, fontSize: 15 }}>
                No articles found. Try a different search or category.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 28,
              }}
              className="blog-grid"
            >
              {filtered.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {filtered.length > 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
                marginTop: 64,
              }}
            >
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  style={{
                    width: 40,
                    height: 40,
                    background: page === n ? C.gold : "transparent",
                    border: `1px solid ${page === n ? C.gold : "rgba(184,134,11,0.2)"}`,
                    color: page === n ? "#fff" : C.muted,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {n}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <Newsletter />

      <style>{`@media(max-width:900px){.blog-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){.blog-grid{grid-template-columns:1fr!important}.featured-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
