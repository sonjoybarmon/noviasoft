import React from "react";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";
import "./Testimonial.scss";
import SingleTestimonial from "./SingleTestmonial";
import { testimonialData } from "./testmonialData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonial = () => {
  return (
    <div className="testimonial__wrapper">
      <Container>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Typography variant="h4" color="secondary">
            Our Testimonial
          </Typography>
        </Grid>

        <div>
          <Carousel
            responsive={responsive}
            showDots={true}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customTransition="all .5"
            arrows={false}
          >
            {testimonialData?.map((el) => (
              <SingleTestimonial data={el} key={el.id} />
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
