---
id: s-1-security
title: OpenID Connect
sidebar_label: OpenID Connect
---

The e-Attestations REST API uses **[OpenID Connect (OIDC)] (https://openid.net/connect/)** to identify and authenticate clients.

Any request to the API is verified thus must include a valid JWT ([Json Web Token](https://jwt.io/)).

This must be sent in the 'Authorization' header (see the example below).

If the 'Authorization' header is not completed, the request will be considered as not authenticated (HTTP code 401).

More information on OpenID Connect and JWT on:

* [https://openid.net/connect/](https://openid.net/connect/)
* [https://jwt.io/](https://jwt.io/)
