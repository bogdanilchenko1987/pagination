!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var i={headers:{Authorization:"1eec6abc1d92447a9638ef847a14c7e2"}},a=function(){"use strict";function r(){e(t)(this,r),this.searchQuery="",this.page=1}return e(n)(r,[{key:"fechArticles",value:function(){var e=this,t="".concat("https://newsapi.org/v2","/everything?q=").concat(this.searchQuery,"&language=en&pageSize=5&page=").concat(this.page);return fetch(t,i).then((function(e){return e.json()})).then((function(t){return e.incrementPage(),t.articles}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),r}(),s=function(){"use strict";function r(n){var i=n.selector,a=n.hidden,s=void 0!==a&&a;e(t)(this,r),this.refs=this.getRefs(i),s&&this.hide()}return e(n)(r,[{key:"getRefs",value:function(e){var t={};return t.button=document.querySelector(e),t.label=t.button.querySelector(".label"),t.spinner=t.button.querySelector(".spinner"),t}},{key:"enable",value:function(){this.refs.button.disabled=!1,this.refs.label.textContent="Показать ещё",this.refs.spinner.classList.add("is-hidden")}},{key:"disable",value:function(){this.refs.button.disabled=!0,this.refs.label.textContent="Загружаем...",this.refs.spinner.classList.remove("is-hidden")}},{key:"show",value:function(){this.refs.button.classList.remove("is-hidden")}},{key:"hide",value:function(){this.refs.button.classList.add("is-hidden")}}]),r}();function c(e){return e.map((function(e){var t=e.url,n=e.urlToImage,r=e.title,i=e.author,a=e.description;return'  <li>\n    <a href="'.concat(t,'" target="_blank" rel="noopener noreferrer">\n      <article>\n        <img src="').concat(n,'" alt="" width="480">\n        <h2>').concat(r,"</h2>\n        <p>Posted by: ").concat(i,"</p>\n        <p>").concat(a,"</p>\n      </article>\n    </a>\n  </li>")})).join("")}var o={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles-container")},u=new a,l=new s({selector:'[data-action="load-more"]'});function f(){l.disable(),u.fechArticles().then((function(e){!function(e){o.articlesContainer.insertAdjacentHTML("beforeend",c(e))}(e),l.enable()}))}l.refs.button.addEventListener("click",f),o.searchForm.addEventListener("submit",(function(e){e.preventDefault(),o.articlesContainer.innerHTML="",u.query=e.currentTarget.elements.query.value,u.resetPage(),l.show(),f()}))}();
//# sourceMappingURL=news2.d403e1c8.js.map
