function takeOrder(orderObject, deliveryArray) {
  if(deliveryArray.length < 3) {
  return deliveryArray.push(orderObject);
  }
};

module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}
