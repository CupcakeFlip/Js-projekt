console.log("Det virker!")

const galleryContainer = document.getElementById("galleri__kobte--ogsaa");

function Product(image, productName, price) {
    this.image = image;
    this.productName = productName;
    this.price = price;
}

const baggyHighJeans = new Product(
    "image/gallery/baggy-high-jeans.png", "BAGGY HIGH JEANS", "349,00"
)

const sandaler = new Product(
    "image/gallery/sandaler.png", "SANDALER", "229,00"
)

const sweatshirtVasketLook = new Product(
    "image/gallery/sweatshirt-vasket-look.png", "SWEATSHIRT I BOMULD MED VASKET LOOK", "199,00"
)

const flaredHighJeans = new Product(
    "image/gallery/flared-high-jeans.png", "FLARED HIGH JEANS", "349,00"
)

const sneakers = new Product(
    "image/gallery/sneakers.png", "SNEAKERS", "299,00"
)

const baggyHighJeans2 = new Product(
    "image/gallery/baggy-high-jeans-2.png", "BAGGY HIGH JEANS", "349,00"
)

const sneakers2 = new Product(
    "image/gallery/sneakers-2.png", "SNEAKERS", "349,00"
)

const gallery = [
    baggyHighJeans, 
    sandaler,
    sweatshirtVasketLook,
    flaredHighJeans,
    sneakers,
    baggyHighJeans2,
    sneakers2 
];


for (let i = 0; i < gallery.length; i++) {
    galleryContainer.innerHTML +=
        '<div class="product__container">' +
            '<img src="' + gallery[i].image + '" class="product__images" alt="' + gallery[i].productName + '">' +
            '<p class="product__name">' + gallery[i].productName + '</p>' +
            '<p class="product__price">' + gallery[i].price + ' kr.</p>' +
        '</div>';
}


/*
for (let i = 0; i < gallery.length; i++) {
    galleryContainer.innerHTML += "<img src='" + gallery[i].image + "'>";
    galleryContainer.innerHTML += gallery[i].productName;
    galleryContainer.innerHTML += gallery[i].price + " kr.";
}
*/



// Nedenstående er lavet med hjælp af ChatGPT for at kunne rykke et billede ad gangen når man trykker på frem-/tilbageknapperne.
// Som det er lige nu, scroller den hele containeren igennem, da jeg ikke kan få den til at rykke ét billede ad gangen. 
// Promt (finpudsning af svar er sket efterfølgende, og der har været en samtale forude for denne promt): 
// "Men knappen skal gøre sådan så alle billeder stadig vises, men der er et overflow, som så derefter "rykker" ét billede af gangen. Så lad os sige at der er billeder i indeks 0, 1, 2, 3, og ved klik af >-button bliver det index 1, 2, 3, 4"

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Hvor meget den scroller når man trykker på knap
const scrollAmount = galleryContainer.offsetWidth;


nextBtn.addEventListener("click", () => {
    galleryContainer.scrollLeft += scrollAmount;
});

prevBtn.addEventListener("click", () => {
    galleryContainer.scrollLeft -= scrollAmount;
});


// Denne næste del gør, at når man ikke kan klikke sig længere gennem array'et, så bliver pilene (enten next eller prev) grå/disabled, så man ikke kan trykke videre på dem.
// Dette gælder dog ikke til hvis man scroller igennem - der vil knapperne forblive.
// For some reason skal man trykke 2 gange for at knappen bliver disabled, men det ved jeg ikke hvordan man fixer.

function updateButtons() {
  if (galleryContainer.scrollLeft <= 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (galleryContainer.scrollLeft + galleryContainer.offsetWidth >= galleryContainer.scrollWidth) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}
nextBtn.addEventListener("click", () => {
  galleryContainer.scrollLeft += scrollAmount;
  updateButtons();
});

prevBtn.addEventListener("click", () => {
  galleryContainer.scrollLeft -= scrollAmount;
  updateButtons();
});

updateButtons();
