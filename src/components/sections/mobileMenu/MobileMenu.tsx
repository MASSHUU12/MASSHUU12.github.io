import { FunctionComponent, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { animated, useSpring } from "@react-spring/web";

import Scroll from "helpers/Scroll";
import { usePopupsStore } from "src/app/store";
import MobileMenuLinks from "./MobileMenuLinks";
import { mobileMenuSlideAnimation } from "src/animations/mobileMenuAnims";

/**
 * Menu available only on mobile.
 *
 * @return {*}  {JSX.Element}
 */
const MobileMenu: FunctionComponent<any> = (): JSX.Element => {
  const opened = usePopupsStore(state => state.mobileMenuOpened);
  const [isClosed, setIsClosed] = useState(true);

  // Disable scroll when popup is opened
  useEffect(() => {
    opened && (setIsClosed(false), Scroll.disable());
  }, [opened, isClosed]);

  const bg = useSpring({
    ...mobileMenuSlideAnimation,
    reverse: !opened,
    onRest: (): void => {
      !opened && (setIsClosed(true), Scroll.enable());
    },
  });

  const bg2 = useSpring({
    ...mobileMenuSlideAnimation,
    delay: 150,
    reverse: !opened,
  });

  return (
    <>
      {!isClosed && (
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
