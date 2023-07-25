module.exports = function isFromBellville(registration){
    return registration.startsWith("CY")
    }
    isFromBellville('CY 123');
    isFromBellville('CJ 123');
    console.log(isFromBellville('CY 123'));
    console.log(isFromBellville('CJ 123'));