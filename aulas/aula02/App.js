import { useState } from "react";
import { Text, Button, StyleSheet } from "react-native";

function Titulo(props) {
  return <Text>{props.children}</Text>;
}

function App() {
  const [estado, setEstado] = useState(0);

  return (
    <>
      <Titulo>Espiritos da Estrada MC</Titulo>
      <Text style={styles.titulo}>Ola Familia</Text>
      <Text style={styles.titulo}>{estado}</Text>
      <Button title="Clique aqui" onPress={() => setEstado(estado + 1)} />
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    paddingTop: 24,
  },
});

export default App;
