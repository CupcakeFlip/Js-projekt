// Hent elementer fra HTML
const cartButton = document.getElementById("shopping-cart-button"); // Ikonet i headeren
const cartOverlay = document.querySelector(".cart-overlay");        // Overlay-boksen
const cartCount = document.getElementById("cart-count");            // Tælleren i headeren
const addToCartButton = document.getElementById("putInCartBtn");    // "Tilføj til kurv"knappen
const emptyView = document.querySelector('.cart-empty');
const cartBody  = document.querySelector('.cart-body');
const continueBtn = document.querySelector('.continueshopping-button'); //link tilbage til forside


// Array til at gemme varer i kurven
let cart = [];


cartButton.addEventListener("click", () => {
  cartOverlay.classList.toggle("active");
});

// klik udenfor og overlay lukkes
document.addEventListener("click", (e) => {
  if (!cartButton.contains(e.target) && !cartOverlay.contains(e.target)) {
    cartOverlay.classList.remove("active");
  }
});
// Hover ind på knappen
cartButton.addEventListener("mouseenter", () => {
  cartOverlay.classList.add("active");
});

// Hover ud af knappen luk
cartButton.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!cartOverlay.matches(":hover")) {
      cartOverlay.classList.remove("active");
    }
  }, 100);
});

// "Fortsæt med at handle" knappen føre til forsiden
continueBtn?.addEventListener('click', (e) => {
  e.preventDefault();                // behold som <button>
  window.location.href = 'index.html';
});


// opdater tallet i badge + data-count (max 19 som på h og m's site)
function updateCartBadge() {
  const n = cart.length;
  if (!cartCount) return;

  if (n === 0) {
    cartCount.dataset.count = "0";  // skjules af CSS
    cartCount.textContent = "";
  } else {
    const display = n > 19 ? "19+" : String(n);
    cartCount.dataset.count = display; // opdater attributten
    cartCount.textContent = display;   // vis samme i teksten
  }
}


// Når man klikker "Tilføj" på side 2 
addToCartButton?.addEventListener('click', (e) => {
  e.preventDefault();
  

  // læser produktdata fra DOM
  const titleEl = document.querySelector('#thisProductTitle h1');
  const priceEl = document.querySelector('#thisProductPrice span');
  const colorEl = document.getElementById('thisProductColor');

  // prøv valgt størrelse, ellers tag første tilgængelige
  const sizeEl =
    document.querySelector('.product-info__size-btn.is-selected') ||
    document.querySelector('.product-info__size-btn:not(.product-info__size-btn--not-available)');



  const title = titleEl?.textContent?.trim() || 'Produkt';
  const color = colorEl?.textContent?.trim() || '—';
  const size  = sizeEl?.textContent?.trim()  || 'XL';

 // konverter "69,99 kr." -> 69.99 (tal) her er det blevet brug regex
const price = Number(
  (priceEl?.textContent || '0')
    .replace(/\./g, '')
    .replace(',', '.')
    .replace(/[^\d.]/g, '')
);

// find thumb der matcher farven
const selectedColorName = colorEl?.textContent?.trim() || '';
const colorThumbs = Array.from(
  document.querySelectorAll('#selectionContainer .product-info__color-thumb')
);
const selectedThumb = colorThumbs.find(el => (el.getAttribute('alt') || '').trim() === selectedColorName);
const img = selectedThumb
  ? selectedThumb.getAttribute('src')
  : 'image/diffColor/grabla.avif';

  // 2: gem i array
  cart.push({ title, color, size, price, img, qty: 1 });

  // 3: opdater counter
  updateCartBadge();

  // 4: tegn overlay med de nye varer
  renderCartOverlay();

  // 5: vis overlay
  cartOverlay.classList.add('active');
});

function formatDKK(n) {
  return n.toLocaleString('da-DK', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' kr.';
}

function renderCartOverlay() {
  if (!cartOverlay || !emptyView || !cartBody) return;

  if (cart.length === 0) {
    // vis “tom kurv”
    emptyView.classList.remove('hidden');
    cartBody.classList.add('hidden');
    cartBody.innerHTML = '';
    return;
  }

  // vis mini-kurv (lige nu første vare)
  const item = cart[0];
  const lineTotal = item.price * item.qty;
  const shipping  = 39.99;
  const subtotal  = lineTotal;
  const total     = subtotal + shipping;

  cartBody.innerHTML = `
    <div class="cart-line">
      <img class="cart-line__img" src="${item.img}" alt="${item.title}">
      <div>
        <p class="cart-line__title">${item.title}</p>
        <p class="cart-line__meta">Farve ${item.color || '—'}</p>
        <p class="cart-line__meta">Str. ${item.size  || '—'}</p>
        <p class="cart-line__meta">Antal ${item.qty}</p>
        <p class="cart-line__meta">I alt ${formatDKK(lineTotal)}</p>
      </div>
    </div>

    <div class="cart-sum">
      <div class="cart-sum__row"><span>Ordreværdi</span><span>${formatDKK(subtotal)}</span></div>
      <div class="cart-sum__row"><span>Anslået leveringsgebyr</span><span>${formatDKK(shipping)}</span></div>
      <div class="cart-sum__row cart-sum__total"><span>I ALT</span><span>${formatDKK(total)}</span></div>
    </div>

    <div class="cart-actions">
      <button type="button" class="btn btn--primary">KASSE</button>
      <button type="button" class="btn btn--secondary">SHOPPINGBAG</button>
    </div>
  `;

  emptyView.classList.add('hidden');
  cartBody.classList.remove('hidden');
}

// kald én gang ved load så “tom kurv” vises korrekt
renderCartOverlay();
