import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

function ContactScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Contatos" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ContactScreen;
