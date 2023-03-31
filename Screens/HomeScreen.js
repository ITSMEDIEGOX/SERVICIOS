import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Formulario")} > 
        <Text style={styles.buttonText}>FORMULARIO</Text>
        <img src='https://cdn-icons-png.flaticon.com/512/149/149719.png'
        style={styles.imagen}>
        </img>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#CC0033',
    padding: 16,
    margin: 10,
    borderRadius: 5,
    width: 300,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  imagen: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

export default Home;