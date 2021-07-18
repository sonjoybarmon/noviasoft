import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import "./Team.scss";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { green } from "@material-ui/core/colors";
import { teamData } from "./teamData";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  rounded: {
    color: "#fff",
    backgroundColor: green[500],
    width: "100px",
    height: "100px",
    cursor: "pointer",
  },
}));

const Team = () => {
  const classes = useStyles();
  return (
    <div className="team__wrapper">
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
            Our Team
          </Typography>
        </Grid>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Grid container item md={10} sm={12} xs={12}>
            {teamData?.map((el) => (
              <Grid item md={2} sm={3} xs={4} key={el.id}>
                <div className={classes.root}>
                  <Tooltip
                    disableFocusListener
                    disableTouchListener
                    title={
                      <div>
                        <Typography variant="h5" color="inherit">
                          {el?.name}
                        </Typography>
                        <Typography variant="subtitle2" color="secondary">
                          {el?.position}
                        </Typography>
                      </div>
                    }
                  >
                    <Avatar
                      variant="rounded"
                      alt={el?.name}
                      src={el?.image}
                      className={classes.rounded}
                    />
                  </Tooltip>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Team;
