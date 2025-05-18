import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import CadastroScreen from './cadastro';
import HomeScreen from './home';
import LoginScreen from './login';

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
