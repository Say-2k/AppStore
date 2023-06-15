import * as React from "react";
import { observer } from "mobx-react-lite";
import { Box, Link } from "@mui/material";

const Copyright: React.FC<{ color: string }> = observer((props) => {
  const { color } = props;
  return (
    <Box color={color} display="flex" justifyContent="center">
      {"Copyright © "}
      <Link
        key="Copyright"
        sx={{ color: { color }, textDecoration: "none" }}
        href="/home"
      >
        Holoapps
      </Link>
      {new Date().getFullYear()}.
    </Box>
    // <Typography variant="body2" color={color} align="center">
    //   {"Copyright © "}
    //   <Link
    //     key="Copyright"
    //     sx={{ color: { color }, textDecoration: "none" }}
    //     href="/home"
    //   >
    //     Holoapps
    //   </Link>
    //   {new Date().getFullYear()}.
    // </Typography>
  );
});

export default Copyright;
