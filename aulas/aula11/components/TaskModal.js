import { useContext, useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";

function TaskModal({ setShowModal }) {
  const [tarefa, setTarefa] = useState("");
  const { criarTarefa } = useContext(TaskContext);

  return (
    <View
      style={{
        margin: 16,
        padding: 16,
        backgroundColor: "white",
        borderRadius: 8,
      }}
    >
      <TextInput
        style={{ marginBottom: 16 }}
        mode="outlined"
        label="Nova tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />
      <Button
        mode="contained"
        style={{ marginBottom: 8 }}
        onPress={async () => {
          await criarTarefa({ descricao: tarefa, concluida: false });
          setShowModal(false);
        }}
      >
        Adicionar
      </Button>
      <Button
        mode="outlined"
        onPress={() => {
          setShowModal(false);
        }}
      >
        Cancelar
      </Button>
    </View>
  );
}

export default TaskModal;
