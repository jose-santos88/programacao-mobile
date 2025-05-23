import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { LojaProvider } from "./contexts/LojaContext";
import MainNavigator from "./routes/MainNavigator";

function App() {
  return (
    <SafeAreaProvider>
      <LojaProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </LojaProvider>
    </SafeAreaProvider>
  );
}

export default App;
