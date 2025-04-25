import { View, Text, Button } from "react-native";

function Perfil({ navigation, route }) {
  const { id, usuario } = route.params
    ? route.params
    : { id: null, usuario: null };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Perfil</Text>
      {route.params && (
        <Text>
          {id} - {usuario}
        </Text>
      )}
      <Button title="Voltar p/ Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Perfil;
