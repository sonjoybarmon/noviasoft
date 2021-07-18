import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import Avatar from "@material-ui/core/Avatar";

const SingleTestimonial = ({ data }) => {
  return (
    <Grid
      container
      spacing={1}
      justify="center"
      alignItems="center"
      alignContent="center"
    >
      <Grid item md={8} sm={12} xs={12}>
        <Card className="testimonial__card">
          <CardContent>
            <Typography variant="h5" color="textSecondary">
              {data.title}
            </Typography>

            <CardHeader
              avatar={<Avatar alt={data?.author} src={data?.image} />}
              title={data?.author}
              subheader={data?.company}
              className="testimonial__media"
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SingleTestimonial;
