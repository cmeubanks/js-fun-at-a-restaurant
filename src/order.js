function takeOrder(orderObject, deliveryArray) {
  if(deliveryArray.length < 3) {
  return deliveryArray.push(orderObject);
  }
};

function refundOrder(orderNumber, array) {
 for(var i = 0; i < array.length; i++) {
   if(array[i].orderNumber === orderNumber) {
   array.splice(i, 1)
   }
 }
 return array
};

function listItems(array) {
  var emptyArray = []
  for(var i = 0; i < array.length; i++) {
    emptyArray.push(array[i].item)
  }
  return emptyArray.join(', ')
};

function searchOrder(array, item) {
 for(var i = 0; i < array.length; i++) {
   if(array[i].item === item) {
     return true
   }
 }
 return false;
};



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
