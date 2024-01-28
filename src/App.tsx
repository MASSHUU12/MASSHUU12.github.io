import { useEffect } from "preact/hooks";
import { FunctionComponent, JSX } from "preact";

import i18n from "./i18n";
import Cookie from "@/helpers/Cookie";

import Main from "@/components/sections/Main";

const App: FunctionComponent<unknown> = (): JSX.Element => {
	useEffect(() => {
		const cookieLanguage: string = Cookie.getCookie("lang");

		// Check if cookie with language is already set
		if (cookieLanguage !== "") {
			i18n.changeLanguage(cookieLanguage);
			return;
		}

		// If not, detect language
		const userLanguage: string = navigator.language.split("-")[0];

		i18n.changeLanguage(userLanguage);
		Cookie.setCookie("lang", userLanguage);
	}, []);

	return (
		<main>
			<Main />
		</main>
	);
};

export default App;
