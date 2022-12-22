import { makeAutoObservable } from 'mobx';

class ClickCounter {
  count = 0

  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count += 1
  }
}

export default new ClickCounter()