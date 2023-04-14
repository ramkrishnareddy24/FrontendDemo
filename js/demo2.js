function b(){
    var my;
    console.log(my);
}

function a(){
    var my=2;
    console.log(my);
    b();
}

var my=2;
console.log(a)
b();