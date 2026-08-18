import { motion } from "framer-motion";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const STEPS = [
  {
    title: "Register Your Interest",
    text: "Share a few details through the form below and get a callback within a day.",
  },
  {
    title: "Meet & Understand",
    text: "A one-on-one conversation with Purushothama P B about the opportunity and what it takes.",
  },
  {
    title: "Training & IRDAI Exam",
    text: "Go through structured training, then sit for the licensing exam with full support.",
  },
  {
    title: "Get Licensed",
    text: "Receive your official LIC agency code and onboarding kit.",
  },
  {
    title: "Start Your Journey",
    text: "Begin building your book of business — with ongoing mentorship every step of the way.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <Reveal as="div" className="section-head centered">
          <span className="eyebrow">How It Works</span>
          <h2>Five Steps to Becoming an Advisor</h2>
          <p>A simple, guided path from first conversation to your first policy.</p>
        </Reveal>

        <RevealGroup className="process__track">
          <motion.div
            className="process__line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          {STEPS.map((step, i) => (
            <RevealItem as="div" key={step.title} className="process__step">
              <span className="process__index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
