import _ from "lodash";
import { createTheme } from "@material-ui/core/styles";
import typography from "./Typography";
import components from "./Override";
import shadows from "./Shadows";
// import { useSelector } from "react-redux";

// ##############################import {

const BLUE_THEME = "BLUE_THEME";
const GREEN_THEME = "GREEN_THEME";
const RED_THEME = "RED_THEME";
const BLACK_THEME = "BLACK_THEME";
const PURPLE_THEME = "PURPLE_THEME";
const INDIGO_THEME = "INDIGO_THEME";

// // // Global Variables
// ##############################

const SidebarWidth = 265;
const TopbarHeight = 70;

const baseTheme = {
  direction: "ltr",
  palette: {
    primary: {
      main: "#1a97f5",
      light: "#e6f4ff",
      dark: "#1682d4",
    },
    secondary: {
      main: "#1e4db7",
      light: "#ddebff",
      dark: "#173f98",
    },

    success: {
      main: "#39cb7f",
      light: "#ebfaf2",
      dark: "#00964b",
      contrastText: "#ffffff",
    },
    danger: {
      main: "#fc4b6c",
      light: "#fdf3f5",
    },
    info: {
      main: "#0bb2fb",
      light: "#a7e3f4",
    },
    error: {
      main: "#fc4b6c",
      light: "#fdf3f5",
      dark: "#d43653",
    },
    warning: {
      main: "#fdc90f",
      light: "#fff4e5",
      dark: "#dcb014",
      contrastText: "#ffffff",
    },
    text: {
      secondary: "#777e89",
      danger: "#fc4b6c",
    },
    grey: {
      A100: "#ecf0f2",
      A200: "#99abb4",
      A400: "#767e89",
      A700: "#e6f4ff",
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.02,
      hover: "rgba(0, 0, 0, 0.03)",
    },
  },

  shape: {
    borderRadius: 5,
  },
  mixins: {
    toolbar: {
      color: "#949db2",
      "@media(min-width:1280px)": {
        minHeight: TopbarHeight,
        padding: "0 30px",
      },
      "@media(max-width:1280px)": {
        minHeight: "64px",
      },
    },
  },
  status: {
    danger: "#e53e3e",
  },
  components,
  typography,
  shadows,
};

const themesOptions = [
  {
    name: BLUE_THEME,
    palette: {
      primary: {
        main: "#1b97f5",
      },
    },
  },
  {
    name: GREEN_THEME,
    palette: {
      primary: {
        main: "#00cec3",
        light: "#d7f8f6",
        dark: "#02b3a9",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#066a73",
      },
    },
  },
  {
    name: PURPLE_THEME,
    palette: {
      primary: {
        main: "#7352ff",
        light: "#e5e0fa",
        dark: "#5739d6",
      },
      secondary: {
        main: "#402e8d",
      },
    },
  },
  {
    name: INDIGO_THEME,
    palette: {
      primary: {
        main: "#1e4db7",
        light: "#e6f4ff",
        dark: "#0c399e",
      },
      secondary: {
        main: "#11397b",
      },
    },
  },
  {
    name: RED_THEME,
    palette: {
      primary: {
        main: "#ff5c8e",
        light: "#fce6ed",
        dark: "#d43653",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#5e244d",
      },
    },
  },
  {
    name: BLACK_THEME,
    palette: {
      primary: {
        main: "#1c2025",
      },
    },
  },
];

export const BuildTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);
  const customizer = config;
  const baseMode = {
    palette: {
      mode: customizer.activeMode,
      background: {
        default: customizer.activeMode === "dark" ? "#282C34" : "#ffffff",
        dark: customizer.activeMode === "dark" ? "#1c2025" : "#ffffff",
        paper: customizer.activeMode === "dark" ? "#282C34" : "#ffffff",
      },
      text: {
        primary:
          customizer.activeMode === "dark" ? "#e6e5e8" : "rgba(0, 0, 0, 0.87)",
        secondary: customizer.activeMode === "dark" ? "#adb0bb" : "#777e89",
      },
    },
  };
  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createTheme(
    _.merge({}, baseTheme, baseMode, themeOptions, {
      direction: config.direction,
    })
  );
  return theme;
};

export { TopbarHeight, SidebarWidth, baseTheme };
