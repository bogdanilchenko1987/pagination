!function(){var t="https://api.themoviedb.org/3/",n="trending/movie/day",e="14d9418a13ba1f50c8b95263b7df6dda",o=document.querySelector(".js-list"),r=document.querySelector(".js-guard"),c=498,i=new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&u(c+=1).then((function(t){o.insertAdjacentHTML("beforeend",a(t.results)),500===t.page&&n.unobserve(r)})).catch((function(t){return console.log(t)}))}))}),{root:null,rootMargin:"300px",threshold:1});function a(t){return t.map((function(t){var n=t.poster_path,e=t.title;return'<li>\n        <img src="https://image.tmdb.org/t/p/w300'.concat(n,'" alt="').concat(e,'">\n            <h2>').concat(e,"</h2>\n        </li>")})).join("")}function u(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("".concat(t).concat(n,"?api_key=").concat(e,"&page=").concat(o)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))}u().then((function(t){o.insertAdjacentHTML("beforeend",a(t.results)),i.observe(r)})).catch((function(t){return console.log(t)}))}();
//# sourceMappingURL=movies2.f6b3e3c2.js.map