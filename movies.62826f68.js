const e=document.querySelector(".js-list"),t=document.querySelector(".js-btn");let n=497;function o(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=14d9418a13ba1f50c8b95263b7df6dda&page=${e}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}function r(e){return e.map((({poster_path:e,title:t})=>`<li>\n        <img src="https://image.tmdb.org/t/p/w400${e}" alt="${t}">\n            <h2>${t}</h2>\n        </li>`)).join("")}t.addEventListener("click",(function(){n+=1,o(n).then((n=>{console.log(n.page),e.insertAdjacentHTML("beforeend",r(n.results)),500===n.page&&(t.hidden=!0)})).catch((e=>console.log(e)))})),o().then((n=>{e.insertAdjacentHTML("beforeend",r(n.results)),n.page!==n.total_pages&&(t.hidden=!1)})).catch((e=>console.log(e)));
//# sourceMappingURL=movies.62826f68.js.map