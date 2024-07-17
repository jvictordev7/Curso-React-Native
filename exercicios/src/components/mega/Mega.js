import React, { Component } from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';

export default class Mega extends Component {

    state = {
        qtdeNumero: this.props.qtdeNumero
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Text style={Estilo.txtG}>
                Gerador de Mega-Sena
                {this.state.qtdeNumero}
            </Text>
        )
    }
}