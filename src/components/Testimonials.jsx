import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const TESTIMONIALS = [
  {
    name: "Ramesh B",
    tag: null,
    quote:
      "With the fullest co-operation & support of our Development Officer, I got confidence to complete 50 lakhs, one crore policies easily. Thank you to my Development officer.",
  },
  {
    name: "Jyothi T K",
    tag: "385 Policies in Year 1",
    quote:
      "Housekeeper turned into Successful Advisor by completing 385 policies in a year is impossible without the Big support & guidance by Development officer. I am recommending you to join his Team for your Life time Success. Thank you Sir.",
  },
  {
    name: "Naveen Kumar H P",
    tag: "ZM Club Member",
    quote:
      "A lab-technician course student now ZM club member with annual earnings of 15 Lakhs is just because of Training, motivation & mentoring of our Development officer. Thank you Sir.",
  },
  {
    name: "Sarala",
    tag: "Former Photographer",
    quote:
      "An ordinary photographer now turned into a successful LIC advisor, it is just because of our Development officer. I am recommending you to join his team to fulfill your Dreams. Thank you Sir.",
  },
  {
    name: "Manjula N",
    tag: null,
    quote:
      "With the guidance of Guru we can achieve anything, our Guru is our Development officer. I am having enough courage because of him. I recommend anyone with big goals come & join his Team. Thank you very much Sir.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="eyebrow">Success Stories</span>
          <h2>Advisors Who Built Their Future With Him</h2>
          <p>
            Real people, real results — in their own words about the mentorship
            behind their success.
          </p>
        </Reveal>

        <RevealGroup as="div" className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <RevealItem as="figure" key={t.name} className="testimonial-card">
              <span className="testimonial-card__mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>
                <p>{t.quote}</p>
              </blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                {t.tag && <span className="testimonial-card__tag">{t.tag}</span>}
              </figcaption>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
