import { TodoContext } from '../TodoContext';
import './TodoCouter.css';
import React from 'react';

function TodoCounter() {
  const {
    completedTodos, 
    totalTodos
  } = React.useContext(TodoContext)

    return(
      <h1 className="TodoCouter">
        Has completado {completedTodos} de {totalTodos} To Do
      </h1>
    );
  }

  export { TodoCounter }