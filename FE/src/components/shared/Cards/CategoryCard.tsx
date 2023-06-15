import * as React from "react";
import { observer } from "mobx-react-lite";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import ICategoryModel from "../../../models/CategoryModel";

const CategoryCard: React.FC<{
  categoryCard: ICategoryModel;
}> = observer((prop) => {
  const { categoryCard } = prop;

  return (
    <Card
      sx={{
        height: "180px",
      }}
    >
      <CardActionArea>
        {/* <CardHeader title={categoryCard.name} /> */}
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            src={`data:image/png;base64,${categoryCard.picture}`}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              // background:
              //   "linear-gradient(to top, #1c1820e0, #1d1762a3, #07a7e300)",
              background:
                "linear-gradient(to top, #000000bf, #1b1b1c7d, #3c8ca900)",
              color: "white",
              padding: "16px",
            }}
          >
            <Typography variant="body2">{categoryCard.name} </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
});
export default CategoryCard;
