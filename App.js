import * as React from 'react';
import { Button, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SRMain from './pantallas/SRMain';
import SRAdd from './pantallas/SRAdd';
import SRRead from './pantallas/SRRead';
import SRUpdate from './pantallas/SRUpdate';
import SRDelete from './pantallas/SRDelete';


function MainScreen() {
  return (
    <SRMain/>
  );
}

function AddScreen() {
  return (
    <SRAdd/>
  );
}

function ReadScreen() {
  return (
    <SRRead/>
  );
}

function UpdateScreen() {
  return (
    <SRUpdate/>
  );
}

function DeleteScreen() {
  return (
    <SRDelete/>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Producto" component={MainScreen} />
        <Tab.Screen name="Agregar" component={AddScreen} />
        <Tab.Screen name="Ver" component={ReadScreen} />
        <Tab.Screen name="Actualizar" component={UpdateScreen} />
        <Tab.Screen name="Eliminar" component={DeleteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}