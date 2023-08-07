import React from 'react';
import {useState} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native';


const SRRead = () => {

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
        Sec:{
          textAlign: 'center', 
          fontWeight: 'bold',
      },
      Titulo: {
          fontWeight: 'bold',
          fontSize: 30,
          
      }
      });


      const [productos]=useState(["Guantes", "Tinte castaño", "Shampoo", "Acondicionador", "Papel punta"])



    return (
      <ScrollView style={styles.Sec}>
      <Text  style={styles.Titulo} >Leer información</Text>
      {
      productos.map(producto=>{
          return(
              <View style={styles.Contenedor}>
              <Text style={styles.Titulo}>{producto}</Text>
              </View>
          );
      })
      }
      </ScrollView>
      )
    }

export default SRRead