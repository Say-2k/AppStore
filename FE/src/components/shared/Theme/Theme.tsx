import { createTheme } from "@mui/material";
// import { ThemeOptions } from "@mui/material/styles";

const Theme = createTheme({
  // palette: {
  //   mode: "light",
  //   primary: {
  //     main: "#513975",
  //   },
  //   secondary: {
  //     main: "#e91e63",
  //   },
  //   success: {
  //     main: "#3c2560",
  //   },
  // },
  // palette: {
  //   mode: "light",
  //   primary: {
  //     main: "#2b173f",
  //     dark: "#c2b8d2",
  //   },
  //   secondary: {
  //     main: "#e91e63",
  //   },
  //   success: {
  //     main: "#cfc0e4",
  //   },
  //   // background: {
  //   //   default: "#736090",
  //   //   paper: "#c2b8d2",
  //   // },
  // },

  components: {
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          borderRadius: 13,
          transition: "0.2s",
          "&:hover": {
            // transform: "scale(1.001)",
            boxShadow:
              "0 2px 4px -2px rgba(0,0,0,0.24), 0 4px 24px -2px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // "& label": {
          //   color: "#3E68A8",
          // },
          // "& label.Mui-focused": {
          //   color: "#2b173f",
          // },
          // "& .MuiInput-underline:after": {
          //   borderBottomColor: "#3E68A8",
          // },
          "& .MuiOutlinedInput-root": {
            // "& fieldset": {
            //   borderColor: "#2b173f",
            // },
            "&:hover fieldset": {
              borderColor: "#2b173f",
              borderWidth: "0.1rem",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2b173f",
            },
          },
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#2b173f",
      dark: "#c2b8d2",
    },
    secondary: {
      main: "#e91e63",
      dark: "#af2d57",
    },
    success: {
      main: "#cfc0e4",
    },
    background: {
      default: "#ffffff",
      paper: "rgba(43,23,63,0.59)",
    },
    text: {
      // secondary: "#a594b5",
      // secondary: "rgba(165,148,181,0.84)",
      secondary: "rgba(169,163,175,0.89)",
      // primary: "rgba(255,255,255,0.75)",
      primary: "#ffffff",
    },
  },

  shape: {
    borderRadius: 13,
  },
});

// export const themeOptions: ThemeOptions = {};

export default Theme;
