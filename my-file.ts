function sayHello(target: { firstname: string, money: number }):string {
  return `Hello ${target.firstname}, you have ${target.money} in your account.`;
}

const message: string = sayHello({ firstname: 'John', money: 123 });