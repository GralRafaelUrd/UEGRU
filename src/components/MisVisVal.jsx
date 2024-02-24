import { Grid, CardContent, Typography } from "@mui/material";

export const MisVisVal = () => {
  return (
    <>
      <Grid container marginTop={10}>
        <Grid sx={"width: 100vw"} paddingBottom={2}>
          <Typography align="center" variant="h2" color="initial">
            Misión, Visión y Valores
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          height={"500px"}
          direction="row"
          justifyContent="space-evenly"
          wrap="wrap"
        >
          <CardContent>
            <Typography
              paddingY={2}
              align="center"
              variant="h4"
              color="initial"
            >
              Misión
            </Typography>
            <Typography width={"300px"} variant="body1" color="initial">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              iusto mollitia eius blanditiis. Debitis blanditiis, nobis at
              veritatis tenetur sequi!
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              paddingY={2}
              align="center"
              variant="h4"
              color="initial"
            >
              Visión
            </Typography>
            <Typography width={"300px"} variant="body1" color="initial">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              iusto mollitia eius blanditiis. Debitis blanditiis, nobis at
              veritatis tenetur sequi!
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              paddingY={2}
              align="center"
              variant="h4"
              color="initial"
            >
              Valores
            </Typography>
            <Typography width={"300px"} variant="body1" color="initial">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              iusto mollitia eius blanditiis. Debitis blanditiis, nobis at
              veritatis tenetur sequi!
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
};
