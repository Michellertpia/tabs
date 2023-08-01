import React from 'react';
import {useState} from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native';
import { db } from '../Server/Conexion';
import { collection, addDoc } from "firebase/firestore";


const SRAdd = () => {

    const styles = StyleSheet.create({
        Contenedor:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
      });


      const [elementos, setelement]=useState({
        producto:'',
        precio:'',
        existencia:'',
        categoria:''
      })

      const capturar =(atrib,valor) =>{
        setelement({...elementos,[atrib]:valor})
        console.log(elementos)
        }

        function mostrar (){
        alert ("El producto esta añadido");
        }

    return (
        <View style={styles.Contenedor}>

       <Button title="Leer" onPress={()=>mostrar()}>Alerta</Button>

        <TextInput
        style={styles.input}
        placeholder="Producto"
        onChangeText={(value)=>capturar('producto',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Precio"
        onChangeText={(value)=>capturar('precio',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Existencia"
        onChangeText={(value)=>capturar('existencia',value)}
        />

        <TextInput
        style={styles.input}
        placeholder="Categoria"
        onChangeText={(value)=>capturar('categoria',value)}
        />


        </View>
      )
}

export default SRAdd