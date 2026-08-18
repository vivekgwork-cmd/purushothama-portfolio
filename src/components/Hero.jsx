import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import licLogo from "../assets/lic-logo.jpeg";

const BADGES = [
  { value: "15+", label: "Years with LIC" },
  { value: "MBA · PGD-HRM", label: "Postgraduate credentials" },
  { value: "Shivamogga", label: "Division office" },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

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
                <strong>{badge.value}</strong>
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
