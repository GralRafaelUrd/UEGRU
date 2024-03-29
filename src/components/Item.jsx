/* eslint-disable react/prop-types */
import {
  Paper,
  Grid,
  Typography,
  CardMedia,
  useMediaQuery,
} from "@mui/material";

export const Item = (props) => {
  const small = useMediaQuery("(max-width: 800px)");

  return (
    <Paper>
      <Grid
        container
        spacing={0}
        flex={"flex"}
        justifyContent={"space-between"}
        color={"#f3f3f3"}
        wrap="nowrap"
        bgcolor={"#2d2d2d"}
        maxHeight={'500px'}
      >
        <Grid
          item
          spacing={0}
          padding={4}
          display={small ? "none" : "flex"}
          flexDirection="column"
        >
          <Typography variant="h3">{props.item.name}</Typography>
          <Typography variant="body1" paddingY={2} maxHeight={'450px'} width={'35vw'}>
            {props.item.description}
          </Typography>
        </Grid>
        <CardMedia
          component="img"
          height={small ? "250px" : ""}
          image={props.item.img}
        />
      </Grid>
    </Paper>
  );
};
