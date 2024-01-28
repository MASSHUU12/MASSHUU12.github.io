import { useTranslation } from "react-i18next";
import { FunctionComponent, JSX } from "preact";

import { InfoProps } from "@/typing/interfaces";
import { projectCategory } from "@/typing/types";

import Project from "./Project";
import projects from "@/projects.json";
import { useProjectCategoryStore } from "@/app/store";

const Projects: FunctionComponent<unknown> = (): JSX.Element => {
	const store = useProjectCategoryStore();
	const { t } = useTranslation();

	function changeCategory(e: Event): void {
		store.setCategory((e.target as HTMLSelectElement).value as projectCategory);
	}

	/**
	 * Renders a single project item based on the current category filter.
	 *
	 * @param {InfoProps["item"]} item - The project item to display.
	 * @param {number} keyID - The unique key identifier for the project item.
	 * @return {*}  {JSX.Element} - The rendered project item.
	 */
	function displayProject({ item, keyID }: InfoProps): JSX.Element {
		if (item.category !== store.category && store.category !== "all") return <></>;

		return <Project key={keyID} item={item} keyID={keyID} />;
	}

	return (
		<section id="works" class="grid place-items-center gap-8">
			{/* Category selection */}
			<div class="flex flex-row items-center gap-6">
				<h2 class="text-xl text-white_custom">{t("wProj")}</h2>
				<label for="category" class="sr-only">
					{t("wSelect")}
				</label>
				<select
					value={store.category}
					onChange={e => changeCategory(e)}
					class="px-4 py-2 text-base text-black border-none rounded-md shadow-sm cursor-pointer bg-white_custom sm:text-sm">
					<option value="all" selected>
						{t("wCAll")}
					</option>
					<option value="web">{t("wCWeb")}</option>
					<option value="mobile">{t("wCMob")}</option>
					<option value="desktop">{t("wCDes")}</option>
					<option value="extension">{t("wCEx")}</option>
				</select>
			</div>

			{/* Map through items and displays them. */}
			{projects.map(
				(item: InfoProps["item"], index: number): JSX.Element => displayProject({ item, keyID: index }),
			)}
		</section>
	);
};

export default Projects;
