import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Brands.scss";
import { Container, Grid } from "@material-ui/core";
import { brandsData } from "./brandsData";
import BrandSlider from "./BrandSlider";
const Brands = () => {
  return (
    <div className="brands_wrapper">
      <Container>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
          <Typography variant="h4" color="primary">
            Our Featured Brands
          </Typography>
        </Grid>
        <div>
          <BrandSlider data={brandsData} />
        </div>
      </Container>
    </div>
  );
};

export default Brands;
