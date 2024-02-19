// http://api.weatherapi.com/v1/forecast.json?key=a513b9e402f74148a7430930241802&q=Paris&days=3

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
search.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const { query, days } = e.currentTarget.elements;
  getWeather(query.value, days.value)
    .then(data => (list.innerHTML = createMarkup(data.forecast.forecastday)))
    .catch(err => console.log(err));
}

function getWeather(city, days) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const API_KEY = 'a513b9e402f74148a7430930241802';

  //   const params = new URLSearchParams({
  //     key: API_KEY,
  //     q: city,
  //     days: days,
  //     lang: 'uk',
  //   });
  //     console.log(params.toString());

  //   return fetch(`${BASE_URL}/forecast.json?${params}`).then

  return fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }) => `
  <li>
            <img src="${icon}" alt="${text}">
        <p>${text}</p>    
        <h2>${date}</h2>
    <h3>${avgtemp_c}</h3>
</li>
    `
    )
    .join('');
}
