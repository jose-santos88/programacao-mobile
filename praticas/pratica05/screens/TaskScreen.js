import { use, useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Appbar,
  List,
  TextInput,
  FAB,
  Modal,
  Button,
} from "react-native-paper";

function TaskScreen() {
  const [concluida, setConcluida] = useState(false);
  const [exibeModal, setExibeModal] = useState(false);
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Lista de Tarefas" />
      </Appbar.Header>
      <List.Item
        onPress={() => setConcluida(!concluida)}
        title="Estudar para a P1"
        right={(props) => (
          <List.Icon
            {...props}
            icon={concluida ? "check-circle-outline" : "circle-outline"}
          />
        )}
      />
      <FAB style={styles.fab} icon="plus" onPress={() => setExibeModal(true)} />
      <Modal visible={exibeModal} contentContainerStyle={styles.modal}>
        <TextInput label="Nova Tarefa" />
        <Button onPress={() => setExibeModal(false)}>Salvar</Button>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  modal: {
    backgroundColor: "white",
    padding: 16,
  },
});

export default TaskScreen;
