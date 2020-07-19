---
id: s-7-urls
title: Authentication URLs
sidebar_label: Authentication URLs
---

For each environment, a specific auth service will provide you with the JWT you need for the user you own.

Environment | URL
------------|---------------------
Non PRODUCTION|`https://auth.dev-e-attestations.com/auth/realms/eat_realm/protocol/openid-connect/token`
PRODUCTION|`https://auth.e-attestations.com/auth/realms/eat_realm/protocol/openid-connect/token`

