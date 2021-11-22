class expandCard {
    static routes = {};
    registerCard = (page, func) => {
        this[page] = func;
    }

    navigate = (page) => {
        if (this[page] == undefined) {
            return console.error(`this page is undefined: ${page}`);
        }
        return this[page]();
    }

    bindCard = (recipeCard, func) => {
        registerRoute(recipeCard, func);
        recipeCard.addEventListener('click', () => {
            Router.navigate(recipeCard);
        })
    }
}
export default expandCard;