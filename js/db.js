class Recipe {
  #title
  #ingredients
  #steps
  #rating
  #ratingCount
  #image
  #model3d

  constructor(title, ingredients, steps, rating, ratingCount, image, model3d) {
    this.#title = title;
    this.#ingredients = ingredients
    this.#steps = steps
    this.#rating = rating
    this.#ratingCount = ratingCount
    this.#image = image
    this.#model3d = model3d
  }

  get title() {
    return this.#title;
  }

  get ingredients() {
    return this.#ingredients;
  }

  get steps() {
    return this.#steps;
  }

  get rating() {
    return this.#rating;
  }

  get ratingCount() {
    return this.#ratingCount;
  }

  get image() {
    return this.#image;
  }

  get model3d() {
    return this.#model3d;
  }
}

const recipes = [
  new Recipe("Galletas de azúcar", [
    "480g Harina",
    "3/4 tsp Polvo para hornear",
    "3/4 tsp Sal",
    "226g Mantequilla",
    "200g Azucar",
    "2 Huevos",
    "2 tsp Extracto de vainilla",
  ], [
    "Combinar los ingredientes solidos",
    "Combinar la mantequilla con el azúcar en una mezcladora hasta conseguir un color blanco hueso",
    "Añadir los huevos uno por uno, esperando a que se incorporen",
    "Añadir el extracto de vainilla",
    "Gradualmente añadir la mezcla de solidos",
    "Remover inconsistencias con una espatula",
    "Enfriar entre 2 horas y 3 dias en el refrigerador",
    "Cuando se este listo para prepararlas, dejar calentar por 10 minutos a temperatura ambiente",
    "Precalentar el horno a 200°C",
    "Cortar las galletas en la forma deseada",
    "Hornear las galletas a 200°C hasta que tengan un color dorado"
  ], 4.78, 294, "res/galletas.jpg", null),
  new Recipe("Pan frances", [
    "5 Rebanadas de pan",
    "3 Huevos",
    "250ml Leche",
    "1 cdta. Vainilla",
    "4 cdas. Mantequilla",
    "1 taza de azúcar",
    "1.5 cda. Canela molida",
  ], [
    "Mezclar la leche, los huevos y la vainila",
    "Colocar las rebanadas de pan en un plato y humedecerlas con la mezcla",
    "Colocar en un plato la azucar con la canela y espolvorear el pan hasta que quede cubierto",
    "Calentar un poco de mantequilla en una sarten",
    "Dorar el pan en la sarten al gusto",
  ], 3.69, 831, "res/pan_frances.jpg", null),
  new Recipe("Mock", [
    "Ingrediente 1",
    "XDDDD"
  ], [
    "LSDSDKL"
  ], 3.22, 142, "res/pan_frances.jpg", "res/3d/french_toast.glb")
]
