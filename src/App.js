import React from "react";
import ChooseGenre from "./homePage/ChooseGenre";
import {
  Button,
  Paper,
  Typography,
  Grid,
  Box,
  Container,
  AppBar,
  Toolbar,
} from "../node_modules/@material-ui/core";
import MovieRec from "./nextPage/MovieRec";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="ChooseGenre">
        <Container maxWidth="lg">
          <Box mt="5rem">
            <Grid container spacing={2} justify="center" alignItems="center">
              <Paper
                style={{
                  textAlign: "center",
                  borderRadius: "45px",
                  height: "auto",
                  width: "65rem",
                }}
              >
                <Route path="/" exact component={ChooseGenre} />
                <Route path="/movie" component={MovieRec} />
              </Paper>
            </Grid>
          </Box>
        </Container>
      </div>
    </Router>
  );
}

export default App;
