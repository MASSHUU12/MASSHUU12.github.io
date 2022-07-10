import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div>
        <a
          href="https://www.linkedin.com/in/maciej-gawrysiak/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/MASSHUU12/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a href="https://t.me/MASSHUU/" target="_blank" rel="noreferrer">
          Telegram
        </a>
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
