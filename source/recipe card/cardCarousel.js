// CardCarousel.js
class CardCarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }


    // paramter is in an array of recipe cards
    createCardCarousel(recipeCards) {
        for (let i = 0; i < recipeCards.length; i++) {
            if (i > 2) {
                recipeCards[i].classList.add('hidden');
            }
            this.shadowRoot.append(recipeCards[i]);
        }
    }

    //let nextButton = new CardCarousel(document.querySelector('.forward'));
    //nextButton = document.querySelector('.forward'); // next 3 recipes
    //prevButton = document.querySelector('.back'); // last 3 recipes in previous slides

    // when nextButton is clicked, see next 3 recipes
    //buttons[0].addEventListener('click', nextCards());

    // when prevButton is clicked, see prev 3 recipes
    //buttons[1].addEventListener('click', prevCards());

    /*
    * This function will be called in an event listener when the right button is clicked.
    * The next 3 recipe cards will be shown.
    */
    nextCards() {
        const cards = this.querySelectorAll('recipe-card');
        for (let i = cards.length - 4; i >= 0; i--) {
            if (!(cards[i].classList.contains('hidden'))) {
                cards[i].classList.add('hidden');
                cards[i + 3].classList.remove('hidden');
            }
        }
    }

    /*
    * This function will be called in an event listener when the left button is clicked.
    * The previous 3 recipe cards will be shown.
    */
    prevCards() {
        const cards = this.querySelectorAll('recipe-card');
        for (let i = 3; i < cards.length; i++) {
            if (!(cards[i].classList.contains('hidden'))) {
                cards[i].classList.add('hidden');
                cards[i - 3].classList.remove('hidden');
            }
        }
    }
}
customElements.define('card-carousel', CardCarousel);

/*
* Creating the buttons for next and previous slides of the carousel
* And adding the event listeners for each button
*/
const nextButton = document.querySelector('.forward'); // next 3 recipes
const prevButton = document.querySelector('.back'); // last 3 recipes in previous slides
nextButton.addEventListener('click', CardCarousel().nextCards());
prevButton.addEventListener('click', CardCarousel().prevCards());