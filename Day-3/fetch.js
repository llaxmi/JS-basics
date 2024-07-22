const rq = fetch("https://course-api.com/react-store-products")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((e) => console.log("Error occured", error));
