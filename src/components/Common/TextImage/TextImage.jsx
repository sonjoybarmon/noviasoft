import { Container, Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./TextImage.scss";

const TextImage = ({ title, subtitle, btnText, image, btnStyle }) => {
  return (
    <div className="TextImage_wrapper" style={{ background: `url(${image})` }}>
      <Container>
        <Grid container spacing={1}>
          <Grid item md={6} sm={8} xs={12}>
            <Typography
              variant="h2"
              color="initial"
              className="TextImage_title"
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              color="initial"
              className="TextImage_subtitle"
            >
              {subtitle}
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="default"
                className="textImage_button"
                style={btnStyle}
              >
                {btnText}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TextImage;
