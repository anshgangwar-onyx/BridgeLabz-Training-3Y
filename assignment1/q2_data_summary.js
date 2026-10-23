// Q2. Multi-Type Data Summary

const dbName = "BridgeLabz";              // String
const userCount = 120;                    // Number
const isActive = true;                    // Boolean
const skills = ["HTML", "CSS", "JS"];     // Array
const userObject = { role: "Developer" }; // Object
const lastLogin = null;                   // Null
let userToken = undefined;                // Undefined

const summaryData = [
    { Label: "dbName", Value: dbName, Type: typeof dbName },
    { Label: "userCount", Value: userCount, Type: typeof userCount },
    { Label: "isActive", Value: isActive, Type: typeof isActive },
    { Label: "skills", Value: skills, Type: Array.isArray(skills) ? "array" : typeof skills },
    { Label: "userObject", Value: userObject, Type: typeof userObject },
    { Label: "lastLogin", Value: lastLogin, Type: typeof lastLogin }, // Note: typeof null is 'object' in JS
    { Label: "userToken", Value: userToken, Type: typeof userToken }
];

console.table(summaryData);
