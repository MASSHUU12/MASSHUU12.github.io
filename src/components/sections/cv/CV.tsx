import { FunctionComponent } from "preact";
import { Icon } from "@iconify/react";
import { animated, useSpring } from "@react-spring/web";

import { backgroundAnim } from "src/animations/commonAnims";
import { cvBottomAnimation } from "src/animations/cvAnims";

import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { toggleCV, toggleCVReverse } from "features/cvSlice";
import Scroll from "helpers/Scroll";

/**
 * Component for accessing CV
 *
 * @return {*}  {JSX.Element}
 */
const CV: FunctionComponent<any> = (): JSX.Element => {
  const toggle = useAppSelector(state => state.cv);
  const dispatch = useAppDispatch();

  const closeAnim = () => {
    if (toggle.reverse) {
      dispatch(toggleCV(false));
      Scroll.enable();
    }
  };

  const bottom = useSpring({
    ...cvBottomAnimation,
    reverse: toggle.reverse,
    onRest: closeAnim,
  });

  const background = useSpring({
    ...backgroundAnim,
    reverse: toggle.reverse,
  });

  return (
    <>
      {toggle.value && (
        <animated.section
          style={background}
          class="fixed top-0 left-0 w-full h-full bg-dim flex flex-col items-center justify-end m-0 md:flex-row md:justify-center"
          onClick={() => dispatch(toggleCVReverse(true))}>
          <animated.div
            style={bottom}
            className="bg-blue_gray p-4 rounded-md flex flex-col text-white_custom gap-2">
            <Icon
              onClick={() => dispatch(toggleCVReverse(true))}
              icon="carbon:close"
              color="white"
              width="32"
            />
            <a href="/assets/gawrysiak_cv.pdf" target="_blank">
              gawrysiak_pl.pdf
            </a>
            <a href="/assets/gawrysiak_cv_en.pdf" target="_blank">
              gawrysiak_en.pdf
            </a>
          </animated.div>
        </animated.section>
      )}
    </>
  );
};

export default CV;
