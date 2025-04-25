import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import Gaveta from "./Gaveta";

const Tab = createBottomTabNavigator();

function AbaInferior() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icone;
          if (route.name == "Home") icone = "home";
          else if (route.name == "Perfil") icone = "person";
          return <MaterialIcons name={icone} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Perfil"
        options={{ headerShown: false }}
        component={Gaveta}
      />
    </Tab.Navigator>
  );
}

export default AbaInferior;
