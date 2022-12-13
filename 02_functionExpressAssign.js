var square= function(num){
    console.log("square of",num,"=",num*num);
    
}
square(5);
square(6);
square(25);
square(100);

console.log("The type of square is=", typeof square);

console.log("------------------------------");

function getRectangleArea(length, width) {
    var result= length*width;
    console.log("Area of rectangle");
    console.log(result);
    return result;
  }
  
  var getRectangleAreaResult= getRectangleArea(499,917);
  console.log("------------------------------");
  
  function swapValues(value1,value2){
    console.log("before swaping:-",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("after swaping:-",value1,value2);
    console.log("-----------------------------");
}
//console.log("3)");
swapValues("Virat","Anushka");
swapValues(1000,2000);

function addThreeValues(value1,value2,value3){
    console.log(value1+value2+value3);
}

var stringFunction= function(string){
    var stringlength= string.length;
    console.log("String is:-  js the most popular language");
    console.log("Total Charactor available in the string", string.length);
    console.log("Charactor at index 6 is:-   ", string.charAt(6));
    console.log("Charactor at index 11 is:-  ", string.charAt(11));
    console.log("Last char in string  is:- ", string.charAt(string.length-1));
    console.log("First charctore in string is:- ",string.charAt(0));
    console.log("Length of string is :-", string.length);

    console.log("square of length of string is :-", string.length*string.length);

};
stringFunction("js the most popular language");