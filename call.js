function SetUsername(username){
    this.username=username;
}
function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email=email;
    this.password=password;
}
const chai=new createUser("chai","1212h@gamil.com","123")
console.log(chai);