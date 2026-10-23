let rawProductTitle = " wireless headphones PRO ";

let cleanedTitle = rawProductTitle.trim().toLowerCase();

let capitalizedTitle = cleanedTitle
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

let finalProductTitle = capitalizedTitle.replace("pro", "Pro Edition");

console.log("Original Title: \"" + rawProductTitle + "\"");
console.log("Cleaned & Formatted Title: \"" + finalProductTitle + "\"");
console.log("Title Length: " + finalProductTitle.length + " characters");