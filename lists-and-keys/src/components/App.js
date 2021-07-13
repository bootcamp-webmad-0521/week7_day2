import './App.css'
import DrinksList from './DrinksList'
import DynamicMoviesList from './DynamicMoviesList'
import StaticMoviesList from './StaticMoviesList'


const App = () => {

  return (

    <main>

      <h2>Listado de películas (dinámico)</h2>
      <DynamicMoviesList />

      <hr />
      <h2>Listado de películas (estático)</h2>
      <StaticMoviesList />


      <hr />
      <h2>Listado de bebidas</h2>
      <DrinksList />
    </main>

  )
}

export default App