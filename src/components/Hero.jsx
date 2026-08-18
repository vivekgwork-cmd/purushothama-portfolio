import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import licLogo from "../assets/lic-logo.png";
import CountUp from "./CountUp";

const STATS = [
  { numeric: 15, suffix: "+", label: "Years with LIC" },
  { value: "MBA · PGD-HRM", label: "Postgraduate credentials" },
  { value: "Shivamogga", label: "Division office" },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
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
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {STATS.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <strong>
                {stat.numeric != null ? (
                  <CountUp value={stat.numeric} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="hero__foot"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
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
    </section>
  );
}
