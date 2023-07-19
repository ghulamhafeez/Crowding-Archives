

import "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Footer from './Footer'
import Header from "./Header";
import MainHome from "./Home";
export default function MainLayout() {
  return (
    <Grid >
<Header></Header>
<MainHome></MainHome>
<Footer></Footer>
    </Grid>
  );
}





