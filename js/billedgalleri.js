const galleryContainer = document.getElementById("gallery");

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
    output.innerHTML += gallery[i].image;
}