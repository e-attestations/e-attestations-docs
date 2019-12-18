---
id: a-4-environments
title: Environements
sidebar_label: Environements
---

eAttestations met à disposition deux environnements : 

- **TEST** :
L'ouverture d'un accès de TEST de type API REST connecté à un compte client de TEST vous permettra, de façon pleinement sécurisée, d'accéder à une infrastructure partagée et identique à celle de production. 

<aside class="warning">
**ATTENTION** : dans l'environnement de TEST et afin d'éviter que vos tests n'interfèrent pas avec votre activité de production les envois d'emails sont inhibés (pas d'invitation des tiers ou d'envoi de rapport).
</aside>

<br/>

- **PRODUCTION** :
L'ouverture d'un accès de PROD de type API REST connecté à un compte client de PROD vous permet de l'utiliser pour votre compte.

Environnement | URL
--------------|-------
TEST | [https://rs-test.e-attestations.com/api/v1/](https://rs-test.e-attestations.com/api/v1/)
PRODUCTION | [https://rs.e-attestations.com/api/v1/](https://rs.e-attestations.com/api/v1/)
