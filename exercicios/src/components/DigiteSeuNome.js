import React, { useState} from 'react';
import { Text, TextInput, View } from 'react-native';
import Estilo from './estilo';

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput 
                placeholder="Digite Seu Nome"
                value={nome} //null digitar liver
                onChangeText={nome => setNome(nome)}
            />
        </View>
    );
};