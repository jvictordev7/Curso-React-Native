import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';

import produtos from './produtos'

export default props => {
    return (
        <>
            <Text style={Estilo.txtG}>
                ListaProdutos V2
            </Text>
        </>
    );
};