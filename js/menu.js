// ------------------------------------------ //
//         SCRIPT TIL MENU OG SUBMENU         //
//                  Josefine                  //
// ------------------------------------------ //
// Opretter en variabel "menu" som er en liste (array) af menupunkter.
// Hvert menupunkt er et objekt med tre egenskaber:
// - navn: hvad menuen hedder (fx "DAMER")
// - submenu: en liste af undermenuer til det menupunkt
// - picture: en liste af billeder til undermenuen
const menu = [
  {
    navn: "DAME",
    submenu: ["NYHEDER", "EDITS", "THE STUDIO", "BESTSELLER", "TØJ", "ACCESSORIES", "SKO", "BEAUTY", "SPORT", "LAST CHANCE", "MEMBER PRICES", "GAVER", "ALLE MÆRKER", "BÆREDYGTIGHED", "SECONDHAND & GARMENT CARE", "KUNDESERVICE", "NEWSLETTER", "FIND BUTIK", "DOWNLOAD ANDROID", "DOWNLOAD IOS"],
    picture: ["image/submenu/dame 1.avif", "image/submenu/dame 2.avif", "image/submenu/dame 3.avif", "image/submenu/dame 4.avif"]
    
  },
  {
    navn: "HERRE",
    submenu: ["NYHEDER", "SÆSONGUIDEN", "ATELIER", "BESTSELLER",
      "TØJ", "ACCESSORIES", "SKO", "SPORT", "BEAUTY",
      "LAST CHANCE", "MEMBER PRICES", "GAVER", "ALLE MÆRKER",
      "BÆREDYGTIGHED", "SECONDHAND & GARMENT CARE", "KUNDESERVICE",
      "NEWSLETTER", "FIND BUTIK", "DOWNLOAD ANDROID", "DOWNLOAD IOS"],
    picture: ["image/submenu/herre 1.avif", "image/submenu/herre 2.avif", "image/submenu/herre 3.avif", "image/submenu/herre 4.avif"]
  },
  {
    navn: "BØRN",
    submenu: ["NYFØDT", "BABY", "2-8 ÅR", "9-14 ÅR",
      "BÆREDYGTIGHED", "SECONDHAND & GARMENT CARE", "KUNDESERVICE",
      "NEWSLETTER", "FIND BUTIK", "DOWNLOAD ANDROID", "DOWNLOAD IOS"],
    picture: ["image/submenu/born 1.avif", "image/submenu/born 2.avif", "image/submenu/born 3.avif"]
  },
  {
    navn: "HOME",
    submenu: ["NYHEDER", "AUTUMN COLLECTION", "BESTSELLER",
      "SHOP EFTER RUM", "SE ALLE PRODUKTER", "TEKSTILER",
      "INDRETNING", "KØKKEN & SERVERING", "SENGETØJ", "BADEVÆRELSESTILBEHØR",
      "BØRN & BABY", "MØBLER", "BELYSNING", "OPBEVARING", "RUMDUFT",
      "BLOMSTER & PLANTER", "NATTØJ & LOUNGEWEAR",
      "LAST CHANCE", "GAVER", "ALLE MÆRKER",
      "BÆREDYGTIGHED", "SECONDHAND & GARMENT CARE", "KUNDESERVICE",
      "NEWSLETTER", "FIND BUTIK", "DOWNLOAD ANDROID", "DOWNLOAD IOS"],
    picture: ["image/submenu/home 1.avif", "image/submenu/home 2.avif", "image/submenu/home 3.avif", "image/submenu/home 4.avif"]
  },
  {
    navn: "BEAUTY",
    submenu: ["NYHEDER", "25% PÅ ESTRID", "EDITS", "BESTSELLER",
      "SE ALLE PRODUKTER", "ALL BRANDS", "MAKEUP", "HUDPLEJE",
      "HÅRPLEJE", "NEGLE", "DUFTE & PARFUMER", "MAKEUPTASKER & -PUNGE",
      "MINI SIZE", "BEAUTY-SÆT", "HERRE", "LAST CHANCE", "GAVER",
      "GUIDES", "BÆREDYGTIGHED", "SECONDHAND & GARMENT CARE",
      "KUNDESERVICE", "NEWSLETTER", "FIND BUTIK", "DOWNLOAD ANDROID",
      "DOWNLOAD IOS"],
    picture: ["image/submenu/beauty 1.avif", "image/submenu/beauty 2.avif", "image/submenu/beauty 3.avif"]
  }
];

// Finder <ul id="menu"> i HTML'en og gemmer den i variablen "ul".
// <ul> er listen, som alle menupunkter skal ind i.
const ul = document.getElementById("menu");

