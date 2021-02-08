class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  };

  greetCustomer(name, boolean) {
    if(boolean === undefined || boolean === false) {
    return `Hello, ${name}!`
    } else {
    return `Good morning, Amy!`
    }
  };

  checkForFood(foodItem) {
    var array = this.restaurant.menus[foodItem.type]
    for(var i = 0; i < array.length; i++) {
      if(array[i] === foodItem) {
        return `Yes, we're serving ${foodItem.name} today!`
      }
    }
    return `Sorry, we aren't serving ${foodItem.name} today.`
  }
};

module.exports = Chef;
