import Reveal from "./Reveal";

export default function QuoteBand() {
  return (
    <section className="quote-band">
      <div className="container">
        <Reveal as="blockquote" className="quote-band__inner">
          <p>&ldquo;Take decision today, for a better life tomorrow.&rdquo;</p>
          <cite>— Purushothama P B</cite>
        </Reveal>

        <Reveal as="div" className="quote-band__cta" delay={0.1}>
          <a href="#contact" className="link-arrow">
            Start Your Journey <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
