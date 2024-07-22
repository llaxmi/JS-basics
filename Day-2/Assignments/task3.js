const animals = ["cats", "dogs", "rabbits", "mice"];
animals.forEach((animal) => {
  console.log(`${animal} : ${animal.includes("a")}`);
});

console.log("DOESNOT INCLUDE ");

const result = animals.filter((animal) => !animal.includes("a"));
console.log(result);
