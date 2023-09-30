import {Button, Text, View, StyleSheet} from 'react-native';

export default function Imperio(props){
  return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Seja Bem vindo!</Text>
    

    <Button 
    title="Veiculos do StarWars"
    onPress={() => props.navigation.navigate('Veiculo')}
    />

    <Button 
    title="Naves do StarWars"
    onPress={() => props.navigation.navigate('Nave')}
    />

    </View>
  );
}

const styles =  StyleSheet.create({
container:{
  flex: 1,
  justifyContent:'center',
  alignItems:'center'
},
titulo:{
  fontSize: 25,
  color: '#ff00ab'
  }
})