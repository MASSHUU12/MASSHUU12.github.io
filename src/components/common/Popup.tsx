import { Icon } from "@iconify/react";
import { useEffect, useRef } from "preact/hooks";
import { animated, useSpring } from "@react-spring/web";
import { ComponentChildren, FunctionComponent, JSX, toChildArray } from "preact";

import Scroll from "@/helpers/Scroll";
import { popups } from "src/typing/types";
import { usePopupsStore } from "src/app/store";

interface PopupProps {
	children: ComponentChildren;
	popup: popups;
}

const Popup: FunctionComponent<PopupProps> = ({ children, popup }: PopupProps): JSX.Element => {
	const dialog = useRef<HTMLDialogElement>();
	const childrenArray = toChildArray(children);
	const popupsStore = usePopupsStore(state => state);
	const [bgAnimation, api] = useSpring(() => ({
		from: {
			y: window.innerHeight,
			opacity: 0.75,
		},
		to: {
			y: 0,
			opacity: 1,
		},
	}));

	// Disable scroll when popup is opened
	useEffect(() => {
		Scroll.disable();
		dialog.current?.showModal();
	}, []);

	// Play reverted animations and close popup
	const close = (e: MouseEvent): void => {
		if (e.target !== e.currentTarget) return;

		api.update({
			reverse: true,
			onRest: () => {
				Scroll.enable();
				dialog.current?.close();
				popupsStore.toggle(popup);
			},
		});
		api.start();
	};

	const AnimatedDialog = animated.dialog as any;

	return (
		<AnimatedDialog
			ref={dialog}
			autofocus
			onClick={(e: MouseEvent) => close(e)}
			style={bgAnimation}
			class="grid place-items-center h-svh w-svw bg-transparent cursor-pointer">
			<div
				class={`flex flex-col sm:flex-row justify-center items-center sm:w-10/12 shadow-xl w-full cursor-default ${
					childrenArray.length >= 2 ? "h-[50%]" : "h-full"
				}`}>
				{/* Left section */}
				{childrenArray.length >= 2 && (
					<section class="flex-1 p-3 md:p-8 w-full h-full bg-white_custom">{childrenArray[0]}</section>
				)}
				{/* Right section */}
				<section class="flex-1 p-3 md:p-8 w-full h-full bg-blue_gray">
					{/* Close button */}
					<div class="flex flex-row justify-end items-center">
						<Icon onClick={(e: MouseEvent) => close(e)} icon="carbon:close" color="white" width="32" />
					</div>
					<div class="h-full">{childrenArray[childrenArray.length <= 1 ? 0 : 1]}</div>
				</section>
			</div>
		</AnimatedDialog>
	);
};

export default Popup;
