# Edible Bird's Nest Premium Website — Figma to Web UI Prompt

Create a modern, premium, luxury e-commerce/portfolio website for an **Edible Bird's Nest brand**.

The website should closely follow the provided Figma design. The visual style should communicate **luxury, purity, Asian heritage, natural ingredients, trust, and premium quality**.

## Design Direction

Use a sophisticated luxury aesthetic:

* Primary background: warm ivory / cream
* Secondary background: soft beige
* Accent: elegant champagne gold
* Text: dark brown / charcoal
* Typography: elegant serif font for large headings
* Typography: clean modern sans-serif for body text
* Rounded corners should be subtle, not excessive
* Use generous whitespace
* Use premium product photography
* Use subtle shadows
* Use thin gold borders
* Use delicate bird/nest decorative elements
* Avoid overly colorful UI
* Avoid a generic e-commerce template appearance

The website should feel similar to a **high-end Asian wellness / luxury food brand**.

---

# 1. Navigation Header

Create a clean fixed/sticky navigation bar.

### Left

Logo:

**NESTURA**

Small subtitle:

**EDIBLE BIRD'S NEST**

Include a simple elegant bird logo icon.

### Navigation

* Home
* Products
* Our Story
* Quality
* Blog
* Contact

### Right

* Search icon
* User/account icon
* Shopping bag/cart icon
* Cart item counter

On mobile, replace the navigation links with a hamburger menu.

---

# 2. Hero Section

Create a large premium hero section.

### Left content

Small label:

**PREMIUM EDIBLE BIRD'S NEST**

Large heading:

**Nature's
Purest Gift**

Use an elegant serif font.

Add a short description:

"Carefully harvested from pristine caves and traditionally prepared to preserve nature's finest nutrition for your loved ones."

Buttons:

**EXPLORE PRODUCTS**

**OUR STORY**

The primary button should use champagne gold.

The secondary button should have a transparent/cream background with a thin gold border.

### Right content

Display a large premium bird's nest product image.

Show:

* Bird's nest in a premium ceramic bowl
* Luxury packaging
* Warm natural lighting
* Wooden tray
* Subtle flowers / natural elements
* Soft cream background

Add subtle decorative flying bird elements.

Hero section should feel spacious and luxurious.

---

# 3. Quality Features

Immediately below the hero, create a horizontal feature section.

Create 5 feature items:

### 100% NATURAL

No additives, no bleaching, pure and safe.

### PREMIUM QUALITY

Handpicked from the best natural habitats.

### CAREFULLY CLEANED

Meticulously cleaned to preserve purity and nutrients.

### ASIAN HERITAGE

Rooted in tradition and trusted by generations.

### TRUSTED BRAND

Committed to quality and customer satisfaction.

Each item should have:

* Thin gold line icon
* Small gold heading
* Short description

On mobile, convert this section into a 2-column or horizontal scroll layout.

---

# 4. Products Section

Create a section titled:

**OUR PRODUCTS**

Add a small decorative bird/nest element under the title.

At the right side:

**VIEW ALL PRODUCTS →**

Create 4 premium product cards.

### Product 1

**PREMIUM BIRD'S NEST**

"Top grade raw bird's nest with long strands."

Button:

**VIEW DETAILS →**

### Product 2

**CLEANED BIRD'S NEST**

"Meticulously cleaned and ready to cook."

Button:

**VIEW DETAILS →**

### Product 3

**READY-TO-DRINK NEST**

"Convenient and nutritious, ready to enjoy."

Button:

**VIEW DETAILS →**

### Product 4

**PREMIUM GIFT BOX**

"Perfect gift for your loved ones on special occasions."

Button:

**VIEW DETAILS →**

Product cards should include:

* Large product image
* Product name
* Short description
* Gold outline button
* Soft cream background
* Very subtle border
* Small hover animation

On hover:

* Image slightly zooms
* Card rises slightly
* Button becomes gold

---

# 5. Our Story Section

Create a split-screen section.

### Left

Large lifestyle image showing:

* Prepared bird's nest
* Elegant ceramic bowl
* Warm tea/food setting
* Traditional Asian luxury atmosphere

### Right

Small heading:

**OUR STORY**

Main heading:

**From Nature, With Care**

