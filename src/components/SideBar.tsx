import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../hooks";

const SideBar = () => {
  const { t } = useTranslation();

  const side = useAppSelector((state) => state.sidebar.value);

  return (
    <div className="sidebar-container">
      {side.map((item) => {
        return (
          <Link to={item.to} spy={true} smooth={true}>
            <span>{t(item.name)}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
