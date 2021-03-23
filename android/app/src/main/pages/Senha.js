// Imports de componentes necessarios para essa pagina
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

// Pagina de Redefinição de Senha e suas funcoes
export default function Senha({route}) {

    // Variaveil de email para redefinir a senha
    const [email, setEmail] = useState(email)

    // Variavel para recuperar o email digitado no login
    const emailLogin = route.params.emailRecuperado;

    const alerta = () => {
        alert("Mensagem enviada para o email com sucesso!")
    }

    return (
        // Pagina completa
        <View style={styles.senhaPage}>

            <View style={styles.container}>
                <Image style={styles.image} resizeMode='contain' source={require('../assets/epistemicLogo.png')}/>
            </View>

            {/* Input para digitar o email para o sistema conseguir enviar a mensagem para redefenir a senha */}
            <View style={styles.form}>
                <Text style={styles.text}>Para resetar sua senha digite seu email!</Text>
                <TextInput
                    style={styles.input}
                    placeholder={emailLogin}
                    placeholderTextColor='black'
                    onChangeText={email => setEmail(email)}
                />

                {/* Botao para enviar o email*/}
                <TouchableOpacity onPress={alerta} style={styles.button}>
                    <Text>Enviar mensagem no email</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    senhaPage: {
        backgroundColor: '#0E4075',
        height: '100%'
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 250,
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 30,
        height: '65%'
    },
    input: {
        width: 250,
        padding: 3,
        fontSize: 17,
        borderBottomWidth: 2,
        color: 'black',
        borderColor: '#E86D33',
        marginTop: 30
    },
    button: {
        marginTop: 20,
        backgroundColor: '#E86D33',
        width: 260,
        padding: 12,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginTop: 40,
        marginBottom: -190,
        width: 300,
        height: 200,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 17,
    }
});
