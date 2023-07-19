import "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import Header from "./Header";
import MainHome from "./Home";
import { Tabs } from "./constant/Constant";
export default function MainLayout() {
  return (
    <Grid>
      <Header></Header>
      {/* {Tabs.map((x) => {
        <a href="">
          <Typography variant="h6" gutterBottom ml={8}>
            {x}
          </Typography>
        </a>;
      })} */}
      <Grid display={'flex'} ml={20} mr={10} gap={0} >
        <a href="">
          <Typography variant="h6" gutterBottom ml={8}>
            Home
          </Typography>
        </a>
      
        <a href="">
          <Typography variant="h6" gutterBottom ml={8}>
            About
          </Typography>
        </a>
        
        <a href="">
          <Typography variant="h6" gutterBottom ml={8}>
            Treatment Options
          </Typography>
        </a>
        
        <a href="">
          <Typography variant="h6" gutterBottom ml={8}>
            Cases Gallery
          </Typography>
        </a>
        
        <a href="">
          <Typography variant="h6" gutterBottom ml={8}>
            Transformation
          </Typography>
        </a>
        
        <a href="">
          <Typography variant="h6" gutterBottom ml={8}>
            Patient Stories
          </Typography>
        </a>
        
        <a href="">
          <Typography variant="h6" gutterBottom ml={8}>
            Blog
          </Typography>
        </a>
        
        <a href="">
          <Typography variant="h6" gutterBottom ml={8}>
            Contact
          </Typography>
        </a>
        
      </Grid>
      <Footer></Footer>
    </Grid>
  );
}
