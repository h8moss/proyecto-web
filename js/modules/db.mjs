import Recipe from "./modules/models/Recipe.mjs"
import Ingredient from "./modules/models/ingredient.mjs"

const recipes = [
  new Recipe("Galletas de azúcar",
    [
      new Ingredient('Harina', 480, 'g', true, ''),
      new Ingredient('Polvo para hornear', 3 / 4, 'tsp', true, ''),
      new Ingredient('Sal', 3 / 4, 'tsp', true, ''),
      new Ingredient('Mantequilla', 226, 'g', true, ''),
      new Ingredient('Azucar', 200, 'g', true, ''),
      new Ingredient('Huevos', 2, '', false, 'res/3d/kenny/egg.glb'),
      new Ingredient('Extracto de vainilla', 2, 'tsp', true, ''),
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
    new Ingredient('Pan', 5, 'rebanadas', false, 'res/3d/kenny/bread.glb'),
    new Ingredient('Huevos', 5, '', false, 'res/3d/kenny/egg.glb'),
    new Ingredient('Leche', 250, 'ml', true, ''),
    new Ingredient('Vainilla', 1, 'cdta', true, ''),
    new Ingredient('Mantequilla', 4, 'cdas', true, ''),
    new Ingredient('Azúcar', 1, 'taza', true, ''),
    new Ingredient('Canela molida', 1.5, 'cda', true, ''),
  ], [
    "Mezclar la leche, los huevos y la vainila",
    "Colocar las rebanadas de pan en un plato y humedecerlas con la mezcla",
    "Colocar en un plato la azucar con la canela y espolvorear el pan hasta que quede cubierto",
    "Calentar un poco de mantequilla en una sarten",
    "Dorar el pan en la sarten al gusto",
  ], 3.69, 831, "res/pan_frances.jpg", null),
]

export { recipes };
