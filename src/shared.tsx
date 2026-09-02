import { useEffect, useRef, useState } from "react";

/* ─── Color tokens ─── */
export const C = {
  ivory: "#FAF7F2",
  cream: "#F2EBE0",
  creamDark: "#E8DBCC",
  gold: "#B8860B",
  goldLight: "#C9A84C",
  goldPale: "#F0E6C8",
  brown: "#2C1A0E",
  brownMid: "#5C3D1E",
  charcoal: "#3A2D20",
  muted: "#7A6553",
};

/* ─── Hooks ─── */
export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

export function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Shared icons ─── */
export const BirdLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 8C12 8 6 13 6 19c0 3 2 5 4 6l8-10 8 10c2-1 4-3 4-6 0-6-6-11-12-11z" stroke="#B8860B" strokeWidth="1.2" fill="none"/>
    <path d="M14 24c0 0 4-2 4-6" stroke="#B8860B" strokeWidth="1" strokeLinecap="round"/>
    <path d="M8 12 C10 10 12 9 14 10" stroke="#B8860B" strokeWidth="1" strokeLinecap="round"/>
    <path d="M28 12 C26 10 24 9 22 10" stroke="#B8860B" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

export const BirdDecor = ({ size = 20, opacity = 0.35 }: { size?: number; opacity?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ opacity }}>
    <path d="M12 5C7 5 3 9 3 13c0 2 1.5 3.5 3 4l6-7.5 6 7.5c1.5-.5 3-2 3-4 0-4-4-8-9-8z" stroke="#B8860B" strokeWidth="1" fill="rgba(184,134,11,0.15)"/>
    <path d="M5 9C7 7 9 6.5 11 7" stroke="#B8860B" strokeWidth="0.8" strokeLinecap="round"/>
  </svg>
);

export const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
  </svg>
);
export const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
export const CartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);
export const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
export const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
export const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
export const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

/* ─── Reusable section divider ─── */
export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={className} style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ height: 1, width: 40, background: C.goldLight }} />
      <BirdDecor size={16} opacity={0.5} />
      <div style={{ height: 1, width: 40, background: C.goldLight }} />
    </div>
  );
}

/* ─── Gold button ─── */
export function GoldButton({ children, outline, onClick, style }: {
  children: React.ReactNode; outline?: boolean; onClick?: () => void; style?: React.CSSProperties;
}) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "14px 32px",
        background: outline ? (hov ? C.goldPale : "transparent") : (hov ? "#9A6F00" : C.gold),
        color: outline ? C.brown : "#fff",
        border: `1px solid ${C.gold}`,
        cursor: "pointer",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.12em",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        transition: "all 0.25s",
        boxShadow: outline ? "none" : hov ? "0 6px 24px rgba(184,134,11,0.45)" : "0 4px 20px rgba(184,134,11,0.35)",
        transform: hov ? "translateY(-1px)" : "none",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

/* ─── Section label ─── */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 10, letterSpacing: "0.22em", fontWeight: 700, color: C.gold, marginBottom: 12, textTransform: "uppercase", display: "flex", alignItems: "center", gap: 10 }}>
      {children}
    </p>
  );
}

/* ─── Page hero ─── */
export function PageHero({
  label, title, subtitle, img, dimOverlay = 0.38, light = false,
}: {
  label?: string; title: string; subtitle?: string;
  img: string; dimOverlay?: number; light?: boolean;
}) {
  return (
    <section style={{ position: "relative", height: "60vh", minHeight: 400, display: "flex", alignItems: "center", overflow: "hidden" }}>
      <img src={img} alt={title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: `rgba(${light ? "250,247,242" : "28,15,7"},${dimOverlay})` }} />
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 24px", width: "100%" }}>
        {label && (
          <p style={{ fontSize: 10, letterSpacing: "0.24em", fontWeight: 700, color: C.goldLight, marginBottom: 16 }}>{label}</p>
        )}
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, color: light ? C.brown : "#FAF7F2", lineHeight: 1.1, marginBottom: 20, maxWidth: 700 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: 18, color: light ? C.muted : "rgba(250,247,242,0.75)", maxWidth: 520, lineHeight: 1.7 }}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}
