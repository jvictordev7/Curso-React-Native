import React from 'react'
import { Text } from 'react-native';

export default props => {
    return (
        <>
            <Text>[Inicio] Membros da Família:</Text>
            {props.children}
            <Text>[Final]Membros da Família:</Text>
        </>
    );
};