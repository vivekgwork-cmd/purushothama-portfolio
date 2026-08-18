import Reveal from "./Reveal";

const TIMELINE = [
  {
    year: "Present",
    role: "Development Officer",
    org: "Life Insurance Corporation of India",
    detail: "Jeevan Tunga, Kamakshi Street, Shivamogga-II — Shivamogga Division, 15 years",
  },
  {
    role: "Relationship Manager",
    org: "LIC Mutual Fund AMC Limited",
    detail: "Uttara Kannada, under Mangalore Area Office — 2.2 years",
  },
  {
    role: "Faculty Member",
    org: "Department of Commerce & Management",
    detail: "Brindavana College, Bhoopasandra, Bangalore — 1 year",
  },
];

const CREDENTIALS = ["MBA", "PGD-HRM", "MSc — Chemistry"];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal as="div" className="about__copy">
          <span className="eyebrow">About Purushothama P B</span>
          <h2>A guide, a builder of people, and a believer in human potential.</h2>

          <p>
            Purushothama P B is a man driven by a profound purpose — to help people
            transform their lives through guidance, opportunity and trust. His journey
            started with post-graduation in <strong>MBA</strong> and{" "}
            <strong>PGD-HRM</strong>, and he also holds a post-graduate degree in{" "}
            <strong>MSc Chemistry</strong>.
          </p>

          <p>
            He is not merely working for his personal success but about creating a
            ripple effect of empowerment. Rooted in integrity,{" "}
            <strong>he stands as a leader who believes in building people before
            building business.</strong> His story is one of clarity, conviction, and
            quiet determination — shaped by the belief that true leadership begins
            with honesty and service.
          </p>

          <p>
            Throughout his career, he has committed himself to a mission larger than
            himself — to bring dignity, stability, and prosperity to those who choose
            to walk beside him.{" "}
            <strong>
              His work in recruiting and developing insurance advisors is not just a
              profession; it is a calling.
            </strong>{" "}
            He sees every advisor not as a number in a target sheet but as an
            individual with dreams, goals, and potential waiting to be unlocked.
          </p>

          <p>
            <strong>
              What sets him apart is his unshakable value system. Straightforwardness,
              honesty, and true leadership are not slogans for him; they are lived
              principles that guide every decision.
            </strong>{" "}
            His communication is simple but powerful, marked by clarity and empathy —
            he believes words must always align with action.
          </p>

          <ul className="about__credentials">
            {CREDENTIALS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" className="about__timeline" delay={0.15}>
          <h3>Career Journey</h3>
          <ol>
            {TIMELINE.map((item) => (
              <li key={item.role + item.org}>
                {item.year && <span className="about__timeline-tag">{item.year}</span>}
                <strong>{item.role}</strong>
                <span className="about__timeline-org">{item.org}</span>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
