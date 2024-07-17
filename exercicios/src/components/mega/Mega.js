import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Estilo from '../estilo';

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros || 6, // Valor padrão caso não seja passado via props
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        const qtdeNumeros = parseInt(qtde);
        this.setState({ qtdeNumeros });
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1;
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b);
        this.setState({ numeros });
    }

    render() {
        return (
            <View>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput 
                    keyboardType={'numeric'} // TECLADO NUMERICO
                    style={{borderBottomWidth: 1}}
                    placeholder='Qtde de Numeros'
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <Text>
                    {this.state.numeros.join(', ')}
                </Text>
            </View>
        );
    }
} 

