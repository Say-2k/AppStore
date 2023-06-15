import React from "react";
import { Box, CssBaseline, Divider, Link } from "@mui/material";
import { observer } from "mobx-react-lite";
import Copyright from "../Copyright/Copyright";

const Footer: React.FC = observer(() => (
  <Box
    component="footer"
    bgcolor="primary.main"
    sx={{
      py: 3,
      px: 2,
      mt: "auto",
    }}
  >
    <CssBaseline />
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Link
        href="/home"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        HoloApps
      </Link>
      <Divider color="grey" orientation="vertical" flexItem />
      <Link
        href="/dev"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        HoloDev
      </Link>
      <Box sx={{ marginLeft: "auto" }}>
        <Copyright color="white" />
      </Box>
    </Box>
  </Box>
));

export default Footer;
