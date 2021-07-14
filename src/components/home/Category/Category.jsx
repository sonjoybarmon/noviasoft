import { Container, Grid, Typography } from "@material-ui/core";
import "./Category.scss";
import { categoryData } from "./categoryData";
import CategorySlider from "./CategorySlider";

const Category = () => {
  return (
    <div className="category_wrapper">
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
            Category
          </Typography>
        </Grid>
        <div className="categorySlider__wrapper">
          <CategorySlider data={categoryData} />
        </div>
      </Container>
    </div>
  );
};

export default Category;
