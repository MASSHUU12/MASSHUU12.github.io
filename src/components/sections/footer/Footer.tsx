import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/maciej-gawrysiak/">Linkedin</a>
        <a href="https://github.com/MASSHUU12/">GitHub</a>
        <a href="https://t.me/MASSHUU/">Telegram</a>
      </div>
      <p>
        Maciej Gawrysiak • <a href="mailto:gawrysiak.maciej@pm.me">Email</a> •{" "}
        <Link to="header" spy smooth>
          Top
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
