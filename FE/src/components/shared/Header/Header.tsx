import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
  Link,
  ThemeProvider,
  Switch,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import * as React from "react";
import { observer } from "mobx-react-lite";
import { NavList, UserNavList } from "../NavBar/NavList";
import { store } from "../../../store/Store";
import Theme from "../Theme/Theme";

const Header: React.FC = observer(() => {
  const { user } = store.appStore;

  const [anchorEl] = React.useState<HTMLElement | null>(null);

  const [isOpenUserMenu, setIsOpenUserMenu] = React.useState(false);
  const { logout, isAuth } = store.appStore;

  const handleOpenUserMenu = () => {
    setIsOpenUserMenu(true);
  };

  const handleCloseUserMenu = () => {
    setIsOpenUserMenu(false);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    // width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      // width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "8ch",
        "&:focus": {
          width: "55ch",
        },
      },
    },
  }));

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  // function ElevationScroll(props: Props) {
  //   const { children, window } = props;
  //   // Note that you normally won't need to set the window ref as useScrollTrigger
  //   // will default to window.
  //   // This is only being set here because the demo is in an iframe.
  //   const trigger = useScrollTrigger({
  //     disableHysteresis: true,
  //     threshold: 0,
  //   });

  //   return React.cloneElement(children, {
  //     elevation: trigger ? 4 : 0,
  //   });
  // }

  return (
    <ThemeProvider theme={Theme}>
      <Grid container>
        {/* <ElevationScroll> */}
        <AppBar position="fixed">
          <Toolbar disableGutters sx={{ px: 2 }}>
            <Grid item lg={2}>
              {/* лого */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  // width: "calc(16.7% - 16px)",
                  alignItems: "center",
                }}
              >
                <img
                  src={`${window.location.origin}/holo1.png`}
                  width="30px"
                  height="30px"
                  alt="logo"
                  style={{ marginRight: "19px" }}
                />
                Holoapps
              </Typography>
            </Grid>
            <Grid item lg={8}>
              {/* навбар */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  gap: "16px",
                }}
              >
                {NavList.map((nav) => (
                  <Link
                    color="text.primary"
                    sx={{
                      "&.active": {
                        borderColor: "green",
                      },
                      display: "block",
                      textDecoration: "none",
                    }}
                    href={nav.link}
                  >
                    {nav.label}
                  </Link>
                ))}
              </Box>
            </Grid>
            <Grid
              item
              lg={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Поиск…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

              {/* переключатель темы */}
              <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
              {/* меню пользователя */}
              {isAuth ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Открыть настройки">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt={user?.username}
                        src={`data:image/png;base64,${user?.icon ?? ""}`}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={isOpenUserMenu}
                    onClose={handleCloseUserMenu}
                  >
                    {UserNavList.map((setting) => (
                      <MenuItem key={setting.label}>
                        <Link
                          color="text.primary"
                          href={setting.link}
                          style={{ textDecoration: "none" }}
                        >
                          {setting.label}
                        </Link>
                      </MenuItem>
                    ))}
                    <MenuItem onClick={() => logout()}>
                      Выйти из системы
                    </MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  href="/login"
                >
                  Войти
                </Link>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
        <Toolbar />
        {/* </ElevationScroll> */}
      </Grid>
    </ThemeProvider>
  );
});

export default Header;
