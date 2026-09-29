import { useEffect, useState } from "react"
import portraitImage from "@/imports/WhatsApp_Image_2026-09-26_at_9.04.56_PM-2.jpeg"
import brandIdentityImage from "@/imports/Brand_Identity.webp"
import editorialDesignImage from "@/imports/Editorial_Design-1.webp"
import campaignDesignImage from "@/imports/Campaign_Design.webp"
import socialMediaDesignImage from "@/imports/Social_Media_Design.webp"
import packagingDesignImage from "@/imports/packaging_design_with_mockup.webp"

const projectImages = [
  brandIdentityImage,
  editorialDesignImage,
  campaignDesignImage,
  socialMediaDesignImage,
  packagingDesignImage,
  "https://images.unsplash.com/photo-1695634281254-e94a29d234c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400",
]

const projects = [
  {
    number: "01",
    title: "LUMI",
    category: "Brand Identity",
    description: "Sustainable Footwear for a brighter tomorrow.",
    year: "2026",
  },
  {
    number: "02",
    title: "CITY AFTER DARK",
    category: "Editorial Design",
    description:
      "An editorial study exploring material, space, and daily ritual.",
    year: "2026",
  },
  {
    number: "03",
    title: "RE:FORM",
    category: "Campaign Design",
    description: "Fashion doesn't have to be new to feel new.",
    year: "2026",
  },
  {
    number: "04",
    title: "GORMET BURGER CO.",
    category: "Social Media",
    description: "A flexible social system for stories worth slowing down for.",
    year: "2026",
  },
  {
    number: "05",
    title: "MELLOW",
    category: "Packaging Design",
    description: "A profound, nuanced flavor profile that invites you to slow down and truly taste the difference.",
    year: "2024",
  },
  {
    number: "06",
    title: "Studies in Type",
    category: "Visual Exploration",
    description: "An ongoing experiment in letterform, rhythm, and contrast.",
    year: "2024",
  },
]

const principles = [
  ["01", "Purpose", "Every visual decision should have a reason."],
  ["02", "Simplicity", "Clear communication comes before decoration."],
  ["03", "Personality", "Good design should feel distinctive and memorable."],
  ["04", "Detail", "Small details create strong visual experiences."],
]

