---
id: c-5-documents
title: Documents
sidebar_label: Documents
---

Les documents sont les éléments constituant la demande d'exigence de conformité, définis en type de document (généralement un type de document par exigence) et pour lequel une réponse est apportée par e-Attestations ou le tiers lui même.

Un document peut être une signature, une donnée, un ou plusieurs fichiers, un ensemble de données issues d'un formulaire à remplir par le déclarant.

Un document a une validité et donc une péremption que la plateforme e-Attestations surveille en continu.

> Exemple d'obtention des documents d'un dossier GET "/api/v1/account/{{account_id}}/dossiers/{{dossierId}}/documents"

```json
{
    "content": [
        {
            "documentId": 510893525,
            "documentCode": "JUSTIF_IMM",
            "name": "JUSTIF_IMM",
            "requestDate": "2018-09-19T10:02:46.435",
            "present": true,
            "listFileInformation": [
                {
                    "fileId": 4575539,
                    "uploadDate": "2019-03-19T00:22:22.31",
                    "fileUUID": "8d76e532ec39daa965da354e72a9cfa35c43c2ab",
                    "fileCreation": "2019-03-19T00:22:22.299",
                    "fileSize": 75422,
                    "expirationDate": "2019-09-19T23:59:59.999"
                }
            ]
        },
        {
            "documentId": 510893524,
            "documentCode": "ATT_VIGI",
            "name": "ATT_VIGI",
            "requestDate": "2018-09-19T10:02:46.382",
            "present": true,
            "listFileInformation": [
                {
                    "fileId": 4224544,
                    "uploadDate": "2018-10-30T08:57:17.765",
                    "fileUUID": "22945cf9490f46396fb2f6e6bf716d383836cb9f",
                    "fileCreation": "2018-10-30T08:57:17.759",
                    "fileSize": 73927,
                    "expirationDate": "2019-03-31T23:59:59.999"
                }
            ]
        }
    ]
}
```
