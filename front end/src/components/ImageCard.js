import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 300,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
});

export default function ImageCard({ checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h1"
                className={classes.title}
              >
                Each resume template is expertly designed and follows the exact
                “resume rules” hiring managers look for. Stand out and get hired
                faster with field-tested resume templates
              </Typography>
              <CardActions>
                <Button variant="contained" color="primary" disableElevation>
                  Create My Resume
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Collapse>
  );
}
