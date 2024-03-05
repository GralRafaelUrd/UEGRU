import Grid from "@mui/material/Grid";
import { ActividadesItems } from "./ActividadesItems";
import Typography from "@mui/material/Typography";
import vacunacion2 from "../../public/Ue/vacunacion02.jpeg";
import strong from "../../public/Ue/strong.jpeg";
import cultivo from "../../public/Ue/cultivo.jpeg";
import premilitar from "../../public/Ue/premilitar.jpeg";

const activity = [
  {
    id: 1,
    description: "Vacunación",
    img: vacunacion2,
  },
  {
    id: 2,
    description: "Strong",
    img: strong,
  },
  {
    id: 3,
    description: "Cultivo",
    img: cultivo,
  },
  {
    id: 4,
    description: "Premilitar",
    img: premilitar,
  },
];

export const Actividades = () => {
  return (
    <>
      <Grid sx={"width: 100vw"} marginTop={10}>
        <Typography align="center" variant="h2" color="initial">
          Actividades
        </Typography>
      </Grid>
      <Grid
        container
        flex={"flex"}
        direction={"row"}
        justifyContent={"space-around"}
        spacing={2}
        wrap="wrap"
        marginTop={"30px"}
      >
        {activity.map((activity) => (
          <ActividadesItems key={activity.id} activity={activity} />
        ))}
      </Grid>
    </>
  );
};
