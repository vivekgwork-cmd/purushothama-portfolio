import logo from "../assets/logo.png";
import licLogo from "../assets/lic-logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <div className="site-footer__logos">
            <img src={logo} alt="P. Utham" />
            <img src={licLogo} alt="Life Insurance Corporation of India" />
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
          <p className="site-footer__todo">
            Phone / email to be added
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
