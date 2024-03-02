import Grid from "@mui/material/Grid";
import { ActividadesItems } from "./ActividadesItems";
import Typography from "@mui/material/Typography";

const activity = [
  {
    id: 1,
    description: "Vacunación",
    img: "../public/Ue/vacunacion02.jpeg",
  },
  {
    id: 2,
    description: "Strong",
    img: "../public/Ue/strong.jpeg",
  },
  {
    id: 3,
    description: "Cultivo",
    img: "../public/Ue/cultivo.jpeg",
  },
  {
    id: 4,
    description: "Premilitar",
    img: "../public/Ue/premilitar.jpeg",
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
