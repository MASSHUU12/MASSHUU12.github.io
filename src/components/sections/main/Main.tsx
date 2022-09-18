import { useSpring, animated, config } from "@react-spring/web";
import { useTranslation } from "react-i18next";

const Main = (): JSX.Element => {
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

  return (
    <section className="main-container">
      <animated.h1 style={name}>Maciej Gawrysiak</animated.h1>
      <animated.span style={title}>{t("meTitle")}</animated.span>
    </section>
  );
};

export default Main;
