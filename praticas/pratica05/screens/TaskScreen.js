import { useState } from "react";
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
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState("");
  const [concluida, setConcluida] = useState(false);
  const [exibeModal, setExibeModal] = useState(false);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Tarefas" />
      </Appbar.Header>
      <List.Item
        onPress={() => setConcluida(!concluida)}
        title="Estudar para a prova"
        right={(props) => (
          <List.Icon
            {...props}
            icon={concluida ? "check-circle-outline" : "circle-outline"}
          />
        )}
      />
      <FAB onPress={() => setExibeModal(true)} icon="plus" style={styles.fab} />
      <Modal visible={exibeModal}>
        <View style={styles.modal}>
          <TextInput
            label="Nova Tarefa"
            onChangeText={(text) => setTarefa(text)}
          />
          <Button
            onPress={() => {
              setTarefas([...tarefas, tarefa]);
              setExibeModal(false);
            }}
          >
            Salvar
          </Button>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
  modal: {
    backgroundColor: "white",
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
});

export default TaskScreen;
