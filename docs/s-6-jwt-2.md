---
id: s-6-jwt-2
title: Keep in mind about JWT
sidebar_label: Keep in mind about JWT
---

Keep in mind that, the JWT ...

- is valid for a few seconds. You must make sure of the duration of validity of your TOKEN thanks to the data "expires_in" which indicates to you in number of seconds before it expires at the time of its obtaining (for example 1800 seconds corresponding to 30 ')
- is to be used in all API requests
- resides in the **access_token** property
- needs to be set within an `Authorization` HHTP Header sous la forme :

> Example

```shell
curl -X GET \
  https://api.dev-e-attestations.com/api/v1/account/97862/dossiers \
    -H "Authorization: Bearer <JWT_TOKEN>"
```

