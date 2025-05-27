import { useState } from "react";
import movies from "../../data/Movies";
import MoviesList from "../movies/MoviesList";

export default function Main({movie}){
    const [filter, setFilter] = useState("");
    return(
        <main>
            <div className="container">
                <h1>Movies</h1>
                <select className="form-select form-select-lg mb-3" aria-label="Default select example">
                    <option selected>Genere film</option>
                    <option value="1">Azione</option>
                    <option value="2">Fantascienza</option>
                    <option value="3">Giallo</option>
                    <option value="4">Horror</option>
                    <option value="5">Romantico</option>
                    <option value="6">Thriller</option>
                </select>
                <MoviesList movies={movies}/>
            </div>
        </main>
    )
}