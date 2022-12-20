var ageCheck = function(age){

    if (age>=18 && age<120) {
        console.log(`your age is "${age}"  you are eligible for voting.`);
        
    }
    if (age<18 && age<0) {
        console.log(`your age is "${age}"  you are eligible for voting.`);
        
    }
    if (age<0 || age>120) {
        console.log(`your age is "${age}"  this is invalid data.`);
        
    }
}
ageCheck(45);
ageCheck(17);
ageCheck(8);
ageCheck(20);
ageCheck(-10);
ageCheck(200);
ageCheck(0);

console.log(`----------------------------------------------------`);
var gradeCalculation = function(marks){

    if (marks>=90 && marks<100) {
        console.log(`Fantastic marks: "${marks}"  your gradde is A+.`);
        
    }
    if (marks>=75 && marks<90) {
        console.log(`Excellent marks: "${marks}"  your gradde is A.`);
        
    }
    if (marks>=50 && marks<75) {
        console.log(`Good marks "${marks}"  your gradde is B.`);
        
    }
    if (marks>=35 && marks<50) {
        console.log(`Marks is  "${marks}"  your gradde is c. need improvment.`);
        
    }
    if (marks<=0 || marks>100) {
        console.log(`Marks are  "${marks}"  please provide the valid marks.`);
        
    }

}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);