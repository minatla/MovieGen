import { render } from "@testing-library/react";
import React, { Link } from "react";
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
import Genres from "../homePage/Genres";
// import imdb from 'imdb-api';
// // import cheerio from 'cheerio';
// // import axios from 'axios';

//Array for different genres (5 movies each for now)
var comedyArray = [
  "Palm Springs",
  "Knives Out",
  "Jumanji: The Next Level",
  "Parasite",
  "Guardians of the Galaxy",
];
var mysteryArray = [
  "Death on the Nile",
  "Midsommar",
  "Murder on the Orient Express",
  "The Lighthouse",
  "Zodiac",
];
var adventureArray = [
  "Call of the Wild",
  "Inception",
  "Interstellar",
  "Jurassic Park",
  "Moana",
];

//Gets random movie from specific genre's array
function comedyMovie() {
  var randomNumber = Math.floor(Math.random() * comedyArray.length);
  var title = comedyArray[randomNumber];

  return title;
}

class MyComponent extends React.Component {
  //Fetches data of movie from OMDb API
  componentDidMount() {
    var apikey = "ab080b30";
    var title = comedyMovie();

    fetch("http://www.omdbapi.com/?t='" + title + "'&apikey=" + apikey)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          info: data.results,
        })
      );
      console.log(this.state.info.Title);
  }
}

const RandomMovie = (props) => {

    console.log(props);
  return (
    <Typography variant="h3" color="secondary">
      Recommended Movie: <br></br>
      {comedyMovie()}
    </Typography>
  );
  };

// const genre = 'comedy';

//  class MovieList extends Component {

//     imdb.search({
//         title: 'palm'
//       }, {
//         apiKey: 'ab080b30'
//       }
//     )

//     // constructor(props) {
//     //     super(props);
//     //     this.state = { movies: [] };
//     // }
//     // /*state = {
//     //     movies: [],
//     // }; */

//     // componentDidMount() {
//     //     axios.get('https://www.imdb.com/search/title/?atitle_type=feature,tv_movie,documentary&genres=' + genre,
//     //     {
//     //         withCredentials: false,
//     //         headers:
//     //         {
//     //             'Access-Control-Allow-Origin' : '*',
//     //             'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token',

//     //         }
//     //     }).then( //res => this.setState({ movies: res.data})
//     //         urlResponse => {
//     //         const $ = cheerio.load(urlResponse.data);

//     //         $('h3.lister-item-header').each((i, element) => {
//     //             const header = $(element)
//     //             .find("a")
//     //             .text()
//     //             .split("12345")[0];
//     //             this.setState({ movies: header.data });
//     //         })
//     //     } )
//     // }

//    render() {
//         return (
//             <ul>{this.state.movies.map(movie => <li>{movie}</li>)}
//             </ul>
//         )
//     }}

export default RandomMovie;
