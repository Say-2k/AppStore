import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Button,
  Chip,
  // Divider,
  // List,
  // ListItem,
  // ListItemText,
  Table,
  TableBody,
  TableCell,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Header from "../shared/Header/Header";
import Theme from "../shared/Theme/Theme";
import Footer from "../shared/Footer/Footer";
import { store } from "../../store/Store";
import CommentCard from "../shared/Cards/CommentCard";

const Product: React.FC = observer(() => {
  const { id } = useParams();
  const { product, getProduct, comments, getComments } = store.productStore;

  useEffect(() => {
    const productId = Number(id ?? "");
    if (product?.id !== productId) {
      getProduct(productId);
      getComments(undefined, productId);
      // eslint-disable-next-line no-console
      console.log(product);
    }
  }, [getProduct, id, product, getComments]);

  if (product === null) return null;

  return (
    <ThemeProvider theme={Theme}>
      <Box
        style={{
          background:
            "linear-gradient(to bottom left , #2b173f, #7c2855, #07a7e3)",
          width: "100%",
        }}
      >
        <Header />
        <Grid container spacing={2} sx={{ py: 2, justifyContent: "center" }}>
          <Grid key="LeftAboutProduct" item lg={5}>
            <Card
              sx={{
                maxWidth: 700,
                backgroundColor: "background.paper",
              }}
            >
              <CardHeader
                title={product?.title}
                sx={{ paddingBottom: "0px" }}
              />
              <CardMedia
                component="img"
                height="300"
                // src="https://cdn-ext.fanatical.com/production/product/1280x720/7d733c79-5bcd-4461-af28-3e1c5594a2d0.jpeg"
                src={`data:image/png;base64,${
                  product?.pictures[0]?.pictureFile ?? ""
                }`}
                // src={`data:image/png;base64,${product?.icon ?? ""}`}
                sx={{
                  borderRadius: Theme.shape.borderRadius / 6,
                  padding: "16px",
                }}
              />
              <CardContent>
                <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
                  {product?.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid key="RightAboutProduct" item lg={3}>
            <Card
              sx={{
                maxWidth: 450,
                backgroundColor: "background.paper",
              }}
            >
              <CardMedia
                sx={{
                  padding: "16px",
                  borderRadius: Theme.shape.borderRadius / 6,
                }}
                component="img"
                height="200"
                src={`data:image/png;base64,${product?.icon ?? ""}`}

                // src="https://cdn2.unrealengine.com/egs-legostarwarstheskywalkersaga-ttgames-ic1-400x400-d6bce7cf8778.png?h=270&quality=medium&resize=1&w=480"
              />
              <CardContent>
                {/* <List component="nav">
                  <ListItem key="price">
                    <ListItemText key="priceText" primary="Цена:" />
                    {product?.price === 0 ? (
                      "Бесплатно"
                    ) : (
                      <Typography variant="h6" color="text.primary">
                        {product?.price} ₽
                      </Typography>
                    )}
                  </ListItem>
                  <ListItem key="buy" sx={{ justifyContent: "center" }}>
                    <Button fullWidth variant="contained" color="secondary">
                      Купить сейчас
                    </Button>
                  </ListItem>
                  <ListItem key="cart">
                    <Button
                      key="buttonCart"
                      variant="outlined"
                      color="secondary"
                      startIcon={<ShoppingBagIcon />}
                      sx={{ width: "100%" }}
                    >
                      Добавить в корзину
                    </Button>
                  </ListItem>
                  <ListItem key="wishlist">
                    <Button
                      key="buttonWishlist"
                      variant="outlined"
                      color="secondary"
                      startIcon={<AddCircleIcon />}
                      sx={{ width: "100%" }}
                    >
                      Добавить в желаемое
                    </Button>
                  </ListItem>
                  <ListItem key="rating">
                    <ListItemText
                      key="ratingText"
                      primary={`Рейтинг: ${product?.rating ?? ""}`}
                    />
                  </ListItem>
                  <Divider key="1" />
                  <ListItem key="company">
                    Компания:&nbsp;
                    <ListItemText
                      key="companyText"
                      sx={{ textAlign: "right" }}
                      primary={product?.company.name}
                    />
                  </ListItem>
                  <Divider key="2" />
                  <ListItem key="releaseDate">
                    Дата релиза:&nbsp;
                    <ListItemText
                      key="releaseDateText"
                      sx={{ textAlign: "right" }}
                      primary={
                        product?.releaseDate !== undefined &&
                        product?.releaseDate !== null &&
                        product?.releaseDate.toString()
                      }
                    />
                  </ListItem>
                  <Divider key="3" />
                  <ListItem key="platforms">
                    Платформы:&nbsp;
                    <ListItemText
                      key="platformsText"
                      sx={{ textAlign: "right" }}
                      primary={product?.platformsName?.map((platform) => (
                        <Chip label={platform} sx={{ margin: "3px" }} />
                      ))}
                    />
                  </ListItem>
                  <Divider key="4" />
                  <ListItem key="languages">
                    Языки:&nbsp;
                    <ListItemText
                      key="languagesText"
                      sx={{ textAlign: "right" }}
                      primary={product?.languagesName?.map((language) => (
                        <Chip label={language} sx={{ margin: "3px" }} />
                      ))}
                    />
                  </ListItem>
                  <Divider key="5" />
                  <ListItem key="genres">
                    Жанры:&nbsp;
                    <ListItemText
                      key="genresText"
                      sx={{ textAlign: "right" }}
                      primary={product?.genresName?.map((genre) => (
                        <Chip label={genre} sx={{ margin: "3px" }} />
                      ))}
                    />
                  </ListItem>
                  <Divider key="6" />
                </List> */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "16px",
                    paddingBottom: "inherit",
                    textAlign: "right",
                  }}
                >
                  {product?.price === 0 ? (
                    "Бесплатно"
                  ) : (
                    <Typography variant="h6" color="text.primary">
                      {product?.price} ₽
                    </Typography>
                  )}
                  <Button fullWidth variant="contained" color="secondary">
                    Купить сейчас
                  </Button>
                  <Button
                    key="buttonCart"
                    variant="outlined"
                    color="secondary"
                    startIcon={<ShoppingBagIcon />}
                    sx={{ width: "100%" }}
                  >
                    Добавить в корзину
                  </Button>
                  <Button
                    key="buttonWishlist"
                    variant="outlined"
                    color="secondary"
                    startIcon={<AddCircleIcon />}
                    sx={{ width: "100%" }}
                  >
                    Добавить в желаемое
                  </Button>
                </Box>
                <Table
                  sx={{ minWidth: 340, opacity: 0.7, mb: 0 }}
                  aria-label="simple table"
                >
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Рейтинг
                      </TableCell>
                      <TableCell align="right">{product?.rating}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Компания:
                      </TableCell>
                      <TableCell align="right">
                        {product?.company.name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Дата релиза:
                      </TableCell>
                      <TableCell align="right">
                        {product?.releaseDate !== undefined &&
                          product?.releaseDate !== null &&
                          product?.releaseDate.toString()}{" "}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Платформы:
                      </TableCell>
                      <TableCell align="right">
                        {product?.platformsName?.map((platform) => (
                          <Chip
                            key={platform}
                            label={platform}
                            sx={{ margin: "3px" }}
                          />
                        ))}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Языки:
                      </TableCell>
                      <TableCell align="right">
                        {product?.languagesName?.map((language) => (
                          <Chip
                            key={language}
                            label={language}
                            sx={{ margin: "3px" }}
                          />
                        ))}
                      </TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell sx={{ pb: "0px" }} component="th" scope="row">
                        Жанры:
                      </TableCell>
                      <TableCell sx={{ pb: "0px" }} align="right">
                        {product?.genresName?.map((genre) => (
                          <Chip
                            key={genre}
                            label={genre}
                            sx={{ margin: "3px" }}
                          />
                        ))}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Grid>

          <Grid key="CommentSection" item md={8} lg={8}>
            <Card
              sx={{
                backgroundColor: "background.paper",
              }}
            >
              <CardHeader
                title="Комментарии | Обзоры"
                subheader={`Средний результат: ${product?.rating ?? ""}`}
                sx={{ marginBottom: "0px" }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  gap: "16px",
                }}
              >
                {comments.map((comment) => (
                  <CommentCard comment={comment} />
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </ThemeProvider>
  );
});

export default Product;
