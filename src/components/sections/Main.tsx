import { useSpring, animated, config } from "@react-spring/web";
import { toggleAbout } from "../../features/aboutSlice";
import { toggleCV } from "../../features/cvSlice";
import { useAppDispatch } from "../../app/hooks";
import { useTranslation } from "react-i18next";
import Button from "../common/Button";

const Main = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const animConfig = {
    to: {
      opacity: 1,
      x: 0,
    },
    from: {
      opacity: 0,
      x: 100,
    },
    config: config.slow,
  };

  const name = useSpring({
    ...animConfig,
    delay: 300,
  });

  const title = useSpring({
    ...animConfig,
    delay: 450,
  });

  const btns = useSpring({
    ...animConfig,
    delay: 600,
  });

  return (
    <section className="main-container">
      <animated.h1 style={name}>Maciej Gawrysiak</animated.h1>
      <animated.span style={title}>{t("title")}</animated.span>
      <animated.div style={btns} className="main-container-btns">
        <Button
          text={t("aboutMe")}
          action={() => dispatch(toggleAbout(true))}
        />
        <Button
          text="CV"
          white={true}
          action={() => dispatch(toggleCV(true))}
        />
      </animated.div>
    </section>
  );
};

export default Main;
