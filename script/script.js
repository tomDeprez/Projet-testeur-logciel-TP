document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const loginError = document.getElementById('loginError');
  const loginSuccess = document.getElementById('loginSuccess'); // Assurez-vous d'avoir cet élément dans votre HTML

  if (email === "it@example.com" && password === "123456") {
    loginSuccess.style.display = 'block';
    loginSuccess.textContent = 'Connexion réussie. Redirection vers la page d\'accueil.';
    setTimeout(() => {
      loginSuccess.style.display = 'none';
      // window.location.href = 'homepage.html';
    }, 3000); // Message disparaît après 3 secondes
  } else {
    loginError.style.display = 'block';
    loginError.textContent = 'Informations de connexion invalides.';
    setTimeout(() => {
      loginError.style.display = 'none';
    }, 3000); // Message disparaît après 3 secondes
  }
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const password = document.getElementById('registerPassword').value;
  const confirm = document.getElementById('registerPasswordConfirm').value;
  const registerError = document.getElementById('registerError');
  const registerSuccess = document.getElementById('registerSuccess'); // Assurez-vous d'avoir cet élément dans votre HTML

  if (password === confirm) {
    registerSuccess.style.display = 'block';
    registerSuccess.textContent = 'Inscription réussie. Redirection vers la page d\'accueil.';
    setTimeout(() => {
      registerSuccess.style.display = 'none';
      // window.location.href = 'homepage.html';
    }, 3000); // Message disparaît après 3 secondes
  } else {
    registerError.style.display = 'block';
    registerError.textContent = 'Les mots de passe ne correspondent pas.';
    setTimeout(() => {
      registerError.style.display = 'none';
    }, 3000); // Message disparaît après 3 secondes
  }
});
