/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/recipe card/cardCarousel.js":
/*!********************************************!*\
  !*** ./source/recipe card/cardCarousel.js ***!
  \********************************************/
/***/ (() => {

eval("// CardCarousel.js\nclass CardCarousel extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n\n\n    // paramter is in an array of recipe cards\n    createCardCarousel(recipeCards) {\n        for (let i = 0; i < recipeCards.length; i++) {\n            if (i > 2) {\n                recipeCards[i].classList.add('hidden');\n            }\n            this.shadowRoot.append(recipeCards[i]);\n        }\n    }\n\n    //let nextButton = new CardCarousel(document.querySelector('.forward'));\n    //nextButton = document.querySelector('.forward'); // next 3 recipes\n    //prevButton = document.querySelector('.back'); // last 3 recipes in previous slides\n\n    // when nextButton is clicked, see next 3 recipes\n    //buttons[0].addEventListener('click', nextCards());\n\n    // when prevButton is clicked, see prev 3 recipes\n    //buttons[1].addEventListener('click', prevCards());\n\n    /*\n    * This function will be called in an event listener when the right button is clicked.\n    * The next 3 recipe cards will be shown.\n    */\n    nextCards() {\n        const cards = this.querySelectorAll('recipe-card');\n        for (let i = cards.length - 4; i >= 0; i--) {\n            if (!(cards[i].classList.contains('hidden'))) {\n                cards[i].classList.add('hidden');\n                cards[i + 3].classList.remove('hidden');\n            }\n        }\n    }\n\n    /*\n    * This function will be called in an event listener when the left button is clicked.\n    * The previous 3 recipe cards will be shown.\n    */\n    prevCards() {\n        const cards = this.querySelectorAll('recipe-card');\n        for (let i = 3; i < cards.length; i++) {\n            if (!(cards[i].classList.contains('hidden'))) {\n                cards[i].classList.add('hidden');\n                cards[i - 3].classList.remove('hidden');\n            }\n        }\n    }\n}\ncustomElements.define('card-carousel', CardCarousel);\n\n/*\n* Creating the buttons for next and previous slides of the carousel\n* And adding the event listeners for each button\n*/\nconst nextButton = document.querySelector('.forward'); // next 3 recipes\nconst prevButton = document.querySelector('.back'); // last 3 recipes in previous slides\nnextButton.addEventListener('click', CardCarousel().nextCards());\nprevButton.addEventListener('click', CardCarousel().prevCards());\n\n//# sourceURL=webpack://cse110-sp21-group11/./source/recipe_card/cardCarousel.js?");

/***/ }),

/***/ "./source/recipecard/card.js":
/*!***********************************!*\
  !*** ./source/recipecard/card.js ***!
  \***********************************/
