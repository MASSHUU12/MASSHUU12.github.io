import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { FunctionComponent, JSX } from "preact";

import { usePopupsStore } from "@/app/store";

import Popup from "@/components/common/Popup";
import Social from "@/components/common/Social";

const About: FunctionComponent<unknown> = (): JSX.Element => {
	const about = usePopupsStore(state => state.about);

	const { t } = useTranslation();

	return (
		<>
			{about && (
				<Popup popup="about">
					<>
						<h1 class="text-3xl text-plum">{t("hAbout")}.</h1>
						<span class="text-sm text-blue_gray italic">{t("meTitle")}</span>
						<p class="text-black mt-4">{t("meDescription")}</p>
					</>
					<div class="flex flex-col gap-3">
						<Social href="mailto:gawrysiak.maciej@proton.me" text="gawrysiak.maciej@proton.me">
							<Icon icon="ic:outline-alternate-email" width="24" />
						</Social>
						<Social href="https://github.com/MASSHUU12" text="MASSHUU12">
							<Icon icon="brandico:github" width="24" />
						</Social>
						<Social href="https://leetcode.com/MASSHUU/" text="MASSHUU">
							<Icon icon="simple-icons:leetcode" width="24" />
						</Social>
						<Social href="https://t.me/MASSHUU" text="MASSHUU">
							<Icon icon="akar-icons:telegram-fill" width="24" />
						</Social>
						<Social href="https://linkedin.com/in/maciej-gawrysiak" text="Linkedin">
							<Icon icon="brandico:linkedin-rect" width="24" />
						</Social>
					</div>
				</Popup>
			)}
		</>
	);
};

export default About;
