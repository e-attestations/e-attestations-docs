---
id: t-1-create-dossier
title: Create a dossier
sidebar_label: Create a dossier
---

## Why ?

The creation of a compliance monitoring 'dossier' in e-Attestations is at the heart of the thirdparty recruitment process.

This step is also the recruitment phase of your third party who will then be informed by email that a follow-up file is pending.

## How ?

You can create a dossier by using the POST http verb with `/account/{account}/dossiers` enpoint with a JSON body containing the parameters of your dossier.

> Create a 'dossier' with POST to `/account/{account}/dossiers`

```shell
curl --request POST \
  --url https://rs.test-e-attestations.com/api/v1/account/119631/dossiers \
  --header 'Authorization: Bearer {{token}}' \
  --header 'Content-Type: application/json' \
  --data '{
    "companyIdType": "CIT001",
    "companyIdValue": "50382936800045",
    "thirdpartyCode": "",
    "dossierReference": "DOSSIER_REF_X",
    "description": "This is dossier for xxx",
    "purchasingCategory": "",
    "expirationDate": "2020-05-31",
    "requiredDocuments": [ "JUSTIF_IMM" ],
    "thirdpartyEmail": ["nobody@e-attestations.com"],
    "userInCharge": ["nobody@e-attestations.com"]
    }'
```


<aside>The compliance to be required depends on your needs, the nature of your third party, the market, exogenous parameters, etc.
Your e-Attestations account manager is there to advise you.</aside>

## Create a dossier launches the workflow to thirdparty

A continuous workflow then starts for the third party who will then have to file the proofs required by your dossier.

When creating a dossier, the triggered workflow is asynchronous and is described as follows:

- automatic fetch of third party's data
- third party's invitation is sent thanks to the contact email
- **possibly** sending request emails for documents or evidence requested if they're not already present
- the calculation of a completeness indicator ('I001') representing the good health of the monitoring with regard to the requirement of the monitoring dossier

But also :

- regular reminders (by email) sent to third parties all along the dossier's life
- updating data regularly and on events
- production of other indicators and alarms
- reporting services
- diagnoses
- e-Attestations advice and expertise

## The asynchronous nature of dossier creation

Since the dossier creation processing can last several seconds, the process is **asynchronous **.

When creating an identifier for monitoring the import processing (processId) is returned.
You will need to use it to know the result of the import asynchronously.

![Async dossier creation](/img/ea-create-dossier-async.png)

### Fetch creation results

The endpoint (GET) `/account/{accountId}/dossier/processes` makes it easy to follow and catch the import results.


thanks to the identifier of the import process returned during the call "Creation of a folder "(POST / account / {accountId} / folders).

> It is important to check the call parameters carefully and to take into account the error codes and their meaning.



