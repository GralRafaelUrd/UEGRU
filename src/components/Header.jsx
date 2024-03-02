import { useState, useEffect } from "react";
import { Button, Link, Typography, Grid, useMediaQuery } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsFixed(true) : setIsFixed(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const small = useMediaQuery("(max-width: 850px)");

  return (
    <Grid
      container
      flex={"flex"}
      width={"100vw"}
      justifyContent={small ? "center" : "space-between"}
      paddingX={4}
      paddingY={1}
      marginX={-1}
      marginTop={-1}
      bgcolor={"white"}
      zIndex={"100"}
      position={isFixed ? "fixed" : ""}
    >
      <Grid container xs={small ? 11 : 8} wrap="nowrap" alignItems={"center"}>
        <img
          width={small ? "30px" : "50px"}
          src="../public/logo.jpg"
          alt="logo"
        />
        <Typography
          variant={small ? "h6" : "h4"}
          color="initial"
          marginX={2}
          fontWeight={700}
        >
          U.E. General Rafael Urdaneta
        </Typography>
      </Grid>
      <Grid item display={small && isFixed ? "none" : "inherit"}>
        <Link
          paddingX={1}
          href="https://twitter.com/gnralrafaelurd1?lang=es"
          target="_blank"
        >
          <Button color="inherit">
            <Typography paddingTop={1} variant="body1" color="initial">
              <XIcon fontSize="small" />
            </Typography>
          </Button>
        </Link>
        <Link
          paddingX={1}
          href="https://www.facebook.com/uerafaelurdaneta.uerafaelurdaneta?mibextid=ZbWKwL"
          target="_blank"
        >
          <Button color="inherit">
            <Typography paddingTop={1} variant="body1" color="initial">
              <FacebookIcon />
            </Typography>
          </Button>
        </Link>
        <Link
          paddingX={1}
          href="https://www.instagram.com/gnralrafaelurdaneta?igsh=YXl5bzhzaDRmOWhn"
          target="_blank"
        >
          <Button color="inherit">
            <Typography paddingTop={1} variant="body1" color="initial">
              <InstagramIcon />
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
