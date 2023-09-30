import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from "@expo/vector-icons";

import Home from './Home';
import Rebeldes from './Rebeldes';
import ImperioStack from './ImperioStack';

const Tab = createBottomTabNavigator();

export default function RoutesTab(){
  return(
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor:"#000"}}>

        <Tab.Screen name="Home" component={Home} options={{tabBarLabel:'Home', tabBarIcon:({color,size})=> (<MaterialCommunityIcons name="magazine-pistol" color={color} size={size} />)}}/>

        <Tab.Screen name="Rebeldes" component={Rebeldes} options={{tabBarLabel:'Rebeldes', tabBarIcon:({color,size})=> (<MaterialCommunityIcons name="sword-cross" color={color} size={size} />) }} />

        <Tab.Screen name="Imperio" component={ImperioStack} options={{tabBarLabel:'Império', tabBarIcon:({color,size})=> (<MaterialCommunityIcons name="death-star" color={color} size={size} />) }}/>
  
    </Tab.Navigator>
  )

}
