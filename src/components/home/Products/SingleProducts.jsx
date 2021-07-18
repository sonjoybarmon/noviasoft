import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import SeeMore from "../../../utils/SeeMore";
import SliceText from "../../../utils/SliceText";

const SingleProducts = ({ data }) => {
  return (
    <Card className="single__products__card" boxShadow={0}>
      <CardMedia
        component="img"
        image={data?.image}
        height={200}
        width={1000}
        loading="lazy"
      />

      <CardContent>
        <Typography variant="h6" color="initial">
          <SliceText number={25}>{data.name}</SliceText>
        </Typography>

        <Typography variant="subtitle2" color="initial" gutterBottom>
          <SeeMore number={60}>{data.description}</SeeMore>
        </Typography>

        <Typography variant="body2" color="initial" gutterBottom>
          Teg :{" "}
          {data?.teg?.map((el, i) => (
            <strong key={i}>{el}</strong>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleProducts;
