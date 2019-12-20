---
id: d-2-error-codes
title: Error Codes
sidebar_label: Error Codes
---

Le cas échéant, des codes erreurs sont renvoyées lors de certaines actions et notamment :

- lors de la création d'un dossier
- lors d'une recherche de dossier
- lors de la mise à jour d'un dossier

Ces erreurs ont une nomenclature (code et description) qu'il faut prendre en compte pour les interpréter.

Codes          | Erreurs de recherche
---------------|------------------------------------------
E001           | Paramètre manquant
E002           | Paramètre inconnu
E003           | Paramètre vide
E010           | Format incorrect
E011           | Taille maximale dépassée
E021           | Date d'expiration dans le passé
E022           | Date dans le futur
E030           | Domaine de l’e-mail invalide

Codes          | Erreurs lors de la création d'un dossier
---------------|------------------------------------------
E101           | Erreur lors de la qualification de l'établissement
E102           | L'établissement n'existe pas.
E103           | L'établissement est fermé.
E112           | Le code fournisseur (thirdpartyCode) déjà utilisé pour un autre fournisseur.
E113           | Compte donneur d'ordres non actif

Codes          | Erreurs lors de la mise à jour d'un dossier
---------------|---------------------------------------------
E201           | Le dossier est désactivé
E202           | La référence du dossier existe déjà pour ce couple donneur d'ordres / Fournisseur
E301           | Le document (requirement) est désactivé
E302           | Le document (requirement) n'est pas autorisé
