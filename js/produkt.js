/**
 * The function `Product` creates a new product object with properties such as id, color, sizeRange,
 * sizes, pictures, and thumbnail.
 * @param id - The `id` parameter in the `Product` function represents the unique identifier or code
 * assigned to a product. It is used to distinguish one product from another in a system or database.
 * @param color - Color is a property of the product that describes the color or hue of the item. It
 * could be a string representing the color name or code, such as "red", "blue", "#FFA500" (hex code
 * for orange), etc.
 * @param sizeRange - The `sizeRange` parameter in the `Product` function represents the range of sizes
 * available for the product. It could be a string indicating the size range, such as "S-XL" for small
 * to extra large sizes, or any other format that specifies the available sizes for the product.
 * @param sizes - The `sizes` parameter in the `Product` function represents an array that contains the
 * available sizes for the product. For example, it could include sizes like 'S', 'M', 'L', 'XL', etc.
 * @param pictures - The `pictures` parameter in the `Product` function represents an array that stores
 * the images of the product. This array can contain multiple image URLs or references to the product's
 * pictures.
 * @param thumbnail - The `thumbnail` parameter in the `Product` function represents the image that
 * serves as a small preview or representation of the product. It is typically a smaller version of the
 * main product image and is often used in product listings, search results, or as a quick visual
 * reference for the product.
 */
function Product(id, color, sizeRange, sizes, pictures, thumbnail) {
  this.id = id;
  this.color = color;
  this.sizeRange = sizeRange;
  this.sizes = sizes;
  this.pictures = pictures;
  this.thumbnail = thumbnail;
}

const sizeRangeXXSto4XL = [
  "XXS",
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "3XL",
  "4XL",
];

const sizeRangeXXStoXXL = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
const sizeRangeXStoXXL = ["XS", "S", "M", "L", "XL", "XXL"];

const grablaSizes = ["XXS", "XL"];

const grablaPictures = [
  "image/firstProduct/firstPicture.avif",
  "image/firstProduct/secondPicture.avif",
  "image/firstProduct/thirdPicture.avif",
  "image/firstProduct/fourthPicture.avif",
  "image/firstProduct/fifthPicture.avif",
  "image/firstProduct/sixthPicture.avif",
];

const grabla = new Product(
  1,
  "Gråblå",
  sizeRangeXXStoXXL,
  grablaSizes,
  grablaPictures,
  { src: "image/diffColor/grabla.avif", alt: "Gråblå" }
);

sortSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];

const sortPictures = [
  "image/otherProducts/sort1.avif",
  "image/otherProducts/sort2.avif",
  "image/otherProducts/sort3.avif",
  "image/otherProducts/sort4.avif",
  "image/otherProducts/sort5.avif",
  "image/otherProducts/sort6.avif",
];

const sort = new Product(2, "Sort", sizeRangeXXSto4XL, sortSizes, sortPictures);
sort.thumbnail = { src: "image/diffColor/sort.avif", alt: "Sort" };

const lysegraSizes = ["XXL"];

const lysegraPictures = ["image/otherProducts/lysegra.avif"];

const lysegra = new Product(
  3,
  "Lysegråmeleret",
  sizeRangeXXSto4XL,
  lysegraSizes,
  lysegraPictures,
  { src: "image/diffColor/lysegrameleret.avif", alt: "Lysegråmeleret" }
);

const morkegraSizes = ["XXS", "XS"];

const morkegraPictures = ["image/otherProducts/morkegra.avif"];

morkegra = new Product(
  4,
  "Mørkegrå",
  sizeRangeXXSto4XL,
  morkegraSizes,
  morkegraPictures,
  { src: "image/diffColor/morkegra.avif", alt: "Mørkegrå" }
);

const hvidSizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

const hvidPictures = ["image/otherProducts/hvid.avif"];

hvid = new Product(5, "Hvid", sizeRangeXXSto4XL, hvidSizes, hvidPictures);
hvid.thumbnail = { src: "image/diffColor/hvid.avif", alt: "Hvid" };

const cremeStribet = ["S", "M", "L", "XL", "XXL"];

const cremeStribetPictures = ["image/otherProducts/cremeStribet.avif"];

const cremeStribetProduct = new Product(
  6,
  "Creme/Stribet",
  sizeRangeXXStoXXL,
  cremeStribet,
  cremeStribetPictures,
  { src: "image/diffColor/cremeStribet.avif", alt: "Creme/Stribet" }
);

const muldvarpSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

const muldvarpPictures = ["image/otherProducts/muldvarp.avif"];

muldvarp = new Product(
  7,
  "Mørk Muldvarp",
  sizeRangeXXStoXXL,
  muldvarpSizes,
  muldvarpPictures,
  { src: "image/diffColor/morkMuldvarp.avif", alt: "Mørk Muldvarp" }
);

const lysBeigeSizes = ["XL", "XXL"];

const lysBeigePictures = ["image/otherProducts/lysBeige.avif"];

lysBeige = new Product(
  8,
  "Lys Beige",
  sizeRangeXXStoXXL,
  lysBeigeSizes,
  lysBeigePictures,
  { src: "image/diffColor/lysBeige.avif", alt: "lys Beige" }
);

const vinrodSizes = ["XS", "S", "M"];

const vinrodPictures = ["image/otherProducts/vinrod.avif"];

vinrod = new Product(
  9,
  "Vinrød",
  sizeRangeXStoXXL,
  vinrodSizes,
  vinrodPictures,
  { src: "image/diffColor/vinrod.avif", alt: "Vinrød" }
);

