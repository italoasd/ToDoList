import { useState } from "react";

function Todo(){
  const [task, setTask] = useState('');
  const [itemsList, setItemsList] = useState([]);

  function handleChangeInput(event){
    const inputTask = event.target.value;
    setTask(inputTask);
  }

  function handleAddItemToList(event){
    event.preventDefault();// <- importante lembrar que isso desabilita o refresh na pagina ao enviar um formulário
    if (!task) {
      //<- Se não estiver vazio, não faz nada
      return;
    }
    setItemsList([...itemsList, task])// <-Copia todos os items ja existentes e entao adiociona o novo item
    //talvez eu esqueça isso dnv, então é melhor deixar esses comentários aqui!
    setTask('');
  }

  return(
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <form onSubmit={handleAddItemToList}>
        <input 
        type="text" 
        placeholder="Adicione uma tarefa"
        onChange={handleChangeInput}
        value={task}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="todo-list">
        {itemsList.map(
          (item, index) => (
            <li key={index}>{item}</li>
          )
        )}
      </ul>
    </div>
  )
}

export default Todo;