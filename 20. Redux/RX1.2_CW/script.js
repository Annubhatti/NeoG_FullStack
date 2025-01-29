import { createStore } from "redux";
import todosReducer from "./todosReducer";
import { addTodo, removeTodo } from "./actions";

const store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    updateTodoList();
})

const todoInput = document.querySelector("#todoInput");
const addTodos = document.querySelector("#addTodo");
const todoList = document.querySelector("#todoList");

const addTodoHandler = () =>{
    const todoValue = todoInput.value;
    if(todoValue){
        store.dispatch(addTodo(todoValue));
    }
};

window.removeTodoHandler = (index) => {
    store.dispatch(removeTodo(index));
};

addTodos.addEventListener('click', addTodoHandler);

const updateTodoList = () => {
    const state = store.getState();
    todoList.innerHTML = state.todos.map((todo, index) => {
        return `<li>${todo} <button onclick="removeTodoHandler(${index})">Remove</button></li>`;
    }).join("");
};

updateTodoList();

