const numbers = [1, 2, 3, 4, 5];

const sum = (arr) => {
  let addition = 0;
  for (let i = 0; i < arr.length; i++) {
    addition += arr[i];
  }
  return addition;
};

const asyncFun = (arr) => {
  return new Promise((resolve, reject) => {
    try {
      const result = sum(arr);
      resolve(result);
    } catch (e) {
      reject("REJECTED");
    }
  });
};

asyncFun(numbers)
  .then((response) => {
    console.log("Sum is ", response);
  })
  .catch((e) => {
    console.log("Error", e);
  });

console.log("Here");
