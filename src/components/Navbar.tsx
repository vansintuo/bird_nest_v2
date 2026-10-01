import { useState } from "react"
import { useNavigate, useLocation } from "react-router"
import {
  BirdLogo,
  CartIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
  useScrolled,
  useActiveSection,
} from "../shared"

const NAV_LINKS = [
  { label: "Home", to: "/", id: "top" },
  { label: "Products", to: "/#products", id: "products" },
  { label: "Our Process", to: "/#process", id: "process" },
  { label: "About Us", to: "/#about", id: "about" },
  { label: "Contact", to: "/#contact", id: "contact" },
]

const SPY_IDS = NAV_LINKS.map((l) => l.id)

export default function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const activeSection = useActiveSection(SPY_IDS)

  const goTo = (to: string) => {
    setOpen(false)
    const [path, hash] = to.split("#")
    if (path && path !== pathname) {
      navigate(to)
      return
    }
    if (hash) {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

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

          </button>

          {/* Nav links — desktop */}
          <nav
            style={{ display: "flex", gap: 32, margin: "0 auto" }}
            className="QUEEN-nav-desktop"
          >
            {NAV_LINKS.map(({ label, to, id }) => {
              const isActive = activeSection === id
              return (
                <a
                  key={label}
                  href={to}
                  onClick={(e) => {
                    e.preventDefault()
                    goTo(to)
                  }}
                  className={`QUEEN-nav-link${isActive ? " active" : ""}`}
                  style={{
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#B8860B" : "#3A2D20",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                    transition: "color 0.25s ease, font-weight 0.25s ease",
                  }}
                >
                  {label}
                </a>
              )
            })}
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
          {NAV_LINKS.map(({ label, to, id }) => (
            <a
              key={label}
              href={to}
              onClick={(e) => {
                e.preventDefault()
                goTo(to)
              }}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 15,
                fontWeight: activeSection === id ? 700 : 400,
                color: activeSection === id ? "#B8860B" : "#3A2D20",
                textDecoration: "none",
                borderBottom: "1px solid rgba(184,134,11,0.08)",
                letterSpacing: "0.04em",
                cursor: "pointer",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .QUEEN-nav-link { position: relative; padding-bottom: 4px; }
        .QUEEN-nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:#B8860B; transition:width 0.3s ease; }
        .QUEEN-nav-link:hover::after { width:100%; }
        .QUEEN-nav-link.active::after { width:100%; height:2px; }
        @media(max-width:768px){ .QUEEN-nav-desktop{display:none!important} .QUEEN-nav-mobile{display:flex!important} }
        @media(min-width:769px){ .QUEEN-nav-mobile{display:none!important} .QUEEN-nav-desktop{display:flex!important} }
      `}</style>
    </header>
  )
}
