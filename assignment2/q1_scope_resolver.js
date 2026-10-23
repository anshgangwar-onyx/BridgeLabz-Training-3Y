let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;
    
    if (isPermanent) {
        salary += bonus;
        console.log("Status: Permanent employee. Total Salary with bonus: ₹" + salary);
    } else {
        console.log("Status: Temporary employee. Total Salary without bonus: ₹" + salary);
    }
}

calculateSalary(true);
calculateSalary(false);
console.log("Global Bonus Value: ₹" + bonus);
