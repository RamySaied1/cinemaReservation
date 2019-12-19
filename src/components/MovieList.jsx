import React, { Component } from 'react';
import MovieCard from './MovieCard'

import { userContext } from '../userContext';

import { Toast } from 'react-bootstrap'





class MovieList extends Component {

    state = {
        movies: [],
    }
    componentDidMount() {
      const movies= [
          {
              "path": "joker.jpg",
              'name': 'Joker',
              'genre': "+18",
              'screen': 1,
              'times': [1, 2, 3]
            },
          {
              "path": "joker.jpg",
              'name': 'Joker',
              'genre': "+18",
              'screen': 1,
              'times': [1, 2, 3]          },
          {
              "path": "joker.jpg",
              'name': 'Joker',
              'genre': "+18",
              'screen': 1,
              'times': [1, 2, 3]
          },
          {
              "path": "joker.jpg",
              'name': 'Joker',
              'genre': "+18",
              'screen': 1,
              'times': [1, 2, 3]
          },
          {
              "path": "joker.jpg",
              'name': 'Joker',
              'genre': "+18",
              'screen': 1,
              'times':[1,2,3]
          },
        ];
    
        this.setState({
            movies: movies})
    }
    render() {
        const movies=this.state.movies;
        
        return (
            <userContext.Consumer>
                {({ user, setUser }) => {
                    return (
            <div className="row" >
                 {
                    console.log(user["name"])
                 }   
            {
                movies.map(movie =>
                    <div className="col-3">
                                        <MovieCard path={movie["path"]} name={movie["name"]} genre={movie["genre"]} times={movie["times"]} screen={movie["screen"]}/>
                    </div>
                    )
            }
            </div>
        );}}
        </userContext.Consumer>
        );
        }

}
export default MovieList;
