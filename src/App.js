import React from "react";
import logo from './logo.svg';
import './App.css';

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
};

function App() {
    const [todos, setTodos] = React.useState([
        { text: "Fazer as Atividades da Quinzena" },
        { text: "Estudar para PW3" },
        { text: "Marcar Reunião para o TCC" },
        { text: "Realizar os exercícios"}
    ]);
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
