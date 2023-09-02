// Level 1
const url = 'https://restcountries.com/v2/all'; // countries api
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    const result = [
      ...data.map((country) => {
        const { name, capital, languages, population, area } = country;
        return { name, capital, languages, population, area };
      }),
    ];
    console.log(result);
  })
  .catch((error) => console.log(error));
