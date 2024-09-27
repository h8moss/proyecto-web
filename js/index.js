const createRecipeObject = (recipe) => {
  const parent = $("<div class=\"row\">")
  const div = $("<div class=\"cell\">")

  const title = $("<a>", { href: "/recipe?id=0" });
  title.text(recipe.title);

  const imgContainer = $("<div class=\"img-container rounded drop-shadow selected\">");
  const img = $("<img>", { src: recipe.image, width: "300" })
  imgContainer.append(img);

  div.append(title)
  div.append(imgContainer);

  parent.append(div);

  return parent[0];
}

$(function() {
  for (let recipe of recipes) {
    $(".grid")[0].append(createRecipeObject(recipe));
  }
})
