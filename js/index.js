const createStarElement = (value, count) => {
  const parent = document.createElement("div");
  let finalValue = Math.round((value % 6) * 2) / 2
  let starsLeft = 5;
  while (finalValue > 1) {
    parent.appendChild(createElement('i', { 'class': "bi bi-heart-fill" }));
    finalValue--;
    starsLeft--;
  }
  if (finalValue > -0.0001) {
    parent.appendChild(createElement("i", { 'class': "bi bi-heart-half" }));
    finalValue -= 0.5;
    starsLeft--;
  }

  while (starsLeft > 0) {
    parent.appendChild(createElement('i', { 'class': "bi bi-heart" }));
    starsLeft--;
  }
  const text = createElement('span');
  text.innerText = `(${count})`;
  parent.appendChild(text)

  return parent;
}



const createRecipeObject = (recipe, index) => {
  const greatParent = getElement("#content");
  const children = getElements("#content div.row")
  const lastChild = children.item(children.length - 1);

  let parent = undefined;
  let requiresAppend = false;

  if (lastChild.childNodes.length < 2) {
    parent = children.item(children.length - 1);
  } else {
    parent = createElement('div');
    parent.setAttribute('class', lastChild.getAttribute('class'))
    requiresAppend = true;
  }

  const anchor = createElement('a', { 'class': "index-recipe-item col-6 d-flex flex-column p-3 p-lg-5 p-xl-5 shadow-sm rounded", href: "recipe?id=" + index.toString() });
  {
    let illustration = undefined;
    if (recipe.model3d) {
      illustration = createElement('div', {
        "data-model": recipe.model3d,
        "class": "rounded flex-grow-1 three-js-container"
      })
    } else {
      illustration =
        createElement('img', { src: recipe.image, 'class': "rounded img-fluid flex-grow-1" })
    }


    const titleDiv = createElement('div', { 'class': "d-flex justify-content-between" });
    {
      const title = createElement("span");
      {
        title.innerText = recipe.title;
      }

      const stars = createStarElement(recipe.rating, recipe.ratingCount);

      titleDiv.appendChild(title);
      titleDiv.appendChild(stars);
    }

    anchor.appendChild(illustration)
    anchor.appendChild(titleDiv);
  }

  parent.appendChild(anchor);

  if (requiresAppend) {
    greatParent.appendChild(parent);
  }

  // const rows = $("div.row");
  // console.log({ rows, size: rows.length, c: rows[rows.length - 1], x: rows.length - 1, ch: rows[rows.length - 1].children.length })
  // let parent;
  // let createParent = false;
  // if (rows[rows.length - 1].children.length < 2) {
  //   parent = rows[rows.length - 1];
  // } else {
  //   createParent = true
  //   parent = $('<div class="row">')
  // }
  // const div = $('<a class="cell-md-4 mx-auto text-center drop-shadow p-3 p-5-lg p-5-xl rounded">', { href: "recipe?id=" + index })
  // 
  // const titleDiv = $('<div class="d-flex flex-justify-between">')
  // 
  // const title = $("<span>");
  // title.text(recipe.title);
  // 
  // const stars = createStarElement(recipe.rating, recipe.ratingCount);
  // 
  // titleDiv.append(title);
  // titleDiv.append(stars);
  // 
  // const imgContainer = $('<div class="img-container rounded ">');
  // const img = $('<img>', { src: recipe.image })
  // imgContainer.append(img);
  // 
  // div.append(imgContainer);
  // div.append(titleDiv)
  // 
  // parent.append(div);
  // 
  // return createParent ? parent[0] : null;
}

(() => {
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    createRecipeObject(recipe, i)
  }
})();
