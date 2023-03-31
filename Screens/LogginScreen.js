import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Loggin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri:'https://besthqwallpapers.com/Uploads/4-5-2020/131585/thumb2-red-abstract-waves-4k-minimal-red-wavy-background-material-design.jpg'}}
        style={styles.header}>
        <Text style={styles.heading}>SERVICIOS ESCOLARES</Text>
      </ImageBackground>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="CORREO ELECTRONICO" />
        <TextInput style={styles.input} placeholder="CONTRASEÑA" secureTextEntry={true} />

        <TouchableOpacity style={styles.button}onPress={()=>navigation.navigate("Home")}>
          <Text style={styles.buttonText}>INICIO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    width: '100%',
    height: 200,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#121616',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
    marginTop: 40,
    width: '90%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#CC0033',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#050608',
    fontWeight: 'bold',
  },
});

export default Loggin;