import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { Checkbox, FormControlLabel } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router";
import Copyright from "../shared/Copyright/Copyright";
import { store } from "../../store/Store";

const SignIn: React.FC = observer(() => {
  const { login } = store.appStore;
  const [usernameOrEmail, setUsernameOrEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);

  const handleLogin = () => {
    login(usernameOrEmail, password)
      .then((e) => {
        setRedirect(e);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

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
          Вход
        </Typography>
        <TextField
          inputProps={{
            sx: {
              color: "primary.main",
            },
          }}
          margin="normal"
          required
          fullWidth
          id="usernameOrEmail"
          label="Имя пользователя или адрес электронной почты"
          name="usernameOrEmail"
          autoComplete="usernameOrEmail"
          autoFocus
          value={usernameOrEmail}
          onChange={(event) => setUsernameOrEmail(event.target.value)}
        />
        <TextField
          inputProps={{
            sx: {
              color: "primary.main",
            },
          }}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Пароль"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {/* <FormControlLabel
          control={<Checkbox value="remember" color="secondary" />}
          label="Запомнить меня"
        /> */}
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogin}
        >
          Войти
        </Button>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Copyright color="primary.main" />
      </Box>
    </Container>
  );
});

export default SignIn;
