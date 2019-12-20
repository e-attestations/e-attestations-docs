---
id: d-1-types
title: Nomenclature
sidebar_label: Nomenclature
---

## Type d'identifiant

Un établissement ou une entreprise (au sens personne morale) est indentifiée dans le système eAttestations à l'aide d'un code identifiant national (SIRET, SIREN pour la France) ou d'un numéro internationnal (ex. l'identifiant TVA).

l'API eAttestations propose deux types d'identifiants :

Type                         | Description
-----------------------------|---------------------------------------
CIT001                       | SIRET : identifiant utilisé en France pour qualifier les établissements. Nombre de 14 chiffres vérifiant l'algorithme de Luhn [Wikipedia](https://fr.wikipedia.org/wiki/Formule_de_Luhn)
CIT002                       | Numéro TVA : identifiant utilisé par la CEE pour les entreprises soumises à l'impôt sur les sociétés. Plus d'informations sur [Wikipedia](https://en.wikipedia.org/wiki/VAT_identification_number)

Des types d'identifiants nouveaux pourront être implémenté au fil des évolutions de l'API.

## Indicateur de complétude

L'indicateur de complétude eAttestations permet de renseigner de façon simple que le tiers a couvert entièrement les besoins ('requirements') au titre de la conformité exigée par la compliance client.

Exemple : un dossier de surveillance d'un tiers est jugé complet pour l'indicateur "obligation de vigilance", si tous les documents relatifs à l'obligation de vigilance sont présents et validés.

Code indicateur| Description
---------------|------------------------
I001           | Obligation de vigilance
