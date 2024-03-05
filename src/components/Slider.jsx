import Carousel from "react-material-ui-carousel";
import { Item } from "./Item";
import { Grid } from "@mui/material";
import about from "../../public/Ue/about.jpeg";

export const Slider = () => {
  const items = [
    {
      id: 1,
      name: "Acerca de U.E. General Rafael Urdaneta",
      description: `Se Identifica como una institución pública, dependiente del órgano rector Ministerio del Poder Popular para la Educacion Venezolana, que integra a todos los niños, niñas en edad preescolar y escolar, al servicio de las comunidades que giran en su entorno, de dependencia Nacional integrada en el territorio escolar N° 81405005 del Centro de desarrollo Escolar Rafael Urdaneta.`,
      img: about,
      // img: "../public/Ue/about.jpeg",
    },
    {
      id: 2,
      name: "General Rafael Urdaneta",
      description: `Rafael José Urdaneta Farías (La Cañada de Urdaneta, 24 de octubre de 1788-París, 23 de agosto de 1845) fue un militar, prócer, estratega y político venezolano. Ejerció de facto la presidencia de la Gran Colombia entre el 4 de septiembre de 1830 al 2 de mayo de 1831, asumiendo el poder en representación de Simón Bolívar.`,
      img: "../public/GRU.jpg",
    },
    {
      id: 3,
      name: "Luis Beltran Prieto Figueroa",
      description: `La escuela no puede ser reflejo de la sociedad que tenemos; la escuela debe ser reflejo de la sociedad que queremos`,
      img: "../public/Ue/LB.jpg",
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
