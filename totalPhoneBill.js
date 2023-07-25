module.exports = function totalPhoneBill(bill){
    const number = bill.split(",")
    
     var total = 0;
  
    for (var i=0;i<number.length;i++){
     var num2 = number[i].trim();
   
      if (num2.startsWith("sms")){
    total += 0.65;
   }
     else if (num2.startsWith("call")){
    total += 2.75;
  }
    }
    return "R" + total.toFixed(2) ;
  }