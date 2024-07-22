//promise creation
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("RESOLVED");
    reject("REJECTED");
  }, 2000);
});

promise
  .then((response) => {
    console.log("Response", response);
  })
  .catch((e) => {
    console.log("Error", e);
  });

console.log("Hello");
