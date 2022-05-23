import { httpMethod } from "../enum/httpMethod";
import { endpoints } from "../enum/restEndpoint";
import { Movie } from "../models/movie";
import { MovieList } from "../models/movieList";

export class omdbApi
{
    static getMovies()
    {
        return new Promise
        (
            (resolve,reject) =>
            {
                const xhr = new XMLHttpRequest();

                xhr.open
                (
                    httpMethod.get,
                    endpoints.omdb,
                    true //async call
                );

                xhr.onload = ()=>
                {
                    try
                    {
                        const data = JSON.parse(xhr.response);
                        var movies = new MovieList();
                        this.mapMovies(data,movies);
                        resolve(movies);
                    }
                    catch(ex)
                    {
                        console.log(ex);
                        reject();
                    }
                }

                xhr.send();
            }
        );
    }
    static mapMovies(data=[],moviesList)
    {
        data.forEach
        (
            (item,index) =>
            {
                var movie=new Movie();
                movie.load(item);
                moviesList.push(movie);
            }
        )
    }

}
