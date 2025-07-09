// function calculateprice(...num1){//... three dots are rest operator
function calculateprice(val1,val2,...num1){//... three dots are rest operator
    return num1
}
console.log(calculateprice(200,300,400,2000))
function handleobject(obj1){
    console.log(`Username is ${obj1.Username} and price is ${obj1.price}`);
}
handleobject({
    Username:"harshii",
    price:400
})