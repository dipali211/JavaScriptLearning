//console.log(`1) Personal details `);
const personal = {
    name : "Dipali",
    mobileNo : 9168948185,
    place : "pune",
    education : "MCA"
}
// console.log(personal);
// console.log(``);

//console.log(`2) College Details `);
const college = {
    clgName : "Indira clg",
    location : "pune",
    university : "SPPU",
    departement : 6
}
//console.log(college);
console.log(``);

console.log(`Merge two object personal details and college`);
const mergeObject = Object.assign({}, personal, college);
console.log(mergeObject);
console.log(``);

//console.log(`Creating array of friends name `);
let array = ["Dips", "Shweta","shilpa","Dj"]
//console.log(array);


console.log(`Array of friends after freezing and iterating by using for of loop`);
for (const iterator of array) {
    console.log(iterator);
}
console.log(``);

console.log(`Revering word 'Technology' as 'ygolonhcet' from "Codemind Technology"`);
let string = "Codemind Technology";
function reverse(array){
    return array.split('').reverse().join('');
}
console.log("Codemind", reverse('Technology'));