class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empViny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
//console.log(`1) Find out 'TCS' employee and log only name and company`);
const employees = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi]

employees.sort((emp1,emp2)=>{
    return emp1.empId> emp2.empId ? 1:-1;
});
 employees.forEach(element => {
    console.log(element.empId,element.empName,element.empDept);
    
});
console.log(``);

employees.sort((emp1,emp2)=>{
    return emp1.empDept> emp2.empDept ? 1:-1;
});
 employees.forEach(element => {
    console.log(element.empId,element.empDept,element.empCompany);
    
});
console.log(``);

employees.sort((emp1,emp2)=>{
    return emp1.empSalary> emp2.empSalary ? -1:1;
});
 employees.forEach(element => {
    console.log(element.empId,element.empSalary,element.empCompany);
    
});



