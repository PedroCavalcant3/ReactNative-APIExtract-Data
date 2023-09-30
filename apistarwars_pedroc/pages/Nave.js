import React, { useState, useEffect } from 'react';
import { Text, View, FlatList,SafeAreaView } from 'react-native';
import estilo from '../components/estiloRebeldes';

const request = async (callback) => {
    const response = await fetch('https://swapi.dev/api/starships/');
    const parsed = await response.json();
    callback(parsed.results);
  }

export default function Nave() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    request(setRegistros);
  },[])

  return (
    <SafeAreaView style={estilo.container}>
      <View>
        <Text style={estilo.superior}> 
        Naves Espaciais
        </Text>
      </View>
     
      <FlatList
      data={registros}
      keyExtractor={(item) => item.name.toString()}
      renderItem={({item}) => 
        <Text style={estilo.item}>
        <Text> Nome: {item.name}{'\n'}</Text> 
        <Text> Modelo: {item.model}{'\n'}</Text> 
        <Text> Capacidade Max: {item.passengers}{'\n'}</Text> 
      </Text>
        }/>
    </SafeAreaView>
  );
}