const express = require(`express`);
const path = require(`path`);
const urllib = require(`urllib`);
const port = 8080;
const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.listen(port, function () {
  console.log(`Server run on port ${port} `);
});

const newRecipes = function (recipesData) {
  Recipes = recipesData.map((recipe) => {
    return {
      title: recipe.title,
      thumbnail: recipe.thumbnail,
      ingredients: recipe.ingredients,
      href: recipe.href,
    };
  });
};

app.get("/sanity", function (response) {
  response.send("Done");
});

app.get("/recipes/:ingredient", function (request, response) {
  const newIngredient = request.params.ingredient;
  console.log(newIngredient);
  let apiURL = `https://recipes-goodness.herokuapp.com/recipes/${newIngredient}`;
  urllib.request(apiURL, function (err, data, res) {
    if (err) {
      throw err;
    }
    newRecipes(JSON.parse(data).results);
    response.send(Recipes);
  });
});
