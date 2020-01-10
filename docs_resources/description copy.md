---
id: description
title: Description
sidebar_label: Description
---

<div class="banner">

```textmate
╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓.     ║
║  e-Attestations.com Copyright (c) - RESTRICTED                                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓.      ║
║  All right reserved/Tous droits réservés                                                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓,       ║
║                  _   _            _        _   _                                        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓,     ▓  ║
║             /\  | | | |          | |      | | (@)                                       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓.     ▓▓  ║
║  ___       /  \ | |_| |_ ___  ___| |_ __ _| |_ _  ___  _ __  ___   ___ ___  _ __ ___    ▓▓▓▓▓▓▓▓▓▓▓▓▓,      ▓▓▓  ║
║ / _ \  __ / /\ \| __| __/ _ \/ __| __/ _` | __| |/ _ \| '_ \/ __| / __/ _ \| '_ ` _ \   ▓▓▓▓▓▓▓▓▓▓▓▓,     .▓▓▓▓  ║
║|  __//__ / ____ \ |_| ||  __/\__ \ || (_| | |_| | (_) | | | \__ \| (_| (_) | | | | | |   .▓▓▓▓▓▓▓▓▓.     ,▓▓▓▓▓  ║
║ \___/   /_/    \_\__|\__\___||___/\__\__,_|\__|_|\___/|_| |_|___(_)___\___/|_| |_| |_|      .▓▓▓▓▓      ,▓▓▓▓▓▓  ║
║                                                                                                .,      .▓▓▓▓▓▓▓  ║
║                                                                                         ▓,           ,▓▓▓▓▓▓▓▓▓  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
:: e-Attestations.com (https://www.e-attestations.com) :: REST API :: ★★★★ 😎
```

</div>

# Documentation

L'API REST/Json e-Attestations est utilisée pour **interfacer** un système d'information '**client**' à la plate-forme d'e-Attestations suivant le protocole HTTP.

