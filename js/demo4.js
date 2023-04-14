// Objects

var person = new Object();

person["firstname"]="Gary";
person["lastname"]="Sobers";

console.log(person);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street="121 Wall Street";
person.address.city="NY";

console.log(person)
