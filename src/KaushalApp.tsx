import { FormEvent, useState } from "react";
import { FiGlobe } from "react-icons/fi";
import "./portfolio-modern.css";

type Locale = "en" | "de";

type FeaturedWork = {
  title: string;
  impact: string;
  image: string;
  alt: string;
  summary: string;
  meta: string;
  aspect: "portrait" | "offset" | "landscape";
  offset: string;
};

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  detail: string;
};

type EducationItem = {
  period: string;
  degree: string;
  school: string;
  location?: string;
  detail: string;
};

type Copy = {
  nav: {
    projects: string;
    editorial: string;
    experience: string;
    education: string;
    contact: string;
  };
  heroMetaLeft: string;
  heroMetaRight: string;
  heroDeck: string;
  heroPrimary: string;
  heroSecondary: string;
  manifestoLabel: string;
  manifesto: string[];
  categoryTitle: string;
  quickView: string;
  portfolioEdition: string;
  editorialKicker: string;
  editorialTitle: string;
  editorialBody: string;
  ledger: string[];
  experienceTitle: string;
  educationTitle: string;
  footer: {
    navigation: string;
    reach: string;
    base: string;
    availability: string;
    formTitle: string;
    name: string;
    email: string;
    message: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
};

type NavKey = keyof Copy["nav"];
type FormStatus = "idle" | "sending" | "success" | "error";

const featuredWork: Record<Locale, FeaturedWork[]> = {
  en: [
    {
      title: "DACH AI Job Agent",
      impact: "Auto-sourcing to application",
      image: "/images/kaushal-main.jpg",
      alt: "Kaushal Agrawal portrait in grayscale editorial treatment",
      summary:
        "Built an n8n workflow that scrapes jobs, scores resume fit, drafts tailored cover letters, and routes applications with tracker logging for every step.",
      meta: "Case 01 / Workflow Automation",
      aspect: "portrait",
      offset: "",
    },
    {
      title: "Market Research Prediction Engine",
      impact: "2h signal-to-forecast cycle",
      image: "/images/background.png",
      alt: "Industrial travel scene used as a brutalist project visual",
      summary:
        "Designed a multi-step AI workflow that ingests WhatsApp market signals, enriches them with approved web and macro sources, and returns citation-aware forecasts with confidence gates.",
      meta: "Case 02 / AI Intelligence",
      aspect: "offset",
      offset: "product-card-offset",
    },
    {
      title: "Trade Fair Lead Engine",
      impact: "Cold outreach on autopilot",
      image: "/images/hiking.jpg",
      alt: "High-contrast outdoor image representing global movement and field execution",
      summary:
        "Connected buyer scraping, Google Sheets tracking, personalized email generation, and nurture sequencing into one outbound system for B2B lead generation.",
      meta: "Case 03 / Growth Systems",
      aspect: "landscape",
      offset: "",
    },
  ],
  de: [
    {
      title: "DACH AI Job Agent",
      impact: "Von Sourcing bis Bewerbung automatisiert",
      image: "/images/kaushal-main.jpg",
      alt: "Kaushal Agrawal portrait in grayscale editorial treatment",
      summary:
        "Ein klarer Entscheidungsrhythmus für Exportpriorisierung mit Market Scoring, Reporting-Disziplin und operativer Umsetzung.",
      meta: "Case 01 / Strategie",
      aspect: "portrait",
      offset: "",
    },
    {
      title: "Cost Compression Program",
      impact: "-20% operative Kosten",
      image: "/images/background.png",
      alt: "Industrial travel scene used as a brutalist project visual",
      summary:
        "Procurement- und Finance-Reviews in ein gemeinsames Operating Model überführt, um Kosten schneller sichtbar und steuerbar zu machen.",
      meta: "Case 02 / Finance",
      aspect: "offset",
      offset: "product-card-offset",
    },
    {
      title: "Trade Control Console",
      impact: "EU / Nahost / Asien",
      image: "/images/hiking.jpg",
      alt: "High-contrast outdoor image representing global movement and field execution",
      summary:
        "Compliance-nahe Workflows, Lieferantenkoordination und Reporting-Checkpoints in eine saubere Trade-Execution-Struktur gebracht.",
      meta: "Case 03 / Operations",
      aspect: "landscape",
      offset: "",
    },
  ],
};

const experience: Record<Locale, ExperienceItem[]> = {
  en: [
    {
      period: "May 2025 / Jan 2026",
      role: "Business Consultant",
      company: "HORBACH",
      detail:
        "Driving AI advisory, workflow design, and financial decision support with automation ideas that move from concept to measurable operating systems.",
    },
    {
      period: "Apr 2024 / Jul 2024",
      role: "Working Student, Business Leads Management",
      company: "Consulate General of India",
      detail:
        "Supported bilateral business coordination, trade reporting, and market intelligence across Germany-facing initiatives.",
    },
    {
      period: "May 2023 / Oct 2023",
      role: "Working Student, Procurement",
      company: "Laumer GmbH",
      detail:
        "Focused on sourcing efficiency, process tracking, and reporting quality across procurement operations.",
    },
    {
      period: "Mar 2020 / Jan 2023",
      role: "Business Analyst & Project Manager",
      company: "Adani Group",
      detail:
        "Managed international trade analytics, forecasting inputs, and process reviews that now inform my AI-first approach to operational automation.",
    },
  ],
  de: [
    {
      period: "Mai 2025 / Jan 2026",
      role: "Business Consultant",
      company: "HORBACH",
      detail:
        "Verantwortlich für KI-nahe Beratung, Finanzanalyse und kommerzielle Entscheidungsvorbereitung mit messbarem Impact.",
    },
    {
      period: "Apr 2024 / Jul 2024",
      role: "Working Student, Business Leads Management",
      company: "Consulate General of India",
      detail:
        "Unterstützte bilaterale Wirtschaftskoordination, Trade-Reporting und Marktanalysen für Deutschland-bezogene Initiativen.",
    },
    {
      period: "Mai 2023 / Okt 2023",
      role: "Working Student, Einkäufer",
      company: "Laumer GmbH",
      detail:
        "Fokus auf Sourcing-Effizienz, Prozess-Tracking und Reporting-Qualität in der Beschaffung.",
    },
    {
      period: "Mär 2020 / Jan 2023",
      role: "Business Analyst & Project Manager",
      company: "Adani Group",
      detail:
        "Steuerte internationale Trade-Analysen, Forecasting-Inputs und Prozessreviews für supply-chain-lastige Bereiche.",
    },
  ],
};

const education: Record<Locale, EducationItem[]> = {
  en: [
    {
      period: "2025",
      degree: "Master in Tourism Development",
      school: "Deggendorf Institute of Technology",
      location: "Germany",
      detail:
        "Master's degree listed on the resume under tourism development with a Germany-based academic track.",
    },
    {
      period: "2019",
      degree: "Bachelor in Business Management",
      school: "Jaipur National University",
      location: "Jaipur, India",
      detail:
        "Built the business, management, and commercial foundation that now shapes the consulting and trade work.",
    },
  ],
  de: [
    {
      period: "2025",
      degree: "Master in Tourism Development",
      school: "Deggendorf Institute of Technology",
      location: "Deutschland",
      detail:
        "Master-Abschluss laut Lebenslauf mit Deutschland-bezogenem akademischem Fokus.",
    },
    {
      period: "2019",
      degree: "Bachelor in Business Management",
      school: "Jaipur National University",
      location: "Jaipur, Indien",
      detail:
        "Fundament in Business und Management, das heute die Beratungs- und Trade-Arbeit prägt.",
    },
  ],
};

const footerLinks = {
  navigation: [
    { key: "projects" as NavKey, href: "#projects" },
    { key: "editorial" as NavKey, href: "#editorial" },
    { key: "experience" as NavKey, href: "#experience" },
    { key: "education" as NavKey, href: "#education" },
    { key: "contact" as NavKey, href: "#contact" },
  ] as const,
  contact: [
    { label: "kaushal.agrawal0606@gmail.com", href: "mailto:kaushal.agrawal0606@gmail.com" },
    { label: "+49 17647061856", href: "tel:+4917647061856" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kaushal-business-analyist/",
    },
    { label: "Resume", href: "/Kaushal_Agrawal_Resume.pdf" },
  ],
};

const copy: Record<Locale, Copy> = {
  en: {
    nav: {
      projects: "Projects",
      editorial: "Editorial",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    heroMetaLeft: "Season 04 / Munich / Germany",
    heroMetaRight: "AI Workflows / n8n / Ops",
    heroDeck:
      "Brutalist portfolio for AI workflow design, n8n automation, business analysis, and operations systems that turn messy work into repeatable execution.",
    heroPrimary: "Enter Archive",
    heroSecondary: "Download Resume",
    manifestoLabel: "Manifesto",
    manifesto: [
      "I build AI workflow systems for teams that need sharper reporting, faster decisions, and less manual follow-up across operations, research, and outreach.",
      "The work sits between business analysis and automation delivery, translating ambiguity into systems that can be scored, triggered, monitored, and improved.",
    ],
    categoryTitle: "SELECTED PROJECTS",
    quickView: "Quick View",
    portfolioEdition: "Portfolio Edition",
    editorialKicker: "Editorial Ledger",
    editorialTitle: "AI PROJECTS DESIGNED FOR REAL OPERATIONS",
    editorialBody:
      "These projects are built with an operator mindset: capture the signal, structure the decision, and deploy a workflow that still works under daily business pressure.",
    ledger: [
      "n8n automation",
      "AI agents",
      "Job matching systems",
      "Lead generation",
      "Market forecasting",
      "Operations design",
    ],
    experienceTitle: "Experience",
    educationTitle: "Education",
    footer: {
      navigation: "Navigation",
      reach: "Reach",
      base: "Base",
      availability: "Available for consulting, analytics, and trade-focused roles.",
      formTitle: "Contact Form",
      name: "Name",
      email: "Email",
      message: "Message",
      emailPlaceholder: "Business email",
      messagePlaceholder: "Tell me about your role, project, or consulting need.",
      send: "Send Inquiry",
      sending: "Sending...",
      success: "Inquiry sent. I will review it on email.",
      error: "Inquiry could not be sent right now. Please try again in a moment.",
    },
  },
  de: {
    nav: {
      projects: "Projekte",
      editorial: "Editorial",
      experience: "Erfahrung",
      education: "Ausbildung",
      contact: "Kontakt",
    },
    heroMetaLeft: "Season 04 / München / Deutschland",
    heroMetaRight: "KI Systeme / Finance / Trade",
    heroDeck:
      "Brutalistisches Portfolio für KI-Beratung, Business Analysis, Finance Strategy und internationale Handelsausführung.",
    heroPrimary: "Archiv öffnen",
    heroSecondary: "Lebenslauf laden",
    manifestoLabel: "Manifesto",
    manifesto: [
      "Ich entwickle AI-Workflow-Systeme für Teams, die schärferes Reporting, klarere operative Disziplin und mehr Sicherheit in kommerziellen Entscheidungen brauchen.",
      "Die Arbeit bewegt sich zwischen finanzieller Klarheit und grenzüberschreitender Ausführung und übersetzt Ambiguität in messbare, belastbare Strukturen.",
    ],
    categoryTitle: "AUSGEWÄHLTE ARBEIT",
    quickView: "Schnellansicht",
    portfolioEdition: "Portfolio Edition",
    editorialKicker: "Editorial Ledger",
    editorialTitle: "GEORDNETES CHAOS FÜR KOMPLEXE OPERATIONEN",
    editorialBody:
      "Die Portfolio-Arbeit basiert auf Beratungsdisziplin: Signal erkennen, Risiko quantifizieren und einen Workflow installieren, der täglichem Druck standhält.",
    ledger: [
      "KI-Beratung",
      "Business Analysis",
      "Finance Strategy",
      "Controlling",
      "International Trade",
      "Operations Design",
    ],
    experienceTitle: "Erfahrung",
    educationTitle: "Ausbildung",
    footer: {
      navigation: "Navigation",
      reach: "Kontakt",
      base: "Standort",
      availability: "Verfügbar für Beratung, Analytics und trade-fokussierte Rollen.",
      formTitle: "Kontaktformular",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      emailPlaceholder: "Business E-Mail",
      messagePlaceholder: "Erzähl mir mehr über Rolle, Projekt oder Beratungsbedarf.",
      send: "Anfrage senden",
      sending: "Wird gesendet...",
      success: "Anfrage gesendet. Ich erhalte sie per E-Mail.",
      error: "Die Anfrage konnte gerade nicht gesendet werden. Bitte in einem Moment erneut versuchen.",
    },
  },
};

export default function KaushalApp() {
  const [locale, setLocale] = useState<Locale>("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const t = copy[locale];
  const webhookUrl = (import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || "").trim();
  const notifyEmail = (
    import.meta.env.VITE_BOOKING_NOTIFY_EMAIL || "kaushal.agrawal0606@gmail.com"
  ).trim();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!webhookUrl) {
      setFormStatus("error");
      return;
    }

    setFormStatus("sending");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          submittedAt: new Date().toISOString(),
          service: "Portfolio Contact Inquiry",
          serviceSlug: "portfolio-contact",
          source: "season-04-contact-form",
          notifyEmail,
          name: formData.name,
          email: formData.email,
          phone: "",
          address: "",
          location: "Portfolio Website",
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with ${response.status}`);
      }

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div className="season04-shell" id="top">
      <div className="texture-overlay" aria-hidden="true" />

      <header className="season04-nav">
        <a className="brand-mark" href="#top" aria-label="Kaushal home">
          KAUSHAL
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#projects">{t.nav.projects}</a>
          <a href="#editorial">{t.nav.editorial}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#education">{t.nav.education}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <button
          type="button"
          className="lang-switch"
          onClick={() => setLocale((current) => (current === "en" ? "de" : "en"))}
          aria-label="Toggle language"
        >
          <FiGlobe />
          <span>{locale === "en" ? "DE" : "EN"}</span>
        </button>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-image" aria-hidden="true">
            <img src="/images/kaushal-main.jpg" alt="" />
          </div>
          <div className="hero-content">
            <div className="hero-meta">
              <span>{t.heroMetaLeft}</span>
              <span>{t.heroMetaRight}</span>
            </div>
            <div className="hero-rule" aria-hidden="true" />
            <h1 className="split-headline">
              <span>KAUSHAL</span>
              <span className="indented">AGRAWAL</span>
            </h1>
            <p className="hero-deck">{t.heroDeck}</p>
            <div className="hero-actions">
              <a className="cta-primary" href="#projects">
                {t.heroPrimary}
              </a>
              <a className="cta-secondary" href="/Kaushal_Agrawal_Resume.pdf" download>
                {t.heroSecondary}
              </a>
            </div>
          </div>
        </section>

        <section className="manifesto-grid" id="manifesto">
          <div className="manifesto-label">
            <span>{t.manifestoLabel}</span>
          </div>
          <div className="manifesto-copy">
            <p>{t.manifesto[0]}</p>
            <p className="manifesto-copy-secondary">{t.manifesto[1]}</p>
          </div>
        </section>

        <section className="category-divider" aria-label="Selected work section divider">
          <h2>{t.categoryTitle}</h2>
        </section>

        <section className="product-grid" id="projects">
          {featuredWork[locale].map((item) => (
            <article key={item.title} className={`product-card ${item.offset}`}>
              <a className="product-media" href="#contact">
                <span className="neon-badge">{t.quickView}</span>
                <img src={item.image} alt={item.alt} className={`media-${item.aspect}`} />
              </a>
              <div className="product-copy">
                <div className="product-topline">
                  <p>{item.title}</p>
                  <span>{item.meta}</span>
                </div>
                <p className="product-summary">{item.summary}</p>
                <div className="product-footer">
                  <strong>{item.impact}</strong>
                  <span>{t.portfolioEdition}</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="editorial-section" id="editorial">
          <div className="editorial-intro">
            <p className="section-kicker">{t.editorialKicker}</p>
            <h2>{t.editorialTitle}</h2>
            <p>{t.editorialBody}</p>
          </div>
          <div className="editorial-aside">
            {t.ledger.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section-block" id="experience">
          <div className="section-heading">
            <p className="section-kicker">{t.experienceTitle}</p>
          </div>
          <div className="experience-grid experience-grid-tight">
            {experience[locale].map((item) => (
              <article key={`${item.company}-${item.period}`} className="experience-card">
                <p className="experience-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="education">
          <div className="section-heading">
            <p className="section-kicker">{t.educationTitle}</p>
          </div>
          <div className="education-grid">
            {education[locale].map((item) => (
              <article key={`${item.school}-${item.period}`} className="education-card">
                <p className="experience-period">{item.period}</p>
                <h3>{item.degree}</h3>
                <p className="experience-company">{item.school}</p>
                {item.location ? <p className="education-location">{item.location}</p> : null}
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="season04-footer" id="contact">
        <div className="footer-columns">
          <div>
            <p className="footer-heading">{t.footer.navigation}</p>
            {footerLinks.navigation.map((item) => (
              <a key={item.key} href={item.href}>
                {t.nav[item.key]}
              </a>
            ))}
          </div>
          <div>
            <p className="footer-heading">{t.footer.reach}</p>
            {footerLinks.contact.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <p className="footer-heading">{t.footer.base}</p>
            <p>Munich, Germany</p>
            <p>{t.footer.availability}</p>
          </div>
          <div className="contact-panel">
            <p className="footer-heading">{t.footer.formTitle}</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>{t.footer.name}</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, name: event.target.value }))
                  }
                  required
                />
              </label>
              <label>
                <span>{t.footer.email}</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, email: event.target.value }))
                  }
                  placeholder={t.footer.emailPlaceholder}
                  aria-label="Business email"
                  required
                />
              </label>
              <label>
                <span>{t.footer.message}</span>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, message: event.target.value }))
                  }
                  placeholder={t.footer.messagePlaceholder}
                  required
                />
              </label>
              <button type="submit" disabled={formStatus === "sending"}>
                {formStatus === "sending" ? t.footer.sending : t.footer.send}
              </button>
            </form>
            {formStatus === "success" ? (
              <p className="form-feedback success">{t.footer.success}</p>
            ) : null}
            {formStatus === "error" ? (
              <p className="form-feedback error">{t.footer.error}</p>
            ) : null}
          </div>
        </div>
        <p className="footer-ghost">KAUSHAL</p>
      </footer>
    </div>
  );
}
