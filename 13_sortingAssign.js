

// const arrayOfNumbers=[113,45,56,11,32,45,109,799,56,45];
// console.log(`-----------------Reverse the Array-----------------`);
// arrayOfNumbers.reverse();
// console.log( arrayOfNumbers);
// console.log(``);

// console.log(`-----------------Use sort () without using any custom logic----------------`);
// arrayOfNumbers.sort();
// console.log(arrayOfNumbers);
// console.log(``);

// arrayOfNumbers.sort((a,b)=>{
//     return a>b ? 1:-1
// })
// console.log(arrayOfNumbers);
// console.log(``);

// console.log("(_______Ascending order_________) ");
// arrayOfNumbers.sort((a,b)=>{
//     return a>b ? 1:-1
    
// })
// console.log(arrayOfNumbers[arrayOfNumbers.length-1]);

// console.log("_______Descending order________)");
// arrayOfNumbers.sort((a,b)=>{
//     return a>b ? 1:-1
    
// })
// console.log(arrayOfNumbers[0]);

// console.log(" ");
// const setArray = new Set(arrayOfNumbers);
// console.log(setArray);



const arrayRollNumber = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45]
console.log(`______________Given array________________`);
console.log(arrayRollNumber);
console.log(``);
console.log(`_____________Reverse the Array__________________`);
arrayRollNumber.reverse();
console.log(arrayRollNumber);

console.log(``);
console.log(`________________Use sort () without using any custom logic________________`);
arrayRollNumber.sort()
console.log(arrayRollNumber);

console.log(``);
console.log(`______________sort the array in ascending order _________________`);
arrayRollNumber.sort ((a ,b )=>{
return a>b ? 1 : -1;
})
console.log(arrayRollNumber);

console.log(``);
console.log(`________________Find greatest number of given array_______________`);
console.log(arrayRollNumber);
let greatestElement = arrayRollNumber[arrayRollNumber.length-1]
console.log(`The last greatest of given array is ${greatestElement}`);

console.log(``);
console.log(`_____________Find smallest number of given array________________`);
console.log(arrayRollNumber);
let smallestElement = arrayRollNumber [0];
console.log(`The smallest element of given array is ${smallestElement}`);

console.log(``);
console.log(`_________________ Remove duplicate element of given array_______________`);
console.log(arrayRollNumber);
let duplicateElement = new Set(arrayRollNumber);
console.log(duplicateElement);