// Q1
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumeric = [];
const invalidNumeric = [];

for (let i = 0; i < apiData.length; i++) {
    let item = apiData[i];
    let numForm = Number(item);
    let boolForm = Boolean(item);
    let strForm = String(item);

    if (item === null || item === undefined || item === " " || isNaN(numForm) || item === "") {
        invalidNumeric.push(item);
    } else {
        validNumeric.push(numForm);
    }

    console.log("Value: " + item + " | Number: " + numForm + " | Boolean: " + boolForm + " | String: " + strForm);
}

console.log("Valid Numbers:", validNumeric);
console.log("Invalid Numbers:", invalidNumeric);