import movies from "../../data/Movies";
import MoviesList from "../movies/MoviesList";

export default function Main(){
    return(
        <main>
            <div className="container">
                <h1>My Movies</h1>
                <MoviesList movies={movies}/>
            </div>
        </main>
    )
}