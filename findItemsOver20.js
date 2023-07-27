
module.exports = function findItemsOver20(findItems){

    var items = [];
    //console.log("-")
    for (var i = 0; i < findItems.length; i++) {
        
      var currentItem = findItems[i];
       
      if (currentItem.qty > 20) {
         items.push(currentItem);
      }
    }  
    console.log(items);
      return items;
    }