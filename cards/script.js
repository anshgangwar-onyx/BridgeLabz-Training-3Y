let products = [
    {
        id: 1,
        category: "SPORTS SHOES",
        productName: "Running Shoes",
        review: 120,
        oldPrice: 2499,
        newPrice: 1999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
        id: 2,
        category: "Watch",
        productName: "Silver Round Analog Watch",
        review: 110,
        oldPrice: 5499,
        newPrice: 4999,
        image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75"
    },
    {
        id: 3,
        category: "Watch",
        productName: "Silver Round Analog Watch",
        review: 110,
        oldPrice: 5499,
        newPrice: 4999,
        image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75"
    }
];

let productCard = document.querySelector(".product-cards");

products.forEach((product) => {
    productCard.innerHTML += `
        <div class="card">
            <div class="sale-badge">20% OFF</div>
            <div class="heart">❤️</div>
            <div class="image-container">
                <img src="${product.image}" alt="${product.productName}">
            </div>
            <div class="product-info">
                <p class="category">${product.category}</p>
                <h2>${product.productName}</h2>
                <div class="rating">
                    <span>(${product.review} reviews)</span>
                </div>
                <div class="price">
                    <span class="current-price">₹${product.newPrice}</span>
                    <span class="old-price">₹${product.oldPrice}</span>
                </div>
                <button class="cart-btn">Add to Cart</button>
            </div>
        </div>
    `;
});