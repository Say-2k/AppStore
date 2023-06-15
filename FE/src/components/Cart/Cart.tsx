import React from "react";
import { observer } from "mobx-react-lite";
import { Box, Grid, Link, ThemeProvider, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Theme from "../shared/Theme/Theme";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Cart: React.FC = observer(() => (
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
      <Grid container component="main" rowSpacing={16} py={2}>
        <Grid item container justifyContent="center" alignItems="cen">
          <Grid item lg={4}>
            <Typography variant="h4">Моя корзина</Typography>
          </Grid>
          <Grid item lg={4} textAlign="right">
            {/* <Chip label="<Баланс:" /> */}
            <Typography variant="h5">Баланс: 0.00 Р</Typography>
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <Typography variant="h2">
            <SentimentVeryDissatisfiedIcon fontSize="inherit" />
          </Typography>
          <Typography variant="h5">Ваша корзина пуста</Typography>
          <Link underline="hover" href="home" color="text.secondary">
            Выберите что-нибудь
          </Link>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  </ThemeProvider>
));

export default Cart;
