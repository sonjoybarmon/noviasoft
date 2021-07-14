import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "600px",
      }}
    >
      <h5>Page Not found</h5> <br />
      <h1>404!</h1> <br />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="outlined" color="primary">
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
