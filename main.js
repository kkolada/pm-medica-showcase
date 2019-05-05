(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"container\">\n    <div class=\"content px-4 py-5\">\n      <h4 class=\"page-title\">\n      <span>\n        <fa-icon icon=\"quote-left\"></fa-icon>\n      </span>\n        {{ 'aboutPage.title' | translate }}\n      </h4>\n\n      <div class=\"page-content\">\n        Firma PM-Medica zajmuje się dystrybucją nici chirurgicznych. Do swojej oferty wprowadza również inne artykuły medyczne (szczegóły wkrótce na stronie internetowej). Firma działa na rynku od ponad dziesięciu lat, a dzięki rzetelności i doświadczeniu oferuje najtańszą i najlepszą ofertę nici chirurgicznych wterynaryjnych w Polsce. Już niedługo w ofercie pojawią się zestawy do nauki szycia - zachęcamy do zakupów!\n\n        <h6>Dlaczego PM-Medica?</h6>\n\n        <ul>\n          <li>\n            <fa-icon icon=\"coins\"></fa-icon>\n            <span class=\"title\">Najniższa cena</span>\n            <br>\n            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius sed eros ut porttitor. Integer vel dolor mattis, tincidunt mauris et, porttitor dolor. Nam congue ut ipsum ut mattis. Vestibulum quam ex, rutrum at imperdiet in, consequat quis eros.</div>\n          </li>\n          <li>\n            <fa-icon icon=\"paper-plane\"></fa-icon>\n            <span class=\"title\">Szybka wysyłka</span>\n            <br>\n            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius sed eros ut porttitor. Integer vel dolor mattis, tincidunt mauris et, porttitor dolor. Nam congue ut ipsum ut mattis. Vestibulum quam ex, rutrum at imperdiet in, consequat quis eros.</div>\n          </li>\n          <li>\n            <fa-icon icon=\"thumbs-up\"></fa-icon>\n            <span class=\"title\">Najlepsza jakość</span>\n            <br>\n            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius sed eros ut porttitor. Integer vel dolor mattis, tincidunt mauris et, porttitor dolor. Nam congue ut ipsum ut mattis. Vestibulum quam ex, rutrum at imperdiet in, consequat quis eros.</div>\n          </li>\n          <li>\n            <fa-icon icon=\"mobile-alt\"></fa-icon>\n            <span class=\"title\">Nowoczesny wygląd</span>\n            <br>\n            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius sed eros ut porttitor. Integer vel dolor mattis, tincidunt mauris et, porttitor dolor. Nam congue ut ipsum ut mattis. Vestibulum quam ex, rutrum at imperdiet in, consequat quis eros.</div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * VARIABLES\n */\n/* fonts */\n/* colors */\n/* miscellaneous */\n/* buttons */\n.page {\n  background-color: #f1f1f1;\n  background-image: linear-gradient(45deg, #f1f1f1, #ffffff); }\n.content .page-title {\n  font-weight: 600;\n  text-transform: uppercase; }\n.content .page-title span {\n    margin-right: .25rem;\n    border-bottom: 3px solid #13bfb1; }\n.content .page-title span fa-icon {\n      position: relative;\n      top: -1rem;\n      font-size: .75rem; }\n.content .page-content {\n  margin-top: 2rem;\n  font-weight: 300;\n  text-align: justify; }\n.content .page-content h6 {\n    margin: 3rem 0 1rem 0;\n    font-weight: 600;\n    text-transform: uppercase;\n    text-align: center; }\n.content .page-content ul {\n    list-style: none;\n    padding: 0;\n    text-align: center;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: stretch; }\n.content .page-content ul li {\n      margin-top: 2rem;\n      display: block;\n      flex-basis: 22%; }\n@media screen and (max-width: 992px) {\n        .content .page-content ul li {\n          flex-basis: 45%; } }\n@media screen and (max-width: 768px) {\n        .content .page-content ul li {\n          flex-basis: 100%; } }\n.content .page-content ul li .title {\n        font-size: 1.2rem;\n        font-weight: 400;\n        text-align: center; }\n.content .page-content ul li fa-icon {\n        font-size: 3rem;\n        display: block;\n        color: #13bfb1; }\n.content .page-content ul li div {\n        text-align: justify;\n        font-size: .8rem;\n        font-weight: 300;\n        margin-top: .5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yua29sYWRhL1dvcmtzcGFjZS9wbS1tZWRpY2Evc3JjL3N0eWxlcy9wbS1tZWRpY2EtY3VzdG9tLnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2tyenlzenRvZi5rb2xhZGEvV29ya3NwYWNlL3BtLW1lZGljYS9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FERUYsVUFBQTtBQUtBLFdBQUE7QUFtQkEsa0JBQUE7QUFJQSxZQUFBO0FFNUJBO0VBQ0UseUJBSDZCO0VBSTdCLDBEQUFzRixFQUFBO0FBR3hGO0VBRUksZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBO0FBSDdCO0lBTU0sb0JBQW9CO0lBQ3BCLGdDRk5XLEVBQUE7QUVEakI7TUFVUSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLGlCQUFpQixFQUFBO0FBWnpCO0VBa0JJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFwQnZCO0lBdUJNLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQixFQUFBO0FBMUJ4QjtJQThCTSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixvQkFBb0IsRUFBQTtBQXBDMUI7TUF1Q1EsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxlQUFlLEVBQUE7QUFFZjtRQTNDUjtVQTRDVSxlQUFlLEVBQUEsRUF5QmxCO0FBdEJDO1FBL0NSO1VBZ0RVLGdCQUFnQixFQUFBLEVBcUJuQjtBQXJFUDtRQW9EVSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGtCQUFrQixFQUFBO0FBdEQ1QjtRQTBEVSxlQUFlO1FBQ2YsY0FBYztRQUNkLGNGM0RPLEVBQUE7QUVEakI7UUFnRVUsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVkFSSUFCTEVTXG4gKi9cblxuLyogZm9udHMgKi9cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbi8qIGNvbG9ycyAqL1xuJHByaW1hcnk6ICMxM2JmYjEgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAjOTg5ODk4ICFkZWZhdWx0O1xuJGFjY2VudDogI2YzNjQzOCAhZGVmYXVsdDtcbiRsaWdodDogI2ZmZmZmZiAhZGVmYXVsdDtcbiRsaWdodC1kYXJrOiAjNTQ1NDU0ICFkZWZhdWx0O1xuJGRhcms6ICMyZTJmMzcgIWRlZmF1bHQ7XG4kZGFya2VyOiAjMWQxZjI3ICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcbiAgXCJhY2NlbnRcIjogJGFjY2VudCxcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwibGlnaHQtZGFya1wiOiAkbGlnaHQtZGFyayxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcImRhcmtlclwiOiAkZGFya2VyXG4pO1xuXG4vKiBtaXNjZWxsYW5lb3VzICovXG4kZW5hYmxlLWdyYWRpZW50czogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogdHJ1ZSAhZGVmYXVsdDtcblxuLyogYnV0dG9ucyAqL1xuJGJ0bi1mb250LXNpemU6IC45cmVtICFkZWZhdWx0O1xuLy8kYnRuLWxpbmUtaGVpZ2h0OiAyICFkZWZhdWx0O1xuLy8kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuLy8kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnRuLWhlcm8tcGFkZGluZy15OiAuNXJlbSAhZGVmYXVsdDtcbiRidG4taGVyby1wYWRkaW5nLXg6IDJyZW0gIWRlZmF1bHQ7XG5cbi8vIGhlcm8gYnRuXG4kYnRuLW91dGxpbmUtYm9yZGVyLXdpZHRoOiAzcHggIWRlZmF1bHQ7XG4kYnRuLWhlcm8tZm9udC13ZWlnaHQ6IGJvbGQgIWRlZmF1bHQ7XG4kYnRuLWhlcm8tYm9yZGVyLXJhZGl1czogMCAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4zcyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuQGltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGluc1wiO1xuXG4kdGhlbWUtY29sb3JzOiBtYXAtcmVtb3ZlKCR0aGVtZS1jb2xvcnMsIFwiaW5mb1wiKTtcbiIsIi8qKlxuICogVkFSSUFCTEVTXG4gKi9cbi8qIGZvbnRzICovXG4vKiBjb2xvcnMgKi9cbi8qIG1pc2NlbGxhbmVvdXMgKi9cbi8qIGJ1dHRvbnMgKi9cbi5wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjFmMWYxLCAjZmZmZmZmKTsgfVxuXG4uY29udGVudCAucGFnZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgLmNvbnRlbnQgLnBhZ2UtdGl0bGUgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxM2JmYjE7IH1cbiAgICAuY29udGVudCAucGFnZS10aXRsZSBzcGFuIGZhLWljb24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogLjc1cmVtOyB9XG5cbi5jb250ZW50IC5wYWdlLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XG4gIC5jb250ZW50IC5wYWdlLWNvbnRlbnQgaDYge1xuICAgIG1hcmdpbjogM3JlbSAwIDFyZW0gMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jb250ZW50IC5wYWdlLWNvbnRlbnQgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLmNvbnRlbnQgLnBhZ2UtY29udGVudCB1bCBsaSB7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmbGV4LWJhc2lzOiAyMiU7IH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5jb250ZW50IC5wYWdlLWNvbnRlbnQgdWwgbGkge1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTsgfSB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuY29udGVudCAucGFnZS1jb250ZW50IHVsIGxpIHtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlOyB9IH1cbiAgICAgIC5jb250ZW50IC5wYWdlLWNvbnRlbnQgdWwgbGkgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgLmNvbnRlbnQgLnBhZ2UtY29udGVudCB1bCBsaSBmYS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICMxM2JmYjE7IH1cbiAgICAgIC5jb250ZW50IC5wYWdlLWNvbnRlbnQgdWwgbGkgZGl2IHtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvcG0tbWVkaWNhLWN1c3RvbVwiO1xuXG4kcGFnZS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuXG4ucGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwYWdlLWJhY2tncm91bmQtY29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgJHBhZ2UtYmFja2dyb3VuZC1jb2xvciwgdGhlbWUtY29sb3IoJ2xpZ2h0JykpO1xufVxuXG4uY29udGVudCB7XG4gIC5wYWdlLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICBzcGFuIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLjI1cmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKTtcblxuICAgICAgZmEtaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtMXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBhZ2UtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbiAgICBoNiB7XG4gICAgICBtYXJnaW46IDNyZW0gMCAxcmVtIDA7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICAgbGkge1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxleC1iYXNpczogMjIlO1xuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgJ21kJykpIHtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZhLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb2xvcjogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");







var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'products',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pm-header></pm-header>\n<router-outlet></router-outlet>\n<pm-footer></pm-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        translate.addLangs(['pl']);
        translate.setDefaultLang('pl');
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
        // Add an icon to the library for convenient access in other components
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__["far"]);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_20__["ProductsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_22__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]
            ],
            providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());

