import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const BENEFITS = [
  {
    title: "Attractive, Unlimited Income",
    text: "Earnings are commission-based and grow directly with your effort — there is no ceiling on what you can build.",
  },
  {
    title: "Flexible Working Hours",
    text: "Be your own boss. Structure your week around your clients and your life, not the other way around.",
  },
  {
    title: "Structured Training & Licensing",
    text: "Comprehensive training and hands-on support to help you clear the IRDAI licensing exam with confidence.",
  },
  {
    title: "India's Most Trusted Brand",
    text: "Represent a legacy insurer with nationwide reach and decades of trust behind every policy you sell.",
  },
  {
    title: "Recognition & Growth",
    text: "Clear paths to club memberships, awards and advancement as your book of business grows.",
  },
  {
    title: "Personal Mentorship",
    text: "Direct, hands-on guidance from Purushothama P B — 15 years of field experience invested in your success.",
  },
];

export default function Benefits() {
  return (
    <section id="opportunity" className="section benefits">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">The Opportunity</span>
          <h2>Why Build Your Career with LIC</h2>
          <p>
            A career as an LIC advisor pairs the stability of India&rsquo;s largest
            insurer with the freedom of running your own practice.
          </p>
        </Reveal>

        <RevealGroup as="div" className="benefits__list">
          {BENEFITS.map((item, i) => (
            <RevealItem as="div" key={item.title} className="benefit-row">
              <span className="benefit-row__index">{String(i + 1).padStart(2, "0")}</span>
              <div className="benefit-row__body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
