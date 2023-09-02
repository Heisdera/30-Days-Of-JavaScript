let div = document.querySelector('.container');

const url = 'https://restcountries.eu/rest/v2/all';
const fetchData = async () => {
  try {
    const response = await fetch(url);
    countries = data;
    // country name and styling
    countries.forEach((country) => {
      if (country.name.toLowerCase() === 'nigeria') {
        let container = document.createElement('div');
        container.textContent = country.name;
        container.style.width = '140px';
        container.style.padding = '16px';
        container.style.fontSize = '40px';
        container.style.color = '#fff';
        container.style.backgroundColor = 'green';
        container.style.margin = '3px';
        div.appendChild(container);
      } else {
        let container = document.createElement('div');
        container.textContent = country.name;
        container.style.width = '140px';
        container.style.padding = '16px';
        container.style.fontSize = '40px';
        container.style.color = '#fff';
        container.style.backgroundColor = 'aqua';
        container.style.margin = '3px';
        div.appendChild(container);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

console.log('===== async and await');
fetchData();
