
  const modal = document.getElementById('loginModal');
  const email = document.getElementById('email').value;
  const pwd = document.getElementById('pwd').value;
  
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

function login(){
if (emails.includes(email))
{console.log ('email korrekt');
  alert("du er nu logget ind");
}
}

