import { FunctionComponent } from "preact";
import { Icon } from "@iconify/react";
import { animated, useSpring } from "@react-spring/web";

import { backgroundAnim } from "src/animations/commonAnims";
import { cvBottomAnimation } from "src/animations/cvAnims";

import { useAppDispatch, useAppSelector } from "src/app/hooks";
import { toggleCV, toggleCVReverse } from "features/cvSlice";

import "./Style.scss";

/**
 * Component for accessing CV
 *
 * @return {*}  {JSX.Element}
 */
const CV: FunctionComponent<any> = (): JSX.Element => {
  const toggle = useAppSelector(state => state.cv);
  const dispatch = useAppDispatch();

  const closeAnim = () => {
    toggle.reverse && dispatch(toggleCV(false));
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
          className="popup-bg"
          onClick={() => dispatch(toggleCVReverse(true))}>
          <animated.div style={bottom} className="cv-item">
            <Icon
              onClick={() => dispatch(toggleCVReverse(true))}
              icon="carbon:close"
              color="white"
              width="48"
              height="48"
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
