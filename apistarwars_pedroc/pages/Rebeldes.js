import React, { useState, useEffect } from 'react';
import { Text, View, FlatList,SafeAreaView } from 'react-native';
import estilo from '../components/estiloRebeldes';

const request = async (callback) => {
    const response = await fetch('https://swapi.dev/api/people/');
    const parsed = await response.json();
    callback(parsed.results);
  }

export default function Rebeldes() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    request(setRegistros);
  },[])

  return (
    <SafeAreaView style={estilo.container}>
      <View>
        <Text style={estilo.superior}> 
        StarWas
        </Text>
      </View>
     
      <FlatList
      data={registros}
      keyExtractor={(item) => item.name.toString()}
      renderItem={({item}) => 
        <Text style={estilo.item}>
        <Text> Nome: {item.name}{'\n'}</Text> 
        <Text> Peso: {item.mass}{'\n'}</Text> 
        <Text> Peso: {item.vehicles}{'\n'}</Text> 
      </Text>
        }/>
    </SafeAreaView>
  );
}