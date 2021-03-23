// Imports de componentes necessarios para essa pagina
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useFirebaseApp } from 'reactfire';

// Pagina de Cadastro e suas funcoes
export default function TermosCasos() {

    return (
        // Pagina completa
        <View style={styles.cadastroPage}>
            
            <View style={styles.container}>
                <Image style={styles.image} resizeMode='contain' source={require('../assets/epistemicLogo.png')}/>
            </View>

            {/* Formulario para cadastro */}
            <View style={styles.textContent}>
                <Text style={styles.text}>Lorem ipsum pellentesque convallis justo aenean velit sed varius platea bibendum, 
                fermentum a per accumsan malesuada dapibus leo tempus pharetra etiam, himenaeos eleifend iaculis enim eget ut suspendisse nunc vivamus. 
                lobortis velit semper inceptos vel eleifend potenti viverra, ipsum vivamus maecenas tincidunt non semper, 
                ultricies sit sagittis sociosqu per orci. blandit nibh nisl eleifend facilisis felis cubilia facilisis dictumst,
                euismod pretium massa metus curabitur sollicitudin sociosqu, vel praesent sollicitudin accumsan molestie fermentum eros. 
                nunc curabitur consectetur viverra velit ut rutrum lacinia per aptent, praesent leo commodo ornare malesuada etiam nisl sit, 
                ante lacinia himenaeos quis eu nunc ultrices posuere. </Text>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cadastroPage: {
        backgroundColor: '#0E4075',
        height: '100%'
    },
    textContent: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 250,
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 30,
        height: '65%'
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
        fontSize: 14,
        marginLeft: 14,
        marginRight: 14
    }
});