/***/ (() => {

eval("class Card extends HTMLElement{\n    constructor(){\n        super(); //Inherit from ancestor\n        this.attachShadow({ mode: 'open'});\n    }\n\n    set data(cardData){\n\n        if(!cardData) return; //Exit function if data DNE\n\n\n        this.json = cardData;\n\n        const cardStyle = document.createElement('style');\n        const cardArticle = document.createElement('article');\n\n\n        //For now this is literally just card.css in its entirety\n        cardStyle.innerHTML = `\n        .recipes-wrapper {\n            display: grid;\n            grid-template-columns: repeat(3, minmax(12rem, 16rem));\n            grid-gap: 4.3rem;\n            justify-content: center;\n          }\n\n          \n          \n          article {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            overflow: hidden;\n            border-radius: 15px;\n            border: 2px;\n            padding: 15px;\n            margin: 2rem;\n            width: 250px;\n            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n          }\n          \n          article:hover {\n            transform: scale(1.05);\n            transition: all 0.2s ease-out;\n            cursor: pointer;\n          }\n          \n          .card-image {\n            object-fit: cover;\n            width: 100%;\n            height: 250px;\n          }\n          \n          p.title {\n            font-family: Century Gothic, Candara, serif;\n            overflow: hidden;\n            font-size: 23px;\n            margin-top: 0.3rem;\n            margin-bottom: 0.3rem;\n          }\n          \n          p.title:after {\n            content: \" \";\n            display: block;\n            border-bottom: 1px solid #a8a7a7;\n          }\n          \n          p.recipeTag {\n            color: #f54254;\n            text-transform: uppercase;\n            font-weight: lighter;\n            margin-top: 0.4rem;\n            margin-bottom: 0.4rem;\n          }\n          \n          div.rating > img {\n            display: inline-block;\n            object-fit: scale-down;\n            width: 100px;\n            margin-right: 3rem;\n          }\n\n          div.rating-time {\n            margin-top: 0.4rem;\n            margin-bottom: 0.4rem;\n            display: flex;\n            align-items: center;\n          }\n          \n          div.rating-time > img {\n            display: inline-block;\n            object-fit: scale-down;\n            width: 100px;\n            margin-right: 3rem;\n          }\n          \n          div.rating-time img.time {\n            object-fit: scale-down;\n            width: 20px;\n            margin-right: 0.3rem;\n          }\n          \n          .hidden {\n            display: none;\n          }\n          \n          `;\n\n        \n\n        //Recipe Title\n        //const titleText = \"Temp Title Text\"; //TEMP VAL; get title from API\n        const titleText = cardData.title;\n        \n\n        const title = document.createElement('p');\n        title.classList.add('title');\n\n\n        //Recipe Link\n        const hyperLink = \"https://www.youtube.com/watch?v=dQw4w9WgXcQ\"; //TEMP VAL; Temporary url to recipe\n        const link = document.createElement('a');\n        link.innerText = titleText;\n        title.appendChild(link);\n\n        //Recipe Thumbnail\n      \n        const thumbnailLink = cardData.image;\n\n        const thumbnailImg = document.createElement('img');\n        thumbnailImg.classList.add('card-image');\n        thumbnailImg.setAttribute('src', thumbnailLink);\n        thumbnailImg.setAttribute('alt', titleText);\n\n\n        //Recipe cook time\n        let cookTime = cardData.readyInMinutes; //TEMP VAL; get from API\n\n        //const time = document.createElement('time');\n        cookTime = cookTime + \" Minutes\"; //TEMP VAL;convert time from API into readable string\n\n\n        //Recipe reviews\n        const ratingValue = 4.5; //TEMP VAL; reviews to be added later\n        const numRatings = 327; //^^\n        const rating = document.createElement('div');\n        rating.classList.add('rating-time');\n\n        //TEMP VAL; number of stars to display\n        rating.innerHTML = `\n        <span>${ratingValue}</span>\n        <img src=\"images\\\\5-stars-red.jpeg\" class = \"rating\"></img>\n        <img src=\"images\\\\time-logo.png\" class = \"time\"></img>\n        <p>${cookTime}</p>\n        `;\n\n        if (numRatings != 0) {\n        //  rating.innerHTML += `<span>(${numRatings})</span>`;\n        }\n        //Maybe do \n        else {\n        rating.innerHTML = `\n          <span>No Reviews</span>\n        `;\n        }\n\n\n        //TODO: Change picture based on # of stars\n\n\n        \n\n        //Recipe ingredients\n        var ingredientsList = \"\"; //TEMP VAL; Get list of ingredients, store here as plaintext\n        for(let i = 0; i < cardData.extendedIngredients.length; i++){\n          ingredientsList += cardData.extendedIngredients[i].originalString;\n          if(i != cardData.extendedIngredients.length-1) ingredientsList += \", \";\n        }\n\n        const ingredients = document.createElement('p');\n        ingredients.classList.add('ingredients');\n        ingredients.innerText = ingredientsList.substring(0, 100) + \" (...)\"; //Abbreviates ingredients text on card\n\n        //TODO: Add recipe tag to card\n\n\n        //Add elements to recipe card\n        cardArticle.appendChild(thumbnailImg);\n        cardArticle.appendChild(title);\n        cardArticle.appendChild(rating);\n        //cardArticle.appendChild(time);\n        cardArticle.appendChild(ingredients);\n\n\n        this.shadowRoot.append(cardStyle, cardArticle);\n\n    }\n\n    get data(){ return this.json;}\n\n\n\n}\n\n\n\ncustomElements.define('recipe-card', Card);\n\n//# sourceURL=webpack://cse110-sp21-group11/./source/recipecard/card.js?");

/***/ }),

/***/ "./source/recipecard/cardCarousel.js":
/*!*******************************************!*\
  !*** ./source/recipecard/cardCarousel.js ***!
  \*******************************************/
/***/ (() => {

eval("// CardCarousel.js\n\nclass CardCarousel extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n\n\n    /*\n    * This function will be called in an event listener when the right button is clicked.\n    * The next 3 recipe cards will be shown.\n    */\n    nextCards() {\n        const cards = this.shadowRoot.querySelectorAll('recipe-card');\n        for (let i = cards.length - 4; i >= 0; i--) {\n            if (cards[i].getAttribute('style') != 'display: none') {\n                cards[i].setAttribute('style', 'display: none');\n                cards[i + 3].style.display = '';\n            }\n        }\n    }\n\n    /*\n    * This function will be called in an event listener when the left button is clicked.\n    * The previous 3 recipe cards will be shown.\n    */\n    prevCards() {\n        const cards = this.shadowRoot.querySelectorAll('recipe-card');\n        for (let i = 3; i < cards.length; i++) {\n            if (cards[i].getAttribute('style') != 'display: none') {\n                cards[i].setAttribute('style', 'display: none');\n                cards[i - 3].style.display = '';\n            }\n        }\n    }\n\n\n    // paramter is in an array of recipe cards\n    createCardCarousel(recipeCards) {\n\n        for (let i = 0; i < recipeCards.length; i++) {\n            if (i > 2) {\n                recipeCards[i].setAttribute('style', 'display: none');\n            }\n            this.shadowRoot.append(recipeCards[i]);\n        }\n\n    }\n\n    \n}\n\n\ncustomElements.define('card-carousel', CardCarousel);\n\n//# sourceURL=webpack://cse110-sp21-group11/./source/recipecard/cardCarousel.js?");

/***/ }),

/***/ "./source/recipecard/cardExpand.js":
/*!*****************************************!*\
  !*** ./source/recipecard/cardExpand.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass expandCard {\n    static routes = {};\n    registerCard = (page, func) => {\n        this[page] = func;\n    }\n\n    navigate = (page) => {\n        if (this[page] == undefined) {\n            return console.error(`this page is undefined: ${page}`);\n        }\n        return this[page]();\n    }\n\n    bindCard = (recipeCard, func) => {\n        registerRoute(recipeCard, func);\n        recipeCard.addEventListener('click', () => {\n            Router.navigate(recipeCard);\n        })\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (expandCard);\n\n//# sourceURL=webpack://cse110-sp21-group11/./source/recipecard/cardExpand.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./source/recipe card/cardCarousel.js"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./source/recipecard/card.js"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./source/recipecard/cardCarousel.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./source/recipecard/cardExpand.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;