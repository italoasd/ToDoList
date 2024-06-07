import { useState } from "react";

function Todo() {
  const [task, setTask] = useState('');
  const [itemsList, setItemsList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;
    setTask(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault(); // <- importante lembrar que isso desabilita o refresh na página ao enviar um formulário
    if (!task) {
      // <- Se estiver vazio, não faz nada
      return;
    }
    setItemsList([...itemsList, { text: task, completed: false }]); // <- Copia todos os itens já existentes e então adiciona o novo item
    // Talvez eu esqueça isso de novo, então é melhor deixar esses comentários aqui!
    setTask('');
  }

  function handleToggleComplete(index) {
    const newList = itemsList.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItemsList(newList);
  }

  function handleDeleteItem(index) {
    const newList = itemsList.filter((item, i) => i !== index);
    setItemsList(newList);
  }

  return (
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
        {itemsList.map((item, index) => (
          <li key={index} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            {item.text}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <button
              onClick={() => handleDeleteItem(index)}
              style={{ marginLeft: '10px', padding: '5px' }}
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
