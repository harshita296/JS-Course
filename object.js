 //singleton onle create in constructor object
 //object literals
 const mySym=Symbol("key1")

 const Jsuser={
    name:"harshita",
    location:"jaunpur",
    [mySym]:"mykey1",
    age:23
 };
    
 

//  console.log(Jsuser.location)
//  console.log(Jsuser["location"])
//  console.log(typeof Jsuser[mySym])
//  console.log(Jsuser[mySym])
 Jsuser.age=34//for changing value
    console.log(Jsuser.age)
    // Object.freeze(Jsuser)
    // Jsuser.location="Delhi"
    // console.log(Jsuser.location)
    // console.log(Jsuser)
    Jsuser.greeting=function(){
        console.log("hello me baby");
        }
        console.log(Jsuser.greeting())