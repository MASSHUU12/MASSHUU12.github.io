import { Icon } from "@iconify/react";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "preact/hooks";
import { ComponentChildren, FunctionComponent, toChildArray } from "preact";

import { popups } from "src/types";
import Scroll from "helpers/Scroll";
import { toggle } from "features/popupsSlice";
import { useAppDispatch } from "src/app/hooks";

import { backgroundAnim } from "src/animations/commonAnims";
import { aboutLeftAnim, aboutRightAnim } from "src/animations/aboutAnims";

interface PopupProps {
  children: ComponentChildren;
  popup: popups;
}

/**
 * General popup component
 *
 * @param {*} {
 *   children,
 *   closePopup,
 * }
 * @return {*}  {JSX.Element}
 */
const Popup: FunctionComponent<PopupProps> = ({
  children,
  popup,
}: PopupProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isClosing, setIsClosing] = useState(false);
  const childrenArray = toChildArray(children);

  // Disable scroll when popup is opened
  useEffect(() => {
    Scroll.disable();
  }, []);

  // Background animation
  const [bgAnimation, api] = useSpring(() => ({
    ...backgroundAnim,
    reverse: false,
  }));

  // Left component animation
  const leftAnimation = useSpring({
    ...aboutLeftAnim,
    reverse: isClosing,
  });

  // Right component animation
  const rightAnimation = useSpring({
    ...aboutRightAnim,
    reverse: isClosing,
  });

  // Play reverted animations and close popup
  const close = (): void => {
    api.start({
      ...backgroundAnim,
      reverse: true,
      onStart: () => {
        setIsClosing(true);
      },
      onRest: () => {
        dispatch(toggle(popup));
        Scroll.enable();
      },
    });
  };

  return (
    // Background
    <animated.div
      style={bgAnimation}
      class="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-dim"
      onClick={close}>
      <div class="flex flex-col md:flex-row justify-center items-center w-full h-full md:max-h-[50%] md:w-10/12">
        {/* Left section */}
        {childrenArray.length >= 2 && (
          <animated.section
            style={leftAnimation}
            class="flex-1 p-3 md:p-12 w-full h-full bg-white_custom">
            {childrenArray[0]}
          </animated.section>
        )}
        {/* Right section */}
        <animated.section
          style={rightAnimation}
          class="flex-1 p-3 md:p-12 w-full h-full bg-blue_gray">
          <div class="flex flex-row justify-end items-center">
            <Icon icon="carbon:close" color="white" width="32" />
          </div>
          <div>{childrenArray[childrenArray.length <= 1 ? 0 : 1]}</div>
        </animated.section>
      </div>
    </animated.div>
  );
};

export default Popup;
