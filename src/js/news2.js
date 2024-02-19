import '../css/style.css';
import NewsApiService from '../js/components/news-api';
import LoadMoreBtn from '../js/components/load-more-btn';
import { createMarkup } from './helpers/createMarkup';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
};

const newsApiService = new NewsApiService();

const loadMoreBtn = new LoadMoreBtn({ selector: '[data-action="load-more"]' });
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

refs.searchForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  clearArticleContainer();
  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();

  loadMoreBtn.show();

  onLoadMore();
  // дублюється код 2 рази: тут, і в фк-ції нижче, тому просто перевикористовуємо
  //   loadMoreBtn.disable();

  //   newsApiService.fechArticles().then(articles => {
  //     appendArticle(articles);
  //     loadMoreBtn.enable();
  //   });
}

function onLoadMore() {
  loadMoreBtn.disable();

  newsApiService.fechArticles().then(articles => {
    appendArticle(articles);
    loadMoreBtn.enable();
  });
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
