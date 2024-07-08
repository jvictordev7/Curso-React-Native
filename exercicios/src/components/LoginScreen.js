import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Lógica para login
        console.log('Email:', email);
        console.log('Senha:', password);
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} // URL da imagem ou use require('./path/to/image.png') para uma imagem local
                style={styles.logo}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888"
                keyboardType="email-address"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#888"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555', // Fundo cinza escuro
        padding: 100,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 40,
        borderRadius: 10
    },
    input: {
        width: 300,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#fff', // Fundo branco para inputs
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: 'black', // Cinza escuro para o botão
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        width: 100,
        textAlign: 'center'
    },
});
