const URL = "https://course-api.com/react-store-products";
// Do you know how to fetch data using asyc await?

const fetchData = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log("Error: ", e);
  }
};

fetchData();
