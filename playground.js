class User {
  username = 'John'
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return 'Hello';
  }
}

const user_1 = new User('Max');
console.log(user_1.name);
console.log(user_1.username);
console.log(Object.getOwnPropertyNames(user_1));
console.log(Object.getOwnPropertyNames(User));
console.log(Object.getOwnPropertyNames(User.prototype));
console.log(user_1.sayHi());

class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    return this.value;
  }
}

const button_1 = new Button('Hello');
setTimeout(button_1.click, 1000)