function nameMenuItem(food) {
 return `Delicious ${food}`;
};

function createMenuItem(menuItemName, price, food) {
  var menuItem = {
  name: menuItemName,
  price: price,
  type: food,
  }
  return menuItem
};

function addIngredients(food, array) {
   array.push(food)
   return array
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
