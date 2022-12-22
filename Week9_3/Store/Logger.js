import { makeAutoObservable } from "mobx";

class Logger {
    constructor() {
        makeAutoObservable(this);
    }

    createTodoLog() {
        console.log(`create note`);
    }

    deleteTodoLog() {
        console.log(`delete note`);
    }

    completeTodoLog() {
        console.log(`complete note`);
    }
}

export default new Logger();