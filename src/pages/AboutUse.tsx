import { useNavigate } from "react-router";
import {
  BirdDecor,
  GoldDivider,
  GoldButton,
  ArrowRight,
  useFadeIn,
  C,
  PageHero,
  SectionLabel,
} from "../shared";
import storyImagePrim from "../images/bird_nest_prim_preview.png";

import storyImageChia from "../images/chia_bn.png";
import storyImageGinseng from "../images/ginseng_bn.png";
import storyImageOriginal from "../images/original_bn.png";
import storyImagePandan from "../images/pandan_bn.png";
import storyImageZeroSugar from "../images/zero_sugar_bn.png";
/* =========================================================
   COMPANY INFORMATION
========================================================= */

const FOUNDERS = [
  {
    name: "Co-Founder Name",
    role: "Co-Founder & Managing Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop",
    description:
      "Driven by a passion for quality and natural wellness, our co-founder helped establish the vision behind Queen Birdnest and continues to guide the company with purpose and care.",
  },
  {
    name: "Co-Founder Name",
    role: "Co-Founder & Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop",
    description:
      "With a strong belief in craftsmanship and authenticity, our co-founder works closely with the team to ensure every Queen Birdnest product reflects our standards.",
  },
];

const PRODUCTS = [
  {
    title: "Premium Bird's Nest",
    subtitle: "Pure natural nourishment",
    description:
      "Carefully selected and processed edible bird's nest prepared for customers who value authenticity and premium quality.",
    image: storyImagePrim,
  },
  {
    title: "Ready-to-Enjoy Nest",
    subtitle: "Convenience meets quality",
    description:
      "Thoughtfully prepared products designed to make enjoying premium bird's nest simple and convenient.",
    image:
      "https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-6/480046025_1301933777815091_9038416660960061473_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEK16o5KZknTPuZjqLScdLNlGqPDgOHMTeUao8OA4cxN8-h47mzad6meMIVbOawYytTeK_8YVqXyWcJh9I5rrG7&_nc_ohc=4shy2pp9v90Q7kNvwGyw75O&_nc_oc=AdoVaY7MLPN9chWr531vhXL4Gv3Mab-XxFcigNuc62tjBdyhrIh7yQZ7M8o92cPD4yI&_nc_zt=23&_nc_ht=scontent.fpnh7-1.fna&_nc_gid=Rhh3pNE8N47DZNo6vLbMkg&_nc_ss=7b2a8&oh=00_AQIbnXcLKrX9zij2ud3PcqGW02V8qhZRntzC7j7Jloq9Ug&oe=6AB045AC",
  },
  {
    title: "Gift Collection",
    subtitle: "A meaningful expression of care",
    description:
      "Beautifully presented Queen Birdnest products created for gifting, celebrations, and meaningful moments.",
    image:
      "https://scontent.fpnh7-2.fna.fbcdn.net/v/t39.30808-6/476054198_1294593131882489_2324238320778180359_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGcZw1jzLFfMlVaiuAPLPh6-FxWMM5xP5T4XFYwznE_lAzXPaac_WmLXV8d04oTqoN5SgtLztUcngZTYjU5ZxV4&_nc_ohc=fw5I3MZoj3AQ7kNvwEm1Oeq&_nc_oc=AdofsfRWGz0BLVQNDRmyDti_LXpgmJ8V2KJzdUtzQaxlvj6T3Y5PNNg8LskY28kqggk&_nc_zt=23&_nc_ht=scontent.fpnh7-2.fna&_nc_gid=5a9jz3xS6thcRYUgBUwm-g&_nc_ss=7b2a8&oh=00_AQLjUMXPQF1_6BcUrrUYKteJ2lml40XjtZ5e4yfl_4jjbw&oe=6AB033E5",
  },
];

/* =========================================================
   COMPANY INTRO
========================================================= */

