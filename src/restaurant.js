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
  } else {
  restaurant.menus.breakfast.push(mealType);
  }
};

function removeMenuItem() {
  
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
