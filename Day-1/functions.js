// A-1
function test(num) {
  if (num > 0) {
    console.log("positive");
  } else {
    console.log("negative");
  }
}
// test(4);

let greet = () => {
  console.log("hello");
};
// greet();

// A-2 SUM of array
var nums = [1, 1, 2, 2, 1];
const add = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log("Sum is " + sum);
};

// add(nums);

// A-3 LARGEST
var nums = [1, 2, 3, 7, 4, 5, 6];
const largest = (nums) => {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  console.log("Largest number is " + max);
};
// largest(nums);

// A-4 ODD
var nums = [1, 2, 3, 4, 5, 6];

const sumOfOdds = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 0) {
      sum = sum + nums[i];
    }
  }
  return sum;
};

// console.log(sumOfOdds(nums));

//A-5
const filterandsq = (nums) => {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      arr.push(nums[i] * nums[i]);
    }
  }
  return arr;
};

const nums = [1, 2, 3, 4];
console.log(filterandsq(nums)); // Output: [4, 16]
