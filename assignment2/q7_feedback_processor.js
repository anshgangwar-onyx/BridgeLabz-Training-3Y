const feedbackText = "Great product! Fast delivery and amazing sound quality!";

const wordCount = feedbackText.trim().split(/\s+/).length;

const hasNegativeReview = feedbackText.toLowerCase().includes("bad") || 
                          feedbackText.toLowerCase().includes("poor");

console.log("Feedback: \"" + feedbackText + "\"");
console.log("Word Count: " + wordCount);

if (!hasNegativeReview) {
    console.log("Sentiment Result: Positive Feedback");
} else {
    console.log("Sentiment Result: Needs Improvement");
}
