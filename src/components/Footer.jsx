import logo from "../assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <div className="site-footer__logos">
            <img src={logo} alt="P. Utham" />
          </div>
          <p>
            Purushothama P B — Development Officer, Life Insurance Corporation of
            India, Shivamogga Division.
          </p>
        </div>

        <div className="site-footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#opportunity">Why LIC</a>
            </li>
            <li>
              <a href="#process">Process</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Office</h4>
          <p>
            Jeevan Tunga, Kamakshi Street
            <br />
            Shivamogga-II, Shivamogga Division
          </p>
          <p>
            <a href="tel:+919535484475">+91 95354 84475</a>
            <br />
            <a href="mailto:purushothama.purushothama@gmail.com">
              purushothama.purushothama@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© {year} Purushothama P B. All rights reserved.</span>
        <span>LIC of India is a registered trademark of Life Insurance Corporation of India.</span>
      </div>
    </footer>
  );
}
