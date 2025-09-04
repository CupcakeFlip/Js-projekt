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

// Get references to key DOM elements for product gallery, color, thumbnails, size selection, and size options
let currentGallery = document.getElementById("productGallery");
let currentColor = document.getElementById("thisProductColor");
let thumbnails = document.getElementById("selectionContainer");
let selectedSizeText = document.getElementById("thisProductSizeSelection");
let sizeOptions = document.getElementById("thisProductSizeContainer");

// Dynamically create and append image elements for the product's gallery
function showProductImages(product) {
  product.pictures.forEach((pictureSrc) => {
    const img = document.createElement("img");
    img.src = pictureSrc;
    img.alt = product.color; // Use product color as alt text
    currentGallery.appendChild(img);
  });
}

// Dynamically create size buttons for the product, styling based on availability
function showSizes(product) {
  product.sizeRange.forEach((sizeRange) => {
    const sizeBtn = document.createElement("button");

    // Add BEM classes for available or not-available sizes using if-else
    if (product.sizes.includes(sizeRange)) {
      sizeBtn.classList.add(
        // Hvis størrelsen er tilgængelig, tilføj disse klasser
        "product-info__size-btn",
        "product-info__size-btn--available"
      );
    } else {
      sizeBtn.classList.add(
        // Hvis størrelsen ikke er tilgængelig, tilføj disse klasser
        "product-info__size-btn",
        "product-info__size-btn--not-available"
      );
    }
    sizeBtn.textContent = sizeRange;

    // Add click event to select size and set active state
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

// Set up the product gallery, sizes, and color name for the selected product
function setUpProduct(product) {
  // Clear previous gallery images and size buttons
  currentGallery.innerHTML = "";
  sizeOptions.innerHTML = "";
  // Show new product images and sizes
  showProductImages(product);
  showSizes(product);
  // (Optional) Set thumbnail class to active (not used directly here)
  product.thumbnail.className = "btn-active";
  // Update color name in the UI
  currentColor.innerHTML = product.color;
}

// Wait for the DOM to be fully loaded before running setup code
window.addEventListener("DOMContentLoaded", function () {
  thumbnails.innerHTML = ""; // Clear the thumbnail container first

  // Set up the initial product (first color as default)
  setUpProduct(products[0]);

  // Add color thumbnails for all products
  products.forEach((product, i) => {
    const thumbDiv = document.createElement("div");
    thumbDiv.className = "product-info__color-thumb";
    thumbDiv.dataset.color = product.color;

    // Mark the first thumbnail as active by default
    if (i === 0) {
      thumbDiv.classList.add("btn-active");
    }

    // Create and append the thumbnail image
    const img = document.createElement("img");
    img.src = product.thumbnail.src;
    img.alt = product.thumbnail.alt;
    thumbDiv.appendChild(img);

    // On mouseover, show the color name for the hovered thumbnail
    thumbDiv.addEventListener("mouseover", function () {
      currentColor.innerHTML = product.color;
    });
    // On mouseout, revert to the active color name
    thumbDiv.addEventListener("mouseout", function () {
      const activeIndex = Array.from(selectionContainer.children).findIndex(
        (div) => div.classList.contains("btn-active")
      );
      currentColor.innerHTML = products[activeIndex].color;
    });

    // On click: update gallery, color, and set this thumbnail as active
    thumbDiv.addEventListener("click", function () {
      // Remove btn-active from all thumbnails
      document.querySelectorAll(".product-info__color-thumb").forEach((div) => {
        div.classList.remove("btn-active");
      });
      // Add btn-active to the clicked thumbnail
      thumbDiv.classList.add("btn-active");

      // Update the product view to match the selected color
      setUpProduct(product);
    });

    // Add the thumbnail to the selection container
    selectionContainer.appendChild(thumbDiv);
  });
});
