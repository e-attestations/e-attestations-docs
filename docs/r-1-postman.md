---
id: r-1-postman
title: Collection Postman
sidebar_label: Collection Postman
---


To go even faster and facilitate the integration and exploration of our API we provide <a href = "https://raw.githubusercontent.com/e-attestations/ea-api-rest-postman/master/eAttestations- API-REST-multi-version.postman_collection.json "> a Postman collection </a> which you can import into postman and test quickly.

You will have to define some variables (user, password and server_url) to use this test suite.

You can also explore each of the scenarios to functionally understand the possible use of the API.


> Example of using newman

```shell
npx newman run "EA_API_REST.postman_collection.json" \
  --global-var username="<user>" \
  --global-var password="<password>" \
  --global-var server_url="https://rs.dev-e-attestations.com"
```

You can download Postman via <a href="https://www.getpostman.com/downloads/"> this link </a> or use newman via <a href = "https://github.com/postmanlabs/newman "> this link </a>.