// required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"container\">\n    <div class=\"content px-4 py-5\">\n      <h4 class=\"page-title\">\n      <span>\n        <fa-icon icon=\"quote-left\"></fa-icon>\n      </span>\n        {{ 'contactPage.title' | translate }}\n      </h4>\n\n      <div class=\"page-content\">\n        W razie pytań, bądź chęci złożenia telefonicznego zamówienia zapraszmy do kontaktu - szczegółowa mapa dojazdu wraz z numerem telefonu i adresem mailowym zawarta została poniżej.\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * VARIABLES\n */\n/* fonts */\n/* colors */\n/* miscellaneous */\n/* buttons */\n.page {\n  background-color: #f1f1f1;\n  background-image: linear-gradient(45deg, #f1f1f1, #ffffff); }\n.content .page-title {\n  font-weight: 600;\n  text-transform: uppercase; }\n.content .page-title span {\n    margin-right: .25rem;\n    border-bottom: 3px solid #13bfb1; }\n.content .page-title span fa-icon {\n      position: relative;\n      top: -1rem;\n      font-size: .75rem; }\n.content .page-content {\n  margin-top: 2rem;\n  font-weight: 300;\n  text-align: justify; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yua29sYWRhL1dvcmtzcGFjZS9wbS1tZWRpY2Evc3JjL3N0eWxlcy9wbS1tZWRpY2EtY3VzdG9tLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9rcnp5c3p0b2Yua29sYWRhL1dvcmtzcGFjZS9wbS1tZWRpY2Evc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QURFRixVQUFBO0FBS0EsV0FBQTtBQW1CQSxrQkFBQTtBQUlBLFlBQUE7QUU1QkE7RUFDRSx5QkFINkI7RUFJN0IsMERBQXNGLEVBQUE7QUFHeEY7RUFFSSxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7QUFIN0I7SUFNTSxvQkFBb0I7SUFDcEIsZ0NGTlcsRUFBQTtBRURqQjtNQVVRLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsaUJBQWlCLEVBQUE7QUFaekI7RUFrQkksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVkFSSUFCTEVTXG4gKi9cblxuLyogZm9udHMgKi9cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbi8qIGNvbG9ycyAqL1xuJHByaW1hcnk6ICMxM2JmYjEgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAjOTg5ODk4ICFkZWZhdWx0O1xuJGFjY2VudDogI2YzNjQzOCAhZGVmYXVsdDtcbiRsaWdodDogI2ZmZmZmZiAhZGVmYXVsdDtcbiRsaWdodC1kYXJrOiAjNTQ1NDU0ICFkZWZhdWx0O1xuJGRhcms6ICMyZTJmMzcgIWRlZmF1bHQ7XG4kZGFya2VyOiAjMWQxZjI3ICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcbiAgXCJhY2NlbnRcIjogJGFjY2VudCxcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwibGlnaHQtZGFya1wiOiAkbGlnaHQtZGFyayxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcImRhcmtlclwiOiAkZGFya2VyXG4pO1xuXG4vKiBtaXNjZWxsYW5lb3VzICovXG4kZW5hYmxlLWdyYWRpZW50czogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogdHJ1ZSAhZGVmYXVsdDtcblxuLyogYnV0dG9ucyAqL1xuJGJ0bi1mb250LXNpemU6IC45cmVtICFkZWZhdWx0O1xuLy8kYnRuLWxpbmUtaGVpZ2h0OiAyICFkZWZhdWx0O1xuLy8kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuLy8kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnRuLWhlcm8tcGFkZGluZy15OiAuNXJlbSAhZGVmYXVsdDtcbiRidG4taGVyby1wYWRkaW5nLXg6IDJyZW0gIWRlZmF1bHQ7XG5cbi8vIGhlcm8gYnRuXG4kYnRuLW91dGxpbmUtYm9yZGVyLXdpZHRoOiAzcHggIWRlZmF1bHQ7XG4kYnRuLWhlcm8tZm9udC13ZWlnaHQ6IGJvbGQgIWRlZmF1bHQ7XG4kYnRuLWhlcm8tYm9yZGVyLXJhZGl1czogMCAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4zcyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuQGltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGluc1wiO1xuXG4kdGhlbWUtY29sb3JzOiBtYXAtcmVtb3ZlKCR0aGVtZS1jb2xvcnMsIFwiaW5mb1wiKTtcbiIsIi8qKlxuICogVkFSSUFCTEVTXG4gKi9cbi8qIGZvbnRzICovXG4vKiBjb2xvcnMgKi9cbi8qIG1pc2NlbGxhbmVvdXMgKi9cbi8qIGJ1dHRvbnMgKi9cbi5wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjFmMWYxLCAjZmZmZmZmKTsgfVxuXG4uY29udGVudCAucGFnZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgLmNvbnRlbnQgLnBhZ2UtdGl0bGUgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxM2JmYjE7IH1cbiAgICAuY29udGVudCAucGFnZS10aXRsZSBzcGFuIGZhLWljb24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogLjc1cmVtOyB9XG5cbi5jb250ZW50IC5wYWdlLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3BtLW1lZGljYS1jdXN0b21cIjtcblxuJHBhZ2UtYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcblxuLnBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnZS1iYWNrZ3JvdW5kLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICRwYWdlLWJhY2tncm91bmQtY29sb3IsIHRoZW1lLWNvbG9yKCdsaWdodCcpKTtcbn1cblxuLmNvbnRlbnQge1xuICAucGFnZS10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0aGVtZS1jb2xvcihcInByaW1hcnlcIik7XG5cbiAgICAgIGZhLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"container\">\n    <div class=\"content px-4 py-5\">\n      <h4 class=\"page-title\">\n      <span>\n        <fa-icon icon=\"quote-left\"></fa-icon>\n      </span>\n        Strona główna\n      </h4>\n\n      <div class=\"page-content\">\n        Witamy na stronie firmy PM-Medica.\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * VARIABLES\n */\n/* fonts */\n/* colors */\n/* miscellaneous */\n/* buttons */\n.page {\n  background-color: #f1f1f1;\n  background-image: linear-gradient(45deg, #f1f1f1, #ffffff); }\n.content .page-title {\n  font-weight: 600;\n  text-transform: uppercase; }\n.content .page-title span {\n    margin-right: .25rem;\n    border-bottom: 3px solid #13bfb1; }\n.content .page-title span fa-icon {\n      position: relative;\n      top: -1rem;\n      font-size: .75rem; }\n.content .page-content {\n  margin-top: 2rem;\n  font-weight: 300;\n  text-align: justify; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yua29sYWRhL1dvcmtzcGFjZS9wbS1tZWRpY2Evc3JjL3N0eWxlcy9wbS1tZWRpY2EtY3VzdG9tLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9rcnp5c3p0b2Yua29sYWRhL1dvcmtzcGFjZS9wbS1tZWRpY2Evc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QURFRixVQUFBO0FBS0EsV0FBQTtBQW1CQSxrQkFBQTtBQUlBLFlBQUE7QUU1QkE7RUFDRSx5QkFINkI7RUFJN0IsMERBQXNGLEVBQUE7QUFHeEY7RUFFSSxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7QUFIN0I7SUFNTSxvQkFBb0I7SUFDcEIsZ0NGTlcsRUFBQTtBRURqQjtNQVVRLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsaUJBQWlCLEVBQUE7QUFaekI7RUFrQkksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVkFSSUFCTEVTXG4gKi9cblxuLyogZm9udHMgKi9cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbi8qIGNvbG9ycyAqL1xuJHByaW1hcnk6ICMxM2JmYjEgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAjOTg5ODk4ICFkZWZhdWx0O1xuJGFjY2VudDogI2YzNjQzOCAhZGVmYXVsdDtcbiRsaWdodDogI2ZmZmZmZiAhZGVmYXVsdDtcbiRsaWdodC1kYXJrOiAjNTQ1NDU0ICFkZWZhdWx0O1xuJGRhcms6ICMyZTJmMzcgIWRlZmF1bHQ7XG4kZGFya2VyOiAjMWQxZjI3ICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcbiAgXCJhY2NlbnRcIjogJGFjY2VudCxcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwibGlnaHQtZGFya1wiOiAkbGlnaHQtZGFyayxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcImRhcmtlclwiOiAkZGFya2VyXG4pO1xuXG4vKiBtaXNjZWxsYW5lb3VzICovXG4kZW5hYmxlLWdyYWRpZW50czogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogdHJ1ZSAhZGVmYXVsdDtcblxuLyogYnV0dG9ucyAqL1xuJGJ0bi1mb250LXNpemU6IC45cmVtICFkZWZhdWx0O1xuLy8kYnRuLWxpbmUtaGVpZ2h0OiAyICFkZWZhdWx0O1xuLy8kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuLy8kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnRuLWhlcm8tcGFkZGluZy15OiAuNXJlbSAhZGVmYXVsdDtcbiRidG4taGVyby1wYWRkaW5nLXg6IDJyZW0gIWRlZmF1bHQ7XG5cbi8vIGhlcm8gYnRuXG4kYnRuLW91dGxpbmUtYm9yZGVyLXdpZHRoOiAzcHggIWRlZmF1bHQ7XG4kYnRuLWhlcm8tZm9udC13ZWlnaHQ6IGJvbGQgIWRlZmF1bHQ7XG4kYnRuLWhlcm8tYm9yZGVyLXJhZGl1czogMCAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4zcyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuQGltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGluc1wiO1xuXG4kdGhlbWUtY29sb3JzOiBtYXAtcmVtb3ZlKCR0aGVtZS1jb2xvcnMsIFwiaW5mb1wiKTtcbiIsIi8qKlxuICogVkFSSUFCTEVTXG4gKi9cbi8qIGZvbnRzICovXG4vKiBjb2xvcnMgKi9cbi8qIG1pc2NlbGxhbmVvdXMgKi9cbi8qIGJ1dHRvbnMgKi9cbi5wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjFmMWYxLCAjZmZmZmZmKTsgfVxuXG4uY29udGVudCAucGFnZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgLmNvbnRlbnQgLnBhZ2UtdGl0bGUgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxM2JmYjE7IH1cbiAgICAuY29udGVudCAucGFnZS10aXRsZSBzcGFuIGZhLWljb24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogLjc1cmVtOyB9XG5cbi5jb250ZW50IC5wYWdlLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3BtLW1lZGljYS1jdXN0b21cIjtcblxuJHBhZ2UtYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcblxuLnBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnZS1iYWNrZ3JvdW5kLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICRwYWdlLWJhY2tncm91bmQtY29sb3IsIHRoZW1lLWNvbG9yKCdsaWdodCcpKTtcbn1cblxuLmNvbnRlbnQge1xuICAucGFnZS10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0aGVtZS1jb2xvcihcInByaW1hcnlcIik7XG5cbiAgICAgIGZhLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'PM-Medica';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <pm-website-map-location></pm-website-map-location>\n  <div class=\"top\">\n    <div class=\"container\">\n      <div class=\"company-content d-flex flex-column flex-md-row px-4 py-3\">\n        <div class=\"company-info\">\n          <h5 class=\"mr-md-auto font-weight-bold brand\">\n            <span>{{ 'appName.split.pm' | translate }}</span>-{{ 'appName.split.medica' | translate }}\n          </h5>\n\n          <div class=\"address-box\">\n            <fa-icon icon=\"map-marked-alt\"></fa-icon>\n            <div class=\"item\">\n              {{ 'contact.street' | translate }}<br>\n              {{ 'contact.zipCode' | translate }} {{ 'contact.city' | translate }}<br>\n              <span>{{ 'contact.province' | translate }}</span><br>\n              Polska\n            </div>\n          </div>\n\n          <div class=\"telephone-box\">\n            <fa-icon icon=\"phone\"></fa-icon>\n            <div class=\"item\">\n              <a [href]=\"utils.telToHref\">{{ 'contact.phoneNr' | translate }}</a>\n            </div>\n          </div>\n\n          <div class=\"mail-box\">\n            <fa-icon icon=\"envelope\"></fa-icon>\n            <div class=\"item\">\n              <a [href]=\"utils.mailToHref\">{{ 'contact.mail' | translate }}</a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"company-mail\">\n          <h5 class=\"mr-md-auto font-weight-bold title\">\n            {{ 'footer.writeToUs' | translate }}\n          </h5>\n\n          <form [formGroup]=\"formGroup\" (ngSubmit)=\"writeToUs()\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"subjectInput\" placeholder=\"{{ 'footer.subjectPlaceholder' | translate }}\"/>\n            <textarea class=\"form-control\" formControlName=\"bodyInput\" placeholder=\"{{ 'footer.bodyPlaceholder' | translate }}\"></textarea>\n            <button type=\"submit\" class=\"btn btn-outline-primary btn-hero\">{{ 'footer.sendBtn' | translate }}</button>\n          </form>\n        </div>\n\n        <div class=\"working-hours\">\n          <h5 class=\"mr-md-auto font-weight-bold title\">\n            {{ 'footer.workingHours' | translate }}\n          </h5>\n\n          <div class=\"hour-schedule\">\n            <div class=\"hour-line\" *ngFor=\"let hourLine of hourSchedule\">\n              <div class=\"font-weight-bold\">{{ 'days.' + hourLine.day | translate }}</div>\n              <div class=\"hours\">{{ hourLine.timeFrom }} &ndash; {{ hourLine.timeTo }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"bottom\">\n    <div class=\"container\">\n      <div class=\"d-flex flex-column flex-md-row align-items-center px-4 py-3\">\n        <h6 class=\"my-0 mr-md-auto\">\n          <span>{{ 'footer.copyright' | translate }} &copy; </span>\n          <span>{{ 'footer.reserved' | translate }} <i>|</i> {{ 'footer.rights' | translate }}</span>\n        </h6>\n        <button type=\"button\" class=\"btn btn-outline-primary btn-hero\" (click)=\"scrollToTop()\">\n          <fa-icon icon=\"chevron-up\"></fa-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * VARIABLES\n */\n/* fonts */\n/* colors */\n/* miscellaneous */\n/* buttons */\nfooter .top .company-content .company-info .address-box, footer .top .company-content .company-info .telephone-box, footer .top .company-content .company-info .mail-box {\n  position: relative;\n  margin-bottom: 1.2rem;\n  font-size: .9rem; }\nfooter .top .company-content .company-info .address-box fa-icon, footer .top .company-content .company-info .telephone-box fa-icon, footer .top .company-content .company-info .mail-box fa-icon {\n    font-size: 1.3rem;\n    position: absolute;\n    top: -5px; }\nfooter .top .company-content .company-info .address-box .item, footer .top .company-content .company-info .telephone-box .item, footer .top .company-content .company-info .mail-box .item {\n    display: inline-block;\n    margin-left: 2.5rem; }\nfooter {\n  color: #989898; }\nfooter .top {\n    background-color: #2e2f37; }\nfooter .top .company-content {\n      justify-content: space-between;\n      align-items: stretch; }\nfooter .top .company-content .company-info {\n        margin-top: .5rem; }\nfooter .top .company-content .company-info div:last-child {\n          margin-bottom: 0; }\nfooter .top .company-content .company-info .brand {\n          font-size: 1.5rem;\n          margin-bottom: 2.5rem;\n          color: #ffffff; }\nfooter .top .company-content .company-info .brand span {\n            color: #13bfb1;\n            border-bottom: 3px solid #13bfb1; }\nfooter .top .company-content .company-info .address-box .item span {\n          font-size: .6rem; }\nfooter .top .company-content .company-mail {\n        margin-top: .5rem;\n        padding-left: 1.5rem;\n        flex-basis: 40%; }\nfooter .top .company-content .company-mail .title {\n          font-size: 1rem;\n          margin-bottom: 2.5rem;\n          color: #ffffff;\n          text-transform: uppercase; }\nfooter .top .company-content .company-mail form {\n          text-align: right; }\nfooter .top .company-content .company-mail form input {\n            background-color: #2e2f37;\n            color: #ffffff;\n            border-radius: 0;\n            margin-bottom: 1rem; }\nfooter .top .company-content .company-mail form textarea {\n            background-color: #2e2f37;\n            color: #ffffff;\n            border-radius: 0;\n            min-height: 7rem; }\nfooter .top .company-content .company-mail form button {\n            margin-top: 1rem; }\nfooter .top .company-content .working-hours {\n        margin-top: .5rem;\n        padding-left: 1.5rem; }\nfooter .top .company-content .working-hours .title {\n          font-size: 1rem;\n          margin-bottom: 2.5rem;\n          color: #ffffff;\n          text-transform: uppercase; }\nfooter .top .company-content .working-hours .hour-schedule {\n          display: flex;\n          flex-direction: column;\n          font-size: .9rem; }\nfooter .top .company-content .working-hours .hour-schedule .hour-line {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: .5rem; }\nfooter .top .company-content .working-hours .hour-schedule .hour-line .hours {\n              margin-left: 2rem; }\n@media screen and (max-width: 768px) {\n        footer .top .company-content .company-mail, footer .top .company-content .working-hours {\n          padding-top: 2rem;\n          padding-left: 0; } }\nfooter .bottom {\n    background-color: #1d1f27; }\nfooter .bottom h6 {\n      font-size: .8rem; }\nfooter .bottom h6 i {\n        margin: 0 .4rem;\n        font-style: normal; }\nfooter .bottom button {\n      padding: .25rem .5rem; }\n@media screen and (max-width: 768px) {\n        footer .bottom button {\n          margin-top: 1rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yua29sYWRhL1dvcmtzcGFjZS9wbS1tZWRpY2Evc3JjL3N0eWxlcy9wbS1tZWRpY2EtY3VzdG9tLnNjc3MiLCJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2tyenlzenRvZi5rb2xhZGEvV29ya3NwYWNlL3BtLW1lZGljYS9zcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FERUYsVUFBQTtBQUtBLFdBQUE7QUFtQkEsa0JBQUE7QUFJQSxZQUFBO0FFOUJBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTtBQUVoQjtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUyxFQUFBO0FBR1g7SUFDRSxxQkFBcUI7SUFDckIsbUJBQW1CLEVBQUE7QUFJdkI7RUFDRSxjRlRpQixFQUFBO0FFUW5CO0lBSUkseUJGUlUsRUFBQTtBRUlkO01BT00sOEJBQThCO01BQzlCLG9CQUFvQixFQUFBO0FBUjFCO1FBV1EsaUJBQWlCLEVBQUE7QUFYekI7VUFlWSxnQkFBZ0IsRUFBQTtBQWY1QjtVQW9CVSxpQkFBaUI7VUFDakIscUJBQXFCO1VBQ3JCLGNGNUJLLEVBQUE7QUVNZjtZQXlCWSxjRmxDSztZRW1DTCxnQ0ZuQ0ssRUFBQTtBRVNqQjtVQW1DYyxnQkFBZ0IsRUFBQTtBQW5DOUI7UUFrRFEsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixlQUFlLEVBQUE7QUFwRHZCO1VBdURVLGVBQWU7VUFDZixxQkFBcUI7VUFDckIsY0YvREs7VUVnRUwseUJBQXlCLEVBQUE7QUExRG5DO1VBOERVLGlCQUFpQixFQUFBO0FBOUQzQjtZQWlFWSx5QkZyRUU7WUVzRUYsY0Z4RUc7WUV5RUgsZ0JBQWdCO1lBQ2hCLG1CQUFtQixFQUFBO0FBcEUvQjtZQXdFWSx5QkY1RUU7WUU2RUYsY0YvRUc7WUVnRkgsZ0JBQWdCO1lBQ2hCLGdCQUFnQixFQUFBO0FBM0U1QjtZQStFWSxnQkFBZ0IsRUFBQTtBQS9FNUI7UUFxRlEsaUJBQWlCO1FBQ2pCLG9CQUFvQixFQUFBO0FBdEY1QjtVQXlGVSxlQUFlO1VBQ2YscUJBQXFCO1VBQ3JCLGNGakdLO1VFa0dMLHlCQUF5QixFQUFBO0FBNUZuQztVQWdHVSxhQUFhO1VBQ2Isc0JBQXNCO1VBQ3RCLGdCQUFnQixFQUFBO0FBbEcxQjtZQXFHWSxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLDhCQUE4QjtZQUM5QixtQkFBbUI7WUFDbkIsb0JBQW9CLEVBQUE7QUF6R2hDO2NBNEdjLGlCQUFpQixFQUFBO0FBTXpCO1FBbEhOO1VBb0hVLGlCQUFpQjtVQUNqQixlQUFlLEVBQUEsRUFDaEI7QUF0SFQ7SUE0SEkseUJGL0hZLEVBQUE7QUVHaEI7TUErSE0sZ0JBQWdCLEVBQUE7QUEvSHRCO1FBa0lRLGVBQWU7UUFDZixrQkFBa0IsRUFBQTtBQW5JMUI7TUF3SU0scUJBQXFCLEVBQUE7QUFFckI7UUExSU47VUEySVEsZ0JBQWdCLEVBQUEsRUFFbkIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVkFSSUFCTEVTXG4gKi9cblxuLyogZm9udHMgKi9cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbi8qIGNvbG9ycyAqL1xuJHByaW1hcnk6ICMxM2JmYjEgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAjOTg5ODk4ICFkZWZhdWx0O1xuJGFjY2VudDogI2YzNjQzOCAhZGVmYXVsdDtcbiRsaWdodDogI2ZmZmZmZiAhZGVmYXVsdDtcbiRsaWdodC1kYXJrOiAjNTQ1NDU0ICFkZWZhdWx0O1xuJGRhcms6ICMyZTJmMzcgIWRlZmF1bHQ7XG4kZGFya2VyOiAjMWQxZjI3ICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcbiAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcbiAgXCJhY2NlbnRcIjogJGFjY2VudCxcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwibGlnaHQtZGFya1wiOiAkbGlnaHQtZGFyayxcbiAgXCJkYXJrXCI6ICRkYXJrLFxuICBcImRhcmtlclwiOiAkZGFya2VyXG4pO1xuXG4vKiBtaXNjZWxsYW5lb3VzICovXG4kZW5hYmxlLWdyYWRpZW50czogdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogdHJ1ZSAhZGVmYXVsdDtcblxuLyogYnV0dG9ucyAqL1xuJGJ0bi1mb250LXNpemU6IC45cmVtICFkZWZhdWx0O1xuLy8kYnRuLWxpbmUtaGVpZ2h0OiAyICFkZWZhdWx0O1xuLy8kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuLy8kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnRuLWhlcm8tcGFkZGluZy15OiAuNXJlbSAhZGVmYXVsdDtcbiRidG4taGVyby1wYWRkaW5nLXg6IDJyZW0gIWRlZmF1bHQ7XG5cbi8vIGhlcm8gYnRuXG4kYnRuLW91dGxpbmUtYm9yZGVyLXdpZHRoOiAzcHggIWRlZmF1bHQ7XG4kYnRuLWhlcm8tZm9udC13ZWlnaHQ6IGJvbGQgIWRlZmF1bHQ7XG4kYnRuLWhlcm8tYm9yZGVyLXJhZGl1czogMCAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4zcyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuQGltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGluc1wiO1xuXG4kdGhlbWUtY29sb3JzOiBtYXAtcmVtb3ZlKCR0aGVtZS1jb2xvcnMsIFwiaW5mb1wiKTtcbiIsIi8qKlxuICogVkFSSUFCTEVTXG4gKi9cbi8qIGZvbnRzICovXG4vKiBjb2xvcnMgKi9cbi8qIG1pc2NlbGxhbmVvdXMgKi9cbi8qIGJ1dHRvbnMgKi9cbmZvb3RlciAudG9wIC5jb21wYW55LWNvbnRlbnQgLmNvbXBhbnktaW5mbyAuYWRkcmVzcy1ib3gsIGZvb3RlciAudG9wIC5jb21wYW55LWNvbnRlbnQgLmNvbXBhbnktaW5mbyAudGVsZXBob25lLWJveCwgZm9vdGVyIC50b3AgLmNvbXBhbnktY29udGVudCAuY29tcGFueS1pbmZvIC5tYWlsLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICBmb250LXNpemU6IC45cmVtOyB9XG4gIGZvb3RlciAudG9wIC5jb21wYW55LWNvbnRlbnQgLmNvbXBhbnktaW5mbyAuYWRkcmVzcy1ib3ggZmEtaWNvbiwgZm9vdGVyIC50b3AgLmNvbXBhbnktY29udGVudCAuY29tcGFueS1pbmZvIC50ZWxlcGhvbmUtYm94IGZhLWljb24sIGZvb3RlciAudG9wIC5jb21wYW55LWNvbnRlbnQgLmNvbXBhbnktaW5mbyAubWFpbC1ib3ggZmEtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTVweDsgfVxuICBmb290ZXIgLnRvcCAuY29tcGFueS1jb250ZW50IC5jb21wYW55LWluZm8gLmFkZHJlc3MtYm94IC5pdGVtLCBmb290ZXIgLnRvcCAuY29tcGFueS1jb250ZW50IC5jb21wYW55LWluZm8gLnRlbGVwaG9uZS1ib3ggLml0ZW0sIGZvb3RlciAudG9wIC5jb21wYW55LWNvbnRlbnQgLmNvbXBhbnktaW5mbyAubWFpbC1ib3ggLml0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtOyB9XG5cbmZvb3RlciB7XG4gIGNvbG9yOiAjOTg5ODk4OyB9XG4gIGZvb3RlciAudG9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZjM3OyB9XG4gICAgZm9vdGVyIC50b3AgLmNvbXBhbnktY29udGVudCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuICAgICAgZm9vdGVyIC50b3AgLmNvbXBhbnktY29udGVudCAuY29tcGFueS1pbmZvIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07IH1cbiAgICAgICAgZm9vdGVyIC50b3AgLmNvbXBhbnktY29udGVudCAuY29tcGFueS1pbmZvIGRpdjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gICAgICAgIGZvb3RlciAudG9wIC5jb21wYW55LWNvbnRlbnQgLmNvbXBhbnktaW5mbyAuYnJhbmQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjsgfVxuICAgICAgICAgIGZvb3RlciAudG9wIC5jb21wYW55LWNvbnRlbnQgLmNvbXBhbnktaW5mbyAuYnJhbmQgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogIzEzYmZiMTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTNiZmIxOyB9XG4gICAgICAgIGZvb3RlciAudG9wIC5jb21wYW55LWNvbnRlbnQgLmNvbXBhbnktaW5mbyAuYWRkcmVzcy1ib3ggLml0ZW0gc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAuNnJlbTsgfVxuICAgICAgZm9vdGVyIC50b3AgLmNvbXBhbnktY29udGVudCAuY29tcGFueS1tYWlsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgICAgICBmbGV4LWJhc2lzOiA0MCU7IH1cbiAgICAgICAgZm9vdGVyIC50b3AgLmNvbXBhbnktY29udGVudCAuY29tcGFueS1tYWlsIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgICAgIGZvb3RlciAudG9wIC5jb21wYW55LWNvbnRlbnQgLmNvbXBhbnktbWFpbCBmb3JtIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAgICAgICAgIGZvb3RlciAudG9wIC5jb21wYW55LWNvbnRlbnQgLmNvbXBhbnktbWFpbCBmb3JtIGlucHV0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJmMzc7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XG4gICAgICAgICAgZm9vdGVyIC50b3AgLmNvbXBhbnktY29udGVudCAuY29tcGFueS1tYWlsIGZvcm0gdGV4dGFyZWEge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmYzNztcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDdyZW07IH1cbiAgICAgICAgICBmb290ZXIgLnRvcCAuY29tcGFueS1jb250ZW50IC5jb21wYW55LW1haWwgZm9ybSBidXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTsgfVxuICAgICAgZm9vdGVyIC50b3AgLmNvbXBhbnktY29udGVudCAud29ya2luZy1ob3VycyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTsgfVxuICAgICAgICBmb290ZXIgLnRvcCAuY29tcGFueS1jb250ZW50IC53b3JraW5nLWhvdXJzIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgICAgIGZvb3RlciAudG9wIC5jb21wYW55LWNvbnRlbnQgLndvcmtpbmctaG91cnMgLmhvdXItc2NoZWR1bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmb250LXNpemU6IC45cmVtOyB9XG4gICAgICAgICAgZm9vdGVyIC50b3AgLmNvbXBhbnktY29udGVudCAud29ya2luZy1ob3VycyAuaG91ci1zY2hlZHVsZSAuaG91ci1saW5lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtOyB9XG4gICAgICAgICAgICBmb290ZXIgLnRvcCAuY29tcGFueS1jb250ZW50IC53b3JraW5nLWhvdXJzIC5ob3VyLXNjaGVkdWxlIC5ob3VyLWxpbmUgLmhvdXJzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07IH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGZvb3RlciAudG9wIC5jb21wYW55LWNvbnRlbnQgLmNvbXBhbnktbWFpbCwgZm9vdGVyIC50b3AgLmNvbXBhbnktY29udGVudCAud29ya2luZy1ob3VycyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwOyB9IH1cbiAgZm9vdGVyIC5ib3R0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDFmMjc7IH1cbiAgICBmb290ZXIgLmJvdHRvbSBoNiB7XG4gICAgICBmb250LXNpemU6IC44cmVtOyB9XG4gICAgICBmb290ZXIgLmJvdHRvbSBoNiBpIHtcbiAgICAgICAgbWFyZ2luOiAwIC40cmVtO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7IH1cbiAgICBmb290ZXIgLmJvdHRvbSBidXR0b24ge1xuICAgICAgcGFkZGluZzogLjI1cmVtIC41cmVtOyB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmb290ZXIgLmJvdHRvbSBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07IH0gfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9wbS1tZWRpY2EtY3VzdG9tXCI7XG5cbiVjb250YWN0LWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICBmb250LXNpemU6IC45cmVtO1xuXG4gIGZhLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01cHg7XG4gIH1cblxuICAuaXRlbSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XG4gIH1cbn1cblxuZm9vdGVyIHtcbiAgY29sb3I6IHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKTtcblxuICAudG9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS1jb2xvcignZGFyaycpO1xuXG4gICAgLmNvbXBhbnktY29udGVudCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICAgLmNvbXBhbnktaW5mbyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJyYW5kIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gICAgICAgICAgY29sb3I6IHRoZW1lLWNvbG9yKFwibGlnaHRcIik7XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS1jb2xvcihcInByaW1hcnlcIik7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRyZXNzLWJveCB7XG4gICAgICAgICAgQGV4dGVuZCAlY29udGFjdC1ib3g7XG5cbiAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAuNnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGVsZXBob25lLWJveCB7XG4gICAgICAgICAgQGV4dGVuZCAlY29udGFjdC1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbC1ib3gge1xuICAgICAgICAgIEBleHRlbmQgJWNvbnRhY3QtYm94O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb21wYW55LW1haWwge1xuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgICAgIGZsZXgtYmFzaXM6IDQwJTtcblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gICAgICAgICAgY29sb3I6IHRoZW1lLWNvbG9yKFwibGlnaHRcIik7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUtY29sb3IoJ2RhcmsnKTtcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS1jb2xvcignbGlnaHQnKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLWNvbG9yKCdkYXJrJyk7XG4gICAgICAgICAgICBjb2xvcjogdGhlbWUtY29sb3IoJ2xpZ2h0Jyk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgbWluLWhlaWdodDogN3JlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLndvcmtpbmctaG91cnMge1xuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS1jb2xvcihcImxpZ2h0XCIpO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuaG91ci1zY2hlZHVsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG5cbiAgICAgICAgICAuaG91ci1saW5lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuXG4gICAgICAgICAgICAuaG91cnMge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgJ21kJykpIHtcbiAgICAgICAgLmNvbXBhbnktbWFpbCwgLndvcmtpbmctaG91cnMge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5ib3R0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLWNvbG9yKCdkYXJrZXInKTtcblxuICAgIGg2IHtcbiAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG5cbiAgICAgIGkge1xuICAgICAgICBtYXJnaW46IDAgLjRyZW07XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var FooterComponent = /** @class */ (function () {
    function FooterComponent(utils) {
        this.utils = utils;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            subjectInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            bodyInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.hourSchedule = [
            {
                day: 'mon',
                timeFrom: '8:00',
                timeTo: '16:00'
            },
            {
                day: 'tue',
                timeFrom: '8:00',
                timeTo: '16:00'
            },
            {
                day: 'wed',
                timeFrom: '8:00',
                timeTo: '16:00'
            },
            {
                day: 'th',
                timeFrom: '8:00',
                timeTo: '16:00'
            },
            {
                day: 'fri',
                timeFrom: '8:00',
                timeTo: '16:00'
            },
            {
                day: 'sat',
                timeFrom: '-',
                timeTo: '-'
            },
            {
                day: 'sun',
                timeFrom: '-',
                timeTo: '-'
            },
        ];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.scrollToTop = function () {
        var element = document.querySelector('#top');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    FooterComponent.prototype.writeToUs = function () {
        var mailTo = this.utils.mailToHref;
        var subject = this.formGroup.controls.subjectInput.value;
        var body = this.formGroup.controls.bodyInput.value;
        mailTo += "?subject=" + encodeURI(subject) + "&body=" + encodeURI(body);
        console.log(mailTo);
        window.location.href = mailTo;
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"bg-white border-bottom shadow-sm fixed-top\">\n\n  <div class=\"top\">\n    <div class=\"container\">\n      <div [@hide]=\"hide\" class=\"header d-flex flex-column flex-md-row align-items-center px-3 px-md-4\">\n        <h6 class=\"my-0 mr-md-auto\">\n          <span class=\"font-color-white\">{{ 'contact.title' | translate }}</span> {{ 'appName.full' | translate }}\n          <span class=\"font-color-white\"> - {{ 'contact.subtitle' | translate }}</span>\n        </h6>\n        <div class=\"contact\">\n          <a class=\"btn btn-link px-0 pr-3\" [href]=\"utils.telToHref\">\n            <fa-icon icon=\"phone\"></fa-icon>\n            {{ 'contact.phoneNr' | translate }}\n          </a>\n          <a class=\"btn btn-link px-0\" [href]=\"utils.mailToHref\">\n            <fa-icon icon=\"envelope\"></fa-icon>\n            {{ 'contact.mail' | translate }}\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <hr>\n\n  <div class=\"bottom\">\n    <div class=\"container\">\n      <div [@shrink]=\"shrink\" class=\"header d-flex flex-row align-items-center px-4\">\n        <h5 class=\"my-0 mr-md-auto font-weight-bold brand\">\n          <span>{{ 'appName.split.pm' | translate }}</span>-{{ 'appName.split.medica' | translate }}\n        </h5>\n        <div class=\"responsive-nav\" [ngClass]=\"{'shrink': isShrunk, 'menu-closed': !isMenuOpen}\">\n          <nav class=\"my-md-0 nav-buttons\">\n            <button class=\"btn btn-link\" [routerLink]=\"['/home']\" (click)=\"closeMenu()\">\n              {{ 'mainMenu.home' | translate }}\n            </button>\n            <button class=\"btn btn-link\" [routerLink]=\"['/products']\" (click)=\"closeMenu()\">\n              {{ 'mainMenu.products' | translate }}\n            </button>\n            <button class=\"btn btn-link\" [routerLink]=\"['/about']\" (click)=\"closeMenu()\">\n              {{ 'mainMenu.about' | translate }}\n            </button>\n            <button class=\"btn btn-link\" [routerLink]=\"['/contact']\" (click)=\"closeMenu()\">\n              {{ 'mainMenu.contact' | translate }}\n            </button>\n            <a class=\"btn btn-outline-dark cart-btn\" href=\"#\">\n              <fa-icon icon=\"shopping-cart\"></fa-icon>\n              {{ 'mainMenu.cart' | translate }}\n            </a>\n          </nav>\n        </div>\n        <button class=\"btn btn-outline-dark hamburger-btn\" [ngClass]=\"{'active': isMenuOpen}\" (click)=\"toggleMenu()\">\n          <fa-icon icon=\"bars\"></fa-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * VARIABLES\n */\n/* fonts */\n/* colors */\n/* miscellaneous */\n/* buttons */\n.top {\n  background-color: #2e2f37;\n  color: #13bfb1; }\n.top .container .header {\n    overflow: hidden;\n    transition: height 0.2s ease-in-out; }\n@media screen and (max-width: 992px) {\n      .top .container .header {\n        justify-content: flex-end; }\n        .top .container .header h6 {\n          display: none; } }\n.top .container .header .contact .btn fa-icon {\n      margin-right: 5px; }\nhr {\n  margin: 0;\n  border-width: 0; }\n.bottom .container .header {\n  transition: height 0.2s ease-in-out; }\n@media screen and (max-width: 992px) {\n    .bottom .container .header {\n      justify-content: space-between; }\n      .bottom .container .header .responsive-nav {\n        position: absolute;\n        top: 108px;\n        left: 0;\n        width: 100%;\n        background-color: #ffffff;\n        border-bottom: 1px solid #dee2e6;\n        transition: all 0.2s ease-in-out;\n        height: 16rem;\n        overflow: hidden; }\n        .bottom .container .header .responsive-nav.shrink {\n          top: 49px; }\n        .bottom .container .header .responsive-nav.menu-closed {\n          height: 0rem; }\n        .bottom .container .header .responsive-nav nav {\n          width: 100%;\n          padding-right: 15px;\n          padding-left: 15px;\n          margin-right: auto;\n          margin-left: auto;\n          padding-top: .5rem;\n          padding-bottom: 1.5rem; } }\n@media screen and (max-width: 992px) and (min-width: 576px) {\n        .bottom .container .header .responsive-nav nav {\n          max-width: 540px; } }\n@media screen and (max-width: 992px) and (min-width: 768px) {\n        .bottom .container .header .responsive-nav nav {\n          max-width: 720px; } }\n@media screen and (max-width: 992px) and (min-width: 992px) {\n        .bottom .container .header .responsive-nav nav {\n          max-width: 960px; } }\n@media screen and (max-width: 992px) and (min-width: 1200px) {\n        .bottom .container .header .responsive-nav nav {\n          max-width: 1140px; } }\n@media screen and (max-width: 992px) {\n          .bottom .container .header .responsive-nav nav button {\n            display: block;\n            width: 100%;\n            padding: .75rem .75rem .75rem 1.5rem;\n            text-align: left; }\n          .bottom .container .header .responsive-nav nav a {\n            margin-top: .5rem;\n            margin-left: 1.5rem; } }\n.bottom .container .header .brand {\n    font-size: 1.5rem; }\n.bottom .container .header .brand span {\n      color: #13bfb1;\n      border-bottom: 3px solid #13bfb1; }\n.bottom .container .header .btn {\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: .8rem; }\n.bottom .container .header .btn-link {\n    color: #545454; }\n.bottom .container .header .btn-link:hover {\n      color: #1d1f27; }\n.bottom .container .header .hamburger-btn {\n    display: none;\n    line-height: 1.4rem; }\n@media screen and (max-width: 992px) {\n      .bottom .container .header .hamburger-btn {\n        display: block; } }\n.bottom .container .header .cart-btn {\n    margin-left: 10px; }\n.bottom .container .header .cart-btn fa-icon {\n      margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yua29sYWRhL1dvcmtzcGFjZS9wbS1tZWRpY2Evc3JjL3N0eWxlcy9wbS1tZWRpY2EtY3VzdG9tLnNjc3MiLCJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2tyenlzenRvZi5rb2xhZGEvV29ya3NwYWNlL3BtLW1lZGljYS9zcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2tyenlzenRvZi5rb2xhZGEvV29ya3NwYWNlL3BtLW1lZGljYS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2tyenlzenRvZi5rb2xhZGEvV29ya3NwYWNlL3BtLW1lZGljYS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmlkLnNjc3MiLCIvVXNlcnMva3J6eXN6dG9mLmtvbGFkYS9Xb3Jrc3BhY2UvcG0tbWVkaWNhL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QURFRixVQUFBO0FBS0EsV0FBQTtBQW1CQSxrQkFBQTtBQUlBLFlBQUE7QUU1QkE7RUFDRSx5QkZVWTtFRVRaLGNGSWUsRUFBQTtBRU5qQjtJQU1NLGdCQUFnQjtJQUNoQixtQ0FBZ0QsRUFBQTtBQUVoRDtNQVROO1FBVVEseUJBQXlCLEVBQUE7UUFWakM7VUFhVSxhQUFhLEVBQUEsRUFDZDtBQWRUO01Bb0JZLGlCQUFpQixFQUFBO0FBUTdCO0VBQ0UsU0FBUztFQUNULGVBQWUsRUFBQTtBQUdqQjtFQUdNLG1DQUFnRCxFQUFBO0FBRWhEO0lBTE47TUFNUSw4QkFBOEIsRUFBQTtNQU50QztRQVNVLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsT0FBTztRQUNQLFdBQVc7UUFDWCx5QkZyQ0s7UUVzQ0wsZ0NDekNRO1FEMENSLGdDQUE2QztRQUM3QyxhQUFhO1FBQ2IsZ0JBQWdCLEVBQUE7UUFqQjFCO1VBb0JZLFNBQVMsRUFBQTtRQXBCckI7VUF3QlksWUFBWSxFQUFBO1FBeEJ4QjtVRWhDRSxXQUFXO1VBQ1gsbUJBQTBCO1VBQzFCLGtCQUF5QjtVQUN6QixrQkFBa0I7VUFDbEIsaUJBQWlCO1VGMERQLGtCQUFrQjtVQUNsQixzQkFBc0IsRUFBQSxFQWF2QjtBR3JCUDtRSHZCSjtVRXBCTSxnQkQ4TEssRUFBQSxFRDlIQTtBR3JCUDtRSHZCSjtVRXBCTSxnQkQrTEssRUFBQSxFRC9IQTtBR3JCUDtRSHZCSjtVRXBCTSxnQkRnTUssRUFBQSxFRGhJQTtBR3JCUDtRSHZCSjtVRXBCTSxpQkRpTU0sRUFBQSxFRGpJRDtBQXZDTDtVQUxOO1lBa0NjLGNBQWM7WUFDZCxXQUFXO1lBQ1gsb0NBQW9DO1lBQ3BDLGdCQUFnQixFQUFBO1VBckM5QjtZQXlDYyxpQkFBaUI7WUFDakIsbUJBQW1CLEVBQUEsRUFDcEI7QUEzQ2I7SUFpRFEsaUJBQWlCLEVBQUE7QUFqRHpCO01Bb0RVLGNGL0VPO01FZ0ZQLGdDRmhGTyxFQUFBO0FFMkJqQjtJQTBEUSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0FBNUR4QjtJQWdFUSxjRnZGWSxFQUFBO0FFdUJwQjtNQW1FVSxjRnhGTSxFQUFBO0FFcUJoQjtJQXdFUSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7QUFFbkI7TUEzRVI7UUE0RVUsY0FBYyxFQUFBLEVBRWpCO0FBOUVQO0lBaUZRLGlCQUFpQixFQUFBO0FBakZ6QjtNQW9GVSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBWQVJJQUJMRVNcbiAqL1xuXG4vKiBmb250cyAqL1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcblxuLyogY29sb3JzICovXG4kcHJpbWFyeTogIzEzYmZiMSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICM5ODk4OTggIWRlZmF1bHQ7XG4kYWNjZW50OiAjZjM2NDM4ICFkZWZhdWx0O1xuJGxpZ2h0OiAjZmZmZmZmICFkZWZhdWx0O1xuJGxpZ2h0LWRhcms6ICM1NDU0NTQgIWRlZmF1bHQ7XG4kZGFyazogIzJlMmYzNyAhZGVmYXVsdDtcbiRkYXJrZXI6ICMxZDFmMjcgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICBcImFjY2VudFwiOiAkYWNjZW50LFxuICBcImxpZ2h0XCI6ICRsaWdodCxcbiAgXCJsaWdodC1kYXJrXCI6ICRsaWdodC1kYXJrLFxuICBcImRhcmtcIjogJGRhcmssXG4gIFwiZGFya2VyXCI6ICRkYXJrZXJcbik7XG5cbi8qIG1pc2NlbGxhbmVvdXMgKi9cbiRlbmFibGUtZ3JhZGllbnRzOiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiB0cnVlICFkZWZhdWx0O1xuXG4vKiBidXR0b25zICovXG4kYnRuLWZvbnQtc2l6ZTogLjlyZW0gIWRlZmF1bHQ7XG4vLyRidG4tbGluZS1oZWlnaHQ6IDIgIWRlZmF1bHQ7XG4vLyRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4vLyRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRidG4taGVyby1wYWRkaW5nLXk6IC41cmVtICFkZWZhdWx0O1xuJGJ0bi1oZXJvLXBhZGRpbmcteDogMnJlbSAhZGVmYXVsdDtcblxuLy8gaGVybyBidG5cbiRidG4tb3V0bGluZS1ib3JkZXItd2lkdGg6IDNweCAhZGVmYXVsdDtcbiRidG4taGVyby1mb250LXdlaWdodDogYm9sZCAhZGVmYXVsdDtcbiRidG4taGVyby1ib3JkZXItcmFkaXVzOiAwICFkZWZhdWx0O1xuXG4kYnRuLXRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuM3MgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjNzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG5AaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XG5cbiR0aGVtZS1jb2xvcnM6IG1hcC1yZW1vdmUoJHRoZW1lLWNvbG9ycywgXCJpbmZvXCIpO1xuIiwiLyoqXG4gKiBWQVJJQUJMRVNcbiAqL1xuLyogZm9udHMgKi9cbi8qIGNvbG9ycyAqL1xuLyogbWlzY2VsbGFuZW91cyAqL1xuLyogYnV0dG9ucyAqL1xuLnRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJmMzc7XG4gIGNvbG9yOiAjMTNiZmIxOyB9XG4gIC50b3AgLmNvbnRhaW5lciAuaGVhZGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2UtaW4tb3V0OyB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgIC50b3AgLmNvbnRhaW5lciAuaGVhZGVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuICAgICAgICAudG9wIC5jb250YWluZXIgLmhlYWRlciBoNiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfSB9XG4gICAgLnRvcCAuY29udGFpbmVyIC5oZWFkZXIgLmNvbnRhY3QgLmJ0biBmYS1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XG5cbmhyIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItd2lkdGg6IDA7IH1cblxuLmJvdHRvbSAuY29udGFpbmVyIC5oZWFkZXIge1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycyBlYXNlLWluLW91dDsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5ib3R0b20gLmNvbnRhaW5lciAuaGVhZGVyIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAgICAgLmJvdHRvbSAuY29udGFpbmVyIC5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwOHB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICBoZWlnaHQ6IDE2cmVtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgICAgIC5ib3R0b20gLmNvbnRhaW5lciAuaGVhZGVyIC5yZXNwb25zaXZlLW5hdi5zaHJpbmsge1xuICAgICAgICAgIHRvcDogNDlweDsgfVxuICAgICAgICAuYm90dG9tIC5jb250YWluZXIgLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYubWVudS1jbG9zZWQge1xuICAgICAgICAgIGhlaWdodDogMHJlbTsgfVxuICAgICAgICAuYm90dG9tIC5jb250YWluZXIgLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYgbmF2IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07IH0gfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xuICAgICAgICAuYm90dG9tIC5jb250YWluZXIgLmhlYWRlciAucmVzcG9uc2l2ZS1uYXYgbmF2IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDU0MHB4OyB9IH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLmJvdHRvbSAuY29udGFpbmVyIC5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2IG5hdiB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA3MjBweDsgfSB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkgYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5ib3R0b20gLmNvbnRhaW5lciAuaGVhZGVyIC5yZXNwb25zaXZlLW5hdiBuYXYge1xuICAgICAgICAgIG1heC13aWR0aDogOTYwcHg7IH0gfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgLmJvdHRvbSAuY29udGFpbmVyIC5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2IG5hdiB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMTQwcHg7IH0gfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgIC5ib3R0b20gLmNvbnRhaW5lciAuaGVhZGVyIC5yZXNwb25zaXZlLW5hdiBuYXYgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNzVyZW0gLjc1cmVtIC43NXJlbSAxLjVyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4gICAgICAgICAgLmJvdHRvbSAuY29udGFpbmVyIC5oZWFkZXIgLnJlc3BvbnNpdmUtbmF2IG5hdiBhIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTsgfSB9XG4gIC5ib3R0b20gLmNvbnRhaW5lciAuaGVhZGVyIC5icmFuZCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07IH1cbiAgICAuYm90dG9tIC5jb250YWluZXIgLmhlYWRlciAuYnJhbmQgc3BhbiB7XG4gICAgICBjb2xvcjogIzEzYmZiMTtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTNiZmIxOyB9XG4gIC5ib3R0b20gLmNvbnRhaW5lciAuaGVhZGVyIC5idG4ge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAuOHJlbTsgfVxuICAuYm90dG9tIC5jb250YWluZXIgLmhlYWRlciAuYnRuLWxpbmsge1xuICAgIGNvbG9yOiAjNTQ1NDU0OyB9XG4gICAgLmJvdHRvbSAuY29udGFpbmVyIC5oZWFkZXIgLmJ0bi1saW5rOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMWQxZjI3OyB9XG4gIC5ib3R0b20gLmNvbnRhaW5lciAuaGVhZGVyIC5oYW1idXJnZXItYnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgLmJvdHRvbSAuY29udGFpbmVyIC5oZWFkZXIgLmhhbWJ1cmdlci1idG4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jazsgfSB9XG4gIC5ib3R0b20gLmNvbnRhaW5lciAuaGVhZGVyIC5jYXJ0LWJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cbiAgICAuYm90dG9tIC5jb250YWluZXIgLmhlYWRlciAuY2FydC1idG4gZmEtaWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9wbS1tZWRpY2EtY3VzdG9tXCI7XG5cbiRhbmltYXRpb24tdGltaW5nOiAuMnM7XG5cbi50b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS1jb2xvcignZGFyaycpO1xuICBjb2xvcjogdGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcblxuICAuY29udGFpbmVyIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgJGFuaW1hdGlvbi10aW1pbmcgZWFzZS1pbi1vdXQ7XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgaDYge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAuYnRuIHtcbiAgICAgICAgICBmYS1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5ociB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4uYm90dG9tIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgLmhlYWRlciB7XG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgJGFuaW1hdGlvbi10aW1pbmcgZWFzZS1pbi1vdXQ7XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikpIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgIC5yZXNwb25zaXZlLW5hdiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTA4cHg7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS1jb2xvcihcImxpZ2h0XCIpO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheS0zMDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsICRhbmltYXRpb24tdGltaW5nIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIGhlaWdodDogMTZyZW07XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgICYuc2hyaW5rIHtcbiAgICAgICAgICAgIHRvcDogNDlweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLm1lbnUtY2xvc2VkIHtcbiAgICAgICAgICAgIGhlaWdodDogMHJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgQGluY2x1ZGUgbWFrZS1jb250YWluZXIoKTtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1ha2UtY29udGFpbmVyLW1heC13aWR0aHMoKTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZzogLjc1cmVtIC43NXJlbSAuNzVyZW0gMS41cmVtO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5icmFuZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS1jb2xvcihcInByaW1hcnlcIik7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnRuIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICB9XG5cbiAgICAgIC5idG4tbGluayB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS1jb2xvcihcImxpZ2h0LWRhcmtcIik7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLWNvbG9yKFwiZGFya2VyXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5oYW1idXJnZXItYnRuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jYXJ0LWJ0biB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG4gICAgICAgIGZhLWljb24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBWYXJpYWJsZXNcbi8vXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3Jcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxuXG4vLyBDb2xvciBzeXN0ZW1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRncmF5czogbWFwLW1lcmdlKFxuICAoXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcbiAgKSxcbiAgJGdyYXlzXG4pO1xuXG4kYmx1ZTogICAgIzAwN2JmZiAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjZGMzNTQ1ICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI2ZmYzEwNyAhZGVmYXVsdDtcbiRncmVlbjogICAjMjhhNzQ1ICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzE3YTJiOCAhZGVmYXVsdDtcblxuJGNvbG9yczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJibHVlXCI6ICAgICAgICRibHVlLFxuICAgIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxuICAgIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxuICAgIFwicGlua1wiOiAgICAgICAkcGluayxcbiAgICBcInJlZFwiOiAgICAgICAgJHJlZCxcbiAgICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcbiAgICBcInllbGxvd1wiOiAgICAgJHllbGxvdyxcbiAgICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxuICAgIFwidGVhbFwiOiAgICAgICAkdGVhbCxcbiAgICBcImN5YW5cIjogICAgICAgJGN5YW4sXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcbiAgICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxuICAgIFwiZ3JheS1kYXJrXCI6ICAkZ3JheS04MDBcbiAgKSxcbiAgJGNvbG9yc1xuKTtcblxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcbiAgICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xuICApLFxuICAkdGhlbWUtY29sb3JzXG4pO1xuXG4vLyBTZXQgYSBzcGVjaWZpYyBqdW1wIHBvaW50IGZvciByZXF1ZXN0aW5nIGNvbG9yIGp1bXBzXG4kdGhlbWUtY29sb3ItaW50ZXJ2YWw6ICAgICAgOCUgIWRlZmF1bHQ7XG5cbi8vIFRoZSB5aXEgbGlnaHRuZXNzIHZhbHVlIHRoYXQgZGV0ZXJtaW5lcyB3aGVuIHRoZSBsaWdodG5lc3Mgb2YgY29sb3IgY2hhbmdlcyBmcm9tIFwiZGFya1wiIHRvIFwibGlnaHRcIi4gQWNjZXB0YWJsZSB2YWx1ZXMgYXJlIGJldHdlZW4gMCBhbmQgMjU1LlxuJHlpcS1jb250cmFzdGVkLXRocmVzaG9sZDogIDE1MCAhZGVmYXVsdDtcblxuLy8gQ3VzdG9taXplIHRoZSBsaWdodCBhbmQgZGFyayB0ZXh0IGNvbG9ycyBmb3IgdXNlIGluIG91ciBZSVEgY29sb3IgY29udHJhc3QgZnVuY3Rpb24uXG4keWlxLXRleHQtZGFyazogICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHlpcS10ZXh0LWxpZ2h0OiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuXG4vLyBPcHRpb25zXG4vL1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuXG4kZW5hYmxlLWNhcmV0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByZWZlcnMtcmVkdWNlZC1tb3Rpb24tbWVkaWEtcXVlcnk6ICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtaG92ZXItbWVkaWEtcXVlcnk6ICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCwgbm8gbG9uZ2VyIGFmZmVjdHMgYW55IGNvbXBpbGVkIENTU1xuJGVuYWJsZS1ncmlkLWNsYXNzZXM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXBvaW50ZXItY3Vyc29yLWZvci1idXR0b25zOiAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJpbnQtc3R5bGVzOiAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yZXNwb25zaXZlLWZvbnQtc2l6ZXM6ICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcblxuXG4vLyBTcGFjaW5nXG4vL1xuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cblxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc3BhY2VyczogbWFwLW1lcmdlKFxuICAoXG4gICAgMDogMCxcbiAgICAxOiAoJHNwYWNlciAqIC4yNSksXG4gICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgMzogJHNwYWNlcixcbiAgICA0OiAoJHNwYWNlciAqIDEuNSksXG4gICAgNTogKCRzcGFjZXIgKiAzKVxuICApLFxuICAkc3BhY2Vyc1xuKTtcblxuLy8gVGhpcyB2YXJpYWJsZSBhZmZlY3RzIHRoZSBgLmgtKmAgYW5kIGAudy0qYCBjbGFzc2VzLlxuJHNpemVzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDI1OiAyNSUsXG4gICAgNTA6IDUwJSxcbiAgICA3NTogNzUlLFxuICAgIDEwMDogMTAwJSxcbiAgICBhdXRvOiBhdXRvXG4gICksXG4gICRzaXplc1xuKTtcblxuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJGxpbmstZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgIHVuZGVybGluZSAhZGVmYXVsdDtcbi8vIERhcmtlbiBwZXJjZW50YWdlIGZvciBsaW5rcyB3aXRoIGAudGV4dC0qYCBjbGFzcyAoZS5nLiBgLnRleHQtc3VjY2Vzc2ApXG4kZW1waGFzaXplZC1saW5rLWhvdmVyLWRhcmtlbi1wZXJjZW50YWdlOiAxNSUgIWRlZmF1bHQ7XG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogICAxcmVtICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuQGluY2x1ZGUgX2Fzc2VydC1zdGFydHMtYXQtemVybygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGNvbnRhaW5lci1tYXgtd2lkdGhzLCBcIiRjb250YWluZXItbWF4LXdpZHRoc1wiKTtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuXG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuXG4kcm91bmRlZC1waWxsOiAgICAgICAgICAgICAgICA1MHJlbSAhZGVmYXVsdDtcblxuJGJveC1zaGFkb3ctc206ICAgICAgICAgICAgICAgMCAuMTI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogICAgICAgICAgICAgICAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcblxuJGNhcmV0LXdpZHRoOiAgICAgICAgICAgICAgICAgLjNlbSAhZGVmYXVsdDtcbiRjYXJldC12ZXJ0aWNhbC1hbGlnbjogICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcbiRjYXJldC1zcGFjaW5nOiAgICAgICAgICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcblxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1jb2xsYXBzZTogICAgICAgICBoZWlnaHQgLjM1cyBlYXNlICFkZWZhdWx0O1xuXG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiBqb2luKFxuICAoXG4gICAgKDIxIDkpLFxuICAgICgxNiA5KSxcbiAgICAoNCAzKSxcbiAgICAoMSAxKSxcbiAgKSxcbiAgJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvc1xuKTtcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC44NzUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgICAgICBudWxsICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXNpemU6ICAgICAgICAgICAgICAgNnJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5Mi1zaXplOiAgICAgICAgICAgICAgIDUuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5My1zaXplOiAgICAgICAgICAgICAgIDQuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5NC1zaXplOiAgICAgICAgICAgICAgIDMuNXJlbSAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkyLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkzLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXk0LXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICAgICAgICAgJGhlYWRpbmdzLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kbGVhZC1mb250LXNpemU6ICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGxlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAgICAgICAgICAgICA4MCUgIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtc21hbGwtZm9udC1zaXplOiAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG5cbiRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kaHItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xuXG4kZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGtiZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAtLjFyZW0gMCByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcbiRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4kbGlzdC1pbmxpbmUtcGFkZGluZzogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcblxuJGhyLW1hcmdpbi15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4zcmVtICFkZWZhdWx0O1xuXG4kdGFibGUtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1jb2xvcjogICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcblxuJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICAgICAgcmdiYSgkd2hpdGUsIC4wNSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ob3Zlci1jb2xvcjogICAgICAkdGFibGUtZGFyay1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIGxpZ2h0ZW4oJHRhYmxlLWRhcmstYmcsIDcuNSUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kdGFibGUtYmctbGV2ZWw6ICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItbGV2ZWw6ICAgICAgICAgIC02ICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LWZhbWlseTogICAgICAgbnVsbCAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICAgICAgIHJnYmEoJGNvbXBvbmVudC1hY3RpdmUtYmcsIC4yNSkgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAwIDAgMCAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICAgICRsaW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogICAgICAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICAgICRsaW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tcGFkZGluZy15OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYnRuLWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemU6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kYnRuLWJvcmRlci13aWR0aDogICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRidG4tYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgkd2hpdGUsIC4xNSksIDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgLjY1ICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgaW5zZXQgMCAzcHggNXB4IHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcblxuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYnRuLWJsb2NrLXNwYWNpbmcteTogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kYnRuLXRyYW5zaXRpb246ICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybXNcblxuJGxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1mYW1pbHk6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1iZzogICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMjUlKSAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1pbm5lcjogICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQgKiAxZW19ICsgI3skaW5wdXQtcGFkZGluZy15ICogMn0pICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtfSArICN7JGlucHV0LXBhZGRpbmcteX0pICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgLyAyfSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAqIDJ9ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn0pICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQtc20gKiAxZW19ICsgI3skaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAqIDJ9ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn0pICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQtbGcgKiAxZW19ICsgI3skaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAqIDJ9ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn0pICFkZWZhdWx0O1xuXG4kaW5wdXQtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtZ3V0dGVyOiAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teTogICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teDogICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbmxpbmUtbWFyZ2luLXg6ICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5saW5lLWlucHV0LW1hcmdpbi14OiAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1ncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtZ3V0dGVyOiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtc3BhY2VyLXg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNTAlIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiAgcmdiYSh0aGVtZS1jb2xvcihcInByaW1hcnlcIiksIC41KSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm94LXNoYWRvdzogICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3JkZXItY29sb3I6ICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgbm9uZSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJvcmRlci1jb2xvcjogICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9JyBkPSdNNi41NjQuNzVsLTMuNTkgMy42MTItMS41MzgtMS41NUwwIDQuMjYgMi45NzQgNy4yNSA4IDIuMTkzeicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA0JyUzZSUzY3BhdGggc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBkPSdNMCAyaDQnLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNlJTNjY2lyY2xlIHI9JzMnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgKiAxLjc1ICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplIC8gMiAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAgICAgICAgICAgICAgICAgIGNhbGMoI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemV9IC0gI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aCAqIDR9KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LWZhbWlseTogICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemU6ICAgICAgICAgICAkaW5wdXQtZm9udC1zaXplICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0OiAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAgIDFyZW0gIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxuJGN1c3RvbS1zZWxlY3QtZm9udC13ZWlnaHQ6ICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtbGluZS1oZWlnaHQ6ICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgOHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA1JyUzZSUzY3BhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iYWNrZ3JvdW5kOiAgICAgICAgICAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3Igbm8tcmVwZWF0IHJpZ2h0ICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplICFkZWZhdWx0OyAvLyBVc2VkIHNvIHdlIGNhbiBoYXZlIG11bHRpcGxlIGJhY2tncm91bmQgZWxlbWVudHMgKGUuZy4sIGFycm93IGFuZCBmZWVkYmFjayBpY29uKVxuXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctcmlnaHQ6IGNhbGMoKDFlbSArICN7MiAqICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteX0pICogMyAvIDQgKyAjeyRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nfSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiAgICAgIGNlbnRlciByaWdodCAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm94LXNoYWRvdzogICAgICAgICAgaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoOiAgICAgICAgICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICAgIDAgMCAwICRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICAgICAgICAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogICAgICAgICAgICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogICAgICAgICAgICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWhlaWdodDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6ICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgaW5zZXQgMCAuMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlcjogICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBJRS9FZGdlXG4kY3VzdG9tLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3JkZXItY29sb3I6ICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1kaXNhYmxlZC1iZzogICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJveC1zaGFkb3c6ICAgICAgICAgICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYnV0dG9uLWNvbG9yOiAgICAgICAgICAkY3VzdG9tLWZpbGUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtdGV4dDogKFxuICBlbjogXCJCcm93c2VcIlxuKSAhZGVmYXVsdDtcblxuXG4vLyBGb3JtIHZhbGlkYXRpb25cblxuJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xuXG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHZpZXdCb3g9Jy0yIC0yIDcgNyclM2UlM2NwYXRoIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBkPSdNMCAwbDMgM20wLTNMMCAzJy8lM2UlM2NjaXJjbGUgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeD0nMycgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeT0nMycgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeD0nMycgY3k9JzMnIHI9Jy41Jy8lM2UlM2Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJ2YWxpZFwiOiAoXG4gICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yLFxuICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWRcbiAgICApLFxuICAgIFwiaW52YWxpZFwiOiAoXG4gICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IsXG4gICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkXG4gICAgKSxcbiAgKSxcbiAgJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcbik7XG5cbi8vIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cblxuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuXG4vLyBOYXZzXG5cbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJGdyYXktMjAwICRncmF5LTIwMCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDAgJGdyYXktMzAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LWRpdmlkZXItY29sb3I6ICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kbmF2LWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcblxuXG4vLyBOYXZiYXJcblxuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbi8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xuJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMiAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogICAgICAgICAgICAoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSAvIDIgIWRlZmF1bHQ7XG5cbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1mb250LXNpemU6ICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogICAgICAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItYm9yZGVyLWNvbG9yOiAgcmdiYSgkd2hpdGUsIC4xKSAhZGVmYXVsdDtcblxuJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjkpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1pY29uLWJnOiAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgdmlld0JveD0nMCAwIDMwIDMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNlJTNjcGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4kZHJvcGRvd24tbWluLXdpZHRoOiAgICAgICAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogICAgICBjYWxjKCN7JGRyb3Bkb3duLWJvcmRlci1yYWRpdXN9IC0gI3skZHJvcGRvd24tYm9yZGVyLXdpZHRofSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogICAgICAgICAkbmF2LWRpdmlkZXItbWFyZ2luLXkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICBkYXJrZW4oJGdyYXktOTAwLCA1JSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgMS4yNSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRwYWdpbmF0aW9uLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG5cbi8vIEp1bWJvdHJvblxuXG4kanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBDYXJkc1xuXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgY2FsYygjeyRjYXJkLWJvcmRlci1yYWRpdXN9IC0gI3skY2FyZC1ib3JkZXItd2lkdGh9KSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xuJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XG4kY2FyZC1kZWNrLW1hcmdpbjogICAgICAgICAgICAgICAgICAkY2FyZC1ncm91cC1tYXJnaW4gIWRlZmF1bHQ7XG5cbiRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XG5cblxuLy8gVG9vbHRpcHNcblxuJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuXG4vLyBGb3JtIHRvb2x0aXBzIG11c3QgY29tZSBhZnRlciByZWd1bGFyIHRvb2x0aXBzXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kcG9wb3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyNzZweCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gVG9hc3RzXG5cbiR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjEpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuMjVyZW0gLjc1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiR0b2FzdC1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMDUpICFkZWZhdWx0O1xuXG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICA3NSUgIWRlZmF1bHQ7XG4kYmFkZ2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNWVtICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjRlbSAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kYmFkZ2UtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAkYnRuLXRyYW5zaXRpb24gIWRlZmF1bHQ7XG4kYmFkZ2UtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuXG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNmVtICFkZWZhdWx0O1xuLy8gVXNlIGEgaGlnaGVyIHRoYW4gbm9ybWFsIHZhbHVlIHRvIGVuc3VyZSBjb21wbGV0ZWx5IHJvdW5kZWQgZWRnZXMgd2hlblxuLy8gY3VzdG9taXppbmcgcGFkZGluZyBvciBmb250LXNpemUgb24gbGFiZWxzLlxuJGJhZGdlLXBpbGwtYm9yZGVyLXJhZGl1czogICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJG1vZGFsLWNvbnRlbnQtY29sb3I6ICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6ICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG5cbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgIC41ICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogICAgICAgICAgICAgICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0OyAvLyBLZWVwIHRoaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgIDgwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcblxuJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcbiRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xuXG5cbi8vIEFsZXJ0c1xuLy9cbi8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4kYWxlcnQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYWxlcnQtYmctbGV2ZWw6ICAgICAgICAgICAgICAgICAgICAtMTAgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLWxldmVsOiAgICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcbiRhbGVydC1jb2xvci1sZXZlbDogICAgICAgICAgICAgICAgIDYgIWRlZmF1bHQ7XG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjc1ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcblxuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWNvbG9yOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6ICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3IgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIEltYWdlIHRodW1ibmFpbHNcblxuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG5cbi8vIEZpZ3VyZXNcblxuJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgOTAlICFkZWZhdWx0O1xuJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG5cbi8vIEJyZWFkY3J1bWJzXG5cbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgcXVvdGUoXCIvXCIpICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBDYXJvdXNlbFxuXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLWhvdmVyLW9wYWNpdHk6ICAgICAuOSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xNXMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWluZGljYXRvci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQ6IDEwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY2FwdGlvbi13aWR0aDogICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDogICAgICAgIDIwcHggIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjUtMi41LTIuNSAyLjUtMi41LTEuNS0xLjV6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZD0nTTIuNzUgMGwtMS41IDEuNSAyLjUgMi41LTIuNSAyLjUgMS41IDEuNSA0LTQtNC00eicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xuJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcblxuXG4vLyBTcGlubmVyc1xuXG4kc3Bpbm5lci13aWR0aDogICAgICAgICAycmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgJHNwaW5uZXItd2lkdGggIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGg6ICAuMjVlbSAhZGVmYXVsdDtcblxuJHNwaW5uZXItd2lkdGgtc206ICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcblxuXG4vLyBDbG9zZVxuXG4kY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIDAgMXB4IDAgJHdoaXRlICFkZWZhdWx0O1xuXG5cbi8vIENvZGVcblxuJGNvZGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgODcuNSUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcblxuJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4ka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgICAgICAgMzQwcHggIWRlZmF1bHQ7XG5cblxuLy8gVXRpbGl0aWVzXG5cbiRkaXNwbGF5czogbm9uZSwgaW5saW5lLCBpbmxpbmUtYmxvY2ssIGJsb2NrLCB0YWJsZSwgdGFibGUtcm93LCB0YWJsZS1jZWxsLCBmbGV4LCBpbmxpbmUtZmxleCAhZGVmYXVsdDtcbiRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiAhZGVmYXVsdDtcbiRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5ICFkZWZhdWx0O1xuXG5cbi8vIFByaW50aW5nXG5cbiRwcmludC1wYWdlLXNpemU6ICAgICAgICAgICAgICAgICAgIGEzICFkZWZhdWx0O1xuJHByaW50LWJvZHktbWluLXdpZHRoOiAgICAgICAgICAgICAgbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgXCJsZ1wiKSAhZGVmYXVsdDtcbiIsIi8vLyBHcmlkIHN5c3RlbVxuLy9cbi8vIEdlbmVyYXRlIHNlbWFudGljIGdyaWQgY29sdW1ucyB3aXRoIHRoZXNlIG1peGlucy5cblxuQG1peGluIG1ha2UtY29udGFpbmVyKCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogJGd1dHRlciAvIDI7XG4gIHBhZGRpbmctbGVmdDogJGd1dHRlciAvIDI7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cblxuLy8gRm9yIGVhY2ggYnJlYWtwb2ludCwgZGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBjb250YWluZXIgaW4gYSBtZWRpYSBxdWVyeVxuQG1peGluIG1ha2UtY29udGFpbmVyLW1heC13aWR0aHMoJG1heC13aWR0aHM6ICRjb250YWluZXItbWF4LXdpZHRocywgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAZWFjaCAkYnJlYWtwb2ludCwgJGNvbnRhaW5lci1tYXgtd2lkdGggaW4gJG1heC13aWR0aHMge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgbWF4LXdpZHRoOiAkY29udGFpbmVyLW1heC13aWR0aDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1ha2Utcm93KCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLSRndXR0ZXIgLyAyO1xuICBtYXJnaW4tbGVmdDogLSRndXR0ZXIgLyAyO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtcmVhZHkoJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gUHJldmVudCBjb2x1bW5zIGZyb20gYmVjb21pbmcgdG9vIG5hcnJvdyB3aGVuIGF0IHNtYWxsZXIgZ3JpZCB0aWVycyBieVxuICAvLyBhbHdheXMgc2V0dGluZyBgd2lkdGg6IDEwMCU7YC4gVGhpcyB3b3JrcyBiZWNhdXNlIHdlIHVzZSBgZmxleGAgdmFsdWVzXG4gIC8vIGxhdGVyIG9uIHRvIG92ZXJyaWRlIHRoaXMgaW5pdGlhbCB3aWR0aC5cbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6ICRndXR0ZXIgLyAyO1xuICBwYWRkaW5nLWxlZnQ6ICRndXR0ZXIgLyAyO1xufVxuXG5AbWl4aW4gbWFrZS1jb2woJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gIGZsZXg6IDAgMCBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xuICAvLyBBZGQgYSBgbWF4LXdpZHRoYCB0byBlbnN1cmUgY29udGVudCB3aXRoaW4gZWFjaCBjb2x1bW4gZG9lcyBub3QgYmxvdyBvdXRcbiAgLy8gdGhlIHdpZHRoIG9mIHRoZSBjb2x1bW4uIEFwcGxpZXMgdG8gSUUxMCsgYW5kIEZpcmVmb3guIENocm9tZSBhbmQgU2FmYXJpXG4gIC8vIGRvIG5vdCBhcHBlYXIgdG8gcmVxdWlyZSB0aGlzLlxuICBtYXgtd2lkdGg6IHBlcmNlbnRhZ2UoJHNpemUgLyAkY29sdW1ucyk7XG59XG5cbkBtaXhpbiBtYWtlLWNvbC1vZmZzZXQoJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gICRudW06ICRzaXplIC8gJGNvbHVtbnM7XG4gIG1hcmdpbi1sZWZ0OiBpZigkbnVtID09IDAsIDAsIHBlcmNlbnRhZ2UoJG51bSkpO1xufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_enum_ShrinkState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/enum/ShrinkState */ "./src/app/shared/enum/ShrinkState.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(utils) {
        this.utils = utils;
    }
    Object.defineProperty(HeaderComponent.prototype, "shrink", {
        get: function () {
            return this.isShrunk ? _shared_enum_ShrinkState__WEBPACK_IMPORTED_MODULE_4__["ShrinkState"].Narrow : _shared_enum_ShrinkState__WEBPACK_IMPORTED_MODULE_4__["ShrinkState"].Wide;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "hide", {
        get: function () {
            return this.isShrunk ? _shared_enum_ShrinkState__WEBPACK_IMPORTED_MODULE_4__["ShrinkState"].Narrow : _shared_enum_ShrinkState__WEBPACK_IMPORTED_MODULE_4__["ShrinkState"].Wide;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.ngOnInit = function () {
        this.menuOpen = false;
        this.isShrunk = false;
        this.scroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return window.pageYOffset; }));
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.scrollSubscription = this.scroll.subscribe(function (pageYOffset) {
            if (pageYOffset < 50) {
                _this.isShrunk = false;
            }
            else {
                _this.isShrunk = true;
            }
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.scrollSubscription.unsubscribe();
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.menuOpen = !this.menuOpen;
    };
    HeaderComponent.prototype.closeMenu = function () {
        this.menuOpen = false;
    };
    Object.defineProperty(HeaderComponent.prototype, "isMenuOpen", {
        get: function () {
            return this.menuOpen;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('shrink', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])(_shared_enum_ShrinkState__WEBPACK_IMPORTED_MODULE_4__["ShrinkState"].Wide, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '4.5rem' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])(_shared_enum_ShrinkState__WEBPACK_IMPORTED_MODULE_4__["ShrinkState"].Narrow, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '3rem' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('hide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])(_shared_enum_ShrinkState__WEBPACK_IMPORTED_MODULE_4__["ShrinkState"].Wide, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '2.2rem' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])(_shared_enum_ShrinkState__WEBPACK_IMPORTED_MODULE_4__["ShrinkState"].Narrow, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0rem' }))
                ])
            ],
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"container\">\n    <div class=\"content px-4 py-5\">\n      <h4 class=\"page-title\">\n      <span>\n        <fa-icon icon=\"quote-left\"></fa-icon>\n      </span>\n        {{ 'productsPage.title' | translate }}\n      </h4>\n\n      <div class=\"page-content\">\n        Przedmioty aktualnie dostępne w sprzedaży.\n\n        <div class=\"products-list\">\n          <a class=\"product-item\" *ngFor=\"let product of products\" [href]=\"product.href\" target=\"_blank\">\n            <div class=\"image\">\n              <img [src]=\"product.imgPath\">\n            </div>\n            <div class=\"product-title\">\n              {{ product.title }}\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * VARIABLES\n */\n/* fonts */\n/* colors */\n/* miscellaneous */\n/* buttons */\n.page {\n  background-color: #f1f1f1;\n  background-image: linear-gradient(45deg, #f1f1f1, #ffffff); }\n.content .page-title {\n  font-weight: 600;\n  text-transform: uppercase; }\n.content .page-title span {\n    margin-right: .25rem;\n    border-bottom: 3px solid #13bfb1; }\n.content .page-title span fa-icon {\n      position: relative;\n      top: -1rem;\n      font-size: .75rem; }\n.content .page-content {\n  margin-top: 2rem;\n  font-weight: 300;\n  text-align: justify; }\n.content .page-content .products-list {\n    display: flex;\n    justify-content: space-between;\n    align-items: stretch;\n    flex-wrap: wrap;\n    margin-top: 2rem; }\n.content .page-content .products-list .product-item {\n      display: flex;\n      flex-direction: column;\n      align-self: flex-end;\n      width: 20vw;\n      padding: 1.2rem;\n      color: inherit;\n      border: 1px solid transparent;\n      transition: border .3s ease-in-out; }\n@media screen and (max-width: 992px) {\n        .content .page-content .products-list .product-item {\n          width: 30vw; } }\n@media screen and (max-width: 576px) {\n        .content .page-content .products-list .product-item {\n          width: 40vw; } }\n.content .page-content .products-list .product-item:hover {\n        border: 1px solid #13bfb1;\n        text-decoration: none; }\n.content .page-content .products-list .product-item .image {\n        overflow: hidden; }\n.content .page-content .products-list .product-item .image img {\n          width: 100%; }\n.content .page-content .products-list .product-item .product-title {\n        font-weight: 500;\n        font-size: .9rem;\n        margin-top: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yua29sYWRhL1dvcmtzcGFjZS9wbS1tZWRpY2Evc3JjL3N0eWxlcy9wbS1tZWRpY2EtY3VzdG9tLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2tyenlzenRvZi5rb2xhZGEvV29ya3NwYWNlL3BtLW1lZGljYS9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQ0VFO0FERUYsVUFBQTtBQUtBLFdBQUE7QUFtQkEsa0JBQUE7QUFJQSxZQUFBO0FFNUJBO0VBQ0UseUJBSDZCO0VBSTdCLDBEQUFzRixFQUFBO0FBR3hGO0VBRUksZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBO0FBSDdCO0lBTU0sb0JBQW9CO0lBQ3BCLGdDRk5XLEVBQUE7QUVEakI7TUFVUSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLGlCQUFpQixFQUFBO0FBWnpCO0VBa0JJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFwQnZCO0lBdUJNLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTtBQTNCdEI7TUE4QlEsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixvQkFBb0I7TUFDcEIsV0FBVztNQUNYLGVBQWU7TUFDZixjQUFjO01BQ2QsNkJBQTZCO01BQzdCLGtDQUFrQyxFQUFBO0FBRWxDO1FBdkNSO1VBd0NVLFdBQVcsRUFBQSxFQXlCZDtBQXRCQztRQTNDUjtVQTRDVSxXQUFXLEVBQUEsRUFxQmQ7QUFqRVA7UUFnRFUseUJGL0NPO1FFZ0RQLHFCQUFxQixFQUFBO0FBakQvQjtRQXFEVSxnQkFBZ0IsRUFBQTtBQXJEMUI7VUF3RFksV0FBVyxFQUFBO0FBeER2QjtRQTZEVSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFZBUklBQkxFU1xuICovXG5cbi8qIGZvbnRzICovXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xuXG4vKiBjb2xvcnMgKi9cbiRwcmltYXJ5OiAjMTNiZmIxICFkZWZhdWx0O1xuJHNlY29uZGFyeTogIzk4OTg5OCAhZGVmYXVsdDtcbiRhY2NlbnQ6ICNmMzY0MzggIWRlZmF1bHQ7XG4kbGlnaHQ6ICNmZmZmZmYgIWRlZmF1bHQ7XG4kbGlnaHQtZGFyazogIzU0NTQ1NCAhZGVmYXVsdDtcbiRkYXJrOiAjMmUyZjM3ICFkZWZhdWx0O1xuJGRhcmtlcjogIzFkMWYyNyAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKFxuICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXG4gIFwiYWNjZW50XCI6ICRhY2NlbnQsXG4gIFwibGlnaHRcIjogJGxpZ2h0LFxuICBcImxpZ2h0LWRhcmtcIjogJGxpZ2h0LWRhcmssXG4gIFwiZGFya1wiOiAkZGFyayxcbiAgXCJkYXJrZXJcIjogJGRhcmtlclxuKTtcblxuLyogbWlzY2VsbGFuZW91cyAqL1xuJGVuYWJsZS1ncmFkaWVudHM6IHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6IHRydWUgIWRlZmF1bHQ7XG5cbi8qIGJ1dHRvbnMgKi9cbiRidG4tZm9udC1zaXplOiAuOXJlbSAhZGVmYXVsdDtcbi8vJGJ0bi1saW5lLWhlaWdodDogMiAhZGVmYXVsdDtcbi8vJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbi8vJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGJ0bi1oZXJvLXBhZGRpbmcteTogLjVyZW0gIWRlZmF1bHQ7XG4kYnRuLWhlcm8tcGFkZGluZy14OiAycmVtICFkZWZhdWx0O1xuXG4vLyBoZXJvIGJ0blxuJGJ0bi1vdXRsaW5lLWJvcmRlci13aWR0aDogM3B4ICFkZWZhdWx0O1xuJGJ0bi1oZXJvLWZvbnQtd2VpZ2h0OiBib2xkICFkZWZhdWx0O1xuJGJ0bi1oZXJvLWJvcmRlci1yYWRpdXM6IDAgIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4zcyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuM3MgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbkBpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG5AaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnNcIjtcblxuJHRoZW1lLWNvbG9yczogbWFwLXJlbW92ZSgkdGhlbWUtY29sb3JzLCBcImluZm9cIik7XG4iLCIvKipcbiAqIFZBUklBQkxFU1xuICovXG4vKiBmb250cyAqL1xuLyogY29sb3JzICovXG4vKiBtaXNjZWxsYW5lb3VzICovXG4vKiBidXR0b25zICovXG4ucGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YxZjFmMSwgI2ZmZmZmZik7IH1cblxuLmNvbnRlbnQgLnBhZ2UtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gIC5jb250ZW50IC5wYWdlLXRpdGxlIHNwYW4ge1xuICAgIG1hcmdpbi1yaWdodDogLjI1cmVtO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTNiZmIxOyB9XG4gICAgLmNvbnRlbnQgLnBhZ2UtdGl0bGUgc3BhbiBmYS1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogLTFyZW07XG4gICAgICBmb250LXNpemU6IC43NXJlbTsgfVxuXG4uY29udGVudCAucGFnZS1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTsgfVxuICAuY29udGVudCAucGFnZS1jb250ZW50IC5wcm9kdWN0cy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXRvcDogMnJlbTsgfVxuICAgIC5jb250ZW50IC5wYWdlLWNvbnRlbnQgLnByb2R1Y3RzLWxpc3QgLnByb2R1Y3QtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgd2lkdGg6IDIwdnc7XG4gICAgICBwYWRkaW5nOiAxLjJyZW07XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIC4zcyBlYXNlLWluLW91dDsgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmNvbnRlbnQgLnBhZ2UtY29udGVudCAucHJvZHVjdHMtbGlzdCAucHJvZHVjdC1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMzB2dzsgfSB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAuY29udGVudCAucGFnZS1jb250ZW50IC5wcm9kdWN0cy1saXN0IC5wcm9kdWN0LWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiA0MHZ3OyB9IH1cbiAgICAgIC5jb250ZW50IC5wYWdlLWNvbnRlbnQgLnByb2R1Y3RzLWxpc3QgLnByb2R1Y3QtaXRlbTpob3ZlciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxM2JmYjE7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgLmNvbnRlbnQgLnBhZ2UtY29udGVudCAucHJvZHVjdHMtbGlzdCAucHJvZHVjdC1pdGVtIC5pbWFnZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAgICAgLmNvbnRlbnQgLnBhZ2UtY29udGVudCAucHJvZHVjdHMtbGlzdCAucHJvZHVjdC1pdGVtIC5pbWFnZSBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICAuY29udGVudCAucGFnZS1jb250ZW50IC5wcm9kdWN0cy1saXN0IC5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtOyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3BtLW1lZGljYS1jdXN0b21cIjtcblxuJHBhZ2UtYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcblxuLnBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnZS1iYWNrZ3JvdW5kLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICRwYWdlLWJhY2tncm91bmQtY29sb3IsIHRoZW1lLWNvbG9yKCdsaWdodCcpKTtcbn1cblxuLmNvbnRlbnQge1xuICAucGFnZS10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0aGVtZS1jb2xvcihcInByaW1hcnlcIik7XG5cbiAgICAgIGZhLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXG4gICAgLnByb2R1Y3RzLWxpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcblxuICAgICAgLnByb2R1Y3QtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICB3aWR0aDogMjB2dztcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgJ2xnJykpIHtcbiAgICAgICAgICB3aWR0aDogMzB2dztcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0aGVtZS1jb2xvcigncHJpbWFyeScpO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdC10aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.products = [
            {
                title: 'Zestaw do nauki szycia chirurgicznego + nici',
                imgPath: 'https://a.allegroimg.com/s1440/039cfb/c4e5e7c44d518506e05a0a97e549',
                descriptionHeadline: 'Zestaw do nauki szycia chirurgicznego zawiera : Zestaw do wielokrotnego użytku!',
                descriptionItems: [
                    '13 saszetek! nici chirurgicznych nierozpuszczalnych nylonowych :( 4 x 0 , 4 x 2/0 , 4 x 3/0 , 1 x 4/0 ) z igłami 3/8 koła tnącymi',
                    'igłotrzymacz (imadło) Mayo - Hegar 15 cm',
                    'Pęseta anatomiczna 12 cm',
                    'nożyczki chirurgiczne ostro/tępe 13cm',
                    'Skalpel nr 20 z trzonkiem',
                    'SKINPAD - to fragment sztucznej skóry do nauki szycia chirurgicznego. Wymiary: 15 x 13 x 1,5 cm'
                ],
                href: 'https://allegro.pl/oferta/zestaw-do-nauki-szycia-chirurgicznego-nici-7789137213'
            },
            {
                title: 'Zestaw do nauki szycia chirurgicznego + 13 nici',
                imgPath: 'https://c.allegroimg.com/s1440/03d65c/62f6408c453d9259fb945cd41cac',
                descriptionHeadline: 'Zestaw do nauki szycia chirurgicznego zawiera :',
                descriptionItems: [
                    '10 saszetek nici chirurgicznych nierozpuszczalnych nylonowych :( 4 x 0 , 4 x 2/0 , 4 x 3/0 , 1 x 4/0 ) z igłami 3/8 koła tnącymi',
                    'igłotrzymacz (imadło) Mayo - Hegar 15 cm',
                    'Pęseta anatomiczna 12 cm',
                    'nożyczki chirurgiczne ostro/tępe 13cm',
                    'Skalpel nr 20 z trzonkiem'
                ],
                href: 'https://allegro.pl/oferta/zestaw-do-nauki-szycia-chirurgicznego-13-nici-7886739008'
            },
            {
                title: 'Mix rozmiarów 10 sztuk Nici Chirurgicznych !!!!!',
                imgPath: 'https://f.allegroimg.com/s1440/035b47/8e16c02a4f44bb5b42a0a584e79f',
                descriptionHeadline: 'Przedmiotem aukcji jest MIX 10 sztuk nici chirurgicznych!!!!!',
                descriptionItems: [
                    'Rozmiar 0- 3 sztuki !!!',
                    'Rozmiar 2/0- 3 sztuki !!!',
                    'Rozmiar 3/0- 3 sztuki !!!',
                    'Rozmiar 4/0- 1 sztuka !!!',
                    'Krzywizna igły - 3/8 koła',
                    'Rodzaj igły - odwrotnie tnąca',
                    'Długość nici - 75 cm',
                    'Kolor nici - niebieski'
                ],
                href: 'https://allegro.pl/oferta/mix-rozmiarow-10-sztuk-nici-chirurgicznych-7971215764'
            },
        ];
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shared/enum/ShrinkState.ts":
/*!********************************************!*\
  !*** ./src/app/shared/enum/ShrinkState.ts ***!
  \********************************************/
/*! exports provided: ShrinkState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShrinkState", function() { return ShrinkState; });
var ShrinkState;
(function (ShrinkState) {
    ShrinkState["Narrow"] = "narrow";
    ShrinkState["Wide"] = "wide";
})(ShrinkState || (ShrinkState = {}));


/***/ }),

/***/ "./src/app/shared/services/utils.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/utils.service.ts ***!
  \**************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    Object.defineProperty(UtilsService.prototype, "mailToHref", {
        get: function () {
            var mail = 'nicichirurgiczne@onet.pl';
            return "mailto:" + mail;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UtilsService.prototype, "telToHref", {
        get: function () {
            var phone = '+48665878698';
            return "tel:" + phone;
        },
        enumerable: true,
        configurable: true
    });
    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _website_map_location_website_map_location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./website-map-location/website-map-location.component */ "./src/app/shared/website-map-location/website-map-location.component.ts");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_website_map_location_website_map_location_component__WEBPACK_IMPORTED_MODULE_3__["WebsiteMapLocationComponent"]],
            exports: [
                _website_map_location_website_map_location_component__WEBPACK_IMPORTED_MODULE_3__["WebsiteMapLocationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/website-map-location/website-map-location.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/website-map-location/website-map-location.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mapouter\">\n  <div class=\"gmap-canvas\">\n    <iframe id=\"gmap_canvas\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"\n            src=\"https://maps.google.com/maps?q=Kowary%2C%20Bema%204&t=&z=16&ie=UTF8&iwloc=&output=embed\">\n    </iframe>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/website-map-location/website-map-location.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/website-map-location/website-map-location.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapouter {\n  position: relative;\n  text-align: right;\n  height: 70vh;\n  width: 100vw; }\n\n.gmap-canvas {\n  overflow: hidden;\n  background: none !important;\n  height: 70vh;\n  width: 100vw; }\n\niframe {\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yua29sYWRhL1dvcmtzcGFjZS9wbS1tZWRpY2Evc3JjL2FwcC9zaGFyZWQvd2Vic2l0ZS1tYXAtbG9jYXRpb24vd2Vic2l0ZS1tYXAtbG9jYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3dlYnNpdGUtbWFwLWxvY2F0aW9uL3dlYnNpdGUtbWFwLWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcG91dGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgaGVpZ2h0OiA3MHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5nbWFwLWNhbnZhcyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA3MHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbmlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/website-map-location/website-map-location.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/website-map-location/website-map-location.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WebsiteMapLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteMapLocationComponent", function() { return WebsiteMapLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WebsiteMapLocationComponent = /** @class */ (function () {
    function WebsiteMapLocationComponent() {
    }
    WebsiteMapLocationComponent.prototype.ngOnInit = function () {
    };
    WebsiteMapLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pm-website-map-location',
            template: __webpack_require__(/*! ./website-map-location.component.html */ "./src/app/shared/website-map-location/website-map-location.component.html"),
            styles: [__webpack_require__(/*! ./website-map-location.component.scss */ "./src/app/shared/website-map-location/website-map-location.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebsiteMapLocationComponent);
    return WebsiteMapLocationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/krzysztof.kolada/Workspace/pm-medica/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map