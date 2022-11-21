import { useSpring, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../app/hooks";
import { toggleAbout } from "../../../features/aboutSlice";
import Btn from "../../common/Btn";
import { scroll } from "../../../utils/preventScroll";
import { scrollIntoView } from "../../../utils/scrollIntoView";
import { toggleCV } from "../../../features/cvSlice";
import { slideToLeftAnim } from "../../../animations/slideToLeftAnim";

/**
 * Main section
 *
 * @return {*}  {JSX.Element}
 */
const Main = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  // Name animation
  const name = useSpring({
    ...slideToLeftAnim,
    delay: 300,
  });

  // Title animation
  const title = useSpring({
    ...slideToLeftAnim,
    delay: 450,
  });

  return (
    <section className="main-container">
      <animated.h1 style={name}>
        {t("meHello")}
        <span>Maciej Gawrysiak</span>.
      </animated.h1>
      <animated.span style={title}>{t("meTitle")}</animated.span>
      <div className="main-container-menu">
        <Btn
          text={t("hAbout")}
          action={() => {
            // Open menu
            dispatch(toggleAbout(true));

            // Prevent page from scrolling
            scroll.disable();
          }}
          delay={100}
        />
        <Btn
          text={t("hWorks")}
          action={e => scrollIntoView({ e: e, to: "works" })}
          delay={250}
        />
        <Btn text="CV" action={() => dispatch(toggleCV(true))} delay={400} />
      </div>
    </section>
  );
};

export default Main;
