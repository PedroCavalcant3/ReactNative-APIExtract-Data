import {createStackNavigator} from '@react-navigation/stack';

import Raiz from './buttom';
import Veiculo from './Veiculo';
import Nave from './Nave';

const Stack = createStackNavigator();

export default function FotosStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Raiz" component={Raiz}/>
      <Stack.Screen name="Veiculo" component={Veiculo} options={{title:"Veiculos"}}/>
      <Stack.Screen name="Nave" component={Nave}options={{title:"Naves"}}/>
    </Stack.Navigator>
  );
}