import { FunctionComponent } from "preact";
import { useTranslation } from "react-i18next";
import { animated, useSpring } from "@react-spring/web";
import { Icon } from "@iconify/react";

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
    <animated.div className="about-right" style={anim}>
      <div class="about-right-header">
        <h1>{t("aContact")}.</h1>
        <Icon
          onClick={() => closeMenu()}
          icon="carbon:close"
          color="white"
          width="48"
          height="48"
        />
      </div>
      <div class="about-right-links">
        <Social
          href="mailto:gawrysiak.maciej@pm.com"
          text="gawrysiak.maciej@pm.me">
          <Icon icon="ic:outline-alternate-email" width="48" />
        </Social>
        <Social href="https://github.com/MASSHUU12" text="MASSHUU12">
          <Icon icon="brandico:github" width="48" />
        </Social>
        <Social href="https://t.me/MASSHUU" text="MASSHUU">
          <Icon icon="akar-icons:telegram-fill" width="48" />
        </Social>
        <Social href="https://linkedin.com/in/maciej-gawrysiak" text="Linkedin">
          <Icon icon="brandico:linkedin-rect" width="48" />
        </Social>
      </div>
    </animated.div>
  );
};

export default AboutRight;
