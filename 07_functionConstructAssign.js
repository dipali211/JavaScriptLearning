console.log(`1) and  2)`);
function Bank(bankName, location, ifscCode, code) {
this.bankName = bankName,
this.location = location,
this.ifscCode = ifscCode,
this.code = code
}
Bank.prototype.message = (`  The open time of the sbi Bank is "9 AM IST" and close time is "6 PM IST"`);
Bank.prototype.message1 = (`  The open time of the axis Bank is "9 AM IST" and close time is "6 PM IST"`);
Bank.prototype.message2 = (`  The Bank name is "kotak Bank". Branch code is "3344". Open time is "9 PM IST"`);

let kotakBank = new Bank("KOTAK Bank", "Mumbai", "YES000053", 2252);
let sbiBank = new Bank("SBI Bank", "Pune", "SBI000038", 7496);
let hdfcBank = new Bank("HDFC Bank", "Bangloire", "MHB005472", 3956);
let axisBank = new Bank("AXIS Bank", "Thane", "AXS000087", 7495);

console.log(`  Bank details is:- "Bank Name: ${kotakBank.bankName}, Location: ${kotakBank.location}, IFSC: ${kotakBank.ifscCode}, Code: ${kotakBank.code}`);
console.log(`  Bank details is:- "Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location}, IFSC: ${sbiBank.ifscCode}, Code: ${sbiBank.code}`);
console.log(`  Bank details is:- "Bank Name: ${hdfcBank.bankName}, Location: ${hdfcBank.location}, IFSC: ${hdfcBank.ifscCode}, Code: ${hdfcBank.code}`);
console.log(`  Bank details is:- "Bank Name: ${axisBank.bankName}, Location: ${axisBank.location}, IFSC: ${axisBank.ifscCode}, Code: ${axisBank.code}`);
console.log(``);

console.log(`5)`);
console.log(kotakBank.message);
console.log(``);
console.log(`6)`);
console.log(kotakBank.message1);
console.log(``);
console.log(`7)`);
console.log(kotakBank.message2);