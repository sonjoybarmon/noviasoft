import { Card, Typography } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import SliceText from "../../../utils/SliceText";
import "./Slider.scss";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BrandSlider = ({ data }) => {
  return (
    <Carousel
      responsive={responsive}
      showDots={false}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      customTransition="all .5"
    >
      {data?.map((el) => (
        <Link key={el.id} to="/" style={{ textDecoration: "none" }}>
          <Card className="brand_slider__card">
            <>
              <div className="card_image_wrapper">
                <img src={el.image} alt="" />
              </div>
              <Typography variant="subtitle1" color="initial">
                <SliceText number={18}>{el.title}</SliceText>
              </Typography>
            </>
          </Card>
        </Link>
      ))}
    </Carousel>
  );
};

export default BrandSlider;
