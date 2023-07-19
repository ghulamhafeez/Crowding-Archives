import "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Grid textAlign={"center"}>
      <img
        loading="lazy"
        src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/dr-ektor-grammatopoulos-orthodontics-logo3.jpg"
        alt="dr ektor grammatopoulos orthodontics"
        height={"60%"}
      />
      <Grid pt={3}>
      <Typography variant="h6" gutterBottom>
        020 7935 0357
      </Typography>
      <Typography variant="h6" gutterBottom>
        info@ektorgrammatopoulos.com
      </Typography>
      </Grid>
      <Grid pt={3} pb={2}>
      <Typography variant="h6" gutterBottom>
        Lister House, 11-12 Wimpole Street,
      </Typography>
      <Typography variant="h6" gutterBottom>
        London, W1G 9ST
      </Typography>
      </Grid>
      <img
        loading="lazy"
        src="https://www.ektorgrammatopoulos.com/wp-content/themes/drektor/images/instagram.png"
      />
      <Typography pt={6} variant="caption" display="block" gutterBottom>
        Copyright © Dr Ektor Grammatopoulos |Site last updated: 26 August 2021|Cookie Settings{" "}
        <br></br>
         Made by Digimax Dental Marketing.
      </Typography>
    </Grid>
  );
}
