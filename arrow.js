// const user={
//     username:"harshita",
//     website:"Fashion style",
//      welcomemessage:function(){
//         console.log(`${this.username},Welcome to fashionWorld`);
//      }
// }
// user.welcomemessage()//this keyword refers to the object user
// user.username="parj"
// user.welcomemessage()
// function chai(){
//     let name="khayti"
//     console.log(this.name);
// }
// chai()
const chai=() =>{
    let username="harshita"
    console.log(this.username);
}
// chai()
//==============+================
//arrow function
const add=(num1,num2)=>{
    return num1+num2
}
console.log(add(10,20));
