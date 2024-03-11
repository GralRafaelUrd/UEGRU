import { Header, Slider, Actividades, MisVisVal, Footer } from "./components";
import { Grid } from "@mui/material";
import "@fontsource/roboto/400.css";

export const App = () => {
  return (
    <Grid
      justifyContent="center"
      alignContent="stretch"
      width="100%"
      overflow="hidden"
    >
      <Header />
      <Slider />
      <Actividades />
      <MisVisVal />
      <Footer />
    </Grid>
  );
};
