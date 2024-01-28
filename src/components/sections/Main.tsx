import { useTranslation } from "react-i18next";
import { FunctionComponent, JSX } from "preact";
import { animated, useSpring } from "@react-spring/web";

import Scroll from "@/helpers/Scroll";
import Btn from "@/components/common/Btn";
import { usePopupsStore } from "@/app/store";
import { slideToLeftAnim } from "@/animations/slideToLeftAnim";

const Main: FunctionComponent<void> = (): JSX.Element => {
	const { t } = useTranslation();
	const togglePopups = usePopupsStore(state => state.toggle);

	const nameAnimation = useSpring({
		...slideToLeftAnim,
		delay: 300,
	});

	const titleAnimation = useSpring({
		...slideToLeftAnim,
		delay: 450,
	});

	return (
		<>
			<section class="flex flex-col gap-3 justify-center items-center h-svh">
				<animated.h1 style={nameAnimation} class="text-4xl md:text-5xl text-white_custom md:text-center">
					{t("meHello")}
					<span class="text-light_yellow"> Maciej Gawrysiak</span>.
				</animated.h1>
				<animated.span style={titleAnimation} class="text-xl md:text-2xl text-gray">
					{t("meTitle")}
				</animated.span>
				<div class="flex flex-wrap gap-3">
					<Btn text={t("hAbout")} action={() => togglePopups("about")} delay={100} />
					<Btn text={t("hWorks")} action={() => Scroll.intoView({ target: "#works" })} delay={250} />
					<Btn text="CV" action={() => window.open("/assets/gawrysiak_cv.pdf", "_blank")} delay={400} />
				</div>
			</section>
		</>
	);
};

export default Main;
