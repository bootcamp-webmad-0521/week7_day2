import { Component } from 'react'
import { drinks } from './../fakeApi'

class DrinksList extends Component {

    constructor() {
        super()
        this.state = {
            drinks: drinks
        }
    }

    render() {
        return this.state.drinks.map((elm, idx) => <p key={idx}>Una bebida es: {elm}</p>)
    }
}

export default DrinksList