const testimonials = [
  {
    quote:
      "Ilmiya brought a rare clarity to our brand. She listened deeply, challenged thoughtfully, and made every detail feel intentional.",
    name: "Amina Rahman",
    role: "Founder, Arden House",
  },
  {
    quote:
      "Working with Ilmiya felt effortless. Her ideas were fresh, strategic, and beautifully translated across every touchpoint.",
    name: "Maya Collins",
    role: "Creative Director",
  },
  {
    quote:
      "She has an incredible eye for composition and type, but it is her calm, considered process that makes the work exceptional.",
    name: "Samira Noor",
    role: "Brand Strategist",
  },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="wordmark" href="#top" onClick={closeMenu}>
          IF<span>.</span>
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav
          className={menuOpen ? "nav-open" : ""}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <Arrow />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker reveal">
          Graphic designer · Visual creative
        </div>
        <div className="hero-title-wrap">
          <h1>
            <span>ILMIYA</span>
            <span className="outline">FATHIMA</span>
          </h1>
          <div className="hero-seal" aria-hidden="true">
            <span>IF</span>
          </div>
        </div>
        <div className="hero-bottom">
          <p>
            Creating thoughtful visual identities, digital experiences, and
            compelling design systems that turn ideas into memorable visuals.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              View my work <Arrow />
            </a>
            <a className="button button-link" href="#contact">
              Contact me
            </a>
          </div>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to about">
          <span>Scroll to explore</span>
          <i aria-hidden="true"></i>
        </a>
      </section>

      <section className="about section-pad" id="about">
        <div className="section-label">01 — About</div>
        <div className="about-grid">
          <div className="portrait-wrap">
            <img
              src={portraitImage}
              alt="Creative professional in a sunlit studio"
            />
            <span className="portrait-note">
              Based in TAMIL NADU· Working worldwide
            </span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A little about me</p>
            <h2>
              Design with <em>feeling,</em>
              <br /> built with intention.
            </h2>
            <p className="about-intro">
              I'm Ilmiya Fathima, a graphic designer passionate about visual
              storytelling, branding, typography, and creating meaningful design
              experiences.
            </p>
            <p className="about-body">
              I enjoy transforming ideas into clear, expressive, and visually
              engaging solutions—balancing strategy with an intuitive eye for
              detail.
            </p>
            <div className="capabilities">
              {[
                "Brand Identity",
                "Graphic Design",
                "Packaging Design",
                "Social Media Design",
                "Editorial Design",
              ].map((capability, index) => (
                <span key={capability}>
                  <small>0{index + 1}</small> {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-heading">
          <div>
            <div className="section-label">02 — Portfolio</div>
            <h2>Selected Work</h2>
          </div>
          <p>
            A collection of identities, campaigns, and visual stories shaped by
            curiosity and care.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card project-${index + 1}`}
              key={project.title}
            >
              <a
                href="#case-study"
                aria-label={`View ${project.title} project`}
                onClick={() => setSelectedProject(index)}
              >
                {index < 5 && (
                  <>
                    <div className="project-image">
                      <img src={projectImages[index]} alt="" />
                      <div className="project-hover">
                        <span>View project</span>
                        <Arrow />
                      </div>
                      <span className="project-number">{project.number}</span>
                    </div>
                    <div className="project-meta">
                      <div>
                        <p>{project.category}</p>
                        <h3>{project.title}</h3>
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                  </>
                )}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="case-study"
        id="case-study"
        aria-label={`${projects[selectedProject].title} project image`}
      >
        <div className="case-hero">
          <img
            src={projectImages[selectedProject]}
            alt={`${projects[selectedProject].title} project`}
          />
        </div>
      </section>

      <section className="philosophy section-pad">
        <div className="section-heading">
          <div>
            <div className="section-label">03 — Philosophy</div>
            <h2>
              How I Think
              <br />
              About Design
            </h2>
          </div>
          <div className="philosophy-mark" aria-hidden="true">
            ✳
          </div>
        </div>
        <div className="principles">
          {principles.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section-pad">
        <div className="section-label">04 — Practice</div>
        <div className="skill-row">
          <h2>Skills</h2>
          <p>
            Branding <span className="fg-inline-italic">·</span> Typography{" "}
            <span className="fg-inline-italic">·</span> Layout{" "}
            <span className="fg-inline-italic">·</span> Digital Design{" "}
            <span className="fg-inline-italic">·</span> Visual Identity{" "}
            <span className="fg-inline-italic">·</span> Social Media{" "}
            <span className="fg-inline-italic">·</span> UI Design
          </p>
        </div>
        <div className="skill-row">
          <h2>Tools</h2>
          <p>
            Adobe Photoshop <i>·</i> Adobe Illustrator <i>·</i> Maya <i>·</i>{" "}
            Figma <i>·</i> Blender
          </p>
        </div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="experience-intro">
          <div className="section-label">05 — Background</div>
          <h2>
            Experience &<br />
            Education
          </h2>
        </div>
        <div className="timeline">
          <article>
            <span>2024 — Present</span>
            <div>
              <h3>Graphic Designer</h3>
              <p>Independent practice · Pune / Remote</p>
            </div>
            <small>01</small>
          </article>
          <article />
          <article>
            <span>2024 — 2027</span>
            <div>
              <h3>Bachelor's Degree</h3>
              <p>Fergusson College Pune, BSc.Animation</p>
            </div>
            <small>02</small>
          </article>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="section-label light">06 — Start a project</div>
        <h2>
          Have an idea? Let's create
          <br /> something <span className="fg-inline-italic">memorable.</span>
        </h2>
        <div className="contact-bottom">
          <p>
            I'm always open to interesting projects, collaborations, and
            creative opportunities.
          </p>
          <div className="contact-actions">
            <a
              className="button button-light"
              href="mailto:ilmiyafathimawork@gmail.com"
            >
              Start a conversation <Arrow />
            </a>
            <a
              className="button button-line-light"
              href="mailto:ilmiyafathimawork@gmail.com"
            >
              Email me
            </a>
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/ilmiya/" key="LinkedIn">
            LinkedIn <Arrow />
          </a>
          <a href="mailto:ilmiyafathimawork@gmail.com" key="Email">
            Email <Arrow />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>ILMIYA FATHIMA</strong>
          <span>Graphic Designer & Visual Creative</span>
        </div>
        <p>© 2026 Ilmiya Fathima</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  )
}
