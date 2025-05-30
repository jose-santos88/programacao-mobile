const url = "http://localhost:3000/tarefas";

// obter tarefas
await fetch(url)
  .then((Response) => Response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu Ruim Neguin!", error.message));

// obter tarefas
await fetch(`${url}/1a2b`)
  .then((Response) => Response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu Ruim Neguin!", error.message));

// criando tarefas
await fetch(url, {
  method: "POST",
  body: JSON.stringify({ nome: "Estudar React Native", concluida: false }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Deu Ruim Neguin!", error.message));
