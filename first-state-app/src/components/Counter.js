import { Component } from "react"

class Counter extends Component {
    constructor() {
        super()
        this.state = { countValue: 0 }
    }

    handleCounter = () => {

        if (this.state.countValue < 5) {
            this.setState({
                countValue: this.state.countValue + 1
            })
        }
    }

    render() {
        return (
            <>
                <h5 style={{ color: this.state.countValue < 5 ? 'black' : 'red' }}>El contador ha aumentado {this.state.countValue} veces</h5>
                <button
                    onClick={this.handleCounter}
                    style={{ cursor: this.state.countValue < 5 ? 'pointer' : 'not-allowed' }}
                >
                    {this.state.countValue < 5 ? 'Aumentar' : 'Límite alcanzado'}
                </button>
            </>
        )
    }
}

export default Counter