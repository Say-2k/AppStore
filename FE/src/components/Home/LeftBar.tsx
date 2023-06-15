import * as React from "react";
import { observer } from "mobx-react-lite";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { store } from "../../store/Store";
// import Theme from "../shared/Theme/Theme";

const LeftBar: React.FC = observer(() => {
  const { genres, getGenres, categories, getCategories } = store.homeStore;

  React.useEffect(() => {
    getGenres();
    getCategories();
  }, [getCategories, getGenres]);

  // const drawerWidth = 240;

  return (
    // <Drawer
    //   variant="permanent"
    //   sx={{
    //     width: drawerWidth,
    //     flexShrink: 0,
    //     [`& .MuiDrawer-paper`]: {
    //       width: drawerWidth,
    //       boxSizing: "border-box",
    //     },
    //   }}
    // >
    <Box sx={{ ml: "16px" }}>
      <Button
        variant="contained"
        fullWidth
        sx={{ backgroundColor: "background.paper", mb: 2 }}
      >
        Игры
      </Button>
      <Button
        variant="contained"
        fullWidth
        sx={{ backgroundColor: "background.paper", mb: 2 }}
      >
        Приложения
      </Button>
      <Accordion key="accordionGenres">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
        >
          <Typography>Жанры</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: "300px", overflowY: "scroll" }}>
          <List key="genres">
            {genres.map((genre) => (
              <ListItemButton key={genre.id} sx={{ py: "2px" }}>
                <Typography
                  key={genre.name}
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  {genre.name}
                </Typography>
              </ListItemButton>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.secondary" }} />}
        >
          <Typography>Категории</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: "300px", overflowY: "scroll" }}>
          <List key="categories">
            {categories.map((category) => (
              <ListItemButton key={category.id} sx={{ py: "2px" }}>
                <Typography
                  key={category.name}
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  {category.name}
                </Typography>
              </ListItemButton>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
    // </Drawer>
  );
});
export default LeftBar;
