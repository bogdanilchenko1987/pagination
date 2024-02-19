import '../css/style.css';
import NewsApiService from '../js/components/news-api';
import { createMarkup } from './helpers/createMarkup';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSubmit(e) {
  e.preventDefault();

  clearArticleContainer();
  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  //////////////////////////////// appendArticle - це колбек, без аргум, те ж саме, що articles => appendArticle(articles)
  newsApiService.fechArticles().then(appendArticle);
}

function onLoadMore() {
  newsApiService.fechArticles().then(appendArticle);
}

function appendArticle(articles) {
  refs.articlesContainer.insertAdjacentHTML(
    'beforeend',
    createMarkup(articles)
  );
}

function clearArticleContainer() {
  refs.articlesContainer.innerHTML = '';
}
