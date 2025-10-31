function getProducerById(producerId) {
    // Garante que o array 'producers' exista antes de tentar buscar.
    if (typeof producers === 'undefined') {
        console.error("Erro: Array 'producers' não encontrado. Carregue products.js primeiro.");
        return null;
    }
    return producers.find(producer => producer.id === producerId);
}

// ------------------ HOME (index.html) ------------------
const productContainer = document.querySelector(".card__container");

if (productContainer) {
    displayProducts();
}

function displayProducts() {
    products.forEach(product => {
        // Usa a função reutilizável
        const productCard = createProductCard(product); 
        productContainer.appendChild(productCard);
    });
}

// ------------------ PRODUCT DETAIL (Exibição de um Produto) ------------------
document.addEventListener("DOMContentLoaded", () => {
    const detailContainer = document.querySelector(".produto-detalhe");
    if (detailContainer) {
        displayProductDetail();
    }
});

function displayProductDetail() {
    const productData = JSON.parse(sessionStorage.getItem("selectedProduct"));
    if (!productData) return;

    // 🎯 1. Buscar os dados do produtor usando o producer_id do produto
    const producerData = getProducerById(productData.producer_id);
    
    // Elementos da sua página
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

    // Preenche o texto básico
    titleEl.textContent = productData.title;
    priceEl.textContent = productData.price;
    descriptionEl.textContent = productData.description;

    // 🎯 2. Usar o dado do produtor, se ele existir
    if (producerData) {
        // Agora 'localEl' exibe o Nome do Produtor e o Local de Retirada
        localEl.innerHTML = `
            <strong>Vendido por:</strong> ${producerData.name}<br>
            <strong>Localização:</strong> ${producerData.location || 'Não especificado'}
        `;
    } else {
        localEl.textContent = `Local: Produtor não encontrado (ID: ${productData.producer_id})`;
    }

    // Botão adicionar ao carrinho
    addToCartBtn.addEventListener("click", () => {
        addToCart(productData);
        alert("Produto adicionado ao carrinho!");
    });
}

// ------------------ FUNÇÃO ADICIONAR AO CARRINHO (e outras funções de carrinho) ------------------
// ... (Funções de carrinho permanecem iguais)
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
            type: product.type,
            quantity: 1
        });
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
}

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
    
    subtotalEl.textContent = `R$${subtotal.toFixed(2).replace(".", ",")}`;
    grandTotalEl.textContent = `R$${subtotal.toFixed(2).replace(".", ",")}`;

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


// ------------------ PRODUTOR DETAIL (produtor.blade.php) - Inicialização Dinâmica ------------------

document.addEventListener("DOMContentLoaded", () => {
    const producerPageContainer = document.querySelector(".producer-detail-container");
    if (producerPageContainer) {
        const idInput = document.querySelector('#producer-id');
        const producerIdToLoad = idInput && idInput.value ? parseInt(idInput.value) : null; 
        
        if (producerIdToLoad) {
            displayProducerDetail(producerIdToLoad);
        } else {
             console.warn("Aviso: Não foi possível obter o ID do produtor na página de detalhes.");
        }
    }
});


function displayProducerDetail(producerId) {
    // 1. Encontrar o produtor específico
    const producer = getProducerById(producerId);
    
    if (!producer) {
        console.error(`Produtor com ID ${producerId} não encontrado.`);
        return;
    }

    // 2. Preencher os dados na página
    document.querySelector('.producer-photo').src = producer.image;
    document.querySelector('.producer-person-name').textContent = producer.produtor;
    document.querySelector('.producer-store-name').textContent = producer.name;
    // (A linha 'producer-store-name-repeat' provavelmente não existe no seu HTML atual, 
    // mas o script tenta preenchê-la. Mantenha por segurança se ela existir em outro lugar.)
    // document.querySelector('.producer-store-name-repeat').textContent = producer.name; 
    document.querySelector('.producer-location').textContent = `Local: ${producer.location}`;
    document.querySelector('.producer-phone').textContent = `Contato: ${producer.phone}`;
    
    // **LINHA CORRIGIDA:** Agora busca a classe '.producer-description' do HTML
    const descricaoEl = document.querySelector('.producer-description'); 
    if (descricaoEl) {
        descricaoEl.textContent = producer.descricao || 'Descrição não disponível.';
    }

    // 3. Mostrar os produtos deste produtor
    displayProductsByProducer(producerId);
}


