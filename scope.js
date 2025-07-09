//var c=300
let a=200//global scope
if(true){
    let a=10//Local scpope
    const b=20
    console.log("Inner:",a);
}
console.log(a);
console.log(b)//not defined because its is block scoped