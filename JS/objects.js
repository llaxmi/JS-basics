//object access
const car = {
  model: "Suzuki",
  year: 2020,
  color: "spacegrey",
  fuel: "petrol",
  p: "",
  get fuelget() {
    return this.fuel;
  },
  set prices(pp) {
    this.p = pp;
  },
};
car.price = 1000;
console.log(car.fuel);
console.log(car.price);

//object methods
const user = {
  name: "lax",
  age: 20,
};

function greet() {
  return "This is my greeting function ";
}

user.message = greet; //new property
console.log(`Hiii, my name is ${user.name} and ${user.age} years old.`);
console.log(user.message());
