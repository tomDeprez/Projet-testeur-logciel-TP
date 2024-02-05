document.getElementById('checkCart').addEventListener('click', function () {
  // Récupérer le nombre d'articles dans le panier à partir du stockage local
  const cartItemCount = parseInt(localStorage.getItem('cartItemCount')) || 0;
  const cartMessage = document.getElementById('cartMessage'); // Assurez-vous d'avoir cet élément dans votre HTML

  // Vérifier si le panier est vide en se basant sur le nombre d'articles récupérés
  if (cartItemCount === 0) {
    cartMessage.innerHTML = '<div class="alert alert-warning">Votre panier est vide. Veuillez ajouter des produits avant de continuer.</div>';
  } else {
    cartMessage.innerHTML = '<div class="alert alert-info">Votre panier contient ' + cartItemCount + ' article(s). Veuillez choisir une option de livraison.</div>';
  }

  setTimeout(() => {
    cartMessage.innerHTML = ''; // Effacer le message après 3 secondes
  }, 3000);
});

document.getElementById('validateOrder').addEventListener('click', function () {
  const deliveryOption = document.getElementById('deliveryOptions').value;
  let deliveryCost = 0; // Initialiser les frais de livraison à 0
  const fullName = document.getElementById('fullName').value.trim();
  const deliveryAddress = document.getElementById('deliveryAddress').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const orderComments = document.getElementById('orderComments').value.trim(); // Facultatif, pas besoin de validation stricte
  const validationMessage = document.getElementById('validationMessage');

  // Initialiser le message de validation à vide
  validationMessage.innerHTML = '';

  // Vérifier la validité des informations saisies
  if (!fullName) {
    validationMessage.innerHTML += '<div class="alert alert-danger mt-2">Veuillez saisir un nom complet.</div>';
  }
  if (!deliveryAddress) {
    validationMessage.innerHTML += '<div class="alert alert-danger mt-2">Veuillez saisir une adresse de livraison valide.</div>';
  }
  if (!phoneNumber.match(/^\+?(\d.*){3,}$/)) { // Une expression régulière simple pour valider le numéro de téléphone
    validationMessage.innerHTML += '<div class="alert alert-danger mt-2">Veuillez saisir un numéro de téléphone valide.</div>';
  }
  // Calculer les frais de livraison en fonction de l'option choisie
  switch (deliveryOption) {
    case 'standard':
      deliveryCost = 5; // Frais de livraison standard
      break;
    case 'express':
      deliveryCost = 10; // Frais de livraison express
      break;
    case 'pickup':
      deliveryCost = 0; // Pas de frais de livraison pour le retrait en magasin
      break;
    default:
      deliveryCost = 0; // Par défaut, aucun frais si l'option n'est pas reconnue
  }

  // Vérifier si l'adresse de livraison est saisie
  if (deliveryAddress === '') {
    validationMessage.innerHTML = '<div class="alert alert-danger">Veuillez saisir une adresse de livraison valide.</div>';
  } else {
    if (fullName && deliveryAddress && phoneNumber.match(/^\+?(\d.*){3,}$/)) {
      const orderSummary = document.getElementById('orderSummary');
      orderSummary.style.display = 'block';
      orderSummary.innerHTML = `<div class="alert alert-success">Commande validée avec succès. Option de livraison : ${deliveryOption}, frais de livraison : ${deliveryCost}€. Adresse de livraison : ${deliveryAddress}. Un numéro de commande vous sera envoyé.</div>`;

      // Vider le panier en réinitialisant le compteur d'articles à zéro
      localStorage.setItem('cartItemCount', '0'); // Mettre à jour le stockage local
      updateCartCount(); // Mettre à jour l'affichage du compteur d'articles dans le panier

      // Optionnellement, afficher un message ou rediriger l'utilisateur
      setTimeout(() => {
        orderSummary.innerHTML += '<div class="alert alert-info">Redirection vers la page d\'accueil...</div>';
        // window.location.href = 'homepage.html'; // Rediriger l'utilisateur vers la page d'accueil (modifiez selon votre besoin)
      }, 3000);
    }
  }

  setTimeout(() => {
    validationMessage.innerHTML = ''; // Effacer le message après 3 secondes
  }, 3000);
});
