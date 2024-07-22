// function compute(action, x, y) {
//   if (action === "add") {
//     return x + y;
//   } else if (action === "divide") {
//     return x / y;
//   }
// }

// console.log(compute("add", 2, 3));
// console.log(compute("divide", 6, 3));

//callback functions
function add(x, y) {
  return x + y;
}
function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

function subtract(x, y) {
  return x - y;
}

function compute(callback, x, y) {
  return callback(x, y);
}

console.log(compute(add, 2, 3));
console.log(compute(divide, 6, 3));
console.log(compute(multiply, 2, 3));
console.log(compute(subtract, 2, 3));
