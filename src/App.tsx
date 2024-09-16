import Footer from "@/components/sections/Footer";
import Main from "@/components/sections/Main";
import Projects from "@/components/sections/projects/Projects";
import Cookie from "@/helpers/Cookie";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { JSX } from "preact";
import { useEffect } from "preact/hooks";
import About from "./components/popups/About";
import i18n from "./i18n";

declare module "@mui/material/styles" {
  interface Palette {
    plum: Palette["primary"];
    gray: Palette["primary"];
    lightYellow: Palette["primary"];
  }

  interface PaletteOptions {
    plum?: PaletteOptions["primary"];
    gray?: PaletteOptions["primary"];
    lightYellow?: PaletteOptions["primary"];
  }
}

function App(): JSX.Element {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#354853",
        contrastText: "#fffefa",
      },
      secondary: {
        main: "#ffad28",
      },
      plum: {
        main: "#962D3E",
      },
      gray: {
        main: "#979C9C",
      },
      lightYellow: {
        main: "#f2ebc7",
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
}

export default App;
