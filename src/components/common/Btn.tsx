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
 * A button component with animated effects.
 *
 * @param props - The component props.
 * @param props.text - The text displayed on the button.
 * @param props.action - The callback function to be executed when the button is clicked.
 * @param props.delay - The delay (in milliseconds) before the button animation starts.
 * @returns The rendered button component.
 */
const Btn: FunctionComponent<Props> = ({ text, action, delay = 0 }: Props): JSX.Element => {
	const [hover, setHover] = useState<boolean>(false);

	const animConfig = useSpring({
		to: {
			opacity: 1,
			y: 0,
			scale: hover ? 1.1 : 1,
		},
		from: {
			opacity: 0,
			y: 100,
		},
		config: config.slow,
		delay,
	});

	const AnimatedButton = animated.button as any;

	return (
		<AnimatedButton
			type="button"
			style={animConfig}
			className="font-light bg-transparent text-white_custom text-2xl underline decoration-aqua"
			onClick={action}
			onMouseOver={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			{text}
		</AnimatedButton>
	);
};

export default Btn;
