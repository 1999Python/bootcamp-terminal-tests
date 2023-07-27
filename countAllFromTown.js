
module.exports = function countAllFromTown(reg, num){
    const number = reg.split(",")
    
     var town = [];
  
    for (var i=0;i<number.length;i++){
     var num2 = number[i].trim();
   
      if (num2.startsWith(num)){
     town.push(num2);
   }
  }
    return town.length;
  }
    