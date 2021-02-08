function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  };
  return restaurant
};

function addMenuItem(restaurant, mealType) {
  if(restaurant.menus.lunch.includes(mealType) || restaurant.menus.breakfast.includes(mealType)) {
    return false;
  };

  if(mealType.type === "lunch") {
    restaurant.menus.lunch.push(mealType);
  } else if (mealType.type === "breakfast") {
  restaurant.menus.breakfast.push(mealType);
  } else {
    restaurant.menus.dinner.push(mealType);
  }
};

function removeMenuItem(restaurant, mealName, mealType) {
  var restaurantArray = restaurant.menus[mealType]
  for(var i = 0; i < restaurantArray.length; i++) {
    if(restaurantArray[i].name === mealName) {
      restaurantArray.splice(i, 1)
      return `No one is eating our ${mealName} - it has been removed from the ${mealType} menu!`;
    }
  }
  return `Sorry, we don't sell ${mealName}, try adding a new recipe!`;
};



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
