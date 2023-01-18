import { Icon } from "@iconify/react";
import { animated, useSpring } from "@react-spring/web";
import { aboutRightAnim } from "src/animations/aboutAnims";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import Social from "src/components/common/Social";
import { toggleAbout } from "src/features/aboutSlice";
import { useTranslation } from "react-i18next";
import { FunctionComponent } from "preact";

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
          text="gawrysiak.maciej@pm.me"
          icon="ic:outline-alternate-email"
        />
        <Social
          href="https://github.com/MASSHUU12"
          text="MASSHUU12"
          icon="brandico:github"
        />
        <Social
          href="https://t.me/MASSHUU"
          text="MASSHUU"
          icon="akar-icons:telegram-fill"
        />
        <Social
          href="https://linkedin.com/in/maciej-gawrysiak"
          text="Linkedin"
          icon="brandico:linkedin-rect"
        />
      </div>
    </animated.div>
  );
};

export default AboutRight;
