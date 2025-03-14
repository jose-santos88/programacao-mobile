import { Text, View, StyleSheet } from "react-native";

function App() {
  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
    },
    appBar: {
      height: 50,
      backgroundColor: "#333",
      justifyContent: "center",
      paddingLeft: 16,
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <AppBar titulo="Minha Aplicação React Native" />
      <View style={styles.container}></View>
    </View>
  );

  function AppBar(props) {
    return (
      <View style={styles.appBar}>
        <Text style={styles.title}>
          {props.titulo}
        </Text>
      </View>
    );
  }
}

export default App;
