import { Component } from "react"
import { advancedMoviesFromApi as movies } from "../fakeApi"
import AdvancedMovieCard from "./AdvancedMovieCard"

class DynamicMoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies,
            showOscarAwareded: true
        }
    }

    removeMovie = movieId => {
        this.setState({
            movies: this.state.movies.filter(elm => elm._id !== movieId)
        })
    }

    switchFilter = () => this.setState({ showOscarAwareded: !this.state.showOscarAwareded })



    render() {

        const filteredMovies = this.state.movies.filter(elm => elm.hasOscar === this.state.showOscarAwareded)

        return (
            <>
                {
                    filteredMovies.map(elm => <AdvancedMovieCard key={elm._id} {...elm} removeMovie={() => this.removeMovie(elm._id)} />)
                }

                <button onClick={this.switchFilter} style={{ width: '100%', margin: '30px 0' }} >
                    {this.state.showOscarAwareded ? 'Mostrar películas sin Oscar' : 'Mostrar películas con Oscar'}
                </button>
            </>
        )
    }
}

export default DynamicMoviesList