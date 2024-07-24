var obj1 = {
  name: "Laxmi",
  age: 21,
  studies: "Software Engineering",
};
//obj1.age = 10;
console.log(
  "OBJECT 1: Hi, i am " + obj1.name + ", " + obj1.age + " years old. "
);

var obj2 = new Object();
obj2.surname = "Lamichhane";
console.log("OBJECT 2: My surname is " + obj2.surname);

function student(n, age) {
  this.n = n;
  this.age = age;
}
var data = new student("Saanvi", 2);
console.log("OBJECT 3: I am " + data.n + ", I am " + data.age + " years old");
