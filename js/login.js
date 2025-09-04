
const modal = document.getElementById('loginModal');

function openModal() {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden'; // stop scroll bagved
}
function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = ''; // tillad scroll igen
}

const emails = [
  "tbj@ucl.dk",
  "test@haha.dk",
  "joe@biden.com",
  "freakyah@gmail.com",
  "dicte@ersød.dk"

]
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
  for (let i = 0; i < emails.length; i++) {
    if (email === emails[i] && pwd === koder[i]) {
      isValid = true;
      break;

    }
  }

  if (isValid) {
    alert("Du er logget ind")
    window.location.href = "produktside.html"
  } else {
    alert("Der gik noget galt")
  }
  return false;
}

