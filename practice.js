// var obj1 = {
//    x:  43,
//    y:  "Hello world!",
//    z: function(){
//       return this.x;
//    }
// }
// Hoisting takes place in the local scope as well
function doSomething(){
  x = 33;
  console.log(x);
  var x;
} 
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;
hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
} 
var x="78";
var y="1";
// console.log(x+y);
console.log(parseInt(x)+parseFloat(y));
// var x=78;
// var y="joo";
// if(x&&y){
//    console.log("code runs");
// }