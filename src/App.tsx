import { useEffect } from "preact/hooks";
import { FunctionComponent, JSX } from "preact";

import i18n from "./i18n";
import Cookie from "@/helpers/Cookie";

import Main from "@/components/sections/Main";
import Footer from "@/components/sections/Footer";
import Projects from "@/components/sections/projects/Projects";

const App: FunctionComponent<void> = (): JSX.Element => {
	useEffect(() => {
		const languageFromCookie: string = Cookie.getCookie("lang");

		// Check if cookie with language is already set
		if (languageFromCookie !== "") {
			i18n.changeLanguage(languageFromCookie);
			return;
		}

		const detectedLanguage: string = navigator.language.split("-")[0];

		i18n.changeLanguage(detectedLanguage);
		Cookie.setCookie("lang", detectedLanguage);
	}, []);

	return (
		<main>
			<Main />
			<Projects />
			<Footer />
		</main>
	);
};

export default App;
