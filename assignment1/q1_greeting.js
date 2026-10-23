// Q1. Personalized Login Greeting

const userName = "Ansh";
const currentHour = new Date().getHours(); // Current system hour (0 - 23)

let greetingMessage = "";

if (currentHour < 12) {
    greetingMessage = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
    greetingMessage = `Good Afternoon ${userName}!`;
} else {
    greetingMessage = `Good Evening ${userName}!`;
}

console.log(greetingMessage);
