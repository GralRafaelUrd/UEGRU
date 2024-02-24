/* eslint-disable react/prop-types */
import { Grid, CardMedia, CardContent, Typography, Card } from "@mui/material";

export const ActividadesItems = (props) => {
  return (
    <Grid item flex={"flex"} spacing={0} wrap="wrap" xs={10} sm={6} md={3}>
      <Card sx={"background: #2d2d2d; height: 400px;"}>
        <CardMedia
          component="img"
          height={"300px"}
          image={props.activity.img}
        />
        <CardContent>
          <Typography variant="body2" color={"#f3f3f3"}>
            {props.activity.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
