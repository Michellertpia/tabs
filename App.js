import * as React from 'react';
import { Button, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SRMain from './pantallas/SRMain';

function PrincipalScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Principal</Text>
      <Button
        title="Ir a ajustes"
        onPress={() => navigation.navigate('Ajustes')}
      />
    </View>
  );
}

function AjustesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ajustes</Text>
      <Button
        title="Ir a perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil</Text>
      <Button
        title="Ir a principal"
        onPress={() => navigation.navigate('Principal')}
      />
    </View>
  );
}


function MainScreen() {
  return (
    <SRMain/>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Principal" component={PrincipalScreen} />
        <Tab.Screen name="Ajustes" component={AjustesScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
        <Tab.Screen name="Producto" component={MainScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}