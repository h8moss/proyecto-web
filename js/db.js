class Recipe {
  #title
  #ingredients
  #steps
  #rating
  #ratingCount
  #image

  constructor(title, ingredients, steps, rating, ratingCount, image) {
    this.#title = title;
    this.#ingredients = ingredients
    this.#steps = steps
    this.#rating = rating
    this.#ratingCount = ratingCount
    this.#image = image
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
  ], 4.78, 294, "res/galletas.jpg"),
]
