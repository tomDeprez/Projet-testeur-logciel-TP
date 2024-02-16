describe('Template spec', () => {
  it('passes', () => {
    // Visiter la page web
    cy.visit('http://localhost/Projet-testeur-logciel-TP/');

    // Définir la taille de la fenêtre du navigateur
    cy.viewport(1920, 732);

    // Cliquer sur le champ de l'email, entrer l'email, entrer le mot de passe et cliquer sur le bouton de connexion
    cy.get('#loginEmail').click().type('tom@test.fr');
    cy.get('#loginPassword').type('123456');
    cy.get('.btn-primary').click();

    // Vérifier le message d'erreur après la tentative de connexion
    cy.get('#loginError').should('have.text', 'Informations de connexion invalides.');
  });
});
describe('Template spec', () => {
  it('passes', () => {
    // Visiter la page web
    cy.visit('http://localhost/Projet-testeur-logciel-TP/');

    // Définir la taille de la fenêtre du navigateur
    cy.viewport(1920, 732);

    // Cliquer sur le champ de l'email, entrer l'email, entrer le mot de passe et cliquer sur le bouton de connexion
    cy.get('#loginEmail').click().type('it@example.com');
    cy.get('#loginPassword').type('123456');
    cy.get('.btn-primary').click();

    // Vérifier le message de succès après la connexion
    cy.get('#loginSuccess').should('have.text', 'Connexion réussie. Redirection vers la page d\'accueil.');
  });
});

describe('Inscription KO spec', () => {
  it('fails due to password mismatch', () => {
    cy.visit('http://localhost/Projet-testeur-logciel-TP/');
    cy.viewport(1920, 732);

    cy.get('#registerNom').click().type('deprez');
    cy.get('#registerEmail').click().type('tomdeprez@test.fr');
    cy.get('#registerPassword').click().type('123456');
    cy.get('#registerPasswordConfirm').click().type('123456789');
    cy.get('.btn-success').click();

    cy.get('#registerError').should('have.text', 'Les mots de passe ne correspondent pas.');
  });
});
describe('Inscription OK spec', () => {
  it('succeeds with matching passwords', () => {
    cy.visit('http://localhost/Projet-testeur-logciel-TP/');
    cy.viewport(1920, 732);

    cy.get('#registerNom').click().type('deprez');
    cy.get('#registerEmail').click().type('tomdeprez@test.fr');
    cy.get('#registerPassword').click().type('123456');
    cy.get('#registerPasswordConfirm').click().type('123456');
    cy.get('.btn-success').click();

    // Assuming there's an action to be performed on the #registerSuccess element, like verifying its existence or clicking it if it's a button.
    cy.get('#registerSuccess').should('exist');
  });
});
