// Q6. Progressive Discount System

const originalTotal = 7500;
let discountPercentage = 0;

if (originalTotal >= 10000) {
    discountPercentage = 25;
} else if (originalTotal >= 5000) {
    discountPercentage = 15;
} else if (originalTotal >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = (originalTotal * discountPercentage) / 100;
const finalPrice = Math.round(originalTotal - discountAmount);

console.log(`Original Total: ₹${originalTotal}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Final Price after Discount: ₹${finalPrice}`);