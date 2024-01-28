import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { FunctionComponent, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { animated, useSpring } from "@react-spring/web";

import { InfoProps } from "@/typing/interfaces";
import Social from "@/components/common/Social";
import { createImagePath } from "@/helpers/Helpers";
import { workItemAnimation } from "@/animations/workAnims";

const Project: FunctionComponent<InfoProps> = ({ item, keyID }: InfoProps): JSX.Element => {
	const [animPlayed, setAnimPlayed] = useState(false);
	const [open, toggle] = useState(false);

	const { t } = useTranslation();
	const animation = useSpring(workItemAnimation(animPlayed));

	const observerCallback = (entries: IntersectionObserverEntry[]): void => {
		entries.forEach(entry => {
			// If item is visible play animation.
			if (entry.isIntersecting) setAnimPlayed(true);
		});
	};

	useEffect(() => {
		// Create observer which will be checking if item is visible.
		const observer = new IntersectionObserver(observerCallback, {
			root: null,
			rootMargin: "0px",
			threshold: 0.15, // Consider item 'visible' if 15% of it is shown.
		});

		const selector = document.querySelector(`#w${keyID}`);

		if (selector === null) return;

		observer.observe(selector);
	}, [keyID, animPlayed]);

	return (
		<>
			<animated.div
				style={animation}
				className="flex flex-col w-full cursor-pointer select-none"
				id={`w${keyID}`}
				onClick={() => toggle(!open)}>
				<div className="max-w-[70ch] flex flex-col transition transform duration-300 ease-in-out hover:scale-[1.02]">
					{/* Teamwork */}
					{item.teamwork && <h3 class="text-xs mb-2 text-light_yellow">{t("wTeam")}</h3>}
					{/* Title */}
					<h2 class="text-xl mb-4 text-aqua">{t(item.title)}</h2>
					{/* Short description */}
					<p class="text-sm p-5 shadow-md bg-light_yellow text-blue_gray font-semibold">
						{t(item.short_desc)}
					</p>
					{/* Labels */}
					<div class="mt-2 flex flex-wrap gap-4">
						{item.labels.map((label, index) => {
							return (
								<span class="text-gray" key={index}>
									{t(label)}
								</span>
							);
						})}
					</div>
				</div>
				{/* Details */}
				<div
					style={`transition: grid-template-rows 300ms; grid-template-rows: ${open ? "1" : "0"}fr;`}
					class="grid my-6">
					<div className="overflow-hidden cursor-default">
						<div class="flex sm:flex-row flex-col gap-4">
							<img
								class="sm:h-52 shadow-lg"
								src={createImagePath(item.images[0])}
								loading="lazy"
								alt={`${item.title}'s project image`}
							/>
							{/* Links */}
							<div class="flex flex-col gap-2">
								{item.links.map((object, index) => {
									return (
										<Social href={object.link} text={t(object.name)} key={index}>
											<Icon
												icon={object.type === "github" ? "akar-icons:github-fill" : "mdi:web"}
												width="24"
												color="#348899"
											/>
										</Social>
									);
								})}
							</div>
						</div>
						<p class="font-thin mt-4">{t(item.description)}</p>
					</div>
				</div>
			</animated.div>
		</>
	);
};

export default Project;
