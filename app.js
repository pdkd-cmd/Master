const $ = (selector) => document.querySelector(selector);

let cart = JSON.parse(localStorage.getItem("shophub-cart") || "[]");
let selectedCategory = "all";
let searchTerm = "";

const productGrid = $("#productGrid");
const categoryGrid = $("#categoryGrid");
const cartDrawer = $("#cartDrawer");
const overlay = $("#overlay");
const toast = $("#toast");

function money(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function categoryName(id) {
  return STORE_CATEGORIES.find(c => c.id === id)?.name || id;
}

function saveCart() {
  localStorage.setItem("shophub-cart", JSON.stringify(cart));
  renderCart();
}

function renderCategories() {
  categoryGrid.innerHTML = STORE_CATEGORIES.map(category => `
    <button class="category-card" data-category="${category.id}">
      <img src="${category.image}" alt="${category.name}" loading="lazy">
      <span>${category.name}</span>
      <small>${PRODUCTS.filter(p => p.category === category.id).length} products</small>
    </button>
  `).join("");

  categoryGrid.querySelectorAll("[data-category]").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedCategory = btn.dataset.category;
      renderProducts();
      document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function getVisibleProducts() {
  let result = PRODUCTS.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const searchMatch = !searchTerm ||
      product.name.toLowerCase().includes(searchTerm) ||
      product.id.toLowerCase().includes(searchTerm) ||
      categoryName(product.category).toLowerCase().includes(searchTerm);
    return categoryMatch && searchMatch;
  });

  const sort = $("#sortSelect").value;
  if (sort === "price-low") result.sort((a, b) => a.salePrice - b.salePrice);
  if (sort === "price-high") result.sort((a, b) => b.salePrice - a.salePrice);
  if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));

  return result;
}

function renderProducts() {
  const products = getVisibleProducts();
  productGrid.innerHTML = products.map(product => {
    const discount = Math.round((1 - product.salePrice / product.price) * 100);
    return `
      <article class="product-card">
        <div class="product-image-wrap" data-product="${product.id}">
          ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
          <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
          <button class="quick-add" data-add="${product.id}" aria-label="Add ${product.name} to cart">+</button>
        </div>
        <div class="product-info">
          <p class="product-category">${categoryName(product.category)}</p>
          <h3 data-product="${product.id}">${product.name}</h3>
          <div class="price">
            <strong>${money(product.salePrice)}</strong>
            ${product.salePrice < product.price ? `<del>${money(product.price)}</del><span>${discount}% OFF</span>` : ""}
          </div>
        </div>
      </article>
    `;
  }).join("");

  $("#activeFilter").innerHTML = selectedCategory !== "all"
    ? `<button id="clearFilter">× ${categoryName(selectedCategory)}</button>`
    : "";

  $("#emptyState").hidden = products.length !== 0;

  productGrid.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      addToCart(btn.dataset.add);
    });
  });

  productGrid.querySelectorAll("[data-product]").forEach(el => {
    el.addEventListener("click", () => openProduct(el.dataset.product));
  });

  $("#clearFilter")?.addEventListener("click", () => {
    selectedCategory = "all";
    renderProducts();
  });
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, qty: 1 });

  saveCart();
  showToast(`${product.name} added to cart`);
}

function changeQty(id, amount) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += amount;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
}

function renderCart() {
  const items = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return product ? { ...product, qty: item.qty } : null;
  }).filter(Boolean);

  $("#cartCount").textContent = items.reduce((sum, item) => sum + item.qty, 0);
  $("#cartEmpty").style.display = items.length ? "none" : "flex";
  $("#cartFooter").style.display = items.length ? "block" : "none";

  $("#cartItems").innerHTML = items.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${money(item.salePrice)}</p>
        <div class="qty">
          <button data-minus="${item.id}">−</button>
          <span>${item.qty}</span>
          <button data-plus="${item.id}">+</button>
        </div>
      </div>
      <button class="remove-item" data-remove="${item.id}">×</button>
    </div>
  `).join("");

  const subtotal = items.reduce((sum, item) => sum + item.salePrice * item.qty, 0);
  $("#cartSubtotal").textContent = money(subtotal);

  $("#cartItems").querySelectorAll("[data-minus]").forEach(btn =>
    btn.addEventListener("click", () => changeQty(btn.dataset.minus, -1))
  );
  $("#cartItems").querySelectorAll("[data-plus]").forEach(btn =>
    btn.addEventListener("click", () => changeQty(btn.dataset.plus, 1))
  );
  $("#cartItems").querySelectorAll("[data-remove]").forEach(btn =>
    btn.addEventListener("click", () => removeFromCart(btn.dataset.remove))
  );
}

function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
  document.body.classList.remove("no-scroll");
}

function openProduct(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  $("#modalContent").innerHTML = `
    <div class="modal-image"><img src="${product.image}" alt="${product.name}"></div>
    <div class="modal-info">
      <p class="eyebrow">${categoryName(product.category)}</p>
      <h2>${product.name}</h2>
      <div class="modal-price">${money(product.salePrice)} ${product.salePrice < product.price ? `<del>${money(product.price)}</del>` : ""}</div>
      <p>${product.description}</p>
      <p class="sku">SKU: ${product.id}</p>
      <button class="primary-btn full" id="modalAdd">Add to cart</button>
    </div>
  `;

  $("#productModal").classList.add("show");
  overlay.classList.add("show");
  document.body.classList.add("no-scroll");
  $("#modalAdd").addEventListener("click", () => {
    addToCart(id);
    closeModal();
  });
}

function closeModal() {
  $("#productModal").classList.remove("show");
  overlay.classList.remove("show");
  document.body.classList.remove("no-scroll");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

$("#cartOpen").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
$("#modalClose").addEventListener("click", closeModal);
overlay.addEventListener("click", () => {
  closeCart();
  closeModal();
});

$("#searchToggle").addEventListener("click", () => {
  $("#searchBar").classList.toggle("open");
  if ($("#searchBar").classList.contains("open")) $("#searchInput").focus();
});

$("#searchInput").addEventListener("input", e => {
  searchTerm = e.target.value.trim().toLowerCase();
  renderProducts();
});

$("#sortSelect").addEventListener("change", renderProducts);

$("#checkoutBtn").addEventListener("click", () => {
  showToast("Checkout can be connected to your preferred service later.");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeCart();
    closeModal();
  }
});

$("#year").textContent = new Date().getFullYear();

renderCategories();
renderProducts();
renderCart();
