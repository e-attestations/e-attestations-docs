---
id: c-3-dossiers
title: Dossiers
sidebar_label: Dossiers
---

Le dossier est la materialisation de la relation donneur d'ordres / tiers.

Un dossier comporte des demandes (exigences de conformité) formulées par le donneur d'ordres auxquelles correspondent des réponses le plus souvent automatiquement apportée par le plateforme e-Attestations ou par le tiers (fichiers, signatures, autres données ...).

La référence d'un dossier (dossierReference) est une donnée renseignée par le donneur d'ordres lors de la création d'un dossier ou la modification d'un dossier. La référence d'un dossier doit être unique pour un couple tiers/donneur d'ordres. Autrement dit, un tiers ne peut avoir plus d'un dossier portant la même référence par donneur d'ordres.

Cette référence de dossier peut être modifiée à n'importe quel moment sauf s'il le dossier a été archivé.

> Exemple d'interrogation au siren GET "/api/v1/account/{{account_id}}/dossiers?siren=503829368"

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
