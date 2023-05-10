import { useState } from "preact/hooks";
import { FunctionComponent, JSX } from "preact";
import { useSpring, animated, config } from "@react-spring/web";

type Props = {
  text: string;
  // eslint-disable-next-line no-unused-vars
  action: (args: unknown) => unknown;
  delay?: number;
};

/**
 *
 *
 * @param {Props} {
 *   text,
 *   action,
 *   delay = 0,
 * }
 * @return {*}  {JSX.Element}
 */
const Btn: FunctionComponent<Props> = ({
  text,
  action,
  delay = 0,
}: Props): JSX.Element => {
  const [hover, setHover] = useState<boolean>(false);

  const animConfig = useSpring({
    to: {
      opacity: 1,
      y: 0,
      scale: hover ? 1.15 : 1,
    },
    from: {
      opacity: 0,
      y: 100,
    },
    config: config.slow,
    delay,
  });

  return (
    <animated.button
      type="button"
      style={animConfig}
      className="font-light py-1 px-3 bg-transparent text-white_custom text-2xl underline decoration-aqua"
      onClick={action}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {text}
    </animated.button>
  );
};

export default Btn;
