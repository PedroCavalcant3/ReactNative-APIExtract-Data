import React, { useState, useEffect } from 'react';
import { Text, View, FlatList,SafeAreaView } from 'react-native';
import estilo from '../components/estiloRebeldes';

const request = async (callback) => {
    const response = await fetch('https://swapi.dev/api/vehicles/');
    const parsed = await response.json();
    callback(parsed.results);
  }

export default function Veiculos() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    request(setRegistros);
  },[])

  return (
    <SafeAreaView style={estilo.container}>
      <View>
        <Text style={estilo.superior}> 
        Veiculos de StarWars
        </Text>
      </View>
     
      <FlatList
      data={registros}
      keyExtractor={(item) => item.name.toString()}
      renderItem={({item}) => 
        <Text style={estilo.item}>
        <Text> Nome: {item.name}{'\n'}</Text> 
        <Text> Modelo: {item.model}{'\n'}</Text> 
        <Text> Preço: {item.cost_in_credits}{'\n'}</Text> 
      </Text>
        }/>
    </SafeAreaView>
  );
}