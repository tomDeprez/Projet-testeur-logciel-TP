// Charger le nombre d'articles dans le panier à partir du stockage local ou initialiser à 0
let cartItemCount = parseInt(localStorage.getItem('cartItemCount')) || 0;
updateCartCount(); // Mettre à jour l'affichage au chargement de la page

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    // Incrémenter le nombre d'articles dans le panier et sauvegarder dans le stockage local
    cartItemCount++;
    localStorage.setItem('cartItemCount', cartItemCount.toString());
    updateCartCount();

    // Afficher un message de succès
    const cartStatus = document.getElementById('cartStatus');
    cartStatus.style.display = 'block';
    cartStatus.textContent = 'Produit ajouté au panier avec succès!';

    setTimeout(() => {
      cartStatus.style.display = 'none';
    }, 3000); // Le message disparaît après 3 secondes
  });
});

// Fonction pour mettre à jour l'affichage du compteur d'articles dans le panier
function updateCartCount() {
  const cartCountElement = document.getElementById('cartCount');
  cartCountElement.textContent = cartItemCount;
}
