//Dictes del

const modal = document.getElementById('loginModal');

function openModal() {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden'; // stop scroll bagved
}
function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = ''; // tillad scroll igen
}

// liste over emails der kan bruges på siden
const emails = [
  "tbj@ucl.dk",
  "test@haha.dk",
  "joe@biden.com",
  "freakyah@gmail.com",
  "dicte@ersød.dk"

]
// liste over koder der kan bruges på siden
const koder = [
  "hest",
  "lortejavascript",
  "dicteersødogsjov",
  "test1234",
  "jeghedderthomas"
]

function login() {
  const email = document.getElementById('email').value; 
  const pwd = document.getElementById('pwd').value;
  let isValid = false;
  for (let i = 0; i < emails.length; i++) { // går igennem hele listen
    if (email === emails[i] && pwd === koder[i]) { 
      isValid = true;
      break;

    }
  }

  if (isValid) {
    alert("Du er logget ind") //alert når du har gjort det rigtigt
    window.location.href = "produktside.html";
  } else {
    alert("Der gik noget galt") //alert når noget er forkert
  }
  return false;
}

