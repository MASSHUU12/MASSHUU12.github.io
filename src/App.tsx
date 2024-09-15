import { useEffect } from "preact/hooks";
import { FunctionComponent, JSX } from "preact";

import i18n from "./i18n";
import Cookie from "@/helpers/Cookie";

import Main from "@/components/sections/Main";
import Footer from "@/components/sections/Footer";
import Projects from "@/components/sections/projects/Projects";
import About from "./components/popups/About";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const App: FunctionComponent<unknown> = (): JSX.Element => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#354853",
        contrastText: "#fffefa",
      },
      secondary: {
        main: "#ffad28",
      },
    },
  });

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component="main"
        bgcolor="primary.main"
        px={{ xs: "8%", md: "15%", xl: "25%" }}>
        <Main />
        <Projects />
        <Footer />
        <About />
      </Box>
    </ThemeProvider>
  );
};

export default App;
