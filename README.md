# Projet Testeur Logiciel - TP

## Exercice 1: Fonctionnalités de Connexion et d'Inscription
![2024-02-15_17h25_45](https://github.com/tomDeprez/Projet-testeur-logciel-TP/assets/50340861/2d32048c-4ad7-41cb-871b-7f1bb775543e)

### Début
L'utilisateur arrive sur la page d'accueil et a le choix entre "Se connecter" et "S'inscrire".

### Choix de l'utilisateur
L'utilisateur choisit soit de se connecter soit de s'inscrire.

#### Si l'utilisateur choisit de se connecter:
- Demander l'adresse email et le mot de passe.
- Vérifier si les informations sont valides.
  - Si les informations sont valides, rediriger vers la page d'accueil utilisateur.
  - Sinon, afficher un message d'erreur et permettre une nouvelle tentative.

#### Si l'utilisateur choisit de s'inscrire:
- Demander les informations nécessaires (nom, email, mot de passe, confirmation du mot de passe, etc.).
- Vérifier la validité des informations (format de l'email, force du mot de passe, correspondance des mots de passe).
  - Si les informations sont valides, créer le compte et rediriger vers la page d'accueil utilisateur.
  - Sinon, afficher un message d'erreur et demander de corriger les informations.

### Fin
L'utilisateur est soit connecté et redirigé vers sa page d'accueil, soit en train de corriger ses informations d'inscription.

## Exercice 2: Fonctionnalité de Gestion de Commandes avec Validation et Confirmation
![2024-02-15_17h28_39](https://github.com/tomDeprez/Projet-testeur-logciel-TP/assets/50340861/54f32213-78f2-4c33-b9be-b4c3973a01dc)
![2024-02-15_17h28_32](https://github.com/tomDeprez/Projet-testeur-logciel-TP/assets/50340861/598e1d83-26a2-4fd0-aa23-258a3e616b63)

### Contexte
Vous travaillez sur un système e-commerce qui permet aux utilisateurs de passer des commandes pour différents produits. La fonctionnalité de gestion de commandes inclut la sélection de produits, la validation du panier, le choix des options de livraison, et la confirmation de la commande avec un résumé des coûts.

### Fonctionnalité: Gestion de Commandes

#### Début
L'utilisateur navigue sur le site et ajoute des produits à son panier.

#### Vérification du Panier
- L'utilisateur choisit de vérifier son panier pour procéder à la commande.
- Le système vérifie si le panier n'est pas vide.
  - Si le panier est vide, afficher un message indiquant que le panier est vide et inviter l'utilisateur à continuer ses achats.
  - Si le panier contient des articles, continuer vers les options de livraison.

#### Choix des Options de Livraison
- L'utilisateur sélectionne une option de livraison parmi celles disponibles (standard, express, retrait en magasin).
- Le système calcule les frais de livraison en fonction de l'option choisie.

#### Validation de la Commande
- L'utilisateur fournit les informations nécessaires pour la livraison (adresse, contact).
- Le système vérifie la validité des informations de livraison.
  - Si les informations sont invalides, demander à l'utilisateur de les corriger.
  - Si les informations sont valides, procéder à la confirmation de la commande.

#### Confirmation de la Commande
- Le système affiche un résumé de la commande, incluant les articles, le coût total, les frais de livraison, et l'adresse de livraison.
- L'utilisateur confirme la commande.
- Le système enregistre la commande et affiche un message de confirmation avec un numéro de commande.

#### Fin
La commande est confirmée, et l'utilisateur est redirigé vers une page de confirmation.
