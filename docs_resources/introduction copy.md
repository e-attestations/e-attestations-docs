---
id: introduction
title: Introduction
sidebar_label: Introduction
---

# API REST/Json e-Attestations (PREVIEW)

L'API REST/Json est utilisée pour **interfacer** un système d'information '**client**' à la plate-forme d'e-Attestations suivant le protocole HTTP.

REST (Representational State Transfer) ou RESTful est un style d'architecture permettant de construire des applications (Web, Intranet, Web Service) en exploitant des points terminateurs (des endpoints urls) et référençant des ressources à exploiter suivant les verbes du protocole HTTP (GET, POST, PUT, DELETE etc...).

Les applications 'clientes' utilisant l'API REST e-Attestations enrichisent le Système d'Information du client avec le catalogue des données et services d'e-Attestations de façon sécurisée et très souple.

L'API peut également être utilisée par les intégrateurs, éditeurs logiciels, des solutions SAAS ou des connecteurs.

l'API REST/Json e-Attestations est actuellement en **PREVIEW** et n'est proposée qu'aux partenaires et clients du programme d'adoption de cette nouvelle offre de service.
Contactez e-Attestations pour plus d'information à <a href="mailto:contact@e-attestations.com">contact@e-attestations.com</a>

## Objectifs de cette documentation

 * Donner des éléments de réponses sur la sécurité des environnements mis à dispotision
 * Expliciter le support
 * Décrire chaque ressources et chaque endpoint, les modèles associés et les erreurs liées
 * Proposer des snippets de codes pour faciliter l'intégration de l'API

## Documentation OpenAPI V3

Une documentation Open API v3 est aussi disponible ici :