function WhoWeAre() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      ref={ref}
      style={{
        background: C.ivory,
        padding: "96px 0",
      }}
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
        {/* Image */}
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
              src="https://scontent.fpnh7-2.fna.fbcdn.net/v/t39.30808-6/474745677_1287359165939219_2118366557123665066_n.jpg?stp=dst-jpg_tt6&cstp=mx1834x2048&ctp=s1834x2048&_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEKrgjzM1zVazPxnlgdtTPl_VkHfxN0qKv9WQd_E3Soq7GpUpY6sqM_9u8WjVPSthoh8F_ebtxj5pQxsOQzbyxW&_nc_ohc=-yjqox6p7ZQQ7kNvwHadyD7&_nc_oc=Adp_kt_petLXEZOik1RPiqS8dRRJKuYZAG_o2VxeLDklSbRyTFkH0dRz1UCkBacZnkA&_nc_zt=23&_nc_ht=scontent.fpnh7-2.fna&_nc_gid=zx0-7qxSjhN_WGRjIfzaqw&_nc_ss=7b2a8&oh=00_AQLE9mgo3Isaf6t4AFgB233t5yVbSsavE_XPQB64x4B05g&oe=6AB03BE0"
              alt="Natural premium ingredients"
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

        {/* Content */}
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
            Queen Birdnest is a premium edible bird's nest company built around
            one simple belief: quality begins with care.
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

      <style>{`
        @media(max-width:768px){
          .about-intro-grid{
            grid-template-columns:1fr!important;
            gap:40px!important;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   OUR STORY
========================================================= */

function OurStory() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      ref={ref}
      style={{
        background: C.cream,
        padding: "96px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
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
            <span style={{ color: C.gold }}>to Queen Birdnest</span>
          </h2>

          <p
            style={{
              fontSize: 16,
              color: C.muted,
              lineHeight: 1.8,
            }}
          >
            Our journey began with a desire to bring authentic, carefully
            processed bird's nest to people who appreciate natural quality.
          </p>
        </div>

        {/* Story timeline */}
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Vertical line */}
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

          {[
            {
              year: "01",
              img: storyImageChia,
              title: "Chia Flavor Bird's Nest",
              text: "Discover our latest innovation: Chia Bird's Nest, crafted with the same quality you trust and chia flavor.",
            },
            {
              year: "02",
              img: storyImageOriginal,
              title: "Original Bird's Nest",
              text: "Discover our latest innovation: Original Bird's Nest, crafted with the same quality you trust and original flavor.",
            },
            {
              year: "03",
              img: storyImageGinseng,
              title: "Ginseng Flavor Bird's Nest",
              text: "Discover our latest innovation: Ginseng Bird's Nest, crafted with the same quality you trust and ginseng flavor.",
            },
            {
              year: "04",
              img: storyImagePandan,
              title: "Pandan Flavor Bird's Nest",
              text: "Discover our latest innovation: Pandan Flavor Bird's Nest, crafted with the same quality you trust and pandan flavor.",
            },
            {
              year: "05",
              img: storyImageZeroSugar,
              title: "Zero Sugar Bird's Nest",
              text: "Discover our latest innovation: Zero Sugar Bird's Nest, crafted with the same quality you trust and zero sugar.",
            },
          ].map((item, index) => {
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
                    style={{
                      fontSize: 14,
                      lineHeight: 1.8,
                      color: C.muted,
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
                    style={{
                      overflow: "hidden",
                      borderRadius: 4,
                      // boxShadow: "0 20px 48px rgba(44,26,14,.14)",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
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
        @media(max-width:768px){
          .story-line{
            left:7px!important;
          }

          .story-item{
            grid-template-columns:30px 1fr!important;
            margin-bottom:40px!important;
          }

          .story-item > div:first-child{
            grid-column:2!important;
            text-align:left!important;
            padding:0 0 0 20px!important;
          }

          .story-item > div:nth-child(2){
            grid-column:1!important;
            grid-row:1!important;
          }

          .story-item > div.story-item-media{
            grid-column:2!important;
            grid-row:2!important;
            padding:0 0 0 20px!important;
            margin-top:20px;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   CO-FOUNDERS
========================================================= */



/* =========================================================
   MISSION & VISION
========================================================= */

function MissionVision() {
  return (
    <section
      style={{
        background: C.brown,
        padding: "96px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
        }}
        className="mission-grid"
      >
        <div
          style={{
            padding: "40px 48px",
            borderRight: "1px solid rgba(201,168,76,.2)",
          }}
        >
          <SectionLabel>
            <span style={{ color: C.goldLight }}>OUR MISSION</span>
          </SectionLabel>

          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 38,
              color: C.goldLight,
              margin: "20px 0",
            }}
          >
            Quality You Can Trust
          </h2>

          <p
            style={{
              color: "rgba(250,247,242,.62)",
              fontSize: 15,
              lineHeight: 1.9,
            }}
          >
            Our mission is to provide carefully selected and thoughtfully
            processed bird's nest products while building lasting trust with
            every customer.
          </p>
        </div>

        <div
          style={{
            padding: "40px 48px",
          }}
        >
          <SectionLabel>
            <span style={{ color: C.goldLight }}>OUR VISION</span>
          </SectionLabel>

          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 38,
              color: C.goldLight,
              margin: "20px 0",
            }}
          >
            A Better Bird's Nest Experience
          </h2>

          <p
            style={{
              color: "rgba(250,247,242,.62)",
              fontSize: 15,
              lineHeight: 1.9,
            }}
          >
            We envision Queen Birdnest becoming a trusted premium brand known
            for authenticity, craftsmanship, elegant presentation and
            uncompromising attention to quality.
          </p>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .mission-grid{
            grid-template-columns:1fr!important;
          }

          .mission-grid > div{
            border-right:none!important;
            border-bottom:1px solid rgba(201,168,76,.2);
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   PRODUCTS
========================================================= */

function Products() {
  const { ref, visible } = useFadeIn();
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      style={{
        background: C.cream,
        padding: "96px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
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
            <SectionLabel>
              <span style={{ color: C.gold }}>OUR PRODUCTS</span>
            </SectionLabel>

            <h2
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(32px,4vw,48px)",
                color: C.brown,
                marginTop: 16,
              }}
            >
              Crafted for
              <br />
              <span style={{ color: C.gold }}>Every Occasion</span>
            </h2>
          </div>

          <p
            style={{
              maxWidth: 400,
              color: C.muted,
              fontSize: 14,
              lineHeight: 1.8,
            }}
          >
            Discover our collection of carefully prepared bird's nest products,
            created with the same attention to quality at every stage.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
          }}
          className="product-grid"
        >
          {PRODUCTS.map((product, index) => (
            <div
              key={index}
              style={{
                background: C.ivory,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity .7s ease ${index * 0.12}s,
                  transform .7s ease ${index * 0.12}s`,
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
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

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: C.muted,
                  }}
                >
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .product-heading{
            display:block!important;
          }

          .product-heading > p{
            margin-top:20px;
          }

          .product-grid{
            grid-template-columns:1fr!important;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   VALUES
========================================================= */

function OurValues() {
  const values = [
    {
      title: "Authenticity",
      text: "We believe customers deserve products that are genuine, transparent and carefully sourced.",
    },
    {
      title: "Craftsmanship",
      text: "Every nest receives careful attention from selection through final preparation.",
    },
    {
      title: "Quality",
      text: "We continuously focus on consistency and careful processing across every product.",
    },
    {
      title: "Trust",
      text: "We build our relationships through honesty, responsibility and long-term commitment.",
    },
  ];

  return (
    <section
      style={{
        background: C.ivory,
        padding: "88px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <SectionLabel>
          <span style={{ color: C.gold }}>WHAT WE STAND FOR</span>
        </SectionLabel>

        <h2
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "clamp(32px,4vw,46px)",
            color: C.brown,
            margin: "20px 0 50px",
          }}
        >
          Our Values
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 1,
            background: "rgba(184,134,11,.15)",
          }}
          className="values-grid"
        >
          {values.map((value, index) => (
            <div
              key={index}
              style={{
                background: C.ivory,
                padding: "36px 24px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 34,
                  color: "rgba(184,134,11,.25)",
                  marginBottom: 12,
                }}
              >
                0{index + 1}
              </div>

              <h3
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 22,
                  color: C.brown,
                  marginBottom: 12,
                }}
              >
                {value.title}
              </h3>

              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: C.muted,
                }}
              >
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .values-grid{
            grid-template-columns:1fr 1fr!important;
          }
        }

        @media(max-width:480px){
          .values-grid{
            grid-template-columns:1fr!important;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="OUR STORY"
        title="About Queen Birdnest"
        subtitle="A journey built on authenticity, craftsmanship, and care."
        img="https://www.goldennest.com/cdn/shop/articles/golden_nest_-_Where_to_Buy_the_Best_Edible_Birds_Nest_Online.jpg?v=1753381192"
        dimOverlay={0.45}
      />

      <WhoWeAre />

      <OurStory />


      <MissionVision />

      <Products />

      <OurValues />
    </>
  );
}
