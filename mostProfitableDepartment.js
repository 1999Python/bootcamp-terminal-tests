module.exports = function mostProfitableDepartment(profitableDepartment){

    var department = {};
    
    for (var i = 0; i < profitableDepartment.length; i++) {
        
      var department2 = profitableDepartment[i];
       
      if (department[department2.department] === undefined){
         department[department2.department] = 0
      
      }
      department[department2.department] += department2.sales
    } 
      
      var mostProfitable = 0;
      var dept = "";
      
      for(var dep in department){
        
        if(department[dep] > mostProfitable){
         dept = dep
         mostProfitable = department[dep] 
        }
        }
       return dept;
      
    }