import { useState } from "react";
import { useFadeIn, C, PageHero } from "../shared";

function ContactCTA() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} style={{ background: C.cream, padding: "80px 0" }}>
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
            border: `1px solid rgba(184,134,11,0.2)`,
            boxShadow: "0 12px 32px rgba(184,134,11,0.12)",
            position: "relative",
          }}
        >
          <iframe
            title="QUEEN Showroom Location"
            src="https://maps.google.com/maps?q=Ly%20Brothers%20Group&ll=11.5860838,104.8881733&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", minHeight: 420 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://maps.app.goo.gl/rWd1W2FRGbGQcbD4A"
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
          {[
            {
              icon: "✉",
              label: "Email",
              value: "QueenBirdNest598@gmail.com",
              sub: "Reply within 1 business day",
            },
            {
              icon: "✆",
              label: "Phone",
              value: "+855 69 272 211",
              sub: "Mon-Sun, 9am - 6pm (GMT+7)",
            },
            {
              icon: "⊕",
              label: "Location",
              value: "Phnom Penh, Cambodia",
              sub: "Showroom by appointment",
            },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 20,
                padding: "20px 24px",
                background: C.ivory,
                border: `1px solid rgba(184,134,11,0.12)`,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: `rgba(184,134,11,0.08)`,
                  border: `1px solid rgba(184,134,11,0.2)`,
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
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-cta-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        label="SUPPORT"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our edible bird's nest."
        img="https://cdn.dribbble.com/userupload/15085972/file/original-52332b3c67fe047d163895011be584d9.png?crop=0x750-1000x1500&format=webp&resize=400x300&vertical=center"
        dimOverlay={0.6}
      />
      <ContactCTA />
    </>
  );
}
