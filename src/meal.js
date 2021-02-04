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

// function addIngredients(food, array) {
//   for(var i = 0; i < array.length; i++) {
//     if(array[i] === food) {
//       return false
//     } else {
//       array.push(food)
//     }
//   }
// };

function addIngredients(food, array) {
   if(array.includes(food)) {
     return false
   } else {
     array.push(food)
   }
   return array
};

function formatPrice(objectPrice) {
 return `$${objectPrice}`
};

function decreasePrice(objectPrice) {
  var newPrice = (objectPrice - .6)
  return newPrice
};

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
