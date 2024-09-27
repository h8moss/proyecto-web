const createRecipeObject = (recipe) => {
  const parent = $("<div class=\"row\">")
  const div = $("<div class=\"cell-md-4 text-center drop-shadow\">")

  const title = $("<a>", { href: "/recipe?id=0" });
  title.text(recipe.title);

  const imgContainer = $("<div class=\"img-container rounded\">");
  const img = $('<img>', { src: recipe.image })
  imgContainer.append(img);

  div.append(imgContainer);
  div.append(title)

  parent.append(div);

  return parent[0];
}

$(function() {
  for (let recipe of recipes) {
    $(".grid")[0].append(createRecipeObject(recipe));
  }
})