[REST](https://en.wikipedia.org/wiki/Representational_state_transfer) (Representational State Transfer) ou RESTful est un style d'architecture permettant de construire des applications (Web, Intranet, Web Service) en exploitant des points terminateurs (des endpoints urls) et référençant des ressources à exploiter suivant les verbes du protocole HTTP (GET, POST, PUT, DELETE etc...).

Notre API contient des URL prévisibles orientées ressources, accepte les corps de requête codés au format [JSON](https://en.wikipedia.org/wiki/JSON), renvoie les réponses codées [JSON](https://en.wikipedia.org/wiki/JSON) et utilise les codes de réponse HTTP standard, l'authentification et les verbes.

Les applications 'clientes' utilisant l'API REST e-Attestations enrichisent le Système d'Information du client avec le catalogue des données et services d'e-Attestations de façon sécurisée et très souple.

L'API peut également être utilisée par les intégrateurs, éditeurs logiciels, des solutions SAAS ou des connecteurs.

<aside className="success">
L'API REST/Json e-Attestations est actuellement en V1.1 et est proposée à l'ensemble des partenaires et clients e-Attestations.
Contactez e-Attestations pour plus d'information à <a href="mailto:contact@e-attestations.com">contact@e-attestations.com</a>
</aside>

## Objectifs de cette documentation

* Donner des éléments de réponses sur la sécurité des environnements mis à disposition
* Expliciter la mise en place et le support de l'API
* Présenter les sources documentaires en ligne.
* Décrire chaque ressources et chaque endpoint, les modèles associés et les erreurs liées
* Proposer des snippets de codes pour faciliter l'intégration de l'API

## Documentations en ligne

Au delà de la présente documentation nous avons apporté un soin tout pariculier a vous offrir le plus de choix posssible concernant la documentation.

La documentation est basée sur le standard Open API v3 (Swagger UI), disponible [ici](https://rs.dev-e-attestations.com/doc/swagger.yml).

&nbsp;| URL (suivant l'environnement)
----|-----------------------------------------------------------------------------------
Documentation HTML | [https://rs.dev-e-attestations.com/redoc.html](https://rs.dev-e-attestations.com/redoc.html)
OpenAPI v3 (yaml)| [https://rs.dev-e-attestations.com/doc/swagger.yml](https://rs.dev-e-attestations.com/doc/swagger.yml)

## Collection Postman

> Exemple d'utilisation de newman

```shell
npx newman run "EA_API_REST.postman_collection.json" \
  --global-var username="<user>" \
  --global-var password="<password>" \
  --global-var server_url="https://rs.dev-e-attestations.com"
```

Pour aller encore plus vite et faciliter l'intégration et l'exploration de notre API nous fournissons <a href="https://raw.githubusercontent.com/e-attestations/ea-api-rest-postman/master/eAttestations-API-REST-multi-version.postman_collection.json">une collection Postman</a> que vous pouvez importer dans postman et tester rapidement.

Vous devrez définir quelques variables (user, password et server_url) pour exploiter cette suite de test.

Vous pouvez aussi explorer chacun des scenarios pour foncionnellement comprendre l'usage possible de l'API.

Vous pouvez télécharger Postman via <a href="https://www.getpostman.com/downloads/">ce lien</a> ou utiliser newman via <a href="https://github.com/postmanlabs/newman">ce lien</a>.

# Mise en place

Pour souscrire à l'un ou l'autre des environnements vous devez tout d'abord en **émettre la demande auprès de votre gestionnaire de compte** e-Attestations habituel.

Nous vous conseillons de bien discuter de la configuration de votre compte concernant les documents de compliance avec votre gestionnaire de compte afin de parfaitement comprendre votre cas d'usage et vous conseiller au mieux.

**Attention** : L'usage de l'API n'est pas multicomptes !

Votre gestionnaire de compte informera l'équipe technique pour la création d'une organisation liée à votre compte et un ou plusieurs contacts techniques (emails) seront alors invités au **Tech'Desk e-Attestations**.

# Le support TechDesk e-Attestations

C'est un système de ticketing et de support **TECHNIQUE** dédié aux API e-Attestations dans lequel vous pouvez poster questions et demandes au experts techniques e-Attestations.

Après avoir reçu votre email d'invitation, créez votre user et mot de passe en toute autonomie pour accéder aux services et documentation de cette plateforme de support.

Visitez la plateforme Tech'Desk : [https://jira-e-attestations.atlassian.net/servicedesk/customer/portals](https://jira-e-attestations.atlassian.net/servicedesk/customer/portals).

Cette plateforme sécurisée vous permet aussi de partager dans votre organisation (avec tous les utilisateurs inscrits au tech'Desk) les tickets de support, les réponses commentaires, extraits de codes, captures d'écrans...

**Rappel** : les identifiant (users et mots de passe) de connexion aux APIs ne sont fournis que dans le Tech'Desk !

<a href="https://jira-e-attestations.atlassian.net/servicedesk/customer/portals" title="Accédez au Tech'Desk" target="_blank">
<img class="imglink" alt="Home page du Tech'Desk e-Attestations" src="/doc/images/TechDesk_Home.png" width="70%"/>
</a>

# Environnements


e-Attestations met à disposition deux environnements :

- **TEST** :
L'ouverture d'un accès de TEST de type API REST connecté à un compte client de TEST vous permettra, de façon pleinement sécurisée, d'accéder à une infrastructure sécurisée, semblable à celle de production mais avec une base de données unique et la garantie que **les emails ne seront jamais expédiés**.

- **PRODUCTION** :
L'ouverture d'un accès de PROD de type API REST connecté à un compte client de PROD vous permet de l'utiliser pour votre compte.

Environnement | URL
--------------|-------
TEST | [https://rs.dev-e-attestations.com/api/v1/](https://rs.dev-e-attestations.com/api/v1/)
PRODUCTION | [https://rs.e-attestations.com/api/v1/](https://rs.e-attestations.com/api/v1/)

<aside className="warning">
L'accès aux environnements est autorisé après demande auprès d'e-Attestations.com.
L'obtention d'un user/mot de passe se fait de façon sécurisée grace exclusivement via le tech'Desk.
Merci d'adresser vos demandes de user et mot de passe via ce biais uniquement (aucune partage de mot de passe par email).
</aside>

<aside className="notice">
Dans l'environnement de TEST les envois d'emails sont inhibés (pas d'invitation des tiers ou d'envoi de rapport) afin d'éviter que vos tests n'interfèrent pas avec votre activité de production.
</aside>

# Format des réponses

> Exemple de réponse

    ```json
    {
      content: [
        {
          "companyIdValue": "1234567890"
        }],
      messages: {
        warning: [
          {
            code: "E001",
            message: "Paramètre manquant"
          }
        ]
      }
    }
    ```

Les réponses sont au format JSON composées des attributs optionnels suivants:

- **content**, contenant le résultat de l'opération, en cas de succès.
- **messages** contenant **d'éventuels messages** d'information, d'avertissement ou d'erreur.
- **page**, le numéro de la page. **Renvoyé en cas de contenu paginé.**
- **size**, taille de la page. **Renvoyé en cas de contenu paginé.**
- **totalElements**, le nombre total d'éléments. **Renvoyé en cas de contenu paginé.**

Pour plus de détails lisez la section <a href="#schemas">Schemas</a> et plus spécifiquement sur le format des <a href="#tocSmessages">Messages</a>.

> Exemple d'erreur HTTP

```json
{
    "timestamp": "2019-02-05T09:06:15.245+0000",
    "status": 404,
    "error": "Not Found",
    "message": "No message available",
    "path": "/api/v1/account/1234567/876543"
}
```

Nous avons développé un contrat d'interface (présenté ci dessus) qui se veut le plus pratique pour le développeur.

Si toute fois le protocole HTTP rencontre un défaut c'est code d'erreur HTTP et un contenu de message qui sera renvoyé.

## Encoding

L'API REST doit être utilisée et consommée en UTF-8.

# Sécurité

## OpenID Connect (OIDC)

L'API REST e-Attestations utilise **[OpenID Connect (OIDC)](https://openid.net/connect/)** pour identifier et authentifier les clients. Toute requête vers l'API doit obligatoirement inclure un Token [ (Json Web Token)](https://jwt.io/) valide.

Ce dernier doit être envoyé dans le header 'Authorization' (cf. l'exemple qui suit).

Si l'header n'est pas renseigner la requête sera considérée comme non authentifiée (HTTP code 401).

Plus d'informations sur OpenID Connect et JWT sur :

* [https://openid.net/connect/](https://openid.net/connect/)
* [https://jwt.io/](https://jwt.io/)


## Authorization

<!-- ReDoc-Inject: <security-definitions> -->


## Obtenir un JSON Web Token

> Obtenir un JWT

```shell
curl -X POST \
  https://auth.dev-e-attestations.com/auth/realms/eat_realm/protocol/openid-connect/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'cache-control: no-cache' \
  -d 'client_id=ea-api-edge' \
  -d 'username=<username>' \
  -d 'password=<password>' \
  -d 'grant_type=password'
```

L'obtention d'un token JWT repose sur l'envoi d'un requête de type POST avec transmission des user, mot de passe et quelques paramètres complémentaires au serveur d'authentification.

Vous devez transmettre une requete au format 'application/x-www-form-urlencoded' et portant les paramètres suivantes (tous obligatoires) :

- **client_id** : 'ea-api-edge', le nom de l'API.
- **grant_type** : 'password', le mode d'authentification.
- **username** : nom de votre utilisateur API
- **password** : mot de passe de votre utilisateur d'API

Le serveur d'authentification renverra un mot JSON dans lequel il faut préserver 'access_token'.



<div class="mermaid">sequenceDiagram
  participant Client
  participant API_Server
  participant Authorizer
  Client->Authorizer: Get Token
  loop get token
      Authorizer->Authorizer: Verify credentials (renew JWT)
  end
  Authorizer-->Client: Retrieve JWT
  Client->API_Server: Request + Authorization Bearer
  Note right of API_Server: Check JWT and subscription
  API_Server-->Client: Response
</div>



Ce token est temporaire et vous devrez en obtenir un nouveau dès qu'il sera périmé.

> Réponse

```json
{
    "access_token":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI0V19kYjFzUmpISTc3SGc0SkRWclVLQXpaQlBnZjlpY2ZDcU5vQUxOZWhNIn0.eyJqdGkiOiI0ZGExNjE1NC04ZjQyLTQyNzQtOTM4Ny0wOGJiODk4MmE3MTMiLCJleHAiOjE1NTQyOTgyNTgsIm5iZiI6MCwiaWF0IjoxNTU0Mjk2NDU4LCJpc3MiOiJodHRwczovL2F1dGguZGV2LWUtYXR0ZXN0YXRpb25zLmNvbS9hdXRoL3JlYWxtcy9lYXRfcmVhbG0iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYzg0OGFiYmItYTIyOC00MmMxLWFkNzAtYjJiMDEwYzhlODUxIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZWEtYXBpLWVkZ2UiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiI5YmEzYWFmNC0zYjU0LTQ5ZTctOTJiMC0xOTkwMGQxNWE5ZWIiLCJhY3IiOqsdqsdsdqsdqsdsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiQURNSU4iLCJVU0VSIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiYWNjb3VudF9pZHMiOiIxMTg0NjYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlZpbmNlbnQgREFHT1VSWSIsInByZWZlcnJlZF91c2VybmFtZSI6InYuZGFnb3VyeUBlLWF0dGVzdGF0aW9ucy5jb20iLCJnaXZlbl9uYW1lIjoiVmluY2VudCIsImZhbWlseV9uYW1lIjoiREFHT1VSWSIsImVtYWlsIjoidi5kYWdvdXJ5QGUtYXR0ZXN0YXRpb25zLmNvbSJ9.c-smWPif1YT9dKicAAJSsNwI-xCtZWV-r6QqYFSvkgHhPsgHc0gDLenMfQBgYPN_0jKW7FBJmse7fgAB4dnrqCOGM33cQ2wfYi37aXlDqz8l_aFamkEslGnKxw9QDOYSMQz52dD34yXQZGl0OxXE01PAquqKUEtnVG0Rz2SAB0qU5tAqsdqsdsd-rKpCYwKb_6-WwH2xN1B9lgLahZexprPvH25OXUcPJ0GSXCASpnSMxR3ziiv9AtX3R48rT4T_LTLlrKblT_cdZS-Z_uGgzP0pxT9yfqxSYn05haRLTL_grBDdt31ZIDnxiMFEg2UdDB1wzlJBOuOEmw",
    "expires_in": 1800,
    "refresh_expires_in": 1800,
    "refresh_token":"eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJiYTcxZWMyOC0wOTVkLTRkOWQtOWQwYi1jYjAyMTJmNjczYjcifQ.eyJqdGkiOiI2YmQ2ZThkYS1kOWNjLTRhNzgtODg1NS1iMzMwZWU0NDg1NjEiLCJleHAiOjE1NTQyOTgyNTgsIm5iZiI6MCwiaWF0IjoxNTU0Mjk2NDUqsdqsdqsdqsdOiJodHRwczovL2F1dGguZGV2LWUtYXR0ZXN0YXRpb25zLmNvbS9hdXRoL3JlYWxtcy9lYXRfcmVhbG0iLCJhdWQiOiJodHRwczovL2F1dGguZGV2LWUtYXR0ZXN0YXRpb25zLmNvbS9hdXRoL3JlYWxtcy9lYXRfcmVhbG0iLCJzdWIiOiJjODQ4YWJiYi1hMjI4LTQyYzEtYWQ3MC1iMmIwMTBjOGU4NTEiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiZWEtYXBpLWVkZ2UiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiI5YmqsdqsdsqsdQ5ZTctOTJiMC0xOTkwMGQxNWE5ZWIiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsIkFETUlOIiwiVVNFUiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCJ9.fpVVA-G-Fj9MDOB5ZneAGVRhkLk26hgCeZ4dqh3rEHs",
    "token_type": "bearer",
    "not-before-policy": 1550670103,
    "session_state": "9ba3aaf4-3b54-49e7-92b0-19900d15a9eb",
    "scope": "profile email"
}
```
## URLs d'authentification

Pour chaque environnement, une URL spécifique vous permet de récupérer le JWT :

- Non PRODUCTION : ```https://auth.dev-e-attestations.com/auth/realms/eat_realm/protocol/openid-connect/token```
- PRODUCTION : ```https://auth.e-attestations.com/auth/realms/eat_realm/protocol/openid-connect/token```


## Utilisation du JSON Web Token

<aside className="warning">
La durée de validité du tocken est de quelques minutes. Vous devez vous assurer de la durée de validité de votre TOKEN grace à la donnée "expires_in" qui vous indique en nombre de secondes avant qu'il n'expire au moment de son obtention (par exemple 1800 secondes correspondant à 30').
</aside>

Le Json Web TOKEN (JWT) est à utiliser dans tous les requetes vers l'API suivantes est la valeur du token étant renvoyé dans la propriété **"access_token"**.

Il doit être placé dans la request, dans un Header sous la forme :

```
Authorization: Bearer TOKEN
```

> Utilisation du JWT

```shell
curl -X GET \
  https://api.e-attestations.com/v4/account/97862/dossiers \
    -H "Authorization: Bearer <JWT_TOKEN>"
```

<aside className="notice">
Vos identifiants sont délivrés à votre demande <strong>UNIQUEMENT</strong> via un ticket envoyé au <a href="#le-support-tech-39-desk-e-Attestations">Tech'Desk</a> et après activation de votre souscription par votre gestionnaire de comptes.
</aside>

# Ressources

## Compte (account)

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

Le compte e-Attestations donneur d'ordres et souscripteur au service.

Chaque compte dispose d'un identifiant de **compte unique** avec un identifiant.

Par construction, toutes les requêtes doivent obligatoirement inclure l'identifiant du client dans l'URL d'appel à l'exception du point terminateur **/account** qui vous donnes des informations sur votre l'identifiant du compte.

Les urls sont ainsi toutes prefixées par **/account/{account_id}/****

<aside className="notice">
Vous pouvez mémoriser dans votre jeux de configuration votre identifiant de compte ou choisir de le récupérer dynamiquement.
Cette dernière solution étant la plus souple.
</aside>

L'identifiant de compte (de type string) est renvoyé dans le **payload** du token JWT, comme illustré ci-dessous:

De façon complémentaire vous pouvez récupérer votre identifiant de compte via l'url **/account** (sans aucun paramètre).

Les données du TOKEN seront utilisées pour restituer et vérifier votre compte et la souscription au service.

Des informations complémentaires sur votre souscription au service sont aussi restituées.

## Tiers (thirdparties)

Le tiers, le fournisseur, le sous-traitant, etc... est en relation avec le compte donneur d'ordres et fait l'objet de l'évaluation continue au titre de sa conformité, suivant la souscription et/ou les option du compte e-Attestations.

Dans le cadre de cette relation, le compte e-Attestations utilisateur de l'API REST/JSON est aussi appelé compte "donneur d'ordres".

> Exemple d'appel GET sur "/api/v1/account/{{account_id}}/thirdparties?siret=50382936800045"

```json
{
    "content": [
        {
            "thirdpartyId": 875,
            "companyIdType": "CIT001",
            "companyIdValue": "50382936800045",
            "thirdpartyCode": "123",
            "siren": "503829368",
            "siret": "50382936800045",
            "tva": "FR69503829368",
            "name": "E-ATTESTATIONS.COM",
            "datecreation": "2010-11-24",
            "legalCategoryLabel": "Société par actions simplifiée",
            "legalCategoryCode": "5710",
            "acronym": null,
            "activityLabel": "Edition de logiciels applicatifs",
            "activityCode": "5829C",
            "ceo": "POIDEVIN Emmanuel",
            "capital": 3642000,
            "capitalCurrency": "EUR",
            "turnover": 2771996.0,
            "turnoverCurrency": "EUR",
            "lastBalanceSheetDate": "2017-12-31",
            "workforce": 13
        }
    ],
    "page": 0,
    "size": 10,
    "totalElements": 1
}
```

## Dossiers (dossiers)

Le dossier est une materialisation de la relation donneur d'ordres / tiers.
Un dossier comporte des demandes (exigences de conformité) formulées par le donneur d'ordres auxquelles correspondent des réponses le plus souvent automatiquement apportée par le plateforme e-Attestations ou par le tiers (fichiers, signatures, autres données ...).

La référence d'un dossier (dossierReference) est une donnée renseignée par le donneur d'ordres lors de la création d'un dossier ou la modification d'un dossier. La référence d'un dossier doit être unique pour un couple tiers/donneur d'ordres. Autrement dit, un tiers ne peut avoir plus d'un dossier portant la même référence par donneur d'ordres.

Cette référence de dossier peut être modifiée à n'importe quel moment sauf s'il le dossier a été archivé.

> Exemple d'interrogation au siren GET "/api/v1/account/{{account_id}}/dossiers?siren=503829368"

```json
{
    "content": [
        {
            "dossierId": 804127,
            "accountId": 119631,
            "siren": "503829368",
            "siret": "50382936800045",
            "tva": "FR69503829368",
            "thirdpartyId": 875,
            "companyIdType": "CIT001",
            "companyIdValue": "50382936800045",
            "thirdpartyCode": "123",
            "companyCountryCode": "FR",
            "monitored": true,
            "dossierReference": "TEST",
            "description": "description_804127",
            "purchasingCategory": "",
            "startingDate": null,
            "expirationDate": null,
            "stoppingDate": null,
            "stoppingReason": "NA",
            "state": false,
            "stateLastChangeDate": "2019-01-08T15:31:55.521",
            "indicators": [
                {
                    "indicatorCode": "I001",
                    "state": true,
                    "lastChangeDate": "2018-07-16T11:04:59.806"
                }
            ],
            "documents": [
                {
                    "documentId": 511394021,
                    "documentCode": "I2",
                    "name": "I2",
                    "requestDate": "2019-01-08T15:31:55.486",
                    "present": false,
                    "listFileInformation": []
                }
            ]
        }
    ],
    "page": 0,
    "size": 10,
    "totalElements": 1
}
```

## Exigences (requirements)

L'exigence est un ensemble de demande d'un domaine du donneur d'ordres (légale, compliance, métier, etc...). Une exigence fait l'objet d'une **demande** et en attente d'une **réponse** qu'elle soit apportée par e-Attestations et pour le tiers lui même tels qu'une donnée spécifique, un ou plusieurs documents et leur(s) fichier(s) lié(s), une signature ou tout autre élément demandé constituant un preuve de conformité dans le cadre du suivi.

> Exemple d'interrogation des exigences d'un dossier GET "/api/v1/account/{{account_id}}/dossiers/{{dossierId}}/requirements"

```json
{
    "content": [
        {
            "documentId": 1,
            "accountId": 119631,
            "code": "ATT_VIGI",
            "name": "Attestationdevigilance6mois",
            "dossierId": 836261
        },
        {
            "documentId": 2,
            "accountId": 119631,
            "code": "JUSTIF_IMM",
            "name": "Justificatifdimmatriculation",
            "dossierId": 836261
        }
    ]
}
```

## Documents (documents)

Les documents sont les éléments constituant la demande d'exigence de conformité, définis en type de document (généralement un type de document par exigence) et pour lequel une réponse est apportée par e-Attestations ou le tiers lui même.

Un document peut être une signature, une donnée, un ou plusieurs fichiers, un ensemble de données issues d'un formulaire à remplir par le déclarant.

Un document a une validité et donc une péremption que la plateforme e-Attestations surveille en continu.

> Exemple d'obtention des documents d'un dossier GET "/api/v1/account/{{account_id}}/dossiers/{{dossierId}}/documents"

```json
{
    "content": [
        {
            "documentId": 510893525,
            "documentCode": "JUSTIF_IMM",
            "name": "JUSTIF_IMM",
            "requestDate": "2018-09-19T10:02:46.435",
            "present": true,
            "listFileInformation": [
                {
                    "fileId": 4575539,
                    "uploadDate": "2019-03-19T00:22:22.31",
                    "fileUUID": "8d76e532ec39daa965da354e72a9cfa35c43c2ab",
                    "fileCreation": "2019-03-19T00:22:22.299",
                    "fileSize": 75422,
                    "expirationDate": "2019-09-19T23:59:59.999"
                }
            ]
        },
        {
            "documentId": 510893524,
            "documentCode": "ATT_VIGI",
            "name": "ATT_VIGI",
            "requestDate": "2018-09-19T10:02:46.382",
            "present": true,
            "listFileInformation": [
                {
                    "fileId": 4224544,
                    "uploadDate": "2018-10-30T08:57:17.765",
                    "fileUUID": "22945cf9490f46396fb2f6e6bf716d383836cb9f",
                    "fileCreation": "2018-10-30T08:57:17.759",
                    "fileSize": 73927,
                    "expirationDate": "2019-03-31T23:59:59.999"
                }
            ]
        }
    ]
}
```

## Fichiers (files)

Les fichiers attachés aux documents d'exigence de conformité sont majoritairement des PDF.

> Exemple d'obtention des fichiers d'un document d'un dossier GET "/api/v1/account/{{account_id}}/dossiers/{{dossierId}}/documents/{{documentId}}/files"

```json
{
    "content": [
        {
            "fileId": 4575539,
            "uploadDate": "2019-03-19T00:22:22.31",
            "fileUUID": "8d76e532ec39daa965da354e72a9cfa35c43c2ab",
            "fileCreation": "2019-03-19T00:22:22.299",
            "fileSize": 75422,
            "expirationDate": "2019-09-19T23:59:59.999"
        }
    ]
}
```

# Comment créer un dossier de suivi ?

> Création d'un dossier

```
curl --request POST \
  --url https://rs.dev-e-attestations.com/api/v1/account/119631/dossiers \
  --header 'Authorization: Bearer {{token}}' \
  --header 'Content-Type: application/json' \
  --data '{\n  "companyIdType": "CIT001",\n  "companyIdValue": "50382936800045",\n  "thirdpartyCode": "",\n  "dossierReference": "DOSSIER_REST_9",\n  "description": "Dossier #5 de test importé depuis l'\''API REST",\n  "purchasingCategory": "",\n  "expirationDate": "2020-05-31",\n  "requiredDocuments": [ "JUSTIF_IMM" ],\n  "thirdpartyEmail": ["v.dagoury@e-attestations.com"],\n  "userInCharge": [\n    "v.dagoury@e-attestations.com"\n  ]\n}'
```

La création de dossier de suivi de la conformité des tiers est au coeur du processus de recrutement d'un tiers pour lequel vous souhaitez suivre la conformité et la principale étape permettant de démarrer le processus de suivi.

<aside className="success">
La conformité à exiger dépend de votre besoin de la nature de votre tiers, du marché, de paramètres exogènes...
<strong>Votre gestionnaire de compte e-Attestations est là pour vous conseiller.</strong>
</aside>

Elle est aussi la phase de recrutement de votre tiers qui sera alors informé par email qu'un dossier de suivi est encours.

Un workflow continu démarre alors pour le tiers qui devra alors déposer les preuves exigées par votre dossier.

Lors de la création d'un dossier le workflow déclenché est asynchrone et se décrit ainsi :

- la récupération automatique des données du tiers (y compris s'il n'est pas déjà dans la base e-Attestations)
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

<p class="mermaid">
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
</p>

> Il est important de bien vérifier les paramètres d'appel et de bien prendre en compte les codes d'erreurs et leur signification.

# Codes et nomenclatures

## Identifiant de compagnie

Un établissement ou une entreprise (au sens personne morale) est indentifiée dans le système e-Attestations à l'aide d'un code identifiant national (SIRET, SIREN pour la France) ou d'un numéro internationnal (ex. l'identifiant TVA).

l'API e-Attestations propose deux types d'identifiants :

Type                         | Description
-----------------------------|---------------------------------------
CIT001                       | SIRET : identifiant utilisé en France pour qualifier les établissements. Nombre de 14 chiffres vérifiant l'algorithme de Luhn [Wikipedia](https://fr.wikipedia.org/wiki/Formule_de_Luhn)
CIT002                       | Numéro TVA : identifiant utilisé par la CEE pour les entreprises soumises à l'impôt sur les sociétés. Plus d'informations sur [Wikipedia](https://en.wikipedia.org/wiki/VAT_identification_number)

Des types d'identifiants nouveaux pourront être implémenté au fil des évolutions de l'API.

## Indicateur de complétude

L'indicateur de complétude e-Attestations permet de renseigner de façon simple que le tiers a couvert entièrement les besoins ('requirements') au titre de la conformité exigée par la compliance client.

Exemple : un dossier de surveillance d'un tiers est jugé complet pour l'indicateur "obligation de vigilance", si tous les documents relatifs à l'obligation de vigilance sont présents et validés.

Code indicateur| Description
---------------|------------------------
I001           | Obligation de vigilance

## Codes d'erreur

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
