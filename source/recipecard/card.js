class Card extends HTMLElement{
    constructor(){
        super(); //Inherit from ancestor
        this.attachShadow({ mode: 'open'});
    }

    set data(cardData){

        if(!cardData) return; //Exit function if data DNE


        this.json = cardData;

        const cardStyle = document.createElement('style');
        const cardArticle = document.createElement('article');


        //For now this is literally just card.css in its entirety
        cardStyle.innerHTML = `
        .recipes-wrapper {
            display: grid;
            grid-template-columns: repeat(3, minmax(12rem, 16rem));
            grid-gap: 4.3rem;
            justify-content: center;
          }

          
          
          article {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            border-radius: 15px;
            border: 2px;
            padding: 15px;
            margin: 2rem;
            width: 250px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          }
          
          article:hover {
            transform: scale(1.05);
            transition: all 0.2s ease-out;
            cursor: pointer;
          }
          
          .card-image {
            object-fit: cover;
            width: 100%;
            height: 250px;
          }
          
          p.title {
            font-family: Century Gothic, Candara, serif;
            overflow: hidden;
            font-size: 23px;
            margin-top: 0.3rem;
            margin-bottom: 0.3rem;
          }
          
          p.title:after {
            content: " ";
            display: block;
            border-bottom: 1px solid #a8a7a7;
          }
          
          p.recipeTag {
            color: #f54254;
            text-transform: uppercase;
            font-weight: lighter;
            margin-top: 0.4rem;
            margin-bottom: 0.4rem;
          }
          
          div.rating > img {
            display: inline-block;
            object-fit: scale-down;
            width: 100px;
            margin-right: 3rem;
          }

          div.rating-time {
            margin-top: 0.4rem;
            margin-bottom: 0.4rem;
            display: flex;
            align-items: center;
          }
          
          div.rating-time img.rating {
            display: inline-block;
            object-fit: scale-down;
            width: 100px;
            margin-right: 3rem;
          }
          
          div.rating-time img.time {
            object-fit: scale-down;
            width: 20px;
            margin-right: 0.3rem;
          }
          
          .hidden {
            display: none;
          }
          
          `;

        

        //Recipe Title
        //const titleText = "Temp Title Text"; //TEMP VAL; get title from API
        const titleText = cardData.title;
        console.log("Recipe title: " + titleText);

        const title = document.createElement('p');
        title.classList.add('title');


        //Recipe Link
        const hyperLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //TEMP VAL; Temporary url to recipe
        const link = document.createElement('a');
        link.setAttribute('href', hyperLink);
        link.innerText = titleText;
        title.appendChild(link);

        //Recipe Thumbnail
        //const thumbnailLink = "images/dumpling.jpg";
        const thumbnailLink = cardData.image;
        console.log("Recipe image url: " + thumbnailLink);

        const thumbnailImg = document.createElement('img');
        thumbnailImg.setAttribute('src', thumbnailLink);
        thumbnailImg.setAttribute('alt', titleText);

        //Recipe reviews
        const ratingValue = 4.5; //TEMP VAL; reviews to be added later
        const numRatings = 327; //^^
        const rating = document.createElement('div');
        rating.classList.add('rating');

        //TEMP VAL; number of stars to display
        rating.innerHTML = `
        <span>${ratingValue}</span>
        <img src="images\\5-stars-red.jpeg" alt="5 stars"></img>
        `;

        if (numRatings != 0) {
          rating.innerHTML += `<span>(${numRatings})</span>`;
        }
        //Maybe do 
        else {
        rating.innerHTML = `
          <span>No Reviews</span>
        `;
        }


        //TODO: Change picture based on # of stars


        //Recipe cook time
        const cookTime = cardData.readyInMinutes; //TEMP VAL; get from API
        console.log("Recipe cook time: " + cookTime);

        const time = document.createElement('time');
        time.innerText = cookTime + " Minutes"; //TEMP VAL;convert time from API into readable string

        //Recipe ingredients
        var ingredientsList = ""; //TEMP VAL; Get list of ingredients, store here as plaintext
        for(let i = 0; i < cardData.extendedIngredients.length; i++){
          ingredientsList += cardData.extendedIngredients[i].originalString;
          if(i != cardData.extendedIngredients.length-1) ingredientsList += ", ";
        }

        console.log("Recipe ingredients: " + ingredientsList);

        const ingredients = document.createElement('p');
        ingredients.classList.add('ingredients');
        ingredients.innerText = ingredientsList.substring(0, 100) + " (...)"; //Abbreviates ingredients text on card

        //TODO: Add recipe tag to card


        //Add elements to recipe card
        cardArticle.appendChild(thumbnailImg);
        cardArticle.appendChild(title);
        cardArticle.appendChild(rating);
        cardArticle.appendChild(time);
        cardArticle.appendChild(ingredients);


        this.shadowRoot.append(cardStyle, cardArticle);

    }

    get data(){ return this.json;}



}



customElements.define('recipe-card', Card);