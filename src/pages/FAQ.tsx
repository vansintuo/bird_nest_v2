import { useState } from "react";
import { ChevronDown, BirdDecor, GoldButton, ArrowRight, useFadeIn, C, PageHero } from "../shared";

const FAQ_CATEGORIES = [
  "About Bird's Nest",
  "Products",
  "Quality",
  "Preparation",
  "Storage",
  "Shipping",
  "Orders",
];

const FAQS: Record<string, { q: string; a: string }[]> = {
  "About Bird's Nest": [
    { q: "What is edible bird's nest?", a: "Edible bird's nest is a natural product made from the saliva of swiftlet birds, who build their nests in caves and on cliff faces. It has been prized in East Asian cultures for centuries for its nutritional value and health properties. Premium bird's nest contains protein, amino acids, and glycoproteins." },
    { q: "Is bird's nest safe to consume?", a: "Yes. Premium-grade, properly cleaned bird's nest is safe for most adults and is widely consumed across Southeast Asia and East Asia. We recommend consulting a healthcare provider if you have allergies or are pregnant." },
    { q: "What are the nutritional benefits?", a: "Bird's nest is rich in protein, sialic acid, glycoproteins, and essential amino acids. It is traditionally associated with promoting skin health, boosting immunity, and supporting overall wellbeing. Individual results may vary." },
    { q: "Is the harvesting ethical?", a: "At NESTURA, we work exclusively with farms that practise responsible, humane harvesting — collecting nests only after the swiftlets have completed their natural nesting cycle. No birds are harmed in our supply chain." },
  ],
  "Products": [
    { q: "What types of bird's nest do you offer?", a: "We offer Premium Raw Bird's Nest (Grade AAA), Cleaned Bird's Nest (ready to cook), Ready-to-Drink Bird's Nest, and Premium Gift Boxes. Each product is carefully graded and prepared to our quality standard." },
    { q: "What does Grade AAA mean?", a: "Grade AAA refers to the highest classification of bird's nest — characterised by long, intact strands, a clean natural colour, and minimal impurities. It represents the most prized category of raw bird's nest." },
    { q: "What is the difference between raw and cleaned bird's nest?", a: "Raw bird's nest still requires cleaning before cooking and is preferred by those who want to perform the full preparation process themselves. Cleaned bird's nest has been meticulously hand-cleaned and is ready to soak and cook." },
    { q: "Do you offer gift packaging?", a: "Yes. Our Premium Gift Box is designed for gifting and includes premium bird's nest products in elegant, luxurious packaging — perfect for special occasions and corporate gifts." },
  ],
  "Quality": [
    { q: "How do you ensure product quality?", a: "Every nest we sell passes through a six-stage quality process: ethical sourcing, individual selection, hand cleaning, controlled processing, final inspection, and premium packaging. We do not compromise at any stage." },
    { q: "Do your products contain additives or bleaching agents?", a: "No. NESTURA products contain zero artificial additives, bleaching agents, or preservatives. Our nests are cleaned using pure water and traditional methods only." },
    { q: "How can I verify I am receiving genuine bird's nest?", a: "Genuine bird's nest has a natural, mild aroma, a fibrous strand structure, and a soft ivory to gold colour. Our products are clearly graded and labelled. If you ever have a concern about authenticity, please contact us directly." },
    { q: "Where do your nests come from?", a: "Our nests are sourced from certified swiftlet farms across Southeast Asia, with a focus on regions known for producing premium-grade product. We visit and audit our partner farms to ensure ethical and quality standards are maintained." },
  ],
  "Preparation": [
    { q: "How do I prepare bird's nest at home?", a: "Soak dry bird's nest in clean water for 4–8 hours until it expands and softens. Rinse gently, remove any remaining feathers, then double-boil with water or broth for 30–45 minutes. Sweeten with rock sugar or honey to taste. Serve warm or chilled." },
    { q: "How much bird's nest should I use per serving?", a: "Typically 3–5 grams of dry bird's nest per person is sufficient for one serving. After soaking, it will expand significantly. Adjust based on personal preference and the product grade." },
    { q: "Can I prepare bird's nest in an Instant Pot or electric steamer?", a: "Yes. A slow cooker or electric double boiler works well. Use a low setting for 45–60 minutes. Avoid high heat, as it can break down the delicate proteins and texture of the nest." },
    { q: "Can bird's nest be served cold?", a: "Absolutely. Chilled bird's nest is popular in warmer climates and works beautifully in dessert soups or as a standalone serving with a light syrup. Prepare as normal and refrigerate before serving." },
  ],
  "Storage": [
    { q: "How should I store dry bird's nest?", a: "Store dry bird's nest in an airtight container in a cool, dry, dark place away from moisture and strong odours. Properly stored, dry bird's nest can last for 1–2 years. Avoid storing near windows or in humid areas." },
    { q: "How long does prepared bird's nest keep?", a: "Once cooked, bird's nest should be consumed within 2–3 days. Store prepared bird's nest in an airtight container in the refrigerator. Do not freeze prepared bird's nest, as this affects texture." },
    { q: "Can I freeze dry bird's nest?", a: "We do not recommend freezing dry bird's nest, as fluctuating temperatures can affect quality and strand integrity. A cool, dry cupboard in an airtight container is the optimal storage method." },
  ],
  "Shipping": [
    { q: "Do you ship internationally?", a: "Yes. We ship to Cambodia, Singapore, Malaysia, Thailand, and other select countries. International shipping times and fees are displayed at checkout. All orders are carefully packed to protect the product during transit." },
    { q: "How is bird's nest packaged for shipping?", a: "Each order is packed in protective cushioning within our premium outer packaging. Dry bird's nest is resilient to transit, but we take extra care to ensure it arrives in perfect condition." },
    { q: "How long does shipping take?", a: "Domestic orders (Cambodia) typically arrive within 2–4 business days. International orders vary by destination — usually 5–12 business days. Express options may be available at checkout." },
    { q: "Is tracking available?", a: "Yes. All orders include a tracking number sent to your email once dispatched. You can track your order through our shipping partner's website at any time." },
  ],
  "Orders": [
    { q: "How do I place an order?", a: "Browse our products, select your items, and add them to your cart. Proceed to checkout, enter your shipping details and payment information, and confirm your order. You will receive a confirmation email shortly after." },
    { q: "Can I modify or cancel my order after placing it?", a: "Orders can be modified or cancelled within 2 hours of placement. Please contact us immediately at info@nestura.com if you need to make changes. After this window, orders may already be in processing." },
    { q: "What payment methods do you accept?", a: "We accept major credit and debit cards, bank transfer, and select digital payment methods. All payments are processed securely. Contact us if you require an alternative payment arrangement for large orders." },
    { q: "Do you offer wholesale or corporate ordering?", a: "Yes. We offer wholesale pricing for qualifying orders and can arrange custom corporate gift packages. Please contact us directly at info@nestura.com to discuss your requirements." },
  ],
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid rgba(184,134,11,0.1)` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "22px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 20,
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 500, color: open ? C.gold : C.charcoal, lineHeight: 1.5, transition: "color 0.2s" }}>{q}</span>
        <span style={{ color: C.gold, flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.3s ease" }}>
          <ChevronDown />
        </span>
      </button>
      <div style={{
        maxHeight: open ? 400 : 0, overflow: "hidden",
        transition: "max-height 0.4s ease",
      }}>
        <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.85, paddingBottom: 24 }}>{a}</p>
      </div>
    </div>
  );
}

function FaqSection() {
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0]);
  const { ref, visible } = useFadeIn();

  return (
    <section style={{ background: C.ivory, padding: "80px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "260px 1fr", gap: 64 }} className="faq-layout">
        {/* Category nav */}
        <div>
          <p style={{ fontSize: 10, color: C.gold, letterSpacing: "0.18em", fontWeight: 700, marginBottom: 20 }}>CATEGORIES</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {FAQ_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "12px 16px", textAlign: "left", background: activeCategory === cat ? `rgba(184,134,11,0.08)` : "none",
                  border: `1px solid ${activeCategory === cat ? "rgba(184,134,11,0.2)" : "transparent"}`,
                  borderLeft: `3px solid ${activeCategory === cat ? C.gold : "transparent"}`,
                  cursor: "pointer", fontSize: 14, fontWeight: activeCategory === cat ? 600 : 400,
                  color: activeCategory === cat ? C.gold : C.charcoal,
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ items */}
        <div ref={ref} style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(24px,3vw,32px)", fontWeight: 700, color: C.brown, marginBottom: 8 }}>{activeCategory}</h2>
          <div style={{ width: 40, height: 1, background: C.goldLight, marginBottom: 32 }} />
          <div>
            {(FAQS[activeCategory] ?? []).map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.faq-layout{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function ContactCTA() {
  const { ref, visible } = useFadeIn();
  return (
    <section ref={ref} style={{ background: C.cream, padding: "80px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="contact-cta-grid">
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease,transform 0.6s ease" }}>
          <BirdDecor size={28} opacity={0.3} />
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 700, color: C.brown, margin: "20px 0 16px", lineHeight: 1.2 }}>
            Still have a question?
          </h2>
          <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8, marginBottom: 36 }}>
            Our team is happy to help with anything not covered here — from product advice to wholesale inquiries.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <GoldButton>Contact Us <ArrowRight /></GoldButton>
            <GoldButton outline>WhatsApp Us</GoldButton>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            { icon: "✉", label: "Email", value: "info@nestura.com", sub: "Reply within 1 business day" },
            { icon: "✆", label: "Phone", value: "+855 12 345 678", sub: "Mon–Sat, 9am–6pm (GMT+7)" },
            { icon: "⊕", label: "Location", value: "Phnom Penh, Cambodia", sub: "Showroom by appointment" },
          ].map((c, i) => (
            <div key={i} style={{ display: "flex", gap: 20, padding: "20px 24px", background: C.ivory, border: `1px solid rgba(184,134,11,0.12)` }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: `rgba(184,134,11,0.08)`, border: `1px solid rgba(184,134,11,0.2)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: C.gold, flexShrink: 0 }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: 10, color: C.gold, letterSpacing: "0.14em", fontWeight: 700, marginBottom: 4 }}>{c.label.toUpperCase()}</div>
                <div style={{ fontSize: 15, color: C.charcoal, fontWeight: 500, marginBottom: 3 }}>{c.value}</div>
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
      <FaqSection />
      <ContactCTA />
    </>
  );
}
