import { Icon } from "@iconify/react";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "preact/hooks";
import {
  ComponentChildren,
  FunctionComponent,
  JSX,
  toChildArray,
} from "preact";

import Scroll from "@/helpers/Scroll";
import { popups } from "src/typing/types";
import { usePopupsStore } from "src/app/store";

import { backgroundAnim } from "src/animations/commonAnims";
import { popupLeftAnim, popupRightAnim } from "src/animations/popupAnims";

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
  const dialog = useRef<HTMLDialogElement>();
  const toggle = usePopupsStore(state => state.toggle);
  const [isClosing, setIsClosing] = useState(false);
  const childrenArray = toChildArray(children);

  // Disable scroll when popup is opened
  useEffect(() => {
    Scroll.disable();
    dialog.current?.showModal();
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
        dialog.current?.close();
        toggle(popup);
        Scroll.enable();
      },
    });
  };

  return (
    <animated.dialog
      ref={dialog}
      style={bgAnimation}
      onClick={close}
      class="bg-transparent flex justify-center items-center h-full">
      <div class="flex flex-col md:flex-row justify-center items-center w-full h-full md:w-10/12 shadow-2xl">
        {/* Left section */}
        {childrenArray.length >= 2 && (
          <animated.section
            style={leftAnimation}
            class="flex-1 p-3 md:p-8 w-full h-full bg-white_custom">
            {childrenArray[0]}
          </animated.section>
        )}
        {/* Right section */}
        <animated.section
          style={rightAnimation}
          class="flex-1 p-3 md:p-8 w-full h-full bg-blue_gray">
          <div class="flex flex-row justify-end items-center">
            <Icon icon="carbon:close" color="white" width="32" />
          </div>
          <div class="h-full">
            {childrenArray[childrenArray.length <= 1 ? 0 : 1]}
          </div>
        </animated.section>
      </div>
    </animated.dialog>
  );
};

export default Popup;
