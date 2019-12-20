---
id: r-1-postman
title: Collection Postman
sidebar_label: Collection Postman
---

Pour aller encore plus vite et faciliter l'intégration et l'exploration de notre API nous fournissons <a href="/postman/__eAttestations-API-REST-multi-version.postman_collection.json">une collection Postman</a> que vous pouvez importer dans postman et tester rapidement.

Vous devrez définir quelques variables (user, password et server_url) pour exploiter cette suite de test.

Vous pouvez aussi explorer chacun des scenarios pour foncionnellement comprendre l'usage possible de l'API.

> Exemple d'utilisation de newman

```shell
npx newman run "EA_API_REST.postman_collection.json" \
  --global-var username="<user>" \
  --global-var password="<password>" \
  --global-var server_url="https://rs.dev-e-attestations.com"
```


Vous pouvez télécharger Postman via <a href="https://www.getpostman.com/downloads/">ce lien</a> ou utiliser newman via <a href="https://github.com/postmanlabs/newman">ce lien</a>.
