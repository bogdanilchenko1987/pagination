const API_KEY = '1eec6abc1d92447a9638ef847a14c7e2';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fechArticles() {
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
    return fetch(url, options)
      .then(responce => responce.json())
      .then(data => {
        this.incrementPage();
        return data.articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