// Nova função para listar APENAS os produtos do produtor atual
function displayProductsByProducer(producerId) {
    const productListContainer = document.querySelector(".producer-product-list");
    
    if (!productListContainer) {
        return; 
    }
    
    productListContainer.innerHTML = ''; // Limpa o container
    
    // Filtrar a lista global de produtos
    const producerProducts = products.filter(product => product.producer_id === producerId);
    
    if (producerProducts.length === 0) {
        productListContainer.innerHTML = "<p>Nenhum produto cadastrado por este produtor ainda.</p>";
        return;
    }

    // Gerar o HTML para cada produto (usando a função reutilizável)
    producerProducts.forEach(product => {
        const productCard = createProductCard(product); // Usa a função
        productListContainer.appendChild(productCard);
    });
}

// ------------------ FUNÇÃO DE REUTILIZAÇÃO (Card de Produto) ------------------
function createProductCard(product) {
    // Busca o nome do produtor para exibir na Home/Listas
    const producer = getProducerById(product.producer_id);
    const producerName = producer ? producer.name : 'Desconhecido';
    
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
            <span class="card__description">${producerName}</span>
            <a href="{{ url('/product-detail') }}" class="card__button">Comprar</a>
        </div>
    `;

    // Adiciona o evento de clique (salvar na sessão e redirecionar)
    const buyBtn = productCard.querySelector("a.card__button");
    buyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        sessionStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "/product-detail";
    });

    return productCard;
}

// -------------------------------------------------------------------------------------
// ------------------ LISTAGEM DE TODOS OS PRODUTORES (producers.blade.php) ------------------
// -------------------------------------------------------------------------------------

const producersContainer = document.querySelector(".producers__list"); // Container na view /produtores

if (producersContainer && typeof producers !== 'undefined') {
    displayAllProducers();
}

function displayAllProducers() {
    producersContainer.innerHTML = ''; // Limpa o container

    producers.forEach(producer => {
        const producerCard = document.createElement("article");
        producerCard.classList.add("producer__card");
        
        // **OPCIONAL:** Adiciona a descrição na lista de produtores
        const shortDescription = producer.descricao ? producer.descricao.substring(0, 80) + '...' : 'Descrição não disponível.';

        producerCard.innerHTML = `
            <div class="producer__header">
                <div class="producer__background-blur" style="background-image: url(${producer.image});">
                    <img src="${producer.image}" alt="Foto do Produtor ${producer.produtor}" class="producer__image">
                </div>

                <h2 class="producer__store-name">${producer.name}</h2>
                <span class="producer__person-name">por ${producer.produtor}</span>
            </div>
            <div class="producer__body">
                <p><strong>Localização:</strong> ${producer.location}</p>
                <p><strong>Contato:</strong> ${producer.phone}</p>
                
                <p class="producer__short-description">${shortDescription}</p> <a href="/produtores/${producer.id}" class="producer__button">Ver Perfil e Produtos</a>
            </div>
        `;

        producerCard.querySelector('a.producer__button').addEventListener('click', (e) => {
            // O link já é dinâmico.
        });


        producersContainer.appendChild(producerCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // 1. Seleciona o botão/link de "voltar" PELA CLASSE .voltar
    const backButton = document.querySelector('.voltar a'); // Seleciona o <a> dentro do span .voltar

    if (backButton) {
        // 2. Adiciona um "ouvinte" de clique
        backButton.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o comportamento padrão do link (ir para href="#")
            
            // 3. Executa o comando de voltar do navegador
            window.history.back();
        });
    }
});