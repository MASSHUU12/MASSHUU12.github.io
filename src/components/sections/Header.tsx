import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../app/hooks";
import { toggleAbout } from "../../features/aboutSlice";
import { toggleCV } from "../../features/cvSlice";

const Header = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <>
      <header id="header">
        <div>
          <Link to="works" spy smooth rel="noreferrer">
            {t("works")}
          </Link>
          <Link
            to="contact"
            spy
            smooth
            rel="noreferrer"
            onClick={() => dispatch(toggleAbout(true))}
          >
            {t("contact")}
          </Link>
          <button onClick={() => dispatch(toggleCV(true))}>CV</button>
        </div>
      </header>
    </>
  );
};

export default Header;
