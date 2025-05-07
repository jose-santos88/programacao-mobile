import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";

function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  const validaEmail = () => {
    if (!email) {
      setErro("E-mail é obrigatório");
      return false;
    }

    if (!email.includes("@")) {
      setErro("E-mail inválido");
      return false;
    }

    setErro("");
    return true;
  };

  const trataDigitar = (text) => {
    setEmail(text);
    validaEmail();
  };

  const trataEnviar = () => {
    if (!validaEmail()) {
      return;
    }

    setEmail("");
    alert("E-mail enviado");
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        label="E-mail"
        mode="outlined"
        value={email}
        onChangeText={trataDigitar}
        keyboardType="email-address"
        autoCapitalize="none"
        error={erro}
      />
      <HelperText type="error" visible={erro}>
        {erro}
      </HelperText>
      <Button mode="contained" onPress={trataEnviar}>
        Enviar
      </Button>
    </View>
  );
}

export default RecuperarSenha;
