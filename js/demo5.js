var person = {};
console.log(person);

person = {firstname: "Jhon", lastname: "Smith"};
console.log(person);

var jhon = {
    firstname: "jhon",
    lastname: "doe",
    address: {
        street: "111 wall street",
        state: "NY",
    },
};
console.log(jhon);

function greet(jhon){
    console.log("Hello "+person.firstname);
}
greet(jhon);

greet({
    firstname: "Mary",
    lastname: "Smith",
});
greet(3);