import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';

const menu = [
  {
    id: 1,
    name: 'SERVICIOS ESCOLARES',
    image: { uri: 'https://cdn-icons-png.flaticon.com/512/458/458843.png' }
  },
 
];

const Formulario = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.itemText}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      
      
    </View>
  );

  return (
    
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} placeholder="NOMBRE DEL INGRESADO" />
        <TextInput style={styles.input} placeholder="APELLIDO  PATERNO" />
        <TextInput style={styles.input} placeholder="APELLIDO MATERNO" />
        <TextInput style={styles.input} placeholder="CURP" />
        <TextInput style={styles.input} placeholder="DIRECCIÓN" />
        <TouchableOpacity style={styles.button}onPress={()=>navigation.navigate("")}>
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={menu}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  itemText: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
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

export default Formulario;