class Renderer {
  constructor() {}
  renderRecipes(recipes) {
    const source = $("#handelTemp").html();
    const recipestemplate = Handlebars.compile(source);
    const newHTML = recipestemplate({ recipes });
    $("#mainContainer").append(newHTML);
  }
}
