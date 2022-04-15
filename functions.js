/* A function written to help me better grasp closures and nesting functions.

This function generates numbers up to a target and runs each through a
binary function and passes them to an array. Here the binary adding
function so each number is doubled

In theory any binary function can be used, but both arguments
will always be the current generated digit. 

*/

function adder(a, b){
    return a + b;
  }
  
  
  function generateAndDouble(func, target){
    let arr = [];
    
    function countUp(){
      for (let i = 1; i <= target; i++){
        arr.push(func(i, i))
      }
      return arr;
    }
    
    return countUp;
  }
  
  console.log(generateAndDouble(adder, 75)())