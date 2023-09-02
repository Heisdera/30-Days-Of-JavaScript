const URL = 'https://api.thecatapi.com/v1/breeds';
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    const catNames = data.map(({ name }) => {
      return name;
    });
    console.log(catNames);
  })
  .catch((error) => console.log(error));
