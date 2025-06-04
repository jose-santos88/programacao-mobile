import axios from "axios";

//Variavel de ambiente
const API_URL = process.env.EXPO_PUBLIC_API_URL;

function listar() {
  return axios
    .get(API_URL)
    .then((response) => response.data)
    .catch((error) => console.log(error.message));
}

function criar(tarefa) {
  return axios
    .post(API_URL, tarefa)
    .then((response) => response.data)
    .catch((error) => console.log(error.message));
}

export { listar, criar };
