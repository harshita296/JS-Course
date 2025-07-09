//Dates 
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

console.log(typeof myDate);
// let createDate = new Date(2025,6,18)
let createDate = new Date(2025,5,18,5,3)
console.log(createDate.toLocaleString());
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());