const render = new Renderer();
const getRecipes = function () {
  let ingrediantName = $("input").val();
  $.get(`/recipes/${ingrediantName}`, function (data) {
    render.renderRecipes(data);
  });
};
$("#mainContainer").on("click", ".Imgitem", function () {
  alert($(this).closest(".recipe").find("li").first().text());
});
