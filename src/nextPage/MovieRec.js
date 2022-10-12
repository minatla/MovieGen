import React from "react";
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
import RandomMovie from "./RandomMovie";

const MovieRec = () => {
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
      <Grid item xs={12}>
          <RandomMovie /> {/* <--- Random Movie Info*/}
      </Grid>
      </Box>
    )
}

export default MovieRec;