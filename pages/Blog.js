import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BlogData } from "./constant/Constant";
import Button from "@mui/material/Button";

export default function Blog() {
  console.log("BlogData", BlogData);
  return (
    <Grid>
      <h1>Blog</h1>
      <Grid bgcolor={"#89C1CB"} height={500} mb={6}>
        {/* <Swiper navigation={true} modules={[Navigation]} slidesPerView={4}>
          {BlogData?.map((x) => {
            <SwiperSlide>
              <Card sx={{ width: 200 }}>
                <CardActionArea>
                  <CardContent
                  //   sx={{ backgroundColor: "#2E2F2F", minHeight: 125 }}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                        textAlign: "center",
                        color: "#046565",
                        fontWeight: "bold",
                      }}
                    >
                      {x?.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 10,
                        textAlign: "center",
                        color: "White",
                        fontWeight: "bold",
                      }}
                    >
                      {x?.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>;
          })}
        </Swiper> */}
      </Grid>

      <Grid
        bgcolor={"#89C1CB"}
        display={"flex"}
        direction={"row"}
        justifyContent={"space-around"}
        pt={1}
      >
        <Typography variant="h3" gutterBottom color={"#333333"} sx={{ mt: 1 }}>
          Get Your Frost Smile Today!
        </Typography>
        <Button
          sx={{
            backgroundColor: "#89C1CB",
            color: "#333333",
            borderColor: "black",
            height: "50px",
            mt: 1,
          }}
          variant="contained"
        >
          <b>SCHEDULE APPOINTMENT</b>
        </Button>
      </Grid>
    </Grid>
  );
}
