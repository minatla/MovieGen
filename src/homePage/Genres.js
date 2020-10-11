import React, { useState } from "../../node_modules/react";
import { createStore } from 'redux';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
} from "../../node_modules/@material-ui/core";
import RandomMovie from "../nextPage/RandomMovie";


    const Cover = [
      {
        url: "https://i.postimg.cc/htP6XDjG/Icon-Action.png",
        title: "action",
      },
      {
        url: "https://i.postimg.cc/kgJGDbKt/Icon-Adventure.png",
        title: "adventure",
      },
      {
        url: "https://i.postimg.cc/Y0TNMxhg/Icon-Comedy.png",
        title: "comedy",
      },
      {
        url: "https://i.postimg.cc/jS061ZVY/Icon-Drama.png",
        title: "drama",
      },
      {
        url: "https://i.postimg.cc/0QQ7S4SD/Icon-Family.png",
        title: "family",
      },
      {
        url: "https://i.postimg.cc/cCtY98XJ/Icon-Fantasy.png",
        title: "fantasy",
      },
      {
        url: "https://i.postimg.cc/rmPxN9Gb/Icon-Foreignn.png",
        title: "foreign",
      },
      {
        url: "https://i.postimg.cc/NfTCLyBY/Icon-Horror.png",
        title: "horror",
      },
      {
        url: "https://i.postimg.cc/jqDF0g1D/Icon-Romance.png",
        title: "romance",
      },
      {
        url: "https://i.postimg.cc/7bvzpYWn/Icon-Sci-Fi.png",
        title: "sci-Fi",
      },
      {
        url: "https://i.postimg.cc/BZRwq5WM/Icon-Thriller.png",
        title: "thriller",
      },
    ];
  

const genState = (genre) => {
  const [gen, setGen] = useState('');

  const change = () => {
    setGen(genre);
  }
  return change
}

//Each genre's Button
const getGenreCard = Cover.map((genre) => {
  return (
    <Grid item>
      <Button href="/movie" onClick={<RandomMovie genre={genState(genre.title)}/>}>
        {/* <RandomMovie genre={genre.title}></RandomMovie> */}
        <Card style={{ backgroundColor: "white" }}>
          {/* when outputting an image, add style tags to it */}
          <Box mt="5px" mx="5px">
            <CardMedia style={{ height: 130, width: 130 }} image={genre.url} />
            <CardContent>{genre.title}</CardContent>
          </Box>
        </Card>
      </Button>
    </Grid>
  );
});




const Genres = () => {    //changed from const to class so I can do the state thing to move to randomMovie
    const [gen, setGen] = useState(genState())
  return (
    <Grid container spacing={8} justify="center" alignItems="center">
      {getGenreCard}
    </Grid>
  );
};

export default Genres;
