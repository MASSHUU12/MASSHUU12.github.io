import { useSpring, animated, config } from "@react-spring/web";

import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type Props = {
  text: string;
  action: (args: any) => any;
  delay?: number;
};

const Btn: FunctionComponent<Props> = ({
  text,
  action,
  delay = 0,
}): JSX.Element => {
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
    delay: delay,
  });

  return (
    <animated.button
      type="button"
      style={animConfig}
      className="font-light py-1 px-3 bg-transparent text-white text-2xl border-white"
      onClick={action}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {text}
    </animated.button>
  );
};

export default Btn;
