module.exports = function yearsAgo(year){
  
    const ago = new Date().getFullYear();
    
    return ago - year;

   }