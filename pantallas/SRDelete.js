import React from 'react';
import {useState} from 'react'
import {View, StyleSheet, TextInput} from 'react-native';


const SRDelete = () => {

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


    return (
        <View style={styles.Contenedor}>

        <TextInput
        style={styles.input}
        placeholder="Producto"
        />

        <TextInput
        style={styles.input}
        placeholder="Categoria"
        />


        </View>
      )
}

export default SRDelete