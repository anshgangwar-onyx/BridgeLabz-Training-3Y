const productInput = document.getElementById("productInput");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");
addProductBtn.addEventListener("click", () => {
    const productName = productInput.value.trim();
    
    if (productName === "") {
        alert("Please enter a product name!");
        return;
    }
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="product-name">${productName}</span>
        <div class="actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    productList.appendChild(li);
    productInput.value = ""; // Clear input box
});
productList.addEventListener("click", (e) => {
    const target = e.target;
    const li = target.closest("li");

    if (!li) return;

    const span = li.querySelector(".product-name");
    if (target.classList.contains("delete-btn")) {
        li.remove();
    }

    if (target.classList.contains("edit-btn")) {
        const currentName = span.textContent;
       
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentName;
        input.className = "edit-input";
        span.replaceWith(input);
        input.focus();

        const saveEdit = () => {
            const updatedName = input.value.trim();
            if (updatedName !== "") {
                span.textContent = updatedName;
            }
            input.replaceWith(span);
        };

        input.addEventListener("blur", saveEdit);
        input.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                saveEdit();
            }
        });
    }
});