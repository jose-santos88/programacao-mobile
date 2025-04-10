import { SafeAreaProvider } from "react-native-safe-area-context";
import { TaskProvider } from "./contexts/TaskContext";

function App() {
  return <SafeAreaProvider>
    <TaskProvider />
  </SafeAreaProvider>;
}

export default App;