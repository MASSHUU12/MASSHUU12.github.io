import { FunctionComponent, JSX } from "preact";
import { animated, useSpring } from "@react-spring/web";

import MobileMenuLinks from "./MobileMenuLinks";
import { mobileMenuSlideAnimation } from "src/animations/mobileMenuAnims";
import { usePopupsStore } from "src/app/store";

/**
 * Menu available only on mobile
 *
 * @return {*}  {JSX.Element}
 */
const MobileMenu: FunctionComponent<any> = (): JSX.Element => {
  const toggle = usePopupsStore(state => state.mobileMenu);
  const toggleMobileMenu = usePopupsStore(state => state.toggleMobileMenu);

  const closeAnim = (): void => {
    toggle.reverse && toggleMobileMenu(false);
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
