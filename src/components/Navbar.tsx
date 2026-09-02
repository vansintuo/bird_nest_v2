import { useState } from "react"
import { NavLink, useNavigate } from "react-router"
import {
  BirdLogo,
  CartIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
  useScrolled,
} from "../shared"

const NAV_LINKS = [
  { label: "Home", to: "/" },
  // { label: "Products", to: "/our-process" },
  { label: "Our Process", to: "/our-process" },
  { label: "About Us", to: "/about-use" },
  // { label: "Quality", to: "/quality" },
  // { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/faq" },
]

export default function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(250,247,242,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(184,134,11,0.12)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{ display: "flex", alignItems: "center", height: 72, gap: 16 }}
        >
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <BirdLogo />
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#2C1A0E",
                  letterSpacing: "0.04em",
                  lineHeight: 1.1,
                }}
              >
                NESTURA
              </div>
              <div
                style={{
                  fontSize: 8,
                  color: "#B8860B",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                }}
              >
                EDIBLE BIRD'S NEST
              </div>
            </div>
          </button>

          {/* Nav links — desktop */}
          <nav
            style={{ display: "flex", gap: 32, margin: "0 auto" }}
            className="nestura-nav-desktop"
          >
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className="nestura-nav-link"
                style={({ isActive }) => ({
                  fontSize: 13,
                  fontWeight: 500,
                  color: isActive ? "#B8860B" : "#3A2D20",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                })}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#FAF7F2",
            borderTop: "1px solid rgba(184,134,11,0.12)",
            padding: "20px 24px 24px",
          }}
        >
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                display: "block",
                padding: "12px 0",
                fontSize: 15,
                color: isActive ? "#B8860B" : "#3A2D20",
                textDecoration: "none",
                borderBottom: "1px solid rgba(184,134,11,0.08)",
                letterSpacing: "0.04em",
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        .nestura-nav-link { position: relative; }
        .nestura-nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:#B8860B; transition:width 0.3s ease; }
        .nestura-nav-link:hover::after, .nestura-nav-link.active::after { width:100%; }
        @media(max-width:768px){ .nestura-nav-desktop{display:none!important} .nestura-nav-mobile{display:flex!important} }
        @media(min-width:769px){ .nestura-nav-mobile{display:none!important} .nestura-nav-desktop{display:flex!important} }
      `}</style>
    </header>
  )
}
