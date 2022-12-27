import { useSpring, animated, config } from "@react-spring/web";

interface Props {
  text: string;
  action: (args: any) => any;
  delay?: number;
}

const Btn: React.FunctionComponent<Props> = ({
  text,
  action,
  delay = 0,
}): JSX.Element => {
  const animConfig = useSpring({
    to: {
      opacity: 1,
      y: 0,
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
      className="common-btn"
      onClick={action}>
      {text}
    </animated.button>
  );
};

export default Btn;
