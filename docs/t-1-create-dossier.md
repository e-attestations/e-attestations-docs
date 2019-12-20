---
id: t-1-create-dossier
title: Create a dossier
sidebar_label: Create a dossier
---

> Création d'un dossier

```shell
curl --request POST \
  --url https://rs.dev-e-attestations.com/api/v1/account/119631/dossiers \
  --header 'Authorization: Bearer {{token}}' \
  --header 'Content-Type: application/json' \
  --data '{\n  "companyIdType": "CIT001",\n  "companyIdValue": "50382936800045",\n  "thirdpartyCode": "",\n  "dossierReference": "DOSSIER_REST_9",\n  "description": "Dossier #5 de test importé depuis l'\''API REST",\n  "purchasingCategory": "",\n  "expirationDate": "2020-05-31",\n  "requiredDocuments": [ "JUSTIF_IMM" ],\n  "thirdpartyEmail": ["v.dagoury@e-attestations.com"],\n  "userInCharge": [\n    "v.dagoury@e-attestations.com"\n  ]\n}'
```

La création de dossier de suivi de la conformité des tiers est au coeur du processus de recrutement d'un tiers pour lequel vous souhaitez suivre la conformité et la principale étape permettant de démarrer le processus de suivi.

<aside class="success">
La conformité à exiger dépend de votre besoin de la nature de votre tiers, du marché, de paramètres exogènes...
<strong>Votre gestionnaire de compte eAttestations est là pour vous conseiller.</strong>
</aside>

Elle est aussi la phase de recrutement de votre tiers qui sera alors informé par email qu'un dossier de suivi est encours.

Un workflow continu démarre alors pour le tiers qui devra alors déposer les preuves exigées par votre dossier.

Lors de la création d'un dossier le workflow déclenché est asynchrone et se décrit ainsi :

- la récupération automatique des données du tiers (y compris s'il n'est pas déjà dans la base eAttestations)
- son invitation grâce à l'email de contact
- **éventuellement** l'envoi d'emails de demande pour les documents ou preuves demandés et non déjà présents
- la production d'un indicateur de complétude ('I001') représentant la bonne santé du suivi au regard de l'exigence du dossier de suivi

Mais aussi :

- des rappels réguliers par email envoyés aux tiers
- la mise à jour des données régulièrement et sur événement
- la production d'indicateurs complexes
- du reporting
- des diagnositiques
- du conseil et l'expertise e-Attestations

Le endpoint **POST /account/{accountId}/dossiers** permet de créer un dossier de suivi continu de la conformité pour un tiers (thirdparty).

**Vous trouverez toutes les informations complémentaire sur ce endpoint dans la section <a href="#importer-un-dossier">Importer un dossier</a>.**

Le traitement pouvant durer plusieurs minutes la réponse est **asynchrone**, comme illustré dans le schéma ci-dessous.

Lors de la création un identifiant de suivi du traitement de l'import (processId) est renvoyé.
Il vous faudra l'utiliser pour connaître le résultat de l'import de façon asynchrone.

Le endpoint **GET /account/{accountId}/dossier/process/{processId}** permet de suivre le résultat de l'import grâce à l'identifiant du process d'import renvoyé lors de l'appel "Création d'un dossier" (POST /account/{accountId}/dossiers).



> Il est important de bien vérifier les paramètres d'appel et de bien prendre en compte les codes d'erreurs et leur signification.


export const Diagram = () => {
  return (
    <div className="mermaid">
    graph TB
      A((Start))
      A --> B(Call Import dossier endpoint, returns processId)
      B --processId--> C(Call Get import result endpoint for processId)
      C --> D{Status}
      D --complete=true AND success=true--> E
      D --complete=true ANDsuccess=false--> R
      D --complete=false--> C
      E((End))
      R(Error Handling)
    </div>
    
  )
};
