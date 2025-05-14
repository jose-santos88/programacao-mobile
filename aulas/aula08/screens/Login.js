import { View } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Controller
        control={control}
        name="email"
        rules={{
          required: { value: true, message: "E-mail é obrigatorio" },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "E-mail invalido",
          },
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            error={errors.email}
          />
        )}
      />
      <HelperText type="error" visible={errors.email}>
        {errors.email?.message}
      </HelperText>
      <Controller
        control={control}
        name="senha"
        rules={{
          required: "Senha é obrigatorio",
          minLength: {
            value: 8,
            message: "Deve ter no minimo 8 caractres",
          },
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Senha"
            mode="outlined"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            error={errors.senha}
          />
        )}
      />
      <HelperText type="error" visible={errors.senha}>
        {errors.senha?.message}
      </HelperText>

      <Button
        style={{ marginBottom: 16 }}
        mode="contained"
        onPress={handleSubmit((data) => alert("ok"))}
      >
        Entrar
      </Button>
      <Button
        style={{ marginBottom: 16 }}
        mode="outlined"
        onPress={() => navigation.navigate("Recuperar Senha")}
      >
        Recuperar Senha
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Criar Conta")}
      >
        Criar Conta
      </Button>
    </View>
  );
}

export default Login;
