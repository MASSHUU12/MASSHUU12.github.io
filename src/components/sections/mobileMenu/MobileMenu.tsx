import { FunctionComponent } from "preact";
import { animated, useSpring } from "@react-spring/web";

import { mobileMenuSlideAnimation } from "src/animations/mobileMenuAnims";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { toggleMobileMenu } from "features/mobileMenuSlice";
import MobileMenuLinks from "./MobileMenuLinks";

/**
 * Menu available only on mobile
 *
 * @return {*}  {JSX.Element}
 */
const MobileMenu: FunctionComponent<any> = (): JSX.Element => {
  const toggle = useAppSelector(state => state.mobileMenu);
  const dispatch = useAppDispatch();

  const closeAnim = (): void => {
    toggle.reverse && dispatch(toggleMobileMenu(false));
  };

  const bgconfig = {
    ...mobileMenuSlideAnimation,
    reverse: toggle.reverse,
  };

  const bg = useSpring({
    ...bgconfig,
    onRest: closeAnim,
  });

  const bg2 = useSpring({
    ...bgconfig,
    delay: 150,
  });

  return (
    <>
      {toggle.value && (
        // Background 1
        <animated.section
          style={bg}
          class="fixed top-0 left-0 w-full h-full bg-aqua">
          {/* Background 2 */}
          <animated.div
            style={bg2}
            class="w-full h-full bg-plum flex flex-col justify-center items-center">
            <MobileMenuLinks />
          </animated.div>
        </animated.section>
      )}
    </>
  );
};

export default MobileMenu;
