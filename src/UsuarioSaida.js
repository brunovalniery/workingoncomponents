import React, {Component} from 'react';

class UsuarioSaida extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        };
    }

    changeUser = () => {
        this.setState({
            nome: "Bruno"
        })
    }

    render() {
        return(
            <div>
               <p>Login: {this.setState}</p>
               <p>Texto só para ter referência.</p> 
            </div>
        );
    }
}

export default UsuarioSaida;