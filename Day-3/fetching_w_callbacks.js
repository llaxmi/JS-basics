const URL = "https://course-api.com/react-store-products";

function fetchData(url, callBack) {
  fetch(url)
    .then((rsp) => rsp.json())
    .then((data) => callBack(data))
    .catch((e) => console.log("Error occured", e));
}

function handleData(data) {
  data.forEach((product) => {
    console.log("Product name :", product.name);
    console.log("Product price :", product.price);
  });
}

fetchData(URL, handleData);
