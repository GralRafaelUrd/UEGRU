import { Grid, Typography, Link, Button, useMediaQuery } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../../public/logo.jpg";
export const Footer = () => {
  const small = useMediaQuery("(max-width: 800px)");
  return (
    <>
      <Grid
        container
        justifyContent={"space-around"}
        direction={small ? "column" : "row"}
        alignItems="center"
        gap={small ? 3 : 0}
        bgcolor={"#2f2f2f"}
        padding={4}
        marginY={small ? 36 : 0}
      >
        <Grid item xs={2}>
          <img src={logo} width={160} />
          <Typography variant="h6" color={"#f3f3f3"} paddingTop={2}>
            U.E. General Rafael Urdaneta
          </Typography>
          <Typography variant="body1" color={"#f3f3f3"}>
            Rif: J-315675293
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h5" color={"#f3f3f3"}>
            Ubicación
          </Typography>
          <Typography variant="body1" color={"#f3f3f3"} paddingTop={2}>
            <LocationOnIcon /> Av Este-Oeste con calle 06, casa n° 03, Urb. La
            Isabelica, Valencia - Carabobo. Zona Postal: 2003
          </Typography>
        </Grid>
        <Grid item direction="column">
          <Typography variant="h5" color={"#f3f3f3"}>
            Contactos
          </Typography>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            paddingTop={2}
          >
            <Link
              href="https://www.facebook.com/uerafaelurdaneta.uerafaelurdaneta?mibextid=ZbWKwL"
              marginY={1}
              color={"#a8a8a8"}
            >
              <Button color={"inherit"}>
                <FacebookIcon /> Facebook
              </Button>
            </Link>
            <Link
              href="https://www.instagram.com/gnralrafaelurdaneta?igsh=YXl5bzhzaDRmOWhn"
              marginY={1}
              color={"#a8a8a8"}
            >
              <Button color={"inherit"}>
                <InstagramIcon /> Instagram
              </Button>
            </Link>
            <Link
              href="https://twitter.com/gnralrafaelurd1?lang=es"
              marginY={1}
              color={"#a8a8a8"}
            >
              <Button color={"inherit"}>
                <XIcon /> Twitter
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid item xs={1}>
            <Typography variant="h5" color={"#f3f3f3"}>
              Logos
            </Typography>
            <Grid item>
              <img src="../src/assets/logo-gobierno.png" width={"150px"} />
              <img
                src="../src/assets/ministerio.png"
                width={"150px"}
                height={"60px"}
              />
              <img
                src="../src/assets/Bicentenariopng.png"
                width={"100px"}
                height={"60px"}
              />
              <img
                src="../src/assets/escudo.png"
                width={"60px"}
                height={"60px"}
              />
            </Grid>
          </Grid> */}
    </>
  );
};
