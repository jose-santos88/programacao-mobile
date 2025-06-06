import { useContext } from "react";
import { List, IconButton } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";

function TaskItem({ task }) {
  const { updateTask, deleteTask } = useContext(TaskContext);

  return (
    <List.Item
      title={task.descricao}
      description={task.concluida ? "Concluida" : "Pendente"}
      left={() => (
        <IconButton
          icon={task.concluida ? "check-circle" : "circle"}
          onPress={async () =>
            await updateTask({ ...task, concluida: !task.concluida })
          }
        />
      )}
      right={() => (
        <IconButton
          icon="delete"
          onPress={async () => await deleteTask(task.id)}
        />
      )}
    />
  );
}

export default TaskItem;
