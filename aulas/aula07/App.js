import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Pilha from "./routes/Pilha";
import AbaInferior from "./routes/AbaInferior";
import AbaSuperior from "./routes/AbaSuperior";
import Gaveta from "./routes/Gaveta";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AbaInferior />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
