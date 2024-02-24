import Carousel from "react-material-ui-carousel";
import { Item } from "./Item";
import { Grid } from "@mui/material";

export const Slider = () => {
  const items = [
    {
      id: 1,
      name: "Acerca de U.E. General Rafael Urdaneta",
      description: `Descripción`,
      img: "../src/assets/Ue/about.jpeg",
    },
    {
      id: 2,
      name: "General Rafael Urdaneta",
      description: `Descripción`,
      img: "../src/assets/GRU.jpg",
    },
    {
      id: 3,
      name: "Luis Beltran Prieto Figueroa",
      description: `La escuela no puede ser reflejo de la sociedad que tenemos; la escuela debe ser reflejo de la sociedad que queremos`,
      img: "../src/assets/Ue/LB.jpg",
    },
  ];

  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      paddingBottom={"12px"}
      marginX={-1}
      bgcolor={"#2d2d2d"}
    >
      <Carousel>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
    </Grid>
  );
};
