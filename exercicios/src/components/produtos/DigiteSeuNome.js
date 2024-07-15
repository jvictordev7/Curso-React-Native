import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Estilo from '../estilo';

export default props => {
    return (
        <View>
            <TextInput 
                placeholder="Digite Seu Nome"
            />
        </View>
    );
};