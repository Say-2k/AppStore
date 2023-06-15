import * as React from "react";
import { observer } from "mobx-react-lite";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router";
import Image from "mui-image";
import ICardModel from "../../../models/CardModel";

const BigCard: React.FC<{ bigCard: ICardModel }> = observer((prop) => {
  const { bigCard } = prop;
  const navigate = useNavigate();

  const handleChangeCard = () => {
    navigate(`/app/${bigCard.id}`, { replace: true });
  };

  return (
    <CardActionArea onClick={handleChangeCard}>
      <Card
        sx={{
          display: "flex",
          maxHeight: "400px",
        }}
      >
        <CardMedia
          component="img"
          // sx={{ width: "35vw" }}
          sx={{ width: "648px", height: "400px" }}
          src={`data:image/png;base64,${bigCard.picture}`}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              mr: "30px",
            }}
          >
            <Typography component="span" variant="h5">
              {bigCard.title}
            </Typography>
            <Typography fontSize={20}> {bigCard.subDescription}</Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              {bigCard.description}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex" }}
            flexDirection="column"
            gap="16px"
            alignItems="stretch"
          >
            <Typography sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {bigCard.genres?.map((genre) => (
                <Chip
                  label={genre.name}
                  color="secondary"
                  sx={{ opacity: 0.7 }}
                />
              ))}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                {bigCard.platforms?.map((platform) => (
                  <Image
                    style={{ opacity: 0.7 }}
                    width="20px"
                    height="20px"
                    src={`data:image/png;base64,${platform.icon}`}
                  />
                ))}
              </Box>
              {bigCard.price === 0 ? (
                <Typography sx={{ textAlign: "right" }} color="text.secondary">
                  Бесплатно
                </Typography>
              ) : (
                <Typography
                  sx={{ textAlign: "right", fontSize: 18 }}
                  color="text.secondary"
                >
                  {bigCard.price} ₽
                </Typography>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </CardActionArea>
  );
});
export default BigCard;
