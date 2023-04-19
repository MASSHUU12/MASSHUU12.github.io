import { Icon } from "@iconify/react";
import { FunctionComponent } from "preact";
import { useTranslation } from "react-i18next";
import { animated, useSpring } from "@react-spring/web";

import Social from "common/Social";
import { toggleAbout } from "features/aboutSlice";
import { aboutRightAnim } from "src/animations/aboutAnims";
import { useAppDispatch, useAppSelector } from "src/app/hooks";

type Props = {
  closeMenu: (arg: void) => any;
};

/**
 * Right part of about component
 *
 * @param {Props} { closeMenu }
 * @return {*}  {JSX.Element}
 */
const AboutRight: FunctionComponent<Props> = ({ closeMenu }): JSX.Element => {
  const toggle = useAppSelector(state => state.about);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const closeAnim = () => {
    toggle.reverse && dispatch(toggleAbout(false));
  };

  // Component animation
  const anim = useSpring({
    ...aboutRightAnim,
    reverse: toggle.reverse,
    onRest: closeAnim,
  });

  return (
    <animated.div
      class="flex-1 w-full p-3 bg-blue_gray md:min-h-[30%] md:max-w-[30%] md:p-12"
      style={anim}>
      <div class="flex flex-row justify-between items-center">
        <h1 class="text-3xl text-white_custom">{t("aContact")}.</h1>
        <Icon
          onClick={() => closeMenu()}
          icon="carbon:close"
          color="white"
          width="32"
        />
      </div>
      <div class="flex flex-col gap-3 mt-4">
        <Social
          href="mailto:gawrysiak.maciej@pm.com"
          text="gawrysiak.maciej@pm.me">
          <Icon icon="ic:outline-alternate-email" width="24" />
        </Social>
        <Social href="https://github.com/MASSHUU12" text="MASSHUU12">
          <Icon icon="brandico:github" width="24" />
        </Social>
        <Social href="https://t.me/MASSHUU" text="MASSHUU">
          <Icon icon="akar-icons:telegram-fill" width="24" />
        </Social>
        <Social href="https://linkedin.com/in/maciej-gawrysiak" text="Linkedin">
          <Icon icon="brandico:linkedin-rect" width="24" />
        </Social>
      </div>
    </animated.div>
  );
};

export default AboutRight;
