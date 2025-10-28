// ------------------ HOME (index.html) ------------------
const productContainer = document.querySelector(".card__container");

if (productContainer) {
    displayProducts();
}

function displayProducts() {
    products.forEach(product => {
        const productCard = document.createElement("article");
        productCard.classList.add("card__article");
        productCard.innerHTML = `
            <div class="card__img" style="
                background-image: url(${product.image});
                background-size: cover;
                background-position: center;
                width: 280px;
                height: 200px;
                border-radius: 15px;
                box-shadow: 0 8px 24px rgba(0,0,0,0.2);
                margin: 0 auto;
            "></div>
            <div class="card__data">
                <span class="card__description">${product.price} por ${product.type}</span>
                <h2 class="card__title">${product.title}</h2>
                <span class="card__description">${product.local}</span>
                <a href="#" class="card__button">Comprar</a>
            </div>
        `;
        productContainer.appendChild(productCard);

        const buyBtn = productCard.querySelector("a.card__button");
        buyBtn.addEventListener("click", (e) => {
            e.preventDefault();
            sessionStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "product-detail.html";
        });
    });
}

// ------------------ PRODUCT DETAIL (product-detail.html) ------------------
document.addEventListener("DOMContentLoaded", () => {
    const detailContainer = document.querySelector(".produto-detalhe");
    if (detailContainer) {
        displayProductDetail();
    }
});

function displayProductDetail() {
    const productData = JSON.parse(sessionStorage.getItem("selectedProduct"));
    if (!productData) return;

    const titleEl = document.querySelector(".title");
    const priceEl = document.querySelector(".price");
    const descriptionEl = document.querySelector(".description");
    const imageContainer = document.querySelector(".produto-img");
    const addToCartBtn = document.querySelector("#add-cartbtn");
    const localEl = document.querySelector(".detailLoc p");

    // Aplica a imagem como background para manter tamanho padrão
    if (productData.image) {
        imageContainer.style.backgroundImage = `url(${productData.image})`;
    }

    // Preenche o texto
    titleEl.textContent = productData.title;
    priceEl.textContent = productData.price;
    descriptionEl.textContent = productData.description;
    localEl.textContent = `Local: ${productData.local}`;

    // Botão adicionar ao carrinho
    addToCartBtn.addEventListener("click", () => {
        addToCart(productData);
        alert("Produto adicionado ao carrinho!");
    });
}

// ------------------ FUNÇÃO ADICIONAR AO CARRINHO ------------------
function addToCart(product) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            type: product.type, // ✅ corrigido
            quantity: 1
        });
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));

    updateCartBadge();
}

// ------------------ FUNÇÃO MOSTRAR O CARRINHO ------------------
const isCartPage = document.querySelector(".cart");

if (isCartPage) {
    displayCart();
}

function displayCart() {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const cartItemsContainer = document.querySelector(".cart-itens");
    const subtotalEl = document.querySelector(".subtotal");
    const grandTotalEl = document.querySelector(".grand-total");

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<div class='cartsolo'<p>Seu carrinho está vazio. Adicione alguns itens indo na <a href='index.html'>página inicial</a>!</div>";
        subtotalEl.textContent = "R$ 0";
        grandTotalEl.textContent = "R$ 0";
        return;
    }

    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = parseFloat(item.price.replace("R$", "").replace(",", ".")) * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
        <div class="product">
            <img src="${item.image}">
            <div class="item-detail">
                <p>${item.title}</p>
            </div>
        </div>
        <span class="price">${item.price} por ${item.type}</span>
        <div class="quantity"><input type="number" value="${item.quantity}" min="1" data-index="${index}"></div>
        <span class="total-price">R$ ${itemTotal.toFixed(2).replace(".", ",")}</span>
        <button class="remove" data-index="${index}"><i class="fa-solid fa-xmark"></i></button>
        `;

        cartItemsContainer.appendChild(cartItem);
    });
    
    subtotalEl.textContent = `R$${subtotal.toFixed(2)}`;
    grandTotalEl.textContent = `R$${subtotal.toFixed(2)}`;

    removeCartItem();
    updateCartQuantity();
}

function removeCartItem() {
    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", function () {
            let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
            const index = this.getAttribute("data-index");
            cart.splice(index, 1);
            sessionStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
            updateCartBadge();
        });
    });
}

function updateCartQuantity() {
    document.querySelectorAll(".quantity input").forEach(input => {
        input.addEventListener("change", function () {
            let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
            const index = this.getAttribute("data-index");
            cart[index].quantity = parseInt(this.value);
            sessionStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
            updateCartBadge();
        })
    });
}

function updateCartBadge() {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
const badge = document.querySelector(".carrinho-item-count");


    if (badge) {
        if (cartCount > 0) {
            badge.textContent = cartCount;
            badge.style.display = "block";
        } else {
            badge.style.display = "none";
        }
    }
}

updateCartBadge();
