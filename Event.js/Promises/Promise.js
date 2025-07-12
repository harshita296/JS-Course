const promises1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('task is completed');
        resolve()
    },2000)
})
promises1.then(function(){
    console.log('promise is done');
})