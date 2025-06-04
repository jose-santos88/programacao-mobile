import { List, IconButton } from "react-native-paper";

function TaskItem({ item }) {
  return (
    <List.Item
      title={item.descricao}
      description={item.concluida ? "Concluída" : "Pendente"}
      left={() => (
        <IconButton icon={item.concluida ? "check-circle" : "circle"} />
      )}
      right={() => <IconButton icon="delete" onPress={() => {}} />}
    />
  );
}

export default TaskItem;
