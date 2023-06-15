import * as React from "react";
import { observer } from "mobx-react-lite";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ICommentModel from "../../../models/CommentModel";

const CommentCard: React.FC<{ comment: ICommentModel }> = observer((prop) => {
  const { comment } = prop;

  return (
    <Card>
      <CardHeader
        title={comment.userName}
        sx={{ paddingBottom: "0px" }}
        avatar={<Avatar src="img/apple.svg" />}
        subheader={comment.date.toString()}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "left",
        }}
      >
        <Typography
          sx={{
            color: "warning.light",
            fontSize: 30,
            maxWidth: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "1 0 auto",
          }}
          color="text.secondary"
          gutterBottom
        >
          {comment.rating}
          <StarRoundedIcon sx={{ fontSize: 30 }} />
        </Typography>
        <Typography
          sx={{ display: "flex", alignItems: "center", fontSize: 15 }}
          color="text.secondary"
          gutterBottom
        >
          {comment.commentText}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default CommentCard;
