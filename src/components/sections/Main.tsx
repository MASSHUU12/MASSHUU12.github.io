import { FunctionComponent, JSX } from "preact";
import { useTranslation } from "react-i18next";
import { animated, useSpring } from "@react-spring/web";

import Btn from "common/Btn";
import Scroll from "helpers/Scroll";
import { usePopupsStore } from "src/app/store";
import { slideToLeftAnim } from "src/animations/slideToLeftAnim";

/**
 * Main section
 *
 * @return {*}  {JSX.Element}
 */
const Main: FunctionComponent<any> = (): JSX.Element => {
  const { t } = useTranslation();
  const togglePopups = usePopupsStore(state => state.toggle);

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
    <>
      <section class="flex flex-col gap-3 justify-center items-center h-screen">
        <animated.h1
          style={name}
          class="text-4xl md:text-5xl text-white_custom md:text-center">
          {t("meHello")}
          <span class="text-light_yellow"> Maciej Gawrysiak</span>.
        </animated.h1>
        <animated.span style={title} class="text-2xl text-white_custom">
          {t("meTitle")}
        </animated.span>
        <div class="hidden md:flex md:flex-wrap">
          {/* About */}
          <Btn
            text={t("hAbout")}
            action={() => togglePopups("aboutOpened")}
            delay={100}
          />
          {/* Works */}
          <Btn
            text={t("hWorks")}
            action={e => Scroll.intoView({ target: "#works" })}
            delay={250}
          />
          {/* CV */}
          <Btn text="CV" action={() => togglePopups("cvOpened")} delay={400} />
        </div>
      </section>
    </>
  );
};

export default Main;