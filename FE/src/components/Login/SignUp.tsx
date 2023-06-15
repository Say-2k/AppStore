import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { observer } from "mobx-react-lite";
import Copyright from "../shared/Copyright/Copyright";
import { store } from "../../store/Store";

const SignUp: React.FC = observer(() => {
  const { register } = store.appStore;

  const [userName, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleRegister = () => {
    register(userName, email, password).catch((error) => {
      console.error(error);
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              inputProps={{
                sx: {
                  color: "primary.main",
                },
              }}
              autoComplete="given-name"
              name="userName"
              required
              fullWidth
              id="userName"
              label="Имя пользователя"
              autoFocus
              value={userName}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputProps={{
                sx: {
                  color: "primary.main",
                },
              }}
              required
              fullWidth
              id="email"
              label="Адрес электронной почты"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleRegister}
        >
          Зарегистрироваться
        </Button>
        {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/home" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
      </Box>
      {/* </Box> */}
      <Box sx={{ marginTop: 2 }}>
        <Copyright color="primary.main" />
      </Box>
    </Container>
  );
});

export default SignUp;
