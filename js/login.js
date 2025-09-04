
  const modal = document.getElementById('loginModal');

  function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // stop scroll bagved
  }
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = ''; // tillad scroll igen
  }

  