// 1. Starter en for-løkke, der går igennem hvert element i menu-arrayet
// 2. Opretter et nyt <li> element (et menupunkt i listen)
// 3. sætter tekst til menupunktet ved at hente navnet fra menu-arrayet.
for (let i = 0; i < menu.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = "<a href=''>" + menu[i].navn + "</a>";

// ----- SUBMENU CONTAINER ----- //
// 1. Opretter et <div>, der holder både tekst-undermenu og billeder
// 2. Tilføjer CSS-klasse, så vi kan style den med CSS
  const subContainer = document.createElement("div");
  subContainer.classList.add("submenu");

// ----- TEKST-UNDERMENU TIL VENSTRE ----- //
// 1. laver en liste til undermenuen.
// 2. Går igennem alle undermenupunkter i submenu-arrayet
// 3. Opretter et nyt <li> element 
// 3. Sætter tekst til undermenupunktet ved at hente navnet fra submenu-arrayet.
  const textUl = document.createElement("ul");
  for (let j = 0; j < menu[i].submenu.length; j++) {
    const subLi = document.createElement("li");
    subLi.innerHTML = "<a href=''>" + menu[i].submenu[j] + "</a>";

// Tilføjer specielle klasser til styling i CSS
    if (j < 4) {
      subLi.classList.add("highlight-sub"); // Til de første fire undermenupunkter.
    }
    if (menu[i].submenu[j] === "LAST CHANCE") {
      subLi.classList.add("last-chance"); 
    }
    if (
      menu[i].submenu[j] === "TØJ" ||
      menu[i].submenu[j] === "GAVER" ||
      menu[i].submenu[j] === "BÆREDYGTIGHED" ||
      menu[i].submenu[j] === "SE ALLE PRODUKTER"
      ) {
      subLi.classList.add("marginTop");
    }

// Tilføjer undermenupunktet til listen
    textUl.appendChild(subLi);
  }

// ----- BILLEDE-UNDERMENU TIL HØJRE ----- //
// 1. laver en liste til billederne i undermenuen.
// 2. Går igennem alle billeder i picture-arrayet.
// 3. Opretter et nyt <li> element til hvert billede.
// 4. Opretter et nyt <img> element og sætter src og alt attributter.
// 5. sætter billedet ind i <li>.
// 6. Tilføjer <li> til billedelisten.
  const picUl = document.createElement("ul");
  for (let k = 0; k < menu[i].picture.length; k++) { 
    const picLi = document.createElement("li");
    const img = document.createElement("img"); 
    img.src = menu[i].picture[k]; 
    img.alt = menu[i].navn + " billede " + (k+1);
    picLi.appendChild(img); 
    picUl.appendChild(picLi); 
  }

// ----- TILFØJER UNDERMENUERNE TIL CONTAINER ----- //
  subContainer.appendChild(textUl); // tekst-undermenu til venstre
  subContainer.appendChild(picUl); // billed-undermenu til højre

  // Tilføjer submenu-containeren til hovedmenupunktet
  li.appendChild(subContainer);

  // Tilføjer hele menupunktet til <ul id="menu"> i HTML
  ul.appendChild(li);
}

// ------------------------------------------ //
//          SCRIPT TIL BURGERMENUEN           //
// ------------------------------------------ //
// Finder de nødvendige elementer fra HTML (DOM) og gemmer dem i variabler:
// NOTE: ul er allerede defineret tidligere.
// Derfor gør jeg det ikke her.
const toggleButton = document.querySelector('.navbar__toggle');
const closeButton = document.querySelector('.navbar__close');

//Laver en funktion, der hedder toggleMenu.
function toggleMenu() {
  // Tjekker om burgerknappen er synlig
  if (toggleButton.style.display !== 'none') {
    // ----- BURGERKNAPPEN ER SYNLIG → VI ÅBNER MENUEN -----
    toggleButton.style.display = 'none';   // Skjul burger-knappen
    closeButton.style.display = 'block';   // Vis kryds-knappen
    ul.style.display = 'flex';             // Vis menulinjen
  } else {
    // ----- KRYDSKNAPPEN ER SYNLIG → VI LUKKER MENUEN -----
    toggleButton.style.display = 'block';  // Vis burger-knappen
    closeButton.style.display = 'none';    // Skjul kryds-knappen
    ul.style.display = 'none';             // Skjul menulinjen
  }
}

toggleButton.addEventListener('click', toggleMenu); //Når der klikkes på toggleButton, kaldes funktionen toggleMenu.
closeButton.addEventListener('click', toggleMenu); //Når der klikkes på closeButton, kaldes funktionen toggleMenu.

// ------------------------------------------ //
//     MOBIL: ÅBEN/LUK SUBMENU PÅ KLIK         //
//      Lavet med AI (se bilag 1-prompt)      //
// ------------------------------------------ //
// Tjekker om skærmbredden er 960px eller mindre (dvs. mobilvisning)
if (window.innerWidth <= 960) {

  // Finder alle links i hovedmenuen (DAMER, HERRE, BØRN osv.) og gemmer dem i variabler:
  const mainLinks = document.querySelectorAll("#menu > li > a");

  // Går igennem hvert link og tilføjer en klik-funktion.
  mainLinks.forEach(link => {
    link.onclick = function(e) {
      e.preventDefault(); // Forhindrer standard link-adfærd.

      // Finder submenuen i containeren der hører til det klikkede link
      // this = det link der blev klikket på.
      // parentElement = <li> elementet som linket ligger i
      // querySelector(".submenu") finder submenuen inde i dette <li>
      const subContainer = this.parentElement.querySelector(".submenu");

      // Tjekker om submenuen allerede er synlig (display: block)
      if (subContainer.style.display === "block") {
        subContainer.style.display = "none";
      // Før vi åbner submenuen, kan vi lukke alle andre åbne submenus
      } else {
        document.querySelectorAll("#menu .submenu").forEach(sub => {
          sub.style.display = "none";
        });

      // Viser submenuen for det klikede link
        subContainer.style.display = "block";
      }
    };
  });
}