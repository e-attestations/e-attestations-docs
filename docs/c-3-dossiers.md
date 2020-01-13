---
id: c-3-dossiers
title: Dossiers
sidebar_label: Dossiers
---

The 'dossier' resource is the materialization of the client / third party relationship.

A 'dossier' includes requests (compliance requirements) made by the client to which correspond answers most often automatically provided by the e-Attestations platform or by the third party (files, signatures, other data ...).

The reference of a 'dossier' (dossierReference) is data entered by the client when creating a file or modifying a file. The reference for a file must be unique for a third party / client. 

In other words, a third party cannot have more than one file with the same reference per client.

### dossierReference

'dossierReference' is very powerful data that gives capacity to establish a link from an id provided by he customer information system to e-Attestations that is sent back to the information system.

We advice you to use it often, if it's not always.

Plus ! This 'dossierReference' can be changed at any time unless the file has been archived.


> Example of 'dossiers' GET request with sirent id "/api/v1/account/{{account_id}}/dossiers?siren=503829368"

```json
{
    "content": [
        {
            "dossierId": 804127,
            "accountId": 119631,
            "siren": "503829368",
            "siret": "50382936800045",
            "tva": "FR69503829368",
            "thirdpartyId": 875,
            "companyIdType": "CIT001",
            "companyIdValue": "50382936800045",
            "thirdpartyCode": "123",
            "companyCountryCode": "FR",
            "monitored": true,
            "dossierReference": "TEST",
            "description": "description_804127",
            "purchasingCategory": "",
            "startingDate": null,
            "expirationDate": null,
            "stoppingDate": null,
            "stoppingReason": "NA",
            "state": false,
            "stateLastChangeDate": "2019-01-08T15:31:55.521",
            "indicators": [
                {
                    "indicatorCode": "I001",
                    "state": true,
                    "lastChangeDate": "2018-07-16T11:04:59.806"
                }
            ],
            "documents": [
                {
                    "documentId": 511394021,
                    "documentCode": "I2",
                    "name": "I2",
                    "requestDate": "2019-01-08T15:31:55.486",
                    "present": false,
                    "listFileInformation": []
                }
            ]
        }
    ],
    "page": 0,
    "size": 10,
    "totalElements": 1
}
```
