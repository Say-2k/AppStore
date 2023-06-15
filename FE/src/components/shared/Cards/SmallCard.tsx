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

const SmallCard: React.FC<{
  smallCard: ICardModel;
}> = observer((prop) => {
  const { smallCard } = prop;
  const navigate = useNavigate();

  const handleChangeCard = () => {
    navigate(`/app/${smallCard.id}`, { replace: true });
  };

  return (
    <CardActionArea onClick={handleChangeCard}>
      <Card sx={{ maxWidth: "200px" }}>
        <CardMedia
          component="img"
          height="300"
          src={`data:image/png;base64,${smallCard.picture}`}
        />
        <CardContent>
          <Typography
            fontSize={17.5}
            gutterBottom
            variant="h5"
            component="span"
          >
            {smallCard.title}
          </Typography>
          {smallCard.price === 0 ? (
            <Typography variant="body2" color="text.secondary">
              Бесплатно
            </Typography>
          ) : (
            <Typography variant="body2" color="text.secondary">
              {smallCard.price} ₽
            </Typography>
          )}
        </CardContent>
      </Card>
    </CardActionArea>
  );
});
export default SmallCard;
