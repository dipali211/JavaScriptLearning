const arrayNumbers = [ 1,-7,40,582,-77,91,0,108,89,-601];

console.log(`1   log elements with its index using forEach`);
arrayNumbers.forEach((currentValue, index)=>{
    console.log("index of", currentValue,"its",index);
});
console.log(`2 positive number in one array `);
const arrayOfPositive = [];
arrayNumbers.forEach((currentValue)=>{
    if (currentValue => 0) {
        arrayOfPositive.push(currentValue);
        
    }
});
console.log(`positive number in one array:`, arrayOfPositive);

console.log(`3 Negative number in one array `);
const arrayOfNegative = [];
arrayNumbers.forEach((number)=>{
    if (number < 0) {
        arrayOfNegative.push(number);
        
    }
});
console.log(`Negative number in one array:`, arrayOfNegative);

console.log(`4 Even number:`);
const arrayOfEven = [];
arrayNumbers.forEach((currentValue)=>{
    if (currentValue %2 == 0) {
        arrayOfEven.push(currentValue);
        
    }
});
console.log(`Even number in one array:`, arrayOfEven);

sum = 0;
arrayNumbers.forEach((currentValue)=>{
    sum = sum + currentValue;

});
console.log(`sum of all elements of area:${sum}`);

console.log(`5 Even positioned array`);
const array =[];
arrayNumbers.forEach((currentValue,index)=>{
    if (index%2==0) {
        array.push(currentValue);
        
    }
})
console.log(array);

