import * as React from "react";
import { observer } from "mobx-react-lite";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { store } from "../../store/Store";
import Theme from "../shared/Theme/Theme";

const Filter: React.FC = observer(() => {
  const { genres, getGenres, categories, getCategories } = store.homeStore;
  const {
    platforms,
    languages,
    prices,
    getPlatforms,
    getLanguages,
    getPrices,
    params,
    changeParams,
  } = store.catalogStore;

  // #region Функции изменения параметров
  const handleChangePrice = (priceId: number) => {
    console.log("changePrice", priceId, params.priceIds);

    if (params !== undefined && params.priceIds !== null) {
      if (params.priceIds.includes(priceId)) {
        changeParams(
          "priceIds",
          params.priceIds.filter((e) => e !== priceId)
        );
      } else {
        changeParams("priceIds", [...params.priceIds, priceId]);
      }
    } else {
      changeParams("priceIds", [priceId]);
    }
    console.log("changePriceResult", priceId, params.priceIds);
  };

  const handleChangeAppTypes = (appType: number) => {
    if (params !== undefined && params.appTypeIds !== null) {
      if (params.appTypeIds.includes(appType)) {
        changeParams(
          "appTypeIds",
          params.appTypeIds.filter((e) => e !== appType)
        );
      } else {
        changeParams("appTypeIds", [...params.appTypeIds, appType]);
      }
    } else {
      changeParams("appTypeIds", [appType]);
    }
  };

  const handleChangeGenres = (genreId: number) => {
    if (params !== undefined && params.genreIds !== null) {
      if (params.genreIds.includes(genreId)) {
        changeParams(
          "genreIds",
          params.genreIds.filter((e) => e !== genreId)
        );
      } else {
        changeParams("genreIds", [...params.genreIds, genreId]);
      }
    } else {
      changeParams("genreIds", [genreId]);
    }
  };

  const handleChangeCategories = (categoryId: number) => {
    if (params !== undefined && params.categoryIds !== null) {
      if (params.categoryIds.includes(categoryId)) {
        changeParams(
          "categoryIds",
          params.categoryIds.filter((e) => e !== categoryId)
        );
      } else {
        changeParams("categoryIds", [...params.categoryIds, categoryId]);
      }
    } else {
      changeParams("categoryIds", [categoryId]);
    }
  };

  const handleChangeLanguages = (languageId: number) => {
    if (params !== undefined && params.languageIds !== null) {
      if (params.languageIds.includes(languageId)) {
        changeParams(
          "languageIds",
          params.languageIds.filter((e) => e !== languageId)
        );
      } else {
        changeParams("languageIds", [...params.languageIds, languageId]);
      }
    } else {
      changeParams("languageIds", [languageId]);
    }
  };

  const handleChangePlatforms = (platformId: number) => {
    if (params !== undefined && params.platformIds !== null) {
      if (params.platformIds.includes(platformId)) {
        changeParams(
          "platformIds",
          params.platformIds.filter((e) => e !== platformId)
        );
      } else {
        changeParams("platformIds", [...params.platformIds, platformId]);
      }
    } else {
      changeParams("platformIds", [platformId]);
    }
  };
  // #endregion

  React.useEffect(() => {
    getGenres();
    getCategories();
    getPlatforms();
    getLanguages();
    getPrices();
  }, [getCategories, getGenres, getLanguages, getPlatforms, getPrices]);

  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
        >
          <Typography>Цены</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {prices.map((price) => (
            <FormControlLabel
              value="start"
              control={
                <Checkbox
                  onChange={() => handleChangePrice(price.id)}
                  checked={
                    params.priceIds !== null &&
                    params.priceIds.includes(price.id)
                  }
                  sx={{
                    color: "secondary.main",
                    "&.Mui-checked": {
                      color: "text.primary",
                    },
                  }}
                />
              }
              label={price.fixedPrice}
              labelPlacement="start"
              sx={{
                justifyContent: "space-between",
                color: "text.secondary",
                py: "4px",
                margin: "0px",
                borderBottom: `2px solid ${Theme.palette.text.secondary}`,
              }}
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
        >
          <Typography>Тип продукта</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            value="start"
            control={
              <Checkbox
                checked={params?.appTypeIds?.includes(1)}
                onChange={() => handleChangeAppTypes(1)}
                sx={{
                  maxWidth: "10px",
                  color: "secondary.main",
                  "&.Mui-checked": {
                    color: "text.primary",
                  },
                }}
              />
            }
            label="Игры"
            labelPlacement="start"
            sx={{
              justifyContent: "space-between",
              color: "text.secondary",
              py: "4px",
              margin: "0px",
              borderBottom: `2px solid ${Theme.palette.text.secondary}`,
            }}
          />
          <FormControlLabel
            value="start"
            checked={params?.appTypeIds?.includes(2)}
            control={
              <Checkbox
                onChange={() => handleChangePrice(2)}
                sx={{
                  maxWidth: "10px",
                  color: "secondary.main",
                  "&.Mui-checked": {
                    color: "text.primary",
                  },
                }}
              />
            }
            label="Приложения"
            labelPlacement="start"
            sx={{
              justifyContent: "space-between",
              color: "text.secondary",
              py: "4px",
              margin: "0px",
              borderBottom: `2px solid ${Theme.palette.text.secondary}`,
            }}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion key="accordionGenres">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
        >
          <Typography>Жанры</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {genres.map((genre) => (
              <FormControlLabel
                value="start"
                checked={params?.genreIds?.includes(genre?.id)}
                control={
                  <Checkbox
                    onChange={() => handleChangeGenres(genre.id)}
                    sx={{
                      maxWidth: "10px",
                      color: "secondary.main",
                      "&.Mui-checked": {
                        color: "text.primary",
                      },
                    }}
                  />
                }
                label={genre.name}
                labelPlacement="start"
                sx={{
                  justifyContent: "space-between",
                  color: "text.secondary",
                  py: "4px",
                  margin: "0px",
                  borderBottom: `2px solid ${Theme.palette.text.secondary}`,
                }}
              />
            ))}
          </FormGroup>
          {/* <List key="genres">
            {genres.map((genre) => (
              <ListItemButton key={genre.id} sx={{ py: "2px" }}>
                <Typography
                  key={genre.name}
                  variant="body2"
                  py={1}
                  sx={{ color: "text.secondary" }}
                >
                  {genre.name}
                </Typography>
              </ListItemButton>
            ))}
          </List> */}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
        >
          <Typography>Категории</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <List key="categories">
            {categories.map((category) => (
              <ListItemButton key={category.id} sx={{ py: "2px" }}>
                <Typography
                  key={category.name}
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  {category.name}
                </Typography>
              </ListItemButton>
            ))}
          </List> */}
          <FormGroup>
            {categories.map((category) => (
              <FormControlLabel
                value="start"
                checked={params?.categoryIds?.includes(category?.id)}
                control={
                  <Checkbox
                    onChange={() => handleChangeCategories(category.id)}
                    sx={{
                      color: "secondary.main",
                      "&.Mui-checked": {
                        color: "text.primary",
                      },
                    }}
                  />
                }
                label={category.name}
                labelPlacement="start"
                sx={{
                  justifyContent: "space-between",
                  color: "text.secondary",
                  py: "4px",
                  margin: "0px",
                  borderBottom: `2px solid ${Theme.palette.text.secondary}`,
                }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
        >
          <Typography>Языки</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {languages.map((language) => (
              <FormControlLabel
                value="start"
                checked={params?.languageIds?.includes(language?.id)}
                control={
                  <Checkbox
                    onChange={() => handleChangeLanguages(language.id)}
                    sx={{
                      color: "secondary.main",
                      "&.Mui-checked": {
                        color: "text.primary",
                      },
                    }}
                  />
                }
                label={language.name}
                labelPlacement="start"
                sx={{
                  justifyContent: "space-between",
                  color: "text.secondary",
                  py: "4px",
                  margin: "0px",
                  borderBottom: `2px solid ${Theme.palette.text.secondary}`,
                }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
        >
          <Typography>Платформы</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <List key="categories">
            {categories.map((category) => (
              <ListItemButton key={category.id} sx={{ py: "2px" }}>
                <Typography
                  key={category.name}
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  {category.name}
                </Typography>
              </ListItemButton>
            ))}
          </List> */}
          <FormGroup>
            {platforms.map((platform) => (
              <FormControlLabel
                value="start"
                checked={params?.platformIds?.includes(platform?.id)}
                control={
                  <Checkbox
                    onChange={() => handleChangePlatforms(platform.id)}
                    sx={{
                      color: "secondary.main",
                      "&.Mui-checked": {
                        color: "text.primary",
                      },
                    }}
                  />
                }
                label={platform.name}
                labelPlacement="start"
                sx={{
                  justifyContent: "space-between",
                  color: "text.secondary",
                  py: "4px",
                  margin: "0px",
                  borderBottom: `2px solid ${Theme.palette.text.secondary}`,
                }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
});

export default Filter;
