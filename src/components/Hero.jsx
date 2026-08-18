import { motion, useReducedMotion } from "framer-motion";
import logo from "../assets/logo.png";
import licLogo from "../assets/lic-logo.png";
import CountUp from "./CountUp";

const BADGES = [
  { numeric: 15, suffix: "+", label: "Years with LIC" },
  { value: "MBA · PGD-HRM", label: "Postgraduate credentials" },
  { value: "Shivamogga", label: "Division office" },
];

function HeroMotif() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.svg
      className="hero__motif"
      viewBox="0 0 200 200"
      aria-hidden="true"
      animate={prefersReducedMotion ? undefined : { rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="100" cy="100" r="98" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="76" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="54" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="32" strokeWidth="0.5" />
    </motion.svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <HeroMotif />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__logos">
            <img src={licLogo} alt="Life Insurance Corporation of India" className="hero__lic-logo" />
            <span className="hero__divider" />
            <img src={logo} alt="P. Utham" className="hero__brand-logo" />
          </div>

          <span className="eyebrow eyebrow--light">Official LIC Development Officer</span>
          <h1>
            Build a Career of Purpose with <span>Purushothama P B</span>
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
            <a href="#opportunity" className="btn btn-ghost">
              Why Join LIC
            </a>
          </div>

          <div className="hero__badges">
            {BADGES.map((badge, i) => (
              <motion.div
                key={badge.label}
                className="hero__badge"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              >
                <strong>
                  {badge.numeric != null ? (
                    <CountUp value={badge.numeric} suffix={badge.suffix} />
                  ) : (
                    badge.value
                  )}
                </strong>
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero__quote"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>&ldquo;Take decision today, for a better life tomorrow.&rdquo;</p>
          <span>— Purushothama P B</span>
        </motion.div>
      </div>
    </section>
  );
}
