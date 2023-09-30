import React, { useState, useEffect } from 'react';
import { Text, View, FlatList,SafeAreaView } from 'react-native';
import estilo from '../components/estiloRebeldes';

const request = async (callback) => {
    const response = await fetch('https://swapi.dev/api/planets/');
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
        Planets
        </Text>
      </View>
     
      <FlatList
      data={registros}
      keyExtractor={(item) => item.name.toString()}
      renderItem={({item}) => 
      <Text style={estilo.item}>
       <Text> Nome do planeta: {item.name}{'\n'}</Text> 
       <Text> Terreno: {item.terrain}{'\n'}</Text> 
       <Text> População: {item.population}{'\n'}</Text>
       </Text>
        }/>
   
    </SafeAreaView>
  );
}