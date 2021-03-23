// Imports de componentes necessarios para essa pagina
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useFirebaseApp } from 'reactfire';

// Pagina de Cadastro e suas funcoes
export default function Cadastro() {

    // Variavel para linkar o firebase ao App 
    const firebase = useFirebaseApp();

    // Variaveis de email e senha para realizar o cadastro
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)

    // Funcao que realiza o cadastro de um novo usuario no firebase
    function cadastrar() {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(result => {
                localStorage.setItem('espistemicapp', result.user.refreshToken);
                console.log(result);
                alert("Usuário cadastrado!");
            })
            .catch((error) => {
                alert("Ocorreu um erro");
            });
    }

    return (
        // Pagina completa
        <View style={styles.cadastroPage}>
            
            <View style={styles.container}>
                <Image style={styles.image} resizeMode='contain' source={require('../assets/epistemicLogo.png')}/>
            </View>

            {/* Formulario para cadastro */}
            <View style={styles.form}>
                <Text style={styles.text}>Faça o seu cadastro!</Text>
                {/* Email */}
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='black'
                    onChangeText={email => setEmail(email)}
                />
                {/* Senha */}
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor='black'
                    onChangeText={senha => setSenha(senha)}
                    secureTextEntry={true}
                />

                {/* Botao para cadastrar */}
                <TouchableOpacity onPress={() => { cadastrar() }} style={styles.button}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cadastroPage: {
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
