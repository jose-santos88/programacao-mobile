import { useContext, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Appbar, Modal, FAB } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";
import TaskItem from "../components/TaskItem";
import TaskModal from "../components/TaskModal";

function TaskScreen() {
  const [showModal, setShowModal] = useState(false);
  const { tarefas, listarTarefas } = useContext(TaskContext);

  useEffect(() => {
    const carregar = async () => {
      await listarTarefas();
    };
    carregar();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Tarefas" />
      </Appbar.Header>
      <View style={{ flex: 1, paddingBottom: 24 }}>
        <FlatList
          data={tarefas}
          keyExtractor={(item) => item.id}
          renderItem={TaskItem}
        />
      </View>
      <FAB
        icon="plus"
        style={{ position: "absolute", right: 16, bottom: 16 }}
        onPress={() => setShowModal(true)}
      />
      <Modal visible={showModal}>
        <TaskModal setShowModal={setShowModal} />
      </Modal>
    </View>
  );
}

export default TaskScreen;
