const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const newmath = {
    name: 'newmath',
    price: 250,
    isAvailable: true,

    ordernewmath: function(){
        console.log("sikh ke jaye ga");
    }
}

console.log(Object.getOwnPropertyDescriptor(newmath, "name"));

Object.defineProperty(newmath, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(newmath, "name"));

for (let [key, value] of Object.entries(newmath)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}