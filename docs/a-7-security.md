---
id: a-7-security
title: Sécurité
sidebar_label: Sécurité
---

## OpenID Connect (OIDC)

L'API REST e-Attestations utilise **[OpenID Connect (OIDC)](https://openid.net/connect/)** pour identifier et authentifier les clients. 

Toute requête vers l'API doit obligatoirement inclure un Token [ (Json Web Token)](https://jwt.io/) valide.

Ce dernier doit être envoyé dans le header 'Authorization' (cf. l'exemple qui suit).

Si le header 'Authorization' n'est pas renseigné la requête sera considérée comme non authentifiée (HTTP code 401).

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



<div className="mermaid">sequenceDiagram
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
