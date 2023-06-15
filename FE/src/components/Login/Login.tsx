import * as React from "react";
// import { observer } from "mobx-react-lite";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Theme from "../shared/Theme/Theme";
import Header from "../shared/Header/Header";

interface TabPanelProps {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
  index: number;
  value: number;
}
// const TabPanel: React.FC = observer((props: TabPanelProps) => {
function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Box
      // style={{
      //   background:
      //     "linear-gradient(to bottom left , #2b173f, #7c2855, #07a7e3)",
      //   minHeight: "100%",
      // }}
      >
        <Header />
        <Box
          sx={{
            // borderBottom: 1,
            borderColor: "divider",
            // bgcolor: "primary.main",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab label="Вход" />
            <Tab label="Регистрация" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SignIn />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUp />
        </TabPanel>
        {/* <Footer /> */}
      </Box>
    </ThemeProvider>
  );
}
