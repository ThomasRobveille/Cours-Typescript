function sayHello(target) {
    return "Hello ".concat(target.firstname, ", you have ").concat(target.money, " in your account.");
}
var message = sayHello({ firstname: 'John', money: 123 });
