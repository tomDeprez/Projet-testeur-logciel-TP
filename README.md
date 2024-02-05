# Projet-testeur-logciel-TP
﻿#﻿# Exercice 1 : Fonctionnalité : Connexion et Inscription

Début : L'utilisateur arrive sur la page d'accueil et a le choix entre "Se connecter" et "S'inscrire".

Choix de l'utilisateur : L'utilisateur choisit soit de se connecter soit de s'inscrire.

•	Si l'utilisateur choisit de se connecter :
o	Demander l'adresse email et le mot de passe.
o	Vérifier si les informations sont valides.
	Si les informations sont valides, rediriger vers la page d'accueil utilisateur.
	Sinon, afficher un message d'erreur et permettre une nouvelle tentative.
•	Si l'utilisateur choisit de s'inscrire :
o	Demander les informations nécessaires (nom, email, mot de passe, confirmation du mot de passe, etc.).
o	Vérifier la validité des informations (format de l'email, force du mot de passe, correspondance des mots de passe).
	Si les informations sont valides, créer le compte et rediriger vers la page d'accueil utilisateur.
	Sinon, afficher un message d'erreur et demander de corriger les informations.
Fin : L'utilisateur est soit connecté et redirigé vers sa page d'accueil, soit en train de corriger ses informations d'inscription.









Exercice 2 : Fonctionnalité de Gestion de Commandes avec Validation et Confirmation
Contexte :
Vous travaillez sur un système e-commerce qui permet aux utilisateurs de passer des commandes pour différents produits. La fonctionnalité de gestion de commandes inclut la sélection de produits, la validation du panier, le choix des options de livraison, et la confirmation de la commande avec un résumé des coûts.

Fonctionnalité : Gestion de Commandes

Début : L'utilisateur navigue sur le site et ajoute des produits à son panier.
Vérification du Panier :
•	L'utilisateur choisit de vérifier son panier pour procéder à la commande.
•	Le système vérifie si le panier n'est pas vide.
o	Si le panier est vide, afficher un message indiquant que le panier est vide et inviter l'utilisateur à continuer ses achats.
o	Si le panier contient des articles, continuer vers les options de livraison.
Choix des Options de Livraison :
•	L'utilisateur sélectionne une option de livraison parmi celles disponibles (standard, express, retrait en magasin).
•	Le système calcule les frais de livraison en fonction de l'option choisie.
Validation de la Commande :
•	L'utilisateur fournit les informations nécessaires pour la livraison (adresse, contact).
•	Le système vérifie la validité des informations de livraison (vide).
o	Si les informations sont invalides, demander à l'utilisateur de les corriger.
o	Si les informations sont valides, procéder à la confirmation de la commande.
Confirmation de la Commande :
•	Le système affiche un résumé de la commande, incluant les articles, le coût total, les frais de livraison, et l'adresse de livraison.
•	L'utilisateur confirme la commande.
•	Le système enregistre la commande et affiche un message de confirmation avec un numéro de commande.
Fin : La commande est confirmée, et l'utilisateur est redirigé vers une page de confirmation.

