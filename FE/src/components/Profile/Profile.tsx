import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Image from "mui-image";
import Header from "../shared/Header/Header";
import Theme from "../shared/Theme/Theme";
import { store } from "../../store/Store";

const Profile: React.FC = observer(() => {
  const { user } = store.appStore;
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      {/* <Grid
        container
        spacing={2}
        sx={{
          marginTop: 0,
          marginLeft: 0,
          paddingBottom: "16px",
          justifyContent: "center",
          width: "100%",
        }}
      > */}
      <Grid container spacing={2} justifyContent="center" pt={4} pb={2}>
        <Grid item lg={5}>
          <Card>
            {/* <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            > */}
            <Box
              component="form"
              noValidate
              display="flex"
              flexDirection="column"
              padding={2}
              gap={2}
              // onSubmit={handleSubmit}
            >
              <Typography component="h1" variant="h5" textAlign="center">
                Данные профиля
              </Typography>
              <Button type="submit" variant="contained" sx={{ my: 2 }}>
                Редактировать
              </Button>
              <TextField
                FormHelperTextProps={{ sx: { color: "primary.main" } }}
                inputProps={{
                  sx: {
                    color: "primary.main",
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "primary.main",
                  },
                }}
                id="userName"
                name="userName"
                label={user?.username}
                helperText="Ваш никнейм"
                autoComplete="given-name"
                required
                fullWidth
                autoFocus
                disabled
              />
              <TextField
                FormHelperTextProps={{ sx: { color: "primary.main" } }}
                inputProps={{
                  sx: {
                    color: "primary.main",
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "primary.main",
                  },
                }}
                required
                fullWidth
                id="email"
                label={user?.email}
                helperText="Ваш адрес электронной почты"
                name="email"
                autoComplete="email"
                disabled
              />
              {/* <TextField
                inputProps={{
                  sx: {
                    color: "primary.main",
                  },
                }}
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="new-password"
              /> */}
            </Box>
            {/* </Box> */}
          </Card>
        </Grid>
        <Grid item lg={3}>
          <Card>
            <Box sx={{ padding: 2 }}>
              <Image
                height="340px"
                src={`data:image/png;base64,${user?.icon ?? ""}`}
                style={{
                  borderRadius: "2%",
                  border: `2px solid ${Theme.palette.primary.main}`,
                }}
              />
              <Typography
                paddingTop={2}
                variant="h6"
                fontWeight="medium"
                align="center"
                // textTransform="capitalize"
              >
                {user?.username}
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
});

export default Profile;
