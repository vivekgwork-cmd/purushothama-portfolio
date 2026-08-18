import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import licLogo from "../assets/lic-logo.png";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__content">
        <motion.div
          className="hero__letterhead"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={licLogo} alt="Life Insurance Corporation of India" className="hero__lic-logo" />
          <span className="hero__divider" />
          <img src={logo} alt="P. Utham" className="hero__brand-logo" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow eyebrow--light">
            Official LIC Development Officer — Purushothama P B
          </span>

          <h1 className="hero__headline">
            <span className="hero__line">Build a Career</span>
            <span className="hero__line hero__line--accent">of Purpose.</span>
          </h1>

          <p className="hero__lede">
            Guiding aspiring advisors toward financial freedom, stability and a career
            built on trust — under the banner of India&rsquo;s most trusted insurance
            brand, the Life Insurance Corporation of India.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              Start Your Journey
            </a>
            <a href="#opportunity" className="link-arrow link-arrow--light">
              Why Join LIC <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.aside
        className="hero__panel"
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero__panel-stat">
          <strong>
            <CountUp value={15} suffix="+" />
          </strong>
          <span>Years guiding LIC advisors toward financial freedom</span>
        </div>

        <div className="hero__panel-rule" aria-hidden="true" />

        <ul className="hero__panel-list">
          <li>
            <strong>MBA · PGD-HRM</strong>
            <span>Postgraduate credentials</span>
          </li>
          <li>
            <strong>Shivamogga</strong>
            <span>Division office</span>
          </li>
        </ul>
      </motion.aside>
    </section>
  );
}
