// Imports de componentes necessarios para essa pagina
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { FirebaseAppProvider } from 'reactfire';

// Imports de paginas que ja existem no app para conseguir configurar as telas
import Login from './android/app/src/main/pages/Login';
import Cadastro from './android/app/src/main/pages/Cadastro';
import Senha from './android/app/src/main/pages/Senha';
import TermosCasos from './android/app/src/main/pages/TermosCasos'
import firebaseConfig from './android/app/src/main/utils/firebaseConfig';

// O Stack Navigator ira fazer com que as paginas tenham um nome para que todos possam ser chamadas em qualquer lugar do app
const Stack = createStackNavigator();

// Funcao que ira relecionar o componente com o seu nome "universal" no app
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Recuperar Senha" component={Senha} />
      <Stack.Screen name="Termos e casos de uso" component={TermosCasos} />
    </Stack.Navigator>
  );
}

// Colocando para funcionar a nossa nomeação
export default function App() {
  return (
    <NavigationContainer>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <MyStack />
      </FirebaseAppProvider>
    </NavigationContainer>
  )
}