import content from './content.json';
import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Search,
  Heart,
  Leaf,
  CheckCircle,
  Globe,
  Flower,
  Ship,
  ArrowRight,
  Instagram,
} from 'lucide-react';

export default function App() {
  // ─── Destructure content sections from JSON
  const { header, hero, about, cta, service, donate, testimonials, partner, event, instagram, footer } = content;

  // ─── State management for menu, scroll behavior, and active tab
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // ─── Toggle sticky header styling on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ────────────────────────────────────────────────── [ Site Header ] */}
      <header className={`header ${scrolled ? 'active' : ''}`}>
        <div className="container">
          {/* ─── Site logo */}
          <h1>
            <a href="#" className="logo">
              {header.logo}
            </a>
          </h1>

          {/* ─── Language switch dropdown */}
          <select className="lang-switch" defaultValue={header.languages[0]}>
            {header.languages.map((lang) => (
              <option key={lang} value={lang.toLowerCase()}>
                {lang}
              </option>
            ))}
          </select>

          {/* ─── Mobile menu open button */}
          <button className="nav-open-btn" aria-label="Open Menu" onClick={() => setMenuOpen(true)}>
            <Menu />
          </button>

          {/* ─── Navigation menu */}
          <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
            {/* ─── Mobile menu close button */}
            <button className="nav-close-btn" aria-label="Close Menu" onClick={() => setMenuOpen(false)}>
              <X />
            </button>

            {/* ─── Navigation logo for mobile */}
            <a href="#" className="logo">
              {header.logo}
            </a>

            {/* ─── Navigation links */}
            <ul className="navbar-list">
              {header.navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="navbar-link" onClick={() => setMenuOpen(false)}>
                    <span>{link.label}</span>
                    <ChevronRight />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ─── Header action buttons */}
          <div className="header-action">
            {/* Search button */}
            <button className="search-btn" aria-label="Search">
              <Search />
            </button>

            {/* Donation call-to-action */}
            <button className="btn btn-primary">
              <span>{header.donationButton}</span>
              <Heart />
            </button>
          </div>
        </div>
      </header>

      {/* ────────────────────────────────────────────────── [ Hero Section ] */}
      <section className="hero" id={hero.id}>
        <div className="container">
          {/* ─── Hero subtitle with decorative image */}
          <p className="section-subtitle">
            <img src={hero.subtitleImage} width="32" height="7" alt="Wavy line" />
            <span>{hero.subtitleText}</span>
          </p>

          {/* ─── Main hero title with highlighted text */}
          <h2 className="h1 hero-title">
            {hero.title} <strong>{hero.highlight}</strong>
          </h2>

          {/* ─── Hero description */}
          <p className="hero-text">{hero.description}</p>

          {/* ─── Hero call-to-action button */}
          <button className="btn btn-primary">
            <span>{hero.buttonText}</span>
            <Heart aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* ────────────────────────────────────────────────── [ About Section ] */}
      <section className="section about" id={about.sectionId}>
        <div className="container">
          {/* ─── Banner with decorative title and images */}
          <div className="about-banner">
            <h2 className="deco-title">{about.decoTitle}</h2>

            <img src={about.images.deco} width="58" height="261" alt="" className="deco-img" />

            <div className="banner-row">
              <div className="banner-col">
                <img src={about.images.banners[0]} alt="About" className="about-img w-100" />
                <img src={about.images.banners[1]} alt="About" className="about-img about-img-2 w-100" />
              </div>

              <div className="banner-col">
                <img src={about.images.banners[2]} alt="About" className="about-img about-img-3 w-100" />
                <img src={about.images.banners[3]} alt="About" className="about-img w-100" />
              </div>
            </div>
          </div>

          {/* ─── Content section with subtitle, title, tabs, and description */}
          <div className="about-content">
            {/* Section subtitle */}
            <p className="section-subtitle">
              <img src="subtitle-img-green.png" width="32" height="7" alt="" />
              <span>{about.subtitleText}</span>
            </p>

            {/* Section title with highlight */}
            <h2 className="h2 section-title">
              {about.title} <strong>{about.highlight}</strong>
            </h2>

            {/* ─── Feature tabs navigation */}
            <ul className="tab-nav">
              {about.tabs.map((tab, index) => (
                <li key={index}>
                  <button
                    className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* ─── Tab content with description, points, and CTA */}
            <div className="tab-content">
              <p className="section-text">{about.description}</p>

              <ul className="tab-list">
                {about.tabs[activeTab].points.map((point, index) => (
                  <li className="tab-item" key={index}>
                    <div className="item-icon">
                      <CheckCircle />
                    </div>
                    <p className="tab-text">{point}</p>
                  </li>
                ))}
              </ul>

              {/* Tab call-to-action button */}
              <button className="btn btn-secondary">
                <span>{about.buttonText}</span>
                <Heart />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────── [ CTA Section ] */}
      <section className="section cta">
        <div className="container">
          {/* ─── CTA content with title and action button */}
          <div className="cta-content">
            <h2 className="h2 section-title">{cta.title}</h2>

            <button className="btn btn-outline">
              <span>{cta.buttonText}</span>
              <Heart />
            </button>
          </div>

          {/* ─── CTA banner image */}
          <figure className="cta-banner">
            <img src={cta.image} width="520" height="228" loading="lazy" alt={cta.imageAlt} className="img-cover" />
          </figure>
        </div>
      </section>

      {/* ────────────────────────────────────────────────── [ Service Section ] */}
      <section
        className="section service"
        id={service.sectionId}
        style={{ backgroundImage: `url(${service.backgroundImage})` }}
      >
        <div className="container">
          {/* ─── Section subtitle */}
          <p className="section-subtitle">
            <img src="subtitle-img-green.png" width="32" height="7" alt="" />
            <span>{service.subtitleText}</span>
          </p>

          {/* ─── Section title with highlight */}
          <h2 className="h2 section-title">
            {service.title} <strong>{service.highlight}</strong>
          </h2>

          {/* ─── Service feature cards list */}
          <ul className="service-list">
            {service.items.map((item, index) => {
              const icons = {
                Leaf: <Leaf />,
                Globe: <Globe />,
                Flower: <Flower />,
                Ship: <Ship />,
              };

              return (
                <li key={index}>
                  <div className="service-card">
                    {/* Card icon */}
                    <div className="card-icon">{icons[item.icon]}</div>

                    {/* Card title */}
                    <h3 className="h3 card-title">{item.title}</h3>

                    {/* Card description */}
                    <p className="card-text">{item.text}</p>

                    {/* Card action link */}
                    <a href="#" className="btn-link">
                      <span>Read More</span>
                      <ArrowRight />
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ────────────────────────────────────────────────── [ Donate Section ] */}
      <section className="section donate" id={donate.sectionId}>
        <div className="container">
          {/* ─── List of donation campaigns */}
          <ul className="donate-list">
            {donate.items.map((item, index) => (
              <li key={index}>
                <div className="donate-card">
                  {/* Campaign banner image */}
                  <figure className="card-banner">
                    <img src={item.image} width="520" height="325" loading="lazy" alt="Donate" className="img-cover" />
                  </figure>

                  {/* Campaign content including progress and goals */}
                  <div className="card-content">
                    {/* Progress text and percentage */}
                    <div className="progress-wrapper">
                      <p className="progress-text">
                        <span>Raised</span>
                        <data value={item.raised}>${item.raised}</data>
                      </p>

                      <data className="progress-value" value={item.progress}>
                        {item.progress}%
                      </data>
                    </div>

                    {/* Progress bar */}
                    <div className="progress-box">
                      <div className="progress" style={{ width: `${item.progress}%` }} />
                    </div>

                    {/* Campaign title */}
                    <h3 className="h3 card-title">{item.title}</h3>

                    {/* Goal, raised, and remaining amounts */}
                    <div className="card-wrapper">
                      <p className="card-wrapper-text">
                        <span>Goal</span>
                        <data className="green">${item.goal}</data>
                      </p>

                      <p className="card-wrapper-text">
                        <span>Raise</span>
                        <data className="yellow">${item.raised}</data>
                      </p>

                      <p className="card-wrapper-text">
                        <span>To Go</span>
                        <data className="cyan">${item.toGo}</data>
                      </p>
                    </div>

                    {/* Donate button */}
                    <button className="btn btn-secondary">
                      <span>{donate.buttonText}</span>
                      <Heart />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ────────────────────────────────────────────────── [ Testimonial Section ] */}
      <section className="testi">
        <div className="testi-content">
          {/* ─── Section subtitle */}
          <p className="section-subtitle">
            <img src="subtitle-img-green.png" width="32" height="7" alt="" />
            <span>{testimonials.subtitleText}</span>
          </p>

          {/* ─── Section title with highlight */}
          <h2 className="h2 section-title">
            {testimonials.title} <strong>{testimonials.highlight}</strong>
          </h2>

          {/* ─── Testimonial card with avatar, quote, and author info */}
          <div className="testi-card">
            <figure className="card-avatar">
              <img src={testimonials.avatar} width="60" height="60" loading="lazy" alt={testimonials.name} />
            </figure>

            <div>
              <blockquote className="testi-text">{testimonials.quote}</blockquote>

              <h3 className="testi-name">{testimonials.name}</h3>
              <p className="testi-title">{testimonials.role}</p>
            </div>
          </div>
        </div>

        {/* ─── Testimonial banner image */}
        <figure className="testi-banner">
          <img
            src={testimonials.banner}
            width="960"
            height="846"
            loading="lazy"
            alt="Testimonial"
            className="img-cover"
          />
        </figure>
      </section>

      {/* ────────────────────────────────────────────────── [ Partner Section ] */}
      <section className="section partner">
        <div className="container">
          {/* ─── List of partner logos with hover color effect */}
          {partner.items.map((item, index) => (
            <a href="#" className="partner-logo" key={index}>
              <img src={item.logoGray} width="160" height="55" loading="lazy" alt={item.name} className="gray" />

              <img src={item.logoColor} width="160" height="55" loading="lazy" alt={item.name} className="color" />
            </a>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────── [ Event Section ] */}
      <section className="section event" id={event.sectionId}>
        <div className="container">
          {/* ─── Section subtitle */}
          <p className="section-subtitle">
            <img src="subtitle-img-green.png" width="32" height="7" alt="" />
            <span>{event.subtitleText}</span>
            <img src="subtitle-img-green.png" width="32" height="7" alt="" />
          </p>

          {/* ─── Section title with highlight */}
          <h2 className="h2 section-title">
            {event.title} <strong>{event.highlight}</strong>
          </h2>

          {/* ─── List of event cards */}
          <ul className="event-list">
            {event.items.map((item, index) => (
              <li key={index}>
                <div className="event-card">
                  {/* Event date and month */}
                  <time className="card-time">
                    <span className="month">{item.month}</span>
                    <span className="date">{item.date}</span>
                  </time>

                  {/* Event details and action button */}
                  <div className="wrapper">
                    <div className="card-content">
                      <p className="card-subtitle">{item.category}</p>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-text">{item.text}</p>
                    </div>

                    {/* View Events button */}
                    <button className="btn btn-white">
                      <span>View Events</span>
                      <ArrowRight />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* ─── Event section main call-to-action */}
          <button className="btn btn-secondary">
            <span>{event.buttonText}</span>
            <Heart />
          </button>
        </div>
      </section>

      {/* ────────────────────────────────────────────────── [ Instagram Post Section ] */}
      <section className="insta-post">
        {/* ─── List of Instagram posts */}
        <ul className="insta-post-list">
          {instagram.items.map((item, index) => (
            <li className="insta-post-item" key={index}>
              <a href="#" className="insta-post-link">
                {/* Instagram post image */}
                <img src={item.image} width="320" height="300" loading="lazy" alt={item.alt} className="img-cover" />

                {/* Instagram icon overlay */}
                <Instagram />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ────────────────────────────────────────────────── [ Site Footer ] */}
      <footer className="footer">
        <div className="container">
          {/* ─── List of footer links */}
          <ul className="footer-list">
            {footer.links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ─── Copyright and author information */}
          <p className="copyright">
            {footer.copyright.text}{' '}
            <a href={footer.copyright.authorLink} className="copyright-link">
              {footer.copyright.author}
            </a>{' '}
            {footer.copyright.suffix}
          </p>
        </div>
      </footer>
    </>
  );
}