const graSizes = ["XS", "S", "M", "L", "XL", "XXL"];

const graPictures = ["image/otherProducts/gra.avif"];

gra = new Product(10, "Mørkegrå", sizeRangeXStoXXL, graSizes, graPictures, {
  src: "image/diffColor/morkegra2.avif",
  alt: "Mørkegrå",
});

const sortHvidStribetSizes = ["XS", "S", "M", "L", "XL", "XXL"];

const sortHvidStribetPictures = ["image/otherProducts/sortHvidStribet.avif"];

sortHvidStribet = new Product(
  11,
  "Sort/Hvidstribet",
  sizeRangeXStoXXL,
  sortHvidStribetSizes,
  sortHvidStribetPictures,
  { src: "image/diffColor/sortHvidStribet.avif", alt: "Sort/Hvid Stribet" }
);

const rosaSizes = ["XS", "S", "M", "L", "XL", "XXL"];
const rosaPictures = [
  "image/otherProducts/rosa1.avif",
  "image/otherProducts/rosa2.avif",
  "image/otherProducts/rosa3.avif",
  "image/otherProducts/rosa4.avif",
];
rosa = new Product(
  12,
  "Støvet lys rosa",
  sizeRangeXStoXXL,
  rosaSizes,
  rosaPictures,
  { src: "image/diffColor/stovetLysRosa.avif", alt: "Støvet Lys Rosa" }
);

const products = [
  grabla,
  sort,
  lysegra,
  morkegra,
  hvid,
  cremeStribetProduct,
  muldvarp,
  lysBeige,
  vinrod,
  gra,
  sortHvidStribet,
  rosa,
];

let currentGallery = document.getElementById("productGallery");
let currentColor = document.getElementById("thisProductColor");
let thumbnails = document.getElementById("selectionContainer");
let selectedSizeText = document.getElementById("thisProductSizeSelection");
let sizeOptions = document.getElementById("thisProductSizeContainer");

/**
 * The function `showProductImages` takes a product object as input and dynamically creates and appends
 * image elements to a gallery container based on the picture sources provided in the product object.
 * @param product - The `product` parameter is an object that contains information about a specific
 * product. It includes details such as the product name, color, price, and an array of picture sources
 * (`pictures`) that represent different images of the product.
 */
function showProductImages(product) {
  product.pictures.forEach((pictureSrc) => {
    const img = document.createElement("img");
    img.src = pictureSrc;
    img.alt = product.color; // eller en mere specifik alt-tekst hvis du har
    currentGallery.appendChild(img);
  });
}

/**
 * The function `showSizes` dynamically creates buttons for each size in a product's size range,
 * styling them based on availability.
 * @param product - The `product` parameter seems to be an object that contains information about sizes
 * and size ranges. It has properties like `sizeRange` which is an array of size ranges, and `sizes`
 * which is an array of available sizes. The `showSizes` function is designed to create buttons for
 * each
 */
function showSizes(product) {
  product.sizeRange.forEach((sizeRange) => {
    const sizeBtn = document.createElement("button");

    product.sizes.includes(sizeRange)
      ? sizeBtn.classList.add(
          "product-info__size-btn",
          "product-info__size-btn--available"
        )
      : sizeBtn.classList.add(
          "product-info__size-btn",
          "product-info__size-btn--not-available"
        );
    sizeBtn.textContent = sizeRange;

    // Add click event to select size
    sizeBtn.addEventListener("click", function () {
      // Remove btn-active from all size buttons
      document.querySelectorAll(".product-info__size-btn").forEach((btn) => {
        btn.classList.remove("btn-active");
      });
      // Add btn-active to the clicked button
      sizeBtn.classList.add("btn-active");
    });

    sizeOptions.appendChild(sizeBtn);
  });
}

function setUpProduct(product) {
  showProductImages(product);
  showSizes(product);
  product.thumbnail.className = "btn-active";
}

var src = window.addEventListener("DOMContentLoaded", function () {
  // All your DOM-related code here
  currentGallery.innerHTML = "";
  currentColor.innerHTML = products[0].color;
  selectionContainer.innerHTML = ""; // Tøm containeren først
  sizeOptions.innerHTML = ""; // Tøm containeren først

  // Opsætning af det første primære farve
  setUpProduct(products[0]);

  // Tilføj thumbnails for alle produkter
  products.forEach((product, i) => {
    const thumbDiv = document.createElement("div");
    thumbDiv.className = "product-info__color-thumb";
    thumbDiv.dataset.color = product.color; // Gem farvenavnet

    if (i === 0) {
      thumbDiv.classList.add("btn-active");
    }

    const img = document.createElement("img");
    img.src = product.thumbnail.src;
    img.alt = product.thumbnail.alt;
    thumbDiv.appendChild(img);

    // Mouseover: vis farvenavn
    thumbDiv.addEventListener("mouseover", function () {
      currentColor.innerHTML = product.color;
    });

    // Mouseout: sæt tilbage til valgt farve (her: første produkt)
    thumbDiv.addEventListener("mouseout", function () {
      // Find den aktive thumbnail og brug dens farve
      const activeIndex = Array.from(selectionContainer.children).findIndex(
        (div) => div.classList.contains("btn-active")
      );
      currentColor.innerHTML = products[activeIndex].color;
    });

    selectionContainer.appendChild(thumbDiv);
  });
});

