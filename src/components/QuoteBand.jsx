import Reveal from "./Reveal";

export default function QuoteBand() {
  return (
    <section className="quote-band">
      <div className="container">
        <Reveal as="blockquote" className="quote-band__inner">
          <p>&ldquo;Take decision today, for a better life tomorrow.&rdquo;</p>
          <cite>— Purushothama P B</cite>
        </Reveal>
      </div>
    </section>
  );
}
