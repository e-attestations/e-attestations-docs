---
id: s-2-jwt
title: Authorization & JWT
sidebar_label: Authorization & JWT
---

The security model use a standard Header `Authorization: Bearer <JWT>`model.

<aside>
Your credentials have to be issued at <strong>your request via a techDesk ticket</strong> sent and after activation of your subscription by your account manager.
</aside>

## Obtain a JSON Web Token

> Obtain a JWT

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

Obtaining a JWT token is based on the sending of a POST type request with transmission of the user, password and some additional parameters to the authentication server.

You must send a request in 'application / x-www-form-urlencoded' format with the following parameters (all mandatory):

Parameter | Mandatory | Value | Description
----------|-----------|-------|-------------------
**client_id**|true|'ea-api-edge'|The name of the API
**grant_type**|true|'password'|The authentication model
**username**|true||The username given by e-Attestations
**password**|true||The password given by e-Attestations

The authentication server will return a JSON word in which it is necessary to preserve 'access_token'.

<div className='card-1'>
  <img src="/img/EA_Graph_Security_Get_JWT_010.png" alt="Security JWT model" />
</div>

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

On client side `access_token` needs to be saved in order to be used in all request.

The content of `access_token` provides data such as :

```json
{
  "jti": "b5ba9c5b-a3c6-43d0-a61b-ca6798a55328",
  "exp": 1577913044,
  "nbf": 0,
  "iat": 1577911244,
  "iss": "https://auth.dev-e-attestations.com/auth/realms/eat_realm",
  "aud": [
    "ea-api-profile",
    "ea-api-admin",
    "account"
  ],
  "sub": "c848abbb-a228-42c1-ad70-b2b010c8e851",
  "typ": "Bearer",
  "azp": "ea-api-edge",
  "auth_time": 0,
  "session_state": "dffd8cba-791d-41fa-a6d3-1e82610581a7",
  "acr": "1",
  ...
  "account_ids": "119631",
  "email_verified": true,
  "name": "Compte TEST",
  "preferred_username": "nobody@e-attestations.com",
  "given_name": "Compte",
  "locale": "fr",
  "family_name": "TEST",
  "email": "nobody@e-attestations.com"
}
```