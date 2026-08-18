import Reveal from "./Reveal";

const BENEFITS = [
  {
    title: "Attractive, Unlimited Income",
    text: "Earnings are commission-based and grow directly with your effort — there is no ceiling on what you can build.",
    icon: (
      <path d="M12 2v20M17 6.5c0-2-2-3.2-5-3.2S7 4.7 7 6.7 9 9.6 12 10.2c3 .6 5 1.6 5 3.7s-2 3.4-5 3.4-5-1.2-5-3.4" />
    ),
  },
  {
    title: "Flexible Working Hours",
    text: "Be your own boss. Structure your week around your clients and your life, not the other way around.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.2 2" />
      </>
    ),
  },
  {
    title: "Structured Training & Licensing",
    text: "Comprehensive training and hands-on support to help you clear the IRDAI licensing exam with confidence.",
    icon: (
      <>
        <path d="M3 7l9-4 9 4-9 4-9-4Z" />
        <path d="M7 10v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5" />
      </>
    ),
  },
  {
    title: "India's Most Trusted Brand",
    text: "Represent a legacy insurer with nationwide reach and decades of trust behind every policy you sell.",
    icon: (
      <>
        <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Recognition & Growth",
    text: "Clear paths to club memberships, awards and advancement as your book of business grows.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M8 21l1.5-6M16 21l-1.5-6" />
      </>
    ),
  },
  {
    title: "Personal Mentorship",
    text: "Direct, hands-on guidance from Purushothama P B — 15 years of field experience invested in your success.",
    icon: (
      <>
        <path d="M4 19c0-3.3 3.6-5 8-5s8 1.7 8 5" />
        <circle cx="12" cy="8" r="4" />
      </>
    ),
  },
];

export default function Benefits() {
  return (
    <section id="opportunity" className="section benefits">
      <div className="container">
        <Reveal as="div" className="section-head centered">
          <span className="eyebrow">The Opportunity</span>
          <h2>Why Build Your Career with LIC</h2>
          <p>
            A career as an LIC advisor pairs the stability of India&rsquo;s largest
            insurer with the freedom of running your own practice.
          </p>
        </Reveal>

        <div className="benefits__grid">
          {BENEFITS.map((item, i) => (
            <Reveal as="div" key={item.title} delay={(i % 3) * 0.08} className="benefit-card">
              <svg
                className="benefit-card__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {item.icon}
              </svg>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
