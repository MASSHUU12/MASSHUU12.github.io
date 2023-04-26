import { Icon } from "@iconify/react";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "preact/hooks";
import {
  ComponentChildren,
  FunctionComponent,
  JSX,
  toChildArray,
} from "preact";

import { popups } from "src/constants/types";
import Scroll from "helpers/Scroll";

import { backgroundAnim } from "src/animations/commonAnims";
import { popupLeftAnim, popupRightAnim } from "src/animations/popupAnims";
import { usePopupsStore } from "src/app/store";

interface PopupProps {
  children: ComponentChildren;
  popup: popups;
}

/**
 * General popup component
 *
 * @param {*} {
 *   children,
 *   popup,
 * }
 * @return {*}  {JSX.Element}
 */
const Popup: FunctionComponent<PopupProps> = ({
  children,
  popup,
}: PopupProps): JSX.Element => {
  const toggle = usePopupsStore(state => state.toggle);
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
    ...popupLeftAnim,
    reverse: isClosing,
  });

  // Right component animation
  const rightAnimation = useSpring({
    ...popupRightAnim,
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
        toggle(popup);
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
