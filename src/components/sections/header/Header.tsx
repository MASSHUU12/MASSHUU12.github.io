import { Link } from "react-scroll";

const Header = (): JSX.Element => {
  return (
    <header id="header">
      <div>
        <Link to="works" spy smooth>
          Works
        </Link>
        <Link to="contact" spy smooth>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
