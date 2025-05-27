import movies from "../../data/Movies";

export default function Main(){
    return(
        <main>
            <div className="container">
                <h1>My Movies</h1>
                <div className="row g-3">
                    {movies.map((movie) =>(
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header">{movie.title}</div>
                                <div className="card-body">{movie.genere}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}