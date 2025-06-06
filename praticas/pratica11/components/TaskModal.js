import { useContext, useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";

const TaskModal = ({ setShowModal }) => {
  const { addTask } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState("");
  const handleAddTask = async () => {
    await addTask({ descricao: taskTitle, concluida: false });
    setTaskTitle("");
    setShowModal(false);
  };
  const handleCancel = () => {
    setTaskTitle("");
    setShowModal(false);
  };

  return (
    <View
      style={{
        margin: 16,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
      }}
    >
      <TextInput
        label="Título da Tarefa"
        value={taskTitle}
        onChangeText={setTaskTitle}
        mode="outlined"
        style={{ marginBottom: 20 }}
      />
      <Button mode="contained" onPress={handleAddTask}>
        Adicionar Tarefa
      </Button>
      <Button mode="outlined" onPress={handleCancel} style={{ marginTop: 10 }}>
        Cancelar
      </Button>
    </View>
  );
};

export default TaskModal;
