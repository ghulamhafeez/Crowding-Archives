import "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Grid display={"flex"} justifyContent={"space-around"} mt={2} flexWrap={'wrap'}>
      <Grid mt={2}>
        <img
          loading="lazy"
          src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/dr-ektor-grammatopoulos-orthodontics-logo2.jpg"
          alt="dr ektor grammatopoulos orthodontics logo2"
        ></img>
      </Grid>
      <Grid mt={2} ml={60}>
        <img
          loading="lazy"
          src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2019/01/dr-ektor.png"
          alt="dr ektor grammatopoulos orthodontics logo1"
          height={"60%"}
        ></img>
      </Grid>
      <br></br>
      <Grid direction={'column'} mt={2} width={'20%'}>
      <Typography variant="h6" gutterBottom ml={8}>
          Orthodontic treatment for
        </Typography>

      <Grid display={"flex"} gap={2} pl={"2%"}>

       

        <Button
          sx={{ backgroundColor: "#ADB5B9", borderRadius: 0 ,width:'50%',fontSize: '16px'}}
          variant="contained"
          
        >
          Children
        </Button>
        <Button
          sx={{ backgroundColor: "#ADB5B9", borderRadius: 0,width:'50%',fontSize: '16px' }}
          variant="contained"
        >
          Adult
        </Button>
      </Grid>
      </Grid>
    </Grid>
  );
}
