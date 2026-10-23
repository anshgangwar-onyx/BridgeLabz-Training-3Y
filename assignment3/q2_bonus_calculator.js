// Q2
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (let i = 0; i < employees.length; i++) {
    try {
        let emp = employees[i];
        let salaryNum = Number(emp.salary);
        let yearsNum = Number(emp.years);

        let bonus = 0;
        if (yearsNum > 3) {
            bonus = salaryNum * 0.1;
        } else {
            bonus = salaryNum * 0.05;
        }

        let total = salaryNum + bonus;
        console.log("Employee: " + emp.name + " | Salary: " + salaryNum + " | Bonus: " + bonus + " | Total: " + total);
    } catch (error) {
        console.log("Error processing employee");
    }
}
