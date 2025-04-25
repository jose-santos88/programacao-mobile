import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";

const Drawer = createDrawerNavigator();

function Gaveta() {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        drawerIcon: ({ color, size }) => {
          let icone;
          if (route.name == "Home") {
            icone = "home";
          } else if (route.name == "Perfil") {
            icone = "person";
          }
          return <MaterialIcons name={icone} size={size} color={color} />;
        },
      })}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
}

export default Gaveta;
