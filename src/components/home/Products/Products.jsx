import React from "react";
import "./Products.scss";
import SingleProducts from "./SingleProducts";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container, Button } from "@material-ui/core";
import { productData } from "./ProductData";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="products__wrapper">
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
          <Typography variant="h4" color="initial">
            Best Products
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          {productData?.slice(0, 8).map((el) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={el?.id}>
              <SingleProducts data={el} />
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Link
            to="/products"
            style={{ textDecoration: "none", marginTop: "20px" }}
          >
            <Button variant="outlined" color="secondary">
              View All Products
            </Button>
          </Link>
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
