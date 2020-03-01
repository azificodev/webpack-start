
import './styles.css';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';
import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// const tarea = new Todo('aprender js');

// todoList.nuevoTodo(tarea);

console.log('todos',todoList.todos);

//crearTodoHtml( tarea );

todoList.todos.forEach( todo => crearTodoHtml( todo ) );