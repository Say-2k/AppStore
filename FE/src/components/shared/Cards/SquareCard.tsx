import * as React from "react";
import { observer } from "mobx-react-lite";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import ICardModel from "../../../models/CardModel";

const SquareCard: React.FC<{
  squareCard: ICardModel;
}> = observer((prop) => {
  const { squareCard } = prop;
  const navigate = useNavigate();

  const handleChangeCard = () => {
    navigate(`/app/${squareCard.id}`, { replace: true });
  };

  return (
    <CardActionArea onClick={handleChangeCard}>
      <Card sx={{ maxWidth: "200px" }}>
        <CardMedia
          component="img"
          height="200"
          src={`data:image/png;base64,${squareCard.picture}`}
          sx={{ bgcolor: "white" }}
        />
        <CardContent>
          <Typography
            fontSize={17.5}
            gutterBottom
            variant="h5"
            component="span"
          >
            {squareCard.title}
          </Typography>
          {squareCard.price === 0 ? (
            <Typography variant="body2" color="text.secondary">
              Бесплатно
            </Typography>
          ) : (
            <Typography variant="body2" color="text.secondary">
              {squareCard.price} ₽
            </Typography>
          )}
        </CardContent>
      </Card>
    </CardActionArea>
  );
});
export default SquareCard;
