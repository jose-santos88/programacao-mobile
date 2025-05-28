import { SafeAreaProvider } from "react-native-safe-area-context";

import { StoreProvider } from "./contexts/StoreContext";

function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider />
    </SafeAreaProvider>
  );
}

export default App;
