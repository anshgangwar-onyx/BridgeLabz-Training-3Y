const x = 16.75;

const roundedVal = Math.round(x);
const squareRoot = Math.sqrt(x);
const powerVal = Math.pow(x, 3);
const randomNum = Math.floor(Math.random() * 41) + 10;

const mathSummary = `--- Math Utility Dashboard ---
Original Number: ${x}
- Rounded Value: ${roundedVal}
- Square Root: ${squareRoot.toFixed(2)}
- Cubed Value (Power): ${powerVal.toFixed(2)}
- Random Number (10-50): ${randomNum}
----------------------------`;

console.log(mathSummary);
