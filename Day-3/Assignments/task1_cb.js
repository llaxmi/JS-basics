const naturalN = [1, 2, 3, 4];
const sumN = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += naturalN[i];
  }
  // const sum = naturalN.reduce((acc, curr) => acc + curr);
  console.log(sum);
};

const callbackFn = (cbName, arr) => {
  return cbName(arr);
};

callbackFn(sumN, naturalN);
