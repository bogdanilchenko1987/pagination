// https://api.themoviedb.org/3/trending/movie/
// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
import '../css/common.css';

const BASE_URL = 'https://api.themoviedb.org/3/';
const END_POINT = 'trending/movie/day';
const API_KEY = '14d9418a13ba1f50c8b95263b7df6dda';
// ---------
const list = document.querySelector('.js-list');
const target = document.querySelector('.js-guard');
let currentPage = 498;

let options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(onInfinitLoad, options);

function onInfinitLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;
      getTrending(currentPage)
        .then(data => {
          list.insertAdjacentHTML('beforeend', createMarkup(data.results));
          if (data.page === 500) {
            observer.unobserve(target);
          }
        })
        .catch(err => console.log(err));
    }
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title }) =>
        `<li>
        <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}">
            <h2>${title}</h2>
        </li>`
    )
    .join('');
}

function getTrending(page = 1) {
  return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    }
  );
}

// якщо параметр не вказаний, то тут дефолтне значення page=1
getTrending()
  .then(data => {
    list.insertAdjacentHTML('beforeend', createMarkup(data.results));
    observer.observe(target);
  })
  .catch(err => console.log(err));
