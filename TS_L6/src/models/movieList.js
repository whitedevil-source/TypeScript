export class MovieList extends Array
{
    constructor()
    {
        super();
    }

    sortByRating(sortCondition="id")
    {
        const movies=
        [
            ...this
        ]; //shallow copy

        if(sortedCondition)
        {
            //since movielist extends array so object of this class
            //will have all the data about the movies
            movies = movies.sort  //will create a shallow copy
            (
                (current,next)=>
                {
                    return current[sortCondition] - next[sortCondition];
                }
            );
        }
        return movies;
    }

    filterByRating(filterCondition, searchString) //1->5
    {
        var movies=
        [
            ...this
        ];

        movies = movies.filter
        (
            (movie)=>
            {
                return movie[filterCondition] == searchString;
            }
        );
        return movies;
    }
}