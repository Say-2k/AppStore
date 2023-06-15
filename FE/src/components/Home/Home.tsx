import * as React from "react";
import { observer } from "mobx-react-lite";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Theme from "../shared/Theme/Theme";
import Header from "../shared/Header/Header";
import LeftBar from "./LeftBar";
import BigCard from "../shared/Cards/BigCard";
import SmallCard from "../shared/Cards/SmallCard";
import SquareCard from "../shared/Cards/SquareCard";
import Footer from "../shared/Footer/Footer";
import { store } from "../../store/Store";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../index.css";

const Home: React.FC = observer(() => {
  const {
    bigCards,
    smallCards,
    squareCards,
    getBigCards,
    getSmallCards,
    getSquareCards,
  } = store.homeStore;

  React.useEffect(() => {
    getBigCards();
    getSmallCards();
    getSquareCards();
  }, [getBigCards, getSmallCards, getSquareCards]);

  return (
    <ThemeProvider theme={Theme}>
      <Box
        style={{
          background:
            "linear-gradient(to bottom left , #2b173f, #7c2855, #07a7e3)",
        }}
      >
        <Header />
        <Grid container spacing={2} sx={{ py: 2, justifyContent: "left" }}>
          <Grid item md={2}>
            <LeftBar />
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            {/* <Swiper
              slidesPerView={1}
              loop
              grabCursor
              mousewheel
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              navigation
              modules={[
                EffectCreative,
                Autoplay,
                Pagination,
                Navigation,
                Mousewheel,
                Virtual,
              ]}
              className="mySwiper2"
            >
              {bigCards.length > 0 &&
                bigCards.map((card) => (
                  <SwiperSlide virtualIndex={card.id}>
                    <BigCard bigCard={card} />
                  </SwiperSlide>
                ))}
            </Swiper> */}
            <Typography pb={1} variant="h6">
              Новинки
            </Typography>
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              mousewheel
              // navigation
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {bigCards.length > 0 &&
                bigCards.map((card) => (
                  <SwiperSlide>
                    <BigCard bigCard={card} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <Typography pt={4} pb={1} variant="h6">
              Рекомендуемое
            </Typography>
            <Grid container columnSpacing={2} sx={{ marginTop: 0 }}>
              {smallCards.map((card) => (
                <Grid item lg={2.4}>
                  <SmallCard smallCard={card} />
                </Grid>
              ))}
            </Grid>
            <Typography pt={4} pb={1} variant="h6">
              Популярные приложения
            </Typography>
            <Grid container columnSpacing={2} sx={{ marginTop: 0 }}>
              {squareCards.map((card) => (
                <Grid item lg={2.4}>
                  <SquareCard squareCard={card} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </ThemeProvider>
  );
});

export default Home;
