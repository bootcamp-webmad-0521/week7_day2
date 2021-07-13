import { Component } from 'react'
import './Button.css'

class Button extends Component {

    constructor() {
        super()
        this.state = {
            submitted: false
        }
    }


    handleSubmit = () => {

        this.setState({
            submitted: true
        })
    }



    render() {
        return (
            <a
                href="https://www.google.es"
                className="button"
                style={{ color: this.state.submitted ? 'grey' : 'green' }}
                onClick={this.handleSubmit}
            >
                {this.state.submitted ? 'Enviado' : 'Enviar'}
            </a>
        )
    }
}

export default Button