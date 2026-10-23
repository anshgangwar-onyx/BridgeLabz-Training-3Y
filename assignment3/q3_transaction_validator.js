// Q3
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        let txn = transactions[i];
        if (txn === null) {
            throw new Error("Null value");
        }
        if (!txn.id || txn.amount === undefined) {
            throw new Error("Missing data");
        }
        if (txn.amount < 0) {
            throw new Error("Negative amount");
        }
        valid.push(txn);
    } catch (err) {
        invalid.push(transactions[i]);
    }
}

console.log("Valid Transactions Count:", valid.length);
console.log("Invalid Transactions Count:", invalid.length);
