const path = require("path");

module.exports = {
    entry: {
        "main.js": [
            path.resolve(__dirname, "recipe card/cardCarousel.js"),
            path.resolve(__dirname, "recipecard/card.js"),
            path.resolve(__dirname, "recipecard/cardCarousel.js"),
            path.resolve(__dirname, "recipecard/cardExpand.js")
        ]
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../public")
    }
};