Description:

"At NESTURA, we believe the finest bird's nest comes from nature and careful hands. Each nest is ethically harvested from pristine caves, meticulously cleaned and quality-checked to retain its natural nutrients."

Button:

**LEARN MORE ABOUT US →**

Add subtle traditional Asian line-art decoration in the background.

---

# 6. Our Process Section

Create a dark luxury section.

Background:

Dark brown / almost black.

Heading:

**OUR PROCESS**

Use champagne gold typography and icons.

Create 5 steps connected by arrows:

### 01 — HARVEST

Nests are carefully harvested from natural caves.

### 02 — CLEANING

Impurities are removed through a meticulous cleaning process.

### 03 — QUALITY CHECK

Every nest is inspected for quality and purity.

### 04 — PREPARATION

Prepared with care to preserve nutrition and texture.

### 05 — PACKAGING

Hygienically packed to ensure freshness and safety.

Use elegant circular gold outline icons.

Desktop layout:

`HARVEST → CLEANING → QUALITY CHECK → PREPARATION → PACKAGING`

Mobile layout:

Vertical timeline.

---

# 7. Premium CTA

Create a large elegant CTA section.

Heading:

**Bring Nature's Luxury
Into Your Everyday Life.**

Button:

**SHOP NOW →**

Place premium bird's nest products on the right side.

Use:

* Ivory background
* Gold typography
* Subtle bird illustration
* Soft decorative botanical elements

---

# 8. Footer

Create a dark luxury footer.

### Brand

NESTURA

EDIBLE BIRD'S NEST

Description:

"Dedicated to providing premium edible bird's nest with uncompromising quality and sincerity."

Social icons:

* Facebook
* Instagram
* Telegram
* WhatsApp

### Products

* Premium Bird's Nest
* Cleaned Bird's Nest
* Ready-to-Drink Nest
* Premium Gift Box
* Accessories

### Company

* Our Story
* Our Process
* Quality Assurance
* Blog
* FAQ

### Customer Care

* Shipping & Delivery
* Return Policy
* Terms & Conditions
* Privacy Policy

### Contact

Include:

* Phone
* Email
* Location
* Phnom Penh, Cambodia

Bottom:

**© 2026 NESTURA. All Rights Reserved.**

---

# UX Requirements

The website must be:

* Fully responsive
* Mobile-first
* Desktop optimized
* Tablet optimized
* Accessible
* Fast loading
* SEO friendly
* Smooth scrolling
* Modern animations
* Clean component structure

Add subtle animations:

* Fade-in sections while scrolling
* Image zoom on product hover
* Smooth button transitions
* Navigation underline animation
* Gentle floating bird decoration
* Smooth page transitions

Do NOT use excessive animations.

---

# Responsive Design

### Desktop

Use a maximum content width around 1280px.

Hero should use approximately:

`50% content / 50% image`

Product section:

`4 columns`

Quality section:

`5 columns`

Process:

`5 horizontal steps`

### Tablet

Products:

`2 columns`

Hero:

`2 columns`

Quality:

`2–3 columns`

### Mobile

Hero:

`1 column`

Products:

`1 column`

Quality:

`2 columns`

Process:

`vertical timeline`

Navigation:

`hamburger menu`

Buttons should be full-width or comfortable touch targets.

---

# Technical Implementation

If converting the Figma design into code, use:

* Next.js
* TypeScript
* Tailwind CSS
* React
* Lucide React icons
* Modern semantic HTML
* Reusable React components

Recommended structure:

components/
Navbar
Hero
QualityFeatures
ProductCard
Products
OurStory
Process
CTA
Footer

app/
page.tsx
products/
about/
quality/
blog/
contact/

Create reusable data-driven product cards instead of duplicating markup.

---

# Important Visual Requirement

The final implementation must match the Figma design closely.

Pay particular attention to:

1. Spacing
2. Typography hierarchy
3. Image proportions
4. Border radius
5. Gold accent usage
6. Section heights
7. Button dimensions
8. Alignment
9. Responsive behavior
10. Overall premium visual balance

Do not create a generic Bootstrap-style website.

The final result should look like a **real premium Edible Bird's Nest brand website**, suitable for presenting to customers or using as a professional portfolio project.
