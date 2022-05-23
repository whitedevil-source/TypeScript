import {omdbApi} from "./api/omdbApi";
import {MovieList} from "./models/movieList";

function fetchMoviesfromOMDB()
{
    var promise = omdbApi.getMovies();

    promise.then
    (
        (movies)=>
        {
            console.log("movies",movies);

            var sortedMovieList=movies.sortByRating("rating");
            console.log("sortedMovieList",sortedMovieList);

            movies.filter("rating",3);
        },
        ()=>
        {
            console.log("Error occured while fetching movies");
            
        }
    );
}

fetchMoviesfromOMDB();