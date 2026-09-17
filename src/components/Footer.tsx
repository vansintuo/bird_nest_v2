import { BirdLogo, BirdDecor, ArrowRight, C } from "../shared";
import { useState } from "react";
import { Link } from "react-router";
const PhoneIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const EmailIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const MapIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SOCIALS = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    url: "https://www.facebook.com/queensbirdnestkh/",
  },
  {
    label: "Instagram",
    path: "M16 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6zM12 15a3 3 0 110-6 3 3 0 010 6z",
    url: "https://www.instagram.com/queensbirdnest_official/",
  },
  {
    label: "Telegram",
    path: "M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z",
    url: "",
  },
  {
    label: "WhatsApp",
    path: "M17.5 14.5c-.3-.2-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1s-1.3-.5-2.4-1.5c-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5s0-.4-.1-.6c-.1-.2-.7-1.6-1-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4C8 8 7 9 7 11c0 2 1.5 4 1.7 4.2.2.3 2.8 4.3 6.8 5.9 4 1.6 4 1.1 4.7 1 .7 0 2.1-.8 2.4-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.4z",
    url: "",
  },
];

function FooterLink({ to, children }: { to: string; children: string }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "block",
        fontSize: 13,
        color: hov ? "rgba(201,168,76,0.85)" : "rgba(250,247,242,0.5)",
        textDecoration: "none",
        marginBottom: 12,
        transition: "color 0.2s",
      }}
    >
      {children}
    </Link>
  );
}

function SocialBtn({ s }: { s: (typeof SOCIALS)[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={s.url}
      aria-label={s.label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 34,
        height: 34,
        borderRadius: "50%",
        border: `1px solid ${hov ? C.goldLight : "rgba(184,134,11,0.3)"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: hov ? C.goldLight : "rgba(201,168,76,0.8)",
        textDecoration: "none",
        transition: "all 0.2s",
      }}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={s.path} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#1C0F07", color: "rgba(250,247,242,0.7)" }}>
      <div
        style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 24px 40px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1.2fr",
            gap: 48,
            marginBottom: 56,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <BirdLogo />
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "rgba(250,247,242,0.95)",
                    letterSpacing: "0.04em",
                  }}
                >
                  QUEEN
                </div>
                <div
                  style={{
                    fontSize: 8,
                    color: C.goldLight,
                    letterSpacing: "0.18em",
                  }}
                >
                  BIRD'S NEST
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                maxWidth: 260,
                marginBottom: 24,
                color: "rgba(250,247,242,0.5)",
              }}
            >
              Dedicated to providing premium edible bird's nest with
              uncompromising quality and sincerity.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              {SOCIALS.map((s) => (
                <SocialBtn key={s.label} s={s} />
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "rgba(201,168,76,0.9)",
                letterSpacing: "0.14em",
                marginBottom: 20,
              }}
            >
              QUICK LINKS
            </h4>
            {[
              { label: "About Us", to: "/about-use" },
              { label: "Our Process", to: "/our-process" },
              { label: "Contact", to: "/faq" },
            ].map(({ label, to }) => (
              <FooterLink key={label} to={to}>
                {label}
              </FooterLink>
            ))}
          </div>
          <div>
            <h4
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "rgba(201,168,76,0.9)",
                letterSpacing: "0.14em",
                marginBottom: 20,
              }}
            >
              OUR PRODUCTS
            </h4>
            {[
              { label: "Products", to: "/" },
              { label: "The Process", to: "/our-process" },
              { label: "Certifications", to: "/" },
            ].map(({ label, to }) => (
              <FooterLink key={label} to={to}>
                {label}
              </FooterLink>
            ))}
          </div>

          <div>
            <h4
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "rgba(201,168,76,0.9)",
                letterSpacing: "0.14em",
                marginBottom: 20,
              }}
            >
              CONTACT US
            </h4>
            {[
              {
                icon: <PhoneIcon />,
                lines: ["+855 12 345 678", "+855 98 765 432"],
              },
              { icon: <EmailIcon />, lines: ["QueenBirdNest598@gmail.com"] },
              { icon: <MapIcon />, lines: ["Phnom Penh, Cambodia"] },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 10,
                  marginBottom: 18,
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{ color: C.goldLight, flexShrink: 0, marginTop: 2 }}
                >
                  {c.icon}
                </span>
                <div>
                  {c.lines.map((l) => (
                    <div
                      key={l}
                      style={{
                        fontSize: 13,
                        color: "rgba(250,247,242,0.5)",
                        lineHeight: 1.6,
                      }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(184,134,11,0.15)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: "rgba(250,247,242,0.28)" }}>
            © 2026 QUEEN. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    fontSize: 11,
                    color: "rgba(250,247,242,0.28)",
                    textDecoration: "none",
                  }}
                >
                  {l}
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .footer-grid{ grid-template-columns:1fr 1fr!important } }
        @media(max-width:480px){ .footer-grid{ grid-template-columns:1fr!important } }
      `}</style>
    </footer>
  );
}
