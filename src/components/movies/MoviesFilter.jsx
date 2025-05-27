export default function MoviesFilter ({text, handleChange}){
    return (
        <select className="form-select form-select-lg mb-3" aria-label="Default select example"
            value={text}
            onChange={handleChange}
            type="text"
        >
            <option label="Genere film"></option>
            <option value={text} onChange={handleChange}>Azione</option>
            <option value={text} onChange={handleChange}>Fantascienza</option>
            <option vvalue={text} onChange={handleChange}>Giallo</option>
            <option value={text} onChange={handleChange}>Horror</option>
            <option value={text} onChange={handleChange}>Romantico</option>
            <option value={text} onChange={handleChange}>Thriller</option>
        </select>
    );
}