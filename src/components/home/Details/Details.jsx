import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Details.scss";
import { detailsData } from "./DetailsData";
import SingleCard from "./SingleCard";
const Details = () => {
  return (
    <div className="Details_wrapper">
      <Container>
        <Grid container spacing={2}>
          {detailsData?.map((el) => (
            <Grid key={el.id} item md={4} sm={6} xs={12}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <SingleCard data={el} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Details;
