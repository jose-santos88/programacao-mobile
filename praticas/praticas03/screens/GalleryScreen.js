import { StyleSheet, View, Text } from "react-native";

function GalleryScreen() {
  return (
    <View>
      <View>
        <Text>Galeria de Fotos</Text>
      </View>
      <View>
        <View>
          <Text>Foto 1</Text>
        </View>
        <View>
          <Text>Foto 2</Text>
        </View>
        <View>
          <Text>Foto 3</Text>
        </View>
        <View>
          <Text>Foto 4</Text>
        </View>
        <View>
          <Text>Foto 5</Text>
        </View>
        <View>
          <Text>Foto 6</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFE",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
});

export default GalleryScreen;
