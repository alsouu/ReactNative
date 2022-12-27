import { makeAutoObservable } from "mobx";
import LoggerStore from "./Logger";

class Todo {
    todos = [
        { id: "01", title: "Homework1", completed: false },
        { id: "02", title: "APIMobx", completed: false },
    ];


    constructor() {
        makeAutoObservable(this);
    }

    createTodo(todo) {
        LoggerStore.createTodoLog();
        this.todos.push(todo);
    }

    deleteTodo(id) {
        LoggerStore.deleteTodoLog();
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
    completeTodo(id) {
        LoggerStore.completeTodoLog();
        this.todos = this.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
    }
}

export default new Todo();