import { useContext, useState } from "react";
import { View, FlatList, Modal, StyleSheet } from "react-native";
import { AppBar, TextInput, Button, FAB } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";
import TaskItem from "../components/TaskItem";

function TaskScreen() {
  const { tarefas, adicionar } = useContext(TaskContext);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [exibeModal, setExibeModal] = useState(false);

  return (
    <View>
      <AppBar.Header>
        <AppBar.Content title="Lista de Tarefas" />
      </AppBar.Header>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem tarefa={item} />}
      />
      <FAB icon="plus" onPress={() => setExibeModal(true)} />
      <Modal visible={exibeModal} animationType="slide" transparent>
        <View>
          <View>
            <TextInput
              label="Nova Tarefa"
              value={novaTarefa}
              onChangeText={setNovaTarefa}
              mode="outlined"
            />
            <Button
              mode="contained"
              onPress={() => {
                if (novaTarefa.trim()) {
                  adicionar(novaTarefa);
                  setNovaTarefa("");
                  setExibeModal(false);
                }
              }}
            >
              Adicionar
            </Button>
            <Button onPress={() => setExibeModal(false)}>Cancelar</Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: { position: "absolute", buttom: 16, right: 16 },
  modal: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: { backgroundColor: "#FFFFFF", padding: 20, borderRadius: 10 },
  input: { marginBottom: 8 },
});

export default TaskScreen;
