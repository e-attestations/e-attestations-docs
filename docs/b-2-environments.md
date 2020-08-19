---
id: b-2-environments
title: Environments
sidebar_label: Environments
---

e-Attestations provides several environments

Environment | Description
------------|--------------------------------------
SANDBOX|SANDBOX is the test environment we provide. You will use a test account that will allow you, in a fully secure manner, to access a shared infrastructure quite identical to production. Every data is anonymized and no emails will be emitted from SANDBOX.
PRODUCTION|Opening a PROD REST API access connected to a PROD customer account allows you to use it for your account.

<aside>
**WARNING**: in the TEST environment and in order to avoid that your tests do not interfere with your production activity, email sending is inhibited (no invitation to thirdparties, no reports etc.).
</aside>

## Services' URLs

Environnement | URL
--------------|-------
TEST | [https://rs.test-e-attestations.com/api/v1/](https://rs.test-e-attestations.com/api/v1/)
PRODUCTION | [https://rs.e-attestations.com/api/v1/](https://rs.e-attestations.com/api/v1/)
