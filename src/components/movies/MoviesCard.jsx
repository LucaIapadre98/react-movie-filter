export default function MoviesCard ({movie}){
    return(
        <div className="col-4">
            <div className="card">
                <div className="card-header">{movie.title}</div>
                <div className="card-body">{movie.genere}</div>
            </div>
        </div>
    )
}