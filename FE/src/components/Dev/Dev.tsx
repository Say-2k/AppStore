import React from "react";
import { observer } from "mobx-react-lite";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import Theme from "../shared/Theme/Theme";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../index.css";

const Dev: React.FC = observer(() => (
  <ThemeProvider theme={Theme}>
    <Box
      sx={{
        background:
          "linear-gradient(to bottom left , #2b173f, #7c2855, #07a7e3)",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Grid container component="main" pt={10}>
        <Grid item container flexDirection="column" alignItems="center" gap={2}>
          <img
            src={`${window.location.origin}/holo1.png`}
            width="70px"
            height="70px"
            alt="logo"
            style={{ marginRight: "19px" }}
          />
          <Typography variant="h5">Добро пожаловать в HoloDev</Typography>
          <Typography>
            Начните распространять компьютерные и мобильные игры и приложения в
            Holo Apps!
          </Typography>
          <KeyboardArrowDownIcon />
        </Grid>
        <Grid item container flexDirection="column" alignItems="center" gap={2}>
          <Typography variant="h5">Добро пожаловать в HoloDev</Typography>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  </ThemeProvider>
));

export default Dev;
