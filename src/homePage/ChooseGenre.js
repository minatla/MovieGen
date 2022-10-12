import React from "../../node_modules/react";
//import logo from "./logo.svg";
import {
  Button,
  Paper,
  Typography,
  Grid,
  Box,
  Container,
  AppBar,
  Toolbar,
} from "../../node_modules/@material-ui/core";
import Genres from "./Genres.js";

function ChooseGenre() {
  const genre = "poop";
  return (
    <Box my="2rem" mx="2rem">
      <Grid item xs={12} style={{ justify: "center" }}>
                                            {/* makes "MovieGen" two-toned */}
        <Typography variant="h2" color="primary" display="inline">
          Movie
        </Typography>
        <Typography variant="h2" style={{ color: "#ff76b6" }} display="inline">
          Gen
        </Typography>
      </Grid>
      <Grid item xs="auto">
        <Typography variant="h6" color="secondary">
          Don’t know what movie to watch? Choose a genre and we’ll suggest one
          to you!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box mt="2rem">
          <Genres genre = {genre}/> {/* <--- Genre Buttons*/}
        </Box>
      </Grid>
    </Box>
  );
}
export default ChooseGenre;
