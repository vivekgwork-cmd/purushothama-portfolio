import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#opportunity", label: "Why LIC" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a href="#top" className="brand" onClick={closeMenu}>
          <img src={logo} alt="P. Utham" className="brand__mark" />
          <span className="brand__text">
            <strong>Purushothama P B</strong>
            <em>Development Officer, LIC of India</em>
          </span>
        </a>

        <nav className={`site-nav ${open ? "is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="link-arrow site-nav__cta" onClick={closeMenu}>
            Apply to Join <span aria-hidden="true">→</span>
          </a>
        </nav>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
