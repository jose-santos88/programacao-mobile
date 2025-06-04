import { createContext, useState } from "react";
import * as TaskService from "../services/TaskService";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);

  const listarTarefas = async () => {
    const response = await TaskService.listar();
    setTarefas(response);
  };

  const criarTarefa = async (tarefa) => {
    const response = await TaskService.criar(tarefa);
    setTarefas([...tarefas, response]);
  };

  return (
    <TaskContext.Provider value={{ tarefas, listarTarefas, criarTarefa }}>
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
