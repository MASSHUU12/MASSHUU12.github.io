import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../app/hooks";
import { toggleAbout } from "../../features/aboutSlice";
import { toggleCV } from "../../features/cvSlice";
import Button from "../common/Button";

const Main = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <section className="main-container">
      <h1>Maciej Gawrysiak</h1>
      <span>{t("title")}</span>
      <div className="main-container-btns">
        <Button
          text={t("aboutMe")}
          action={() => dispatch(toggleAbout(true))}
        />
        <Button
          text="CV"
          white={true}
          action={() => dispatch(toggleCV(true))}
        />
      </div>
    </section>
  );
};

export default Main;
