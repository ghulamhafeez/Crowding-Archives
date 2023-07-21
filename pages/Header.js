import { styles } from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";
import Box from "@mui/material/Box";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Grid
      display={"flex"}
      justifyContent={"space-around"}
      flexWrap={"wrap"}
      bgcolor={"#FAFAFA"}
      pt={3}
      md={6}
      xs={12}
      sm={4}
      position={"sticky"}
      top={0}
    >
      <Grid>
        <img
          loading="lazy"
          src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/dr-ektor-grammatopoulos-orthodontics-logo3.jpg"
          alt="dr ektor grammatopoulos orthodontics"
          height={"70%"}
          width={"70%"}
        ></img>
      </Grid>
      <Grid display={"flex"} gap={3}>
        <Button
          sx={{ backgroundColor: "#89C1CB", height: "45px" }}
          variant="contained"
        >
          <CallIcon />
        </Button>
        <Button
          sx={{ backgroundColor: "#89C1CB", height: "45px" }}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </Button>
      </Grid>

      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280 }} onClick={() => setState(false)}>
          <h3>Heloo 1</h3>
          <h3>Heloo 2</h3>
          <h3>Heloo 3</h3>
          <h3>Heloo 4</h3>
          <h3>Heloo 5</h3>
        </Box>
      </Drawer>

      <Grid display={"flex"} ml={20} mr={10} flexWrap={"wrap"} pt={5}>
        <Link href="/">
          <Typography variant="h6" gutterBottom ml={8}>
            Home
          </Typography>
        </Link>

        <Link href="/about">
          <Typography variant="h6" gutterBottom ml={8}>
            About
          </Typography>
        </Link>

        <Link href="/treatment-options">
          <Typography variant="h6" gutterBottom ml={8}>
            Treatment Options
          </Typography>
        </Link>

        <Link href="/cases-gallery">
          <Typography variant="h6" gutterBottom ml={8}>
            Cases Gallery
          </Typography>
        </Link>

        <Link href="/transformation">
          <Typography variant="h6" gutterBottom ml={8}>
            Transformation
          </Typography>
        </Link>

        <Link href="/patient-stories">
          <Typography variant="h6" gutterBottom ml={8}>
            Patient Stories
          </Typography>
        </Link>

        <Link href="/blog">
          <Typography variant="h6" gutterBottom ml={8}>
            Blog
          </Typography>
        </Link>

        <Link href="/contact">
          <Typography variant="h6" gutterBottom ml={8}>
            Contact
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}
