module.exports = function transportFee(feePaid){
  
    if (feePaid === "morning"){
        return "R20"
    }
  
    else if (feePaid === "afternoon"){
        return "R10"
    }
  
    else{
        return "free";
    }
}

