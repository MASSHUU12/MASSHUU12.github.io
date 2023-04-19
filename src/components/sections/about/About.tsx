import { FunctionComponent } from "preact";
import { animated, useSpring } from "@react-spring/web";

import Scroll from "helpers/Scroll";
import { toggleReverse } from "src/features/aboutSlice";
import { backgroundAnim } from "src/animations/commonAnims";
import { useAppDispatch, useAppSelector } from "src/app/hooks";

import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

/**
 * Main about component
 *
 * @return {*}  {JSX.Element}
 */
const About: FunctionComponent<any> = (): JSX.Element => {
  const toggle = useAppSelector(state => state.about);
  const dispatch = useAppDispatch();

  /**
   * Close about component
   *
   */
  const closeMenu = (): void => {
    dispatch(toggleReverse(true));
    Scroll.enable();
  };

  // Background animation
  const background = useSpring({
    ...backgroundAnim,
    reverse: toggle.reverse,
  });

  return (
    <>
      {toggle.value && (
        <animated.section
          style={background}
          className="fixed top-0 left-0 w-full h-full bg-dim flex flex-col items-center justify-end m-0 md:flex-row md:justify-center"
          onClick={() => closeMenu()}>
          <AboutLeft />
          <AboutRight closeMenu={closeMenu} />
        </animated.section>
      )}
    </>
  );
};

export default About;
