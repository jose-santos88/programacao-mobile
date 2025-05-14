import { View, ScrollView } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as YUP from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function CriarConta() {
  const schema = YUP.object().shape({
    nome: YUP.string().required("Nome é obrigatório"),
    email: YUP.string()
      .required("E-mail é obrigatório")
      .email("E-mail é inválido"),
    senha: YUP.string()
      .required("Senha é obrigatório")
      .min(8, "Deve ter 8 caracteres"),
    confirmaSenha: YUP.string()
      .oneOf([YUP.ref("Senha"), null], "Senhas distintas")
      .required("Confirme a senha"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 16 }}>
        <Controller
          control={control}
          name="nome"
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              label="Nome"
              autoCapitalize="words"
              mode="outlined"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.nome}
            />
          )}
        />
        <HelperText type="error" visible={errors.nome}>
          {errors.nome?.message}
        </HelperText>
        <Controller
          control={control}
          name="email"
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
          render={({ field: { value, onChange } }) => (
            <TextInput
              label="Senha"
              secureTextEntry
              mode="outlined"
              value={value}
              onChangeText={onChange}
              error={errors.senha}
            />
          )}
        />
        <HelperText type="error" visible={errors.senha}>
          {errors.senha?.message}
        </HelperText>
        <Controller
          control={control}
          name="confirmaSenha"
          render={({ field: { value, onChange } }) => (
            <TextInput
              label="Confirma senha"
              mode="outlined"
              secureTextEntry
              value={value}
              onChangeText={onChange}
              error={errors.confirmaSenha}
            />
          )}
        />
        <HelperText type="error" visible={errors.confirmaSenha}>
          {errors.confirmaSenha?.message}
        </HelperText>
        <Button mode="contained" onPress={handleSubmit(() => alert("ok"))}>
          Criar
        </Button>
      </View>
    </ScrollView>
  );
}

export default CriarConta;
