import './MovieCard.css'

const MovieCard = ({ movieDirector, movieTitle }) => {

    return (
        <article className="movie-card">
            <h4>{movieTitle}</h4>
            <p>{movieDirector}</p>
        </article>
    )
}

export default MovieCard