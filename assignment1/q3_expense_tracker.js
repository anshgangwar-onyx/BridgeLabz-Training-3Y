// Q3. Monthly Expense Tracker

// Expenses for 5 categories: food, travel, rent, bills, leisure
const expenses = [4500, 2000, 12000, 3500, 1500];

let totalExpense = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i];
}

const averageExpense = totalExpense / expenses.length;

// Adding 10% tax using arithmetic & assignment operators
let finalAmountWithTax = totalExpense;
finalAmountWithTax += totalExpense * 0.10;

console.log(`Total Monthly Expense: ₹${totalExpense.toFixed(2)}`);
console.log(`Average Category Expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Final Amount (with 10% tax): ₹${finalAmountWithTax.toFixed(2)}`);
