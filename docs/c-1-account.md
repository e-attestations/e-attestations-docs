---
id: c-1-account
title: Account
sidebar_label: Account
---

Le compte eAttestations donneur d'ordres et souscripteur au service.

> Exemple de contenu de '/account'

```json
{
   "content": [
       {
           "id": 119631,
           "creation": "2015-04-02T10:56:07.736",
           "account": "CPTDO2E2FFC774EDD6637F",
           "name": "Compte Test",
           "company": "Compte Test",
           "maxDossiers": 10,
           "subscriptionDate": "2019-04-29T13:20:02.102973",
           "subscriptionStatus": "ACTIVE",
           "subscriptions": [
               {
                   "accountId": 119631,
                   "key": "APIEDGE",
                   "endSubscriptionDate": null,
                   "startSubscriptionDate": "2019-04-29T13:20:02.102973",
                   "status": "ACTIVE"
               }
           ]
       }
   ]
}
```

Le compte eAttestations donneur d'ordres et souscripteur au service.

Chaque compte dispose d'un identifiant de **compte unique** avec un identifiant.

Par construction, toutes les requêtes doivent obligatoirement inclure l'identifiant du client dans l'URL d'appel à l'exception du point terminateur **/account** qui vous donnes des informations sur votre l'identifiant du compte.

Les urls sont ainsi toutes prefixées par **/account/{account_id}/****

<aside class="notice">
Vous pouvez mémoriser dans votre jeux de configuration votre identifiant de compte ou choisir de le récupérer dynamiquement.
Cette dernière solution étant la plus souple.
</aside>

L'identifiant de compte (de type string) est renvoyé dans le **payload** du token JWT, comme illustré ci-dessous:

De façon complémentaire vous pouvez récupérer votre identifiant de compte via l'url **/account** (sans aucun paramètre).

Les données du TOKEN seront utilisées pour restituer et vérifier votre compte et la souscription au service.

Des informations complémentaires sur votre souscription au service sont aussi restituées.
