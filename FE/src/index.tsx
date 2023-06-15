import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import App from "./components/App";
import { store } from "./store/Store";
import Theme from "./components/shared/Theme/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={Theme}>
    <React.StrictMode>
      <Box style={{ width: "100vw", height: "100vh" }}>
        <App />
      </Box>
    </React.StrictMode>
  </ThemeProvider>
);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.s = store;
