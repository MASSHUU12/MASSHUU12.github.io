import { Icon } from "@iconify/react";
import { useSpring, animated } from "@react-spring/web";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { toggleCV, toggleCVReverse } from "../../../features/cvSlice";

const CV = (): JSX.Element => {
  const toggle = useAppSelector((state) => state.cv);
  const dispatch = useAppDispatch();

  const closeAnim = () => {
    toggle.reverse && dispatch(toggleCV(false));
  };

  const bottom = useSpring({
    to: { y: -window.innerHeight * 0.3 },
    from: { y: window.innerHeight * 0.5 },
    reset: true,
    reverse: toggle.reverse,
    onRest: closeAnim,
  });

  const background = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: toggle.reverse,
  });

  return (
    <>
      {toggle.value && (
        <animated.section
          style={background}
          className="common-container"
          onClick={() => dispatch(toggleCVReverse(true))}
        >
          <animated.div style={bottom} className="common-center">
            <section>
              <Icon
                onClick={() => dispatch(toggleCVReverse(true))}
                icon="carbon:close"
                color="white"
                width="48"
                height="48"
              />
            </section>
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
