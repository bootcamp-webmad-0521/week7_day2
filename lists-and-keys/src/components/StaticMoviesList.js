import { Component } from "react"
import { basicMoviesFromApi } from "../fakeApi"
import MovieCard from "./MovieCard"

class StaticMoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: basicMoviesFromApi
        }
    }

    render() {
        return (
            this.state.movies.map(elm => <MovieCard key={elm.id} movieTitle={elm.title} movieDirector={elm.director} />)
        )
    }
}

export default StaticMoviesList