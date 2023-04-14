function sayHiLater(){
    var greeting = "Happy Birthday";
    setTimeout(function(){
        console.log(greeting);
    }, 3000);
}

sayHiLater();