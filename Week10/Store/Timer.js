import { makeAutoObservable } from "mobx";

class Timer {
  secondsPassed = 0;
  constructor() {
    makeAutoObservable(this);
  }

  startIncrease() {
    console.log(`timer started`);
    this.secondsPassed += 1;
  }

  stopIncrease() {
    console.log(`timer stoped`);
  }

  clearTimer() {
    console.log(`timer cleared`);
    this.secondsPassed = 0;
  }
}

export default new Timer();