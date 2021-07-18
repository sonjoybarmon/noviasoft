import { Container, Grid, Typography } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Link } from "react-router-dom";
import "./HeroArea.scss";
import HeroCategory from "./HeroCategory";
import { heroData } from "./heroData";
import VideoArea from "./VideoArea";
const HeroArea = () => {
  return (
    <div className="heroArea__wrapper">
      <Container>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid item md={6} sm={12} xs={12} className="heroArea_left_side">
            <div>
              <Typography variant="h3" color="primary">
                Together, we got this
              </Typography>
              <Typography variant="subtitle1" color="primary">
                2020 was a year with many challenges, and through it all our
                customers kept the heart of our communities beating. We’re proud
                to support and stand with you.
              </Typography>
              <div className="palyButton__wrapper">
                <VideoArea
                  btn={
                    <>
                      <span>
                        <PlayCircleOutlineIcon className="playButton" />
                      </span>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        style={{ fontSize: " 20px", fontWeight: "bold" }}
                      >
                        Watch the video
                      </Typography>
                    </>
                  }
                />
              </div>
            </div>
          </Grid>
          <Grid
            container
            item
            md={6}
            sm={12}
            xs={12}
            spacing={3}
            className="heroArea_right_side"
          >
            {heroData?.map((data) => (
              <Grid key={data.id} item md={4} sm={4} xs={6}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <HeroCategory data={data} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroArea;
