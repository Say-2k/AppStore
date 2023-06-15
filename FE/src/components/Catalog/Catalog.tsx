import React from "react";
import { observer } from "mobx-react-lite";
import { Box, Grid, ThemeProvider } from "@mui/material";
import { useParams, useNavigate } from "react-router";
import Theme from "../shared/Theme/Theme";
import Header from "../shared/Header/Header";
import SmallCard from "../shared/Cards/SmallCard";
import { store } from "../../store/Store";
import Footer from "../shared/Footer/Footer";
import Filter from "./Filter";
import CategoryCard from "../shared/Cards/CategoryCard";
import ICardModel from "../../models/CardModel";
import AppStore from "../../store/AppStore";

const Catalog: React.FC = observer(() => {
  const {
    prices,
    releaseDate,
    company,
    rating,
    productTypes,
    genres,
    categories,
    languages,
    platforms,
  } = useParams();

  const navigate = useNavigate();

  const {
    smallCards,
    categoryCards,
    params,
    getSmallCards,
    getCategoryCards,
    changeParams,
  } = store.catalogStore;

  // #region Блок получений параметров из адресной строки
  if (typeof productTypes?.split("&")[0] === "number") {
    changeParams(
      "appTypeIds",
      productTypes?.split("&").map((e) => Number(e))
    );
    console.log("a");
  }
  if (releaseDate !== undefined) {
    changeParams("releaseDate", new Date(releaseDate));
    console.log("a");
  }
  if (company !== undefined) {
    changeParams("companyName", company);
    console.log("a");
  }
  if (rating !== undefined) {
    changeParams("rating", rating);
    console.log("a");
  }
  if (typeof prices?.split("&")[0] === "number") {
    changeParams(
      "priceIds",
      prices?.split("&").map((e) => Number(e))
    );
    console.log("a");
  }
  if (typeof genres?.split("&")[0] === "number") {
    changeParams(
      "genreIds",
      genres?.split("&").map((e) => Number(e))
    );
    console.log("a");
  }
  if (typeof platforms?.split("&")[0] === "number") {
    changeParams(
      "platformIds",
      platforms?.split("&").map((e) => Number(e))
    );
    console.log("a");
  }
  if (typeof languages?.split("&")[0] === "number") {
    changeParams(
      "languageIds",
      languages?.split("&").map((e) => Number(e))
    );
    console.log("a");
  }
  if (typeof categories?.split("&")[0] === "number") {
    changeParams(
      "categoryIds",
      categories?.split("&").map((e) => Number(e))
    );
    console.log("a");
  }
  // #endregion

  // #region Изменение поисковой строки при изменении фильтров
  React.useEffect(() => {
    if (params)
      navigate(
        `?${AppStore.queryString(
          params.appTypeIds !== null
            ? `appTypeIds=${params?.appTypeIds?.map((e) => e)?.join("&")}`
            : "",
          params.releaseDate !== null
            ? `releaseDate=${params?.releaseDate?.toDateString()}`
            : "",
          params.companyName !== null
            ? `companyName=${params?.companyName}`
            : "",
          params.rating !== null ? `rating=${params?.rating}` : "",
          params.priceIds !== null
            ? `priceIds=${params?.priceIds?.map((e) => e)?.join("&")}`
            : "",
          params.genreIds !== null
            ? `genreIds=${params?.genreIds?.map((e) => e)?.join("&")}`
            : "",
          params.platformIds !== null
            ? `platformIds=${params?.platformIds?.map((e) => e)?.join("&")}`
            : "",
          params.languageIds !== null
            ? `languageIds=${params?.languageIds?.map((e) => e)?.join("&")}`
            : "",
          params.categoryIds !== null
            ? `categoryIds=${params?.categoryIds?.map((e) => e)?.join("&")}`
            : "",
          params.title !== null ? `title=${params?.title}` : ""
        )}`
      );
  }, [navigate, params, changeParams]);
  // #endregion

  React.useEffect(() => {
    getSmallCards();
    getCategoryCards();
  }, [getCategoryCards, getSmallCards]);

  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          background:
            "linear-gradient(to bottom left , #2b173f, #7c2855, #07a7e3)",
          width: "100%",
        }}
      >
        <Header />
        <Grid container rowSpacing={6} py={2}>
          <Grid item container spacing={2} justifyContent="center">
            <Grid item lg={8}>
              <Grid container spacing={2}>
                {categoryCards.map((card) => (
                  <Grid item lg={2.4}>
                    <CategoryCard categoryCard={card} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item container spacing={2} justifyContent="center">
            <Grid item lg={6.4}>
              <Grid container spacing={2}>
                {smallCards.map((card) => {
                  const appCard: ICardModel = {
                    id: card.id,
                    title: card.title,
                    description: card.description,
                    picture: card.picture,
                    price: card.price,
                    subDescription: null,
                    genres: null,
                    platforms: null,
                  };
                  return (
                    <Grid item lg={3}>
                      <SmallCard smallCard={appCard} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item lg={1.6}>
              <Filter />
            </Grid>
          </Grid>
        </Grid>

        <Footer />
      </Box>
    </ThemeProvider>
  );
});

export default Catalog;
