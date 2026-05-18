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
      title: "Business Process Mapping",
      impact: "Requirements to implementation-ready workflows",
      image: "/images/kaushal-main.jpg",
      alt: "Kaushal Agrawal portrait in grayscale editorial treatment",
      summary:
        "Translated unclear operational needs into process maps, user stories, acceptance criteria, and Jira/Confluence-ready documentation for faster team execution.",
      meta: "Case 01 / Business Analysis",
      aspect: "portrait",
      offset: "",
    },
    {
      title: "Reporting & Procurement Visibility",
      impact: "Excel / Power BI / SAP-ERP context",
      image: "/images/background.png",
      alt: "Industrial travel scene used as a brutalist project visual",
      summary:
        "Structured supplier, cost, and purchasing data into clearer reporting flows so operational decisions become easier to compare, explain, and improve.",
      meta: "Case 02 / Reporting",
      aspect: "offset",
      offset: "product-card-offset",
    },
    {
      title: "International Coordination Desk",
      impact: "Trade, stakeholders, public-sector workflow",
      image: "/images/hiking.jpg",
      alt: "High-contrast outdoor image representing global movement and field execution",
      summary:
        "Managed business leads, trade documentation, and stakeholder communication across Germany-facing initiatives with a focus on clarity and follow-through.",
      meta: "Case 03 / Coordination",
      aspect: "landscape",
      offset: "",
    },
  ],
  de: [
    {
      title: "Business Process Mapping",
      impact: "Von Anforderungen zu umsetzbaren Workflows",
      image: "/images/kaushal-main.jpg",
      alt: "Kaushal Agrawal portrait in grayscale editorial treatment",
      summary:
        "Unklare operative Anforderungen in Prozessmaps, User Stories, Akzeptanzkriterien und Jira/Confluence-faehige Dokumentation uebersetzt.",
      meta: "Case 01 / Business Analyse",
      aspect: "portrait",
      offset: "",
    },
    {
      title: "Reporting & Procurement Visibility",
      impact: "Excel / Power BI / SAP-ERP Kontext",
      image: "/images/background.png",
      alt: "Industrial travel scene used as a brutalist project visual",
      summary:
        "Lieferanten-, Kosten- und Einkaufsdaten in klarere Reporting-Flows strukturiert, damit Entscheidungen vergleichbarer und steuerbarer werden.",
      meta: "Case 02 / Reporting",
      aspect: "offset",
      offset: "product-card-offset",
    },
    {
      title: "International Coordination Desk",
      impact: "Trade, Stakeholder, Public-Sector Workflow",
      image: "/images/hiking.jpg",
      alt: "High-contrast outdoor image representing global movement and field execution",
      summary:
        "Business Leads, Trade-Dokumentation und Stakeholder-Kommunikation fuer Deutschland-bezogene Initiativen sauber koordiniert.",
      meta: "Case 03 / Koordination",
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
        "Prepared business planning, reporting, and financial decision support with structured client communication and measurable operating discipline.",
    },
    {
      period: "Apr 2024 / Jul 2024",
      role: "Working Student, Business Leads Management",
      company: "Consulate General of India",
      detail:
        "Supported bilateral business coordination, trade reporting, and market intelligence across Germany-facing initiatives.",
    },
    {
      period: "Oct 2023 / Dec 2023",
      role: "Student Representative",
      company: "Deggendorf Institute of Technology",
      detail:
        "Represented student interests, coordinated feedback, and supported communication between international students and university stakeholders.",
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
        "Managed business analysis, project tracking, forecasting inputs, and process reviews across operational and commercial workstreams.",
    },
    {
      period: "Jan 2018 / Jun 2018",
      role: "Remote Intern, Finance & Commodities Analyst",
      company: "Bitpanda",
      detail:
        "Analyzed finance and commodities information remotely, building early exposure to market research, data interpretation, and investment context.",
    },
  ],
  de: [
    {
      period: "Mai 2025 / Jan 2026",
      role: "Business Consultant",
      company: "HORBACH",
      detail:
        "Business Planning, Reporting und finanzielle Entscheidungsvorbereitung mit strukturierter Kundenkommunikation und klarer Ergebnisorientierung.",
    },
    {
      period: "Apr 2024 / Jul 2024",
      role: "Working Student, Business Leads Management",
      company: "Consulate General of India",
      detail:
        "Unterstuetzte bilaterale Wirtschaftskoordination, Trade-Reporting und Marktanalysen fuer Deutschland-bezogene Initiativen.",
    },
    {
      period: "Okt 2023 / Dez 2023",
      role: "Student Representative",
      company: "Deggendorf Institute of Technology",
      detail:
        "Vertretung studentischer Interessen, Feedback-Koordination und Kommunikation zwischen internationalen Studierenden und Hochschul-Stakeholdern.",
    },
    {
      period: "Mai 2023 / Okt 2023",
      role: "Working Student, Einkauf",
      company: "Laumer GmbH",
      detail:
        "Fokus auf Sourcing-Effizienz, Prozess-Tracking und Reporting-Qualitaet in der Beschaffung.",
    },
    {
      period: "Maerz 2020 / Jan 2023",
      role: "Business Analyst & Project Manager",
      company: "Adani Group",
      detail:
        "Business Analyse, Projekttracking, Forecasting-Inputs und Prozessreviews fuer operative und kommerzielle Workstreams gesteuert.",
    },
    {
      period: "Jan 2018 / Jun 2018",
      role: "Remote Intern, Finance & Commodities Analyst",
      company: "Bitpanda",
      detail:
        "Finance- und Commodities-Informationen remote analysiert und fruehe Erfahrung in Marktrecherche, Datenauswertung und Investment-Kontext aufgebaut.",
    },
  ],
};

