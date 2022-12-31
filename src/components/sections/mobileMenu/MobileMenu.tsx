import { animated, useSpring } from "@react-spring/web";
import { mobileMenuSlideAnimation } from "animations/mobileMenuAnims";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { toggleMobileMenu } from "features/mobileMenuSlice";
import MobileMenuLinks from "./MobileMenuLinks";
import { FunctionComponent } from "preact";

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
        <animated.section style={bg} className="mobile-menu-bg">
          {/* Background 2 */}
          <animated.div style={bg2} className="mobile-menu-content">
            <MobileMenuLinks />
          </animated.div>
        </animated.section>
      )}
    </>
  );
};

export default MobileMenu;
