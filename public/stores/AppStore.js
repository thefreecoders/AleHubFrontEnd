var EventEmitter = require("events").EventEmitter;

class AppStore extends EventEmitter {
  constructor() {
    super();
    this.state = {
      hello: 'hello world'
    }
  }

  getState() {
    return this.state.hello
  }

}

const appStore = new AppStore;

module.exports = appStore;
