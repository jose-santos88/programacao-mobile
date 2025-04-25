import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";

const Tab = createMaterialTopTabNavigator();

function AbaSuperior() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default AbaSuperior;
