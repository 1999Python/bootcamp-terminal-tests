
module.exports = function countAllPaarl(reg){

    const number = reg.split(", ")
    
     var paarl = [];
  
    for (var i = 0; i < number.length ;i++){
     
   if (number[i].startsWith('CJ')){
     paarl.push(number[i]);
    }
   }
   return paarl.length;
}


 
