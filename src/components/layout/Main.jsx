import { useEffect, useState } from "react";
import movies from "../../data/Movies";
import MoviesList from "../movies/MoviesList";
import MoviesFilter from "../movies/MoviesFilter";

export default function Main(){
    const [filter, setFilter] = useState("");
    const [filteredMovies, setFilteredMovies] = useState(movies);

    useEffect(()=>{
        const newFilteredMovies = movies.filter(movie =>
            movie.genere.includes(filter)
        );

        setFilteredMovies(newFilteredMovies);
    }, [filter])
    return(
        <main>
            <div className="container">
                <h1>Movies</h1>
                <MoviesFilter 
                    text={filter}
                    handleChange={(e) => setFilter(e.target.value)}
                />
                <MoviesList movies={filteredMovies}/>
            </div>
        </main>
    )
}