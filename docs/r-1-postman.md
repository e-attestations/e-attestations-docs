---
id: r-1-postman
title: Collection Postman
sidebar_label: Collection Postman
---


To go even faster and facilitate the integration and exploration of our API we provide <a href = "/static/openapi/eAttestations-API-REST-multi-version.postman_collection.json"> a Postman collection </a> that you should import into postman.

<h2>
<a href = "/static/openapi/eAttestations-API-REST-multi-version.postman_collection.json">Download our Postman collection </a>
</h2>

We advise to use environnement with variables (username, password, ea_auth_serv and ea_api_serv) to use this test suite.

You can also explore each of the scenarios to functionally understand the possible use of the API.

You can download Postman via <a href="https://www.getpostman.com/downloads/"> this link </a> or use newman via <a href = "https://github.com/postmanlabs/newman "> this link </a>.

You can also use [newman](https://github.com/postmanlabs/newman) for automatic testing, like we do :-)

```shell
npx newman run "eAttestations-API-REST-multi-version.postman_collection.json" \
  --global-var username="<user>" \
  --global-var password="<password>" \
  --global-var ea_auth_serv="https://auth.dev-e-attestations.com" \
  --global-var ea_api_serv="https://rs.dev-e-attestations.com"
```

