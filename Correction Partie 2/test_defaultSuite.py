# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestDefaultSuite():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_paniervidevrification(self):
    self.driver.get("http://localhost/Projet-testeur-logciel-TP/produits.html")
    self.driver.set_window_size(1920, 732)
    self.driver.find_element(By.LINK_TEXT, "Mon panier").click()
    self.driver.find_element(By.ID, "checkCart").click()
    assert self.driver.find_element(By.CSS_SELECTOR, ".alert").text == "Votre panier est vide. Veuillez ajouter des produits avant de continuer."
  
  def test_commandevalideavecsuccs(self):
    self.driver.get("http://localhost/Projet-testeur-logciel-TP/produits.html")
    self.driver.set_window_size(1920, 732)
    self.driver.find_element(By.CSS_SELECTOR, ".card:nth-child(1) .btn").click()
    self.driver.find_element(By.LINK_TEXT, "Mon panier").click()
    self.driver.find_element(By.ID, "fullName").click()
    self.driver.find_element(By.ID, "fullName").send_keys("Deprez")
    self.driver.find_element(By.ID, "deliveryAddress").click()
    self.driver.find_element(By.ID, "deliveryAddress").send_keys("64 lyon 38")
    self.driver.find_element(By.ID, "phoneNumber").click()
    self.driver.find_element(By.ID, "phoneNumber").send_keys("0661682170")
    self.driver.find_element(By.ID, "orderComments").click()
    self.driver.find_element(By.ID, "orderComments").send_keys("Commentaire de test")
    self.driver.find_element(By.ID, "validateOrder").click()
    self.driver.find_element(By.CSS_SELECTOR, ".alert").click()
  
  def test_paniercontientdesarticles(self):
    self.driver.get("http://localhost/Projet-testeur-logciel-TP/produits.html")
    self.driver.set_window_size(1920, 732)
    self.driver.find_element(By.CSS_SELECTOR, ".card:nth-child(1) .btn").click()
    self.driver.find_element(By.LINK_TEXT, "Mon panier").click()
    self.driver.find_element(By.ID, "checkCart").click()
    assert self.driver.find_element(By.CSS_SELECTOR, ".alert").text == "Votre panier contient 1 article(s). Veuillez choisir une option de livraison."
  
  def test_produitajoutaupanieravecsuccs(self):
    self.driver.get("http://localhost/Projet-testeur-logciel-TP/produits.html")
    self.driver.set_window_size(1920, 732)
    self.driver.find_element(By.CSS_SELECTOR, ".card:nth-child(1) .btn").click()
    self.driver.find_element(By.ID, "cartStatus").click()
  
  def test_validationcommandeavecadressemanquante(self):
    self.driver.get("http://localhost/Projet-testeur-logciel-TP/produits.html")
    self.driver.set_window_size(1920, 732)
    self.driver.find_element(By.CSS_SELECTOR, ".card:nth-child(1) .btn").click()
    self.driver.find_element(By.LINK_TEXT, "Mon panier").click()
    self.driver.find_element(By.ID, "fullName").click()
    self.driver.find_element(By.ID, "fullName").send_keys("deprez")
    self.driver.find_element(By.ID, "phoneNumber").click()
    self.driver.find_element(By.ID, "phoneNumber").send_keys("0661682170")
    self.driver.find_element(By.ID, "orderComments").click()
    self.driver.find_element(By.ID, "orderComments").send_keys("test")
    self.driver.find_element(By.ID, "validateOrder").click()
    assert self.driver.find_element(By.CSS_SELECTOR, ".alert").text == "Veuillez saisir une adresse de livraison valide."
  
  def test_validationcommandeavecnommanquant(self):
    self.driver.get("http://localhost/Projet-testeur-logciel-TP/produits.html")
    self.driver.set_window_size(1920, 732)
    self.driver.find_element(By.CSS_SELECTOR, ".card:nth-child(1) .btn").click()
    self.driver.find_element(By.LINK_TEXT, "Mon panier").click()
    self.driver.find_element(By.ID, "deliveryAddress").click()
    self.driver.find_element(By.ID, "deliveryAddress").send_keys("lyon 69000")
    self.driver.find_element(By.ID, "phoneNumber").click()
    self.driver.find_element(By.ID, "phoneNumber").send_keys("0661682170")
    self.driver.find_element(By.ID, "orderComments").click()
    self.driver.find_element(By.ID, "orderComments").send_keys("test")
    self.driver.find_element(By.ID, "validateOrder").click()
    assert self.driver.find_element(By.CSS_SELECTOR, ".alert").text == "Veuillez saisir un nom complet."
  
