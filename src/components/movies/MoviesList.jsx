import MoviesCard from "./MoviesCard";

export default function MoviesList({ movies }){
    return(
        <div className="row g-3">
            {movies.map((movie, index) =>(
                <MoviesCard movie={movie} key={index}/>
            ))}
        </div>
    );
}