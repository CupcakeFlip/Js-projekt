function Product(id, color, sizeRange, sizes, pictures) {
  this.id = id;
  this.color = color;
  this.sizeRange = sizeRange;
  this.sizes = sizes;
  this.pictures = pictures;
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
  grablaPictures
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

const lysegraSizes = ["XXL"];

const lysegraPictures = ["image/otherProducts/lysegra.avif"];

const lysegra = new Product(
  3,
  "Lysegråmeleret",
  sizeRangeXXSto4XL,
  lysegraSizes,
  lysegraPictures
);

const morkegraSizes = ["XXS", "XS"];

const morkegraPictures = ["image/otherProducts/morkegra.avif"];

const morkegra = new Product(
  4,
  "Mørkegrå",
  sizeRangeXXSto4XL,
  morkegraSizes,
  morkegraPictures
);

const hvidSizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

const hvidPictures = ["image/otherProducts/hvid.avif"];

const hvid = new Product(5, "Hvid", sizeRangeXXSto4XL, hvidSizes, hvidPictures);

const cremeStribet = ["S", "M", "L", "XL", "XXL"];

const cremeStribetPictures = ["image/otherProducts/cremeStribet.avif"];

const cremeStribetProduct = new Product(
  6,
  "Creme/Stribet",
  sizeRangeXXStoXXL,
  cremeStribet,
  cremeStribetPictures
);

const muldvarpSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];

const muldvarpPictures = ["image/otherProducts/muldvarp.avif"];

const muldvarp = new Product(
  7,
  "Mørk Muldvarp",
  sizeRangeXXStoXXL,
  muldvarpSizes,
  muldvarpPictures
);

const lysBeigeSizes = ["XL", "XXL"];

const lysBeigePictures = ["image/otherProducts/lysBeige.avif"];

const lysBeige = new Product(
  8,
  "Lys Beige",
  sizeRangeXXStoXXL,
  lysBeigeSizes,
  lysBeigePictures
);

const vinrodSizes = ["XS", "S", "M"];

const vinrodPictures = ["image/otherProducts/vinrod.avif"];

const vinrod = new Product(
  9,
  "Vinrød",
  sizeRangeXStoXXL,
  vinrodSizes,
  vinrodPictures
);

const graSizes = ["XS", "S", "M", "L", "XL", "XXL"];

const graPictures = ["image/otherProducts/gra.avif"];

const gra = new Product(
  10,
  "Mørkegrå",
  sizeRangeXStoXXL,
  graSizes,
  graPictures
);

const sortHvidStribetSizes = ["XS", "S", "M", "L", "XL", "XXL"];

const sortHvidStribetPictures = ["image/otherProducts/sortHvidStribet.avif"];

const sortHvidStribet = new Product(
  11,
  "Sort/Hvidstribet",
  sizeRangeXStoXXL,
  sortHvidStribetSizes,
  sortHvidStribetPictures
);

const rosaSizes = ["XS", "S", "M", "L", "XL", "XXL"];
const rosaPictures = [
  "image/otherProducts/rosa1.avif",
  "image/otherProducts/rosa2.avif",
  "image/otherProducts/rosa3.avif",
  "image/otherProducts/rosa4.avif",
];
const rosa = new Product(
  12,
  "Støvet lys rosa",
  sizeRangeXStoXXL,
  rosaSizes,
  rosaPictures
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

console.log(products);