[https://ea-api-edge.test-uservice.dev-e-attestations.com/doc/swagger.yml](https://ea-api-edge.test-uservice.dev-e-attestations.com/doc/swagger.yml)


Une documentation Open API v2 est aussi disponible ici :

[https://ea-api-edge.test-uservice.dev-e-attestations.com/swagger-ui.html](https://ea-api-edge.test-uservice.dev-e-attestations.com/swagger-ui.html)

La documentation Swagger/OpenAPI v2 au format JSON est disponible ici **/v2/api-docs** :

[https://ea-api-edge.test-uservice.dev-e-attestations.com/v2/api-docs](https://ea-api-edge.test-uservice.dev-e-attestations.com/v2/api-docs)


## Mise en place

Pour souscrire à l'un ou l'autre des environnements vous devez tout d'abord en **émettre la demande auprès de votre gestionnaire** de compte e-Attestations habituel.

Nous vous conseillons de bien discuter de la configuration de votre compte concernant les documents de compliance avec votre gestionnaire de compte afin de parfaitement comprendre votre cas d'usage et vous conseiller au mieux.

**Attention** : L'usage de l'API n'est pas multicomptes.

Votre gestionnaire de compte informera l'équipe technique pour la création d'une organisation liée à votre compte et un ou plusieurs contacts techniques (emails) seront alors invités au **Tech'Desk e-Attestations**.

## Le support Tech'Desk e-Attestations

C'est un système de ticketing et de support **TECHNIQUE** dédié au API et WebServices dans lequel vous pouvez poster questions et demandes.

Après avoir reçu un email d'invitation créez votre user et mot de passe en toute autonomie pour accéder aux services et documentation de cette plateforme de support.

La plateforme Tech'Desk : [https://jira-e-attestations.atlassian.net/servicedesk/customer/portals](https://jira-e-attestations.atlassian.net/servicedesk/customer/portals).

Cette plateforme sécurisée vous permet aussi de partager dans votre organisation les tickets de support.

**Note** : les users et mots de passe de connexion ne sont fournis que dans le Tech'Desk.

<a href="https://jira-e-attestations.atlassian.net/servicedesk/customer/portals" title="Accédez au Tech'Desk" target="_blank">
<img alt="Home page du Tech'Desk e-Attestations" src="./images/TechDesk_Home.png" width="480" />
</a>

## Evironnements

e-Attestations met à disposition deux environnements : 

- **TEST** :
L'ouverture d'un accès de TEST de type API REST connecté à un compte client de TEST vous permettra, de façon pleinement sécurisée, d'accéder à une infrastructure partagée et identique à celle de production. 

<aside className="warning">
**ATTENTION** : dans l'environnement de TEST et afin d'éviter que vos tests n'interfèrent pas avec votre activité de production les envois d'emails sont inhibés (pas d'invitation des tiers ou d'envoi de rapport).
</aside>

<br/>

- **PRODUCTION** :
L'ouverture d'un accès de PROD de type API REST connecté à un compte client de PROD vous permet de l'utiliser pour votre compte.

Environnement | URL
--------------|-------
TEST | [https://rs-test.e-attestations.com/api/v1/](https://rs-test.e-attestations.com/api/v1/)
PRODUCTION | [https://rs.e-attestations.com/api/v1/](https://rs.e-attestations.com/api/v1/)

# Format des réponses

```json
{
  content: [
    {
      "companyIdType": "string",
      "companyIdValue": "string",
      "thirdpartyCode": "string"
    }],
  messages: {
    warning: [
      {
        code: "W001",
        message: "La clé d'API expire dans 3 jours"
      }
    ]
  }
}
```

Les réponses sont au format JSON composées des attributs (optionnels) suivants:

* **content**, contenant le résultat de l'opération, en cas de succès.
* **page**, le numéro de la page. **Renvoyé en cas de contenu paginé.**
* **size**, taille de la page. **Renvoyé en cas de contenu paginé.**
* **totalElements**, le nombre total d'éléments. **Renvoyé en cas de contenu paginé.**
* **messages** contenant **d'éventuels messages** d'information, d'avertissement ou d'erreur.


Pour plus de détails lisez la section <a href="#schemas">Schemas</a> et plus spécifiquement sur le format des <a href="#tocSmessages">Messages</a>.

## Exemple d'erreur (protocolaire)

```json
{
    "timestamp": "2019-02-05T09:06:15.245+0000",
    "status": 404,
    "error": "Not Found",
    "message": "No message available",
    "path": "/api/v1/account/1234567/876543"
}
```

<aside className="warning">
Nous avons développé un contrat d'interface (présenté ci dessus) qui se veut le plus pratique pour le développeur.
Il est toute fois important de noter que durant la PREVIEW certains messages pourront ne pas encore présenter le même format.
Auquel cas un format 'standard' de réponse d'erreur 'protocolaire' est utilisé.
Nous poursuivons les développements pour permettre la généralisation du contrat d'interface dans tous les cas d'erreur.
</aside>


## Encoding

L'API REST doit être utilisée et consommée en UTF8.


# Sécurité

### OpenID Connect (OIDC)

L'API REST e-Attestations utilise **[OpenID Connect (OIDC)](https://openid.net/connect/)** pour identifier et authentifier les clients. Toute requête vers l'API doit obligatoirement inclure un Token [ (Json Web Token)](https://jwt.io/) valide.

Ce dernier doit être envoyé dans le header 'Authorization' (cf. l'exemple qui suit).

Plus d'informations sur OpenID Connect et JWT sur :

* [https://openid.net/connect/](https://openid.net/connect/)
* [https://jwt.io/](https://jwt.io/)

#### Récupérer le token JWT


```shell
curl -X POST \
    https://auth.e-attestations.com/auth/token \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'client_id=ea-api' \
    -d 'grant_type=password' \
    -d 'username=<apiuser>' \
    -d 'password=<apipassword>'
```  

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

```shell
curl -X GET \
  https://api.e-attestations.com/v4/account/97862/dossiers \
    -H "Authorization: Bearer <JWT_TOKEN>"
```

Le Json Web TOKEN (JWT) est à utiliser dans tous les requetes vers l'API suivantes est la valeur du token étant renvoyé dans la propriété **"access_token"**.

<aside className="warning">
La durée de validité du tocken est de quelques minutes. Vous devez vous assurer de la durée de validité de votre TOKEN grace à **"expires_in"** qui vous indique en nombre de secondes avant qu'il n'expire au moment de son obtention (par exemple 1800 secondes correspondant à 30').
</aside>

<aside className="info">
Rappel : vos identifiants sont délivrés à votre demande **UNIQUEMENT** via un ticket envoyé au <a href="#le-support-tech-39-desk-e-Attestations">Tech'Desk</a> et après activation de votre souscription par votre gestionnaire de comptes.
</aside>

### Sécurité renforcée par Trust IP

Chaque requête est authentifiée et un mécanisme de filtrage de confiance par adresse IP (whitelist) permet de garantir la légitimité du système client vis à vis de notre infrastructure sécurité et réseau. 
Ainsi, il faudra toujours **préciser les adresses IP de vos infrastructures clientes** (cf. plus loin).

Les échanges sont sécurisés par un chiffrement SSL/TLS. Le certificat public 'e-attestations.com' supporte les protocoles TLS depuis le 1.0, 1.1 jusqu'au 1.2 pour s'adpater à la diversité de configuration de nos clients.

<aside className="warning">
e-Attestations considère comme sûr le protocole TLS 1.2 uniquement.
</aside>

Ainsi, lors de la souscription au service ou via le Tech'Desk vous devez communiquer les adresses IP des serveurs 'client' et qui consommeront l'API REST JSON. 

Si vous avez un ou plusieurs serveurs clients, il faut que chaque adresse IP soit communiquée pour qu'elle soit ajoutée à la liste des IP de confiance (Trust IP) d'e-Attestations.

L'adresse IP doit être fournie par serveur et sous la forme d'un CIDR.

Par exemple : `34.56.78.90/32`
le `/32` désigne la masque pour une adresse IP unique.

# Ressources

## Compte ('account')

Le compte e-Attestations donneur d'ordres et souscripteur au service.

Chaque compte dispose d'un identifiant de **compte unique**. Par construction, toutes les requêtes doivent obligatoirement inclure l'identifiant du client dans l'URL d'appel à l'exception du point terminateur **/account** qui vous donnes des informations sur votre l'identifiant du compte.

Les urls sont ainsi toutes prefixées par **/account/{account_id}/****

L'identifiant de compte (de type string) est renvoyé dans le **payload** du token JWT, comme illustré ci-dessous:

```json
{
  "name": ".....",
  "account_ids": "98545"
}
```

## Informations du compte

De façon complémentaire vous pouvez récupérer votre identifiant de compte via l'url **/account** (sans aucun paramètre). 

Les données du TOKEN seront utilisées pour restituer et vérifier votre compte et la souscription au service.

Des informations complémentaires sur votre souscription au service sont aussi restituées.



## Tiers ('thirdparties')

Cette appellation désigne le tiers, le fournisseur, le sous-traitant, etc... en relation avec le compte donneur d'ordres et fait l'objet de l'évaluation continue au titre de sa conformité, suivant la souscription et/ou les option du compte e-Attestations.

Dans le cadre de cette relation, le compte e-Attestations utilisateur de l'API REST/JSON est aussi appelé compte "donneur d'ordres".

## Dossiers ('dossiers')

Le dossier est une materialisation de la relation donneur d'ordres / tiers. Un dossier comporte des demandes (exigences de conformité) formulées par le donneur d'ordres auxquelles correspondent des réponses le plus souvent automatiquement apportée par le plateforme e-Attestations ou par le tiers (fichiers, signatures, autres données ...).

La référence d'un dossier est une donnée renseignée par le donneur d'ordres lors de la création d'un dossier ou la modification d'un dossier. La référence d'un dossier doit être unique pour un couple tiers/donneur d'ordres. Autrement dit, un tiers ne peut avoir plus d'un dossier portant la même référence par donneur d'ordres.

Cette référence de dossier peut être modifiée à n'importe quel moment sauf s'il a été archivé.

## Exigences ('requirements')

Correspond à un ensemble d'exigence (légale, compliance, métier, etc...) et une demande du donneur d'ordres. Une exigence fait l'objet d'une **demande** et en attente d'une **réponse** qu'elle soit apportée par e-Attestations et pour le tiers lui même tels qu'une donnée spécifique, un ou plusieurs documents et leur(s) fichier(s) lié(s), une signature ou tout autre élément demandé constituant un preuve de conformité dans le cadre du suivi.

# Autres définitions

## Identifiant de compagnie

Un établissement ou une entreprise (au sens personne morale) est indentifiée dans le système e-Attestations à l'aide d'un code identifiant national (SIRET, SIREN pour la France) ou d'un numéro internationnal (ex. l'identifiant TVA).

l'API e-Attestations propose deux types d'identifiants :

Type                         | Description
-----------------------------|---------------------------------------
CIT001                       | SIRET : identifiant utilisé en France pour qualifier les établissements. Nombre de 14 chiffres vérifiant l'algorithme de Luhn
CIT002                       | Numéro TVA : identifiant utilisé par la CEE pour les entreprises soumises à l'impôt sur les sociétés. Plus d'informations sur [Wikipedia](https://en.wikipedia.org/wiki/VAT_identification_number)

Des types d'identifiants nouveaux pourront être implémenté au fil des évolutions de l'API.

### Indicateur de complétude

L'indicateur de complétude eAttestation permet de renseigner de façon simple que le tiers a couvert entièrement les besoins ('requirements') au titre de la conformité exigée par la compliance client.

Exemple : un dossier de surveillance d'un tiers est jugé complet pour l'indicateur "obligation de vigilance", si tous les documents relatifs à l'obligation de vigilance sont présents et validés.

Code indicateur| Description
---------------|------------------------
I001           | Obligation de vigilance

# Création de dossier

La création de dossier de suivi continu de la conformité des tiers (ou import de dossier) est au coeur du processus et la principale étape permettant de démarrer le processus de suivi.

Elle démarre un workflow complexe  :

- la récupération automatique des données du tiers 
- son invitation grâce à l'email de contact
- le workflow d'envoi d'emails de demande pour les documents demandés et non encore récupérés 
- les rappels 
- des mises à jours programmées
- la production d'indicateurs complexes
- etc..

Le endpoint **POST /account/{accountId}/dossiers** permet de créer un dossier pour un tiers (thirdparty).

**Vous trouverez toutes les informations complémentaire sur ce endpoint dans la section <a href="#importer-un-dossier">Importer un dossier</a>.**


Le traitement pouvant durer plusieurs minutes la réponse est **asynchrone**, comme illustré dans le schéma ci-dessous.

Lors de la création un identifiant de suivi du traitement de l'import (processId) est renvoyé. 
Il vous faudra l'utiliser pour connaître le résultat de l'import de façon asynchrone.

Le endpoint **GET /account/{accountId}/dossier/process/{processId}** permet de suivre le résultat de l'import grâce à l'identifiant du process d'import renvoyé lors de l'appel "Création d'un dossier" (POST /account/{accountId}/dossiers).

<p className="mermaid">
graph TB
	A((<strong>Start</strong>)) 
	A --> B(Call <strong>Import dossier endpoint</strong><br/>returns processId)
	B --processId--> C(Call <strong>Get import result endpoint</strong> for processId)
	C --> D{Status}
	D --complete=true <br/> <strong>AND</strong> success=<strong>true</strong>--> E
	D --complete=true <br/> <strong>AND</strong> success=<strong>false</strong>--> R
	D --complete=false--> C
	E((<strong>End</strong>))
	R(Error Handling)
</p>

<aside className="notice">
Il est important de bien vérifier les paramètres d'appel et de bien prendre en compte les codes d'erreurs et leur signification.
</aside>