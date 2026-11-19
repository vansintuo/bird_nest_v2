import { BirdLogo, BirdDecor, ArrowRight, C } from "../shared";
import { useState } from "react";
import isoVerify from "../images/iso_verify.png";
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
    url: "https://www.facebook.com/queensbirdnestkh/directory_links",
  },
  {
    label: "Instagram",
    path: "M16 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6zM12 15a3 3 0 110-6 3 3 0 010 6z",
    url: "https://www.instagram.com/queenswhitebirdnest/",
  },
  {
    label: "Telegram",
    path: "M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z",
    url: "https://t.me/Salequeenwhitebirdnest",
  },
  {
    label: "TikTok",
    path: "M9 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zM9 17.267c2.848 0 5.161-2.313 5.161-5.161s-2.313-5.161-5.161-5.161-5.161 2.313-5.161 5.161 2.313 5.161 5.161 5.161zM22.915 7.724c-.515-1.071-1.791-1.654-2.868-1.14-1.161.514-1.745 1.79-.631 2.955.515 1.072 1.791 1.655 2.868 1.141 1.161-.515 1.746-1.79 1.141-2.865zM22 4.011v4.129a3.333 3.333 0 01-2.655 3.265 4.129 4.129 0 00-.829 1.44 3.335 3.335 0 01-3.264 2.656v2.192a1.239 1.239 0 01-1.375 1.375 1.239 1.239 0 01-1.375-1.375v-2.192a3.334 3.334 0 01-2.655-3.265 4.124 4.124 0 00-.828-1.44 3.335 3.335 0 01-3.264-2.656v-2.655a1.238 1.238 0 011.375-1.375h5.405a1.238 1.238 0 011.374 1.374v1.745c0 .11.045.213.125.292.08.078.184.123.292.123h2.561c1.32 0 2.393-1.074 2.393-2.394V5.284a1.238 1.238 0 011.375-1.375h3.387a1.239 1.239 0 011.374 1.375z",
    url: "https://www.tiktok.com/@queensbirdnest?is_from_webapp=1&sender_device=pc",
  },
];

type FooterLinkProps = {
  to: string;
  children: string;
};

function FooterLink({ to, children }: FooterLinkProps) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        const [path, hash] = to.split("#");
        if (hash) {
          document
            .getElementById(hash)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (path) {
          window.location.href = path;
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "block",
        fontSize: 13,
        color: hov ? "rgba(201,168,76,0.85)" : "rgba(250,247,242,0.5)",
        textDecoration: "none",
        marginBottom: 12,
        transition: "color 0.2s",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
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
              { label: "About Us", to: "/#about" },
              { label: "Our Process", to: "/#process" },
              { label: "Contact", to: "/#contact" },
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
              { label: "Products", to: "/#products" },
              { label: "The Process", to: "/#process" },
              { label: "Certifications", to: "/#quality" },
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
                lines: ["+855 69 27 22 11"],
              },
              { icon: <EmailIcon />, lines: ["queenwhitebirdnest@gmail.com"] },
              { icon: <MapIcon />, lines: ["សង្កាត់គោកឃ្លាង ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ"] },
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

        {/* ISO verification */}
        <div
          className="footer-iso"
          style={{
            marginBottom: 36,
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: 260 }}>
            <h4
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "rgba(201,168,76,0.9)",
                letterSpacing: "0.14em",
                margin: "0 0 10px",
              }}
            >
              ISO VERIFIED
            </h4>
            <p
              style={{
                fontSize: 12.5,
                lineHeight: 1.7,
                color: "rgba(250,247,242,0.45)",
                margin: 0,
              }}
            >
              Every batch is produced under an audited ISO management system,
              from farm collection through to cleaning, grading and packing.
            </p>
          </div>
          <a
            href="#quality"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("quality")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            title="View ISO certification"
            style={{
              display: "block",
              flex: "1 1 320px",
              minWidth: 260,
              padding: 10,
            }}
          >
            <img
              src={isoVerify}
              alt="Bird Nest Logo"
              width="150"
              height="150"
              style={{ objectFit: "contain", borderRadius: "50%" }}
            />
          </a>
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