const education: Record<Locale, EducationItem[]> = {
  en: [
    {
      period: "2026",
      degree: "Master of Arts, International Tourism Development",
      school: "Deggendorf Institute of Technology",
      location: "Germany",
      detail:
        "Graduate profile combining international business, tourism development, destination strategy, research, and stakeholder coordination.",
    },
    {
      period: "2019",
      degree: "Bachelor in Business Management",
      school: "Jaipur National University",
      location: "Jaipur, India",
      detail:
        "Built the business, management, and commercial foundation that now shapes the consulting and trade work.",
    },
    {
      period: "2015",
      degree: "Certification in International Trade Management",
      school: "Jaipur National University",
      location: "Jaipur, India",
      detail:
        "Built additional grounding in export-import workflows, trade documentation, and international business fundamentals.",
    },
  ],
  de: [
    {
      period: "2026",
      degree: "Master of Arts, International Tourism Development",
      school: "Deggendorf Institute of Technology",
      location: "Deutschland",
      detail:
        "Masterprofil mit internationalem Business, Tourism Development, Destination Strategy, Research und Stakeholder-Koordination.",
    },
    {
      period: "2019",
      degree: "Bachelor in Business Management",
      school: "Jaipur National University",
      location: "Jaipur, Indien",
      detail:
        "Fundament in Business und Management, das heute die Beratungs- und Trade-Arbeit praegt.",
    },
    {
      period: "2015",
      degree: "Certification in International Trade Management",
      school: "Jaipur National University",
      location: "Jaipur, Indien",
      detail:
        "Zusatzgrundlage in Export-Import-Workflows, Trade-Dokumentation und internationalem Business.",
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
    heroMetaLeft: "Season 04 / Bavaria / Germany",
    heroMetaRight: "Business Analysis / Jira / Reporting",
    heroDeck:
      "Modern brutalist portfolio for business analysis, digital process optimization, Jira/Confluence documentation, reporting, procurement, and international coordination.",
    heroPrimary: "View Work",
    heroSecondary: "Download Resume",
    manifestoLabel: "Manifesto",
    manifesto: [
      "I help teams turn unclear processes into structured workflows, useful reporting, and practical digital execution.",
      "My profile sits between business analysis, process documentation, stakeholder communication, and digital tool adoption with Jira, Confluence, Excel, Power BI, and AI automation concepts.",
    ],
    categoryTitle: "SELECTED WORK",
    quickView: "Quick View",
    portfolioEdition: "Portfolio Edition",
    editorialKicker: "Editorial Ledger",
    editorialTitle: "BUSINESS ANALYSIS AND DIGITALIZATION FOR REAL OPERATIONS",
    editorialBody:
      "These selected works show my operating style: understand the process, document requirements, structure data, improve reporting, and introduce digital workflows that teams can actually use.",
    ledger: [
      "Jira / Confluence",
      "Business Analysis",
      "Process Mapping",
      "Reporting",
      "Procurement Data",
      "AI Automation Concepts",
    ],
    experienceTitle: "Experience",
    educationTitle: "Education",
    footer: {
      navigation: "Navigation",
      reach: "Reach",
      base: "Base",
      availability: "Available for Business Analyst, application consulting, reporting, and digital process roles.",
      formTitle: "Contact Form",
      name: "Name",
      email: "Email",
      message: "Message",
      emailPlaceholder: "Business email",
      messagePlaceholder: "Tell me about your role, project, reporting need, or digital workflow challenge.",
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
    heroMetaLeft: "Season 04 / Muenchen / Deutschland",
    heroMetaRight: "Business Analyse / Jira / Reporting",
    heroDeck:
      "Brutalistisches Portfolio fuer Business Analyse, digitale Prozessoptimierung, Jira/Confluence-Dokumentation, Reporting, Einkauf und internationale Koordination.",
    heroPrimary: "Portfolio ansehen",
    heroSecondary: "Lebenslauf laden",
    manifestoLabel: "Manifesto",
    manifesto: [
      "Ich unterstuetze Teams dabei, unklare Prozesse in strukturierte Workflows, nutzbares Reporting und praktische digitale Umsetzung zu verwandeln.",
      "Mein Profil liegt zwischen Business Analyse, Prozessdokumentation, Stakeholder-Kommunikation und digitaler Tool-Adoption mit Jira, Confluence, Excel, Power BI und AI-Automation-Konzepten.",
    ],
    categoryTitle: "AUSGEWAEHLTE ARBEIT",
    quickView: "Schnellansicht",
    portfolioEdition: "Portfolio Edition",
    editorialKicker: "Editorial Ledger",
    editorialTitle: "BUSINESS ANALYSIS UND DIGITALISIERUNG FUER REALE PROZESSE",
    editorialBody:
      "Diese Arbeiten zeigen meinen Ansatz: Prozess verstehen, Anforderungen dokumentieren, Daten strukturieren, Reporting verbessern und digitale Workflows praktisch einfuehren.",
    ledger: [
      "Jira / Confluence",
      "Business Analysis",
      "Reporting",
      "Einkauf",
      "Internationale Koordination",
      "AI Automation Concepts",
    ],
    experienceTitle: "Erfahrung",
    educationTitle: "Ausbildung",
    footer: {
      navigation: "Navigation",
      reach: "Kontakt",
      base: "Standort",
      availability: "Verfuegbar fuer Business-Analyst-, Anwendungsberater-, Reporting- und Digitalisierungsrollen.",
      formTitle: "Kontaktformular",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      emailPlaceholder: "Business E-Mail",
      messagePlaceholder: "Erzaehl mir mehr ueber Rolle, Projekt, Reporting-Bedarf oder digitalen Workflow.",
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
