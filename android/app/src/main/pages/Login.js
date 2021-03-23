// Imports de componentes necessarios para essa pagina
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useFirebaseApp } from 'reactfire';

// Pagina de Login e suas funcoes
export default function Login({ navigation })  { 

    // Variavel para linkar o firebase ao App 
    const firebase = useFirebaseApp();

    // Variaveis de email e senha para realizar o login
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    
    
    // Variavel para linkar a area de cadastro
    const acessarCadastro = () => {
        navigation.navigate('Cadastro')
    }

    // Variavel para linkar a area de recuperar senha
    const acessarRecuperarSenha = () => {
        navigation.navigate('Recuperar Senha', {emailRecuperado : email})
    }

    // Variavel para linkar a area de termos e casos de uso
    const acessarTermosCasos = () => {
        navigation.navigate('Termos e casos de uso')
    }

    // Funcao que realiza o login comparado com o usario cadastrado no firebase, um servico da gooogle que suporta um banco de dados e API na nuvem 
    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(result => {
                localStorage.setItem('espistemicapp', result.user.refreshToken);
                console.log(result);
                alert("Login feito com sucesso!");
            })
            .catch((error) => {
                alert("Email ou senha inválidos");
            });
    }

    // Funcao que realiza o logout do usuario logado
    function logout() {
        firebase.auth().signOut().then(() => {
            alert("Logout feito com sucesso")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        // Pagina completa
        <View style={styles.loginPage}>

            <View style={styles.container}>
                <Image style={styles.image} resizeMode='contain' source={require('../assets/epistemicLogo.png')}/>
            </View>

            {/* Formulario para login */}
            <View style={styles.form}>
                {/* Email */}
                {/* Email Firebase: usuario@email.com */}
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='black'
                    onChangeText={email => setEmail(email)}
                />
                {/* Senha */}
                {/* Senha Firebase: 123456*/}
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor='black'
                    onChangeText={senha => setSenha(senha)}
                    secureTextEntry={true}
                />

                {/* Botao para logar */}
                <TouchableOpacity onPress={() => { logar() }} style={styles.button}>
                    <Text>Entrar</Text>
                </TouchableOpacity>

                {/* Botao para logout */}
                <TouchableOpacity onPress={() => { logout() }} style={styles.button}>
                    <Text >Sair</Text>
                </TouchableOpacity>

                <View style={styles.hyperlinks}>
                    {/* Botao para ir para tela de cadastro */}
                    <TouchableOpacity onPress={acessarCadastro} style={styles.link}>
                        <Text>Fazer novo cadastro</Text>
                    </TouchableOpacity>

                    {/* Botao para ir para tela de recuperar senha */}
                    <TouchableOpacity onPress={acessarRecuperarSenha} style={styles.link}>
                        <Text>Recuperar senha</Text>
                    </TouchableOpacity>

                    {/* Botao para ir para tela de termos e casos de uso*/}
                    <TouchableOpacity onPress={acessarTermosCasos} style={styles.link}>
                        <Text>Termos e casos de uso</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    loginPage: {
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
    hyperlinks: {
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center'
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

});
