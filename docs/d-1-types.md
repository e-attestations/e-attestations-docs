---
id: d-1-types
title: Files
sidebar_label: Files
---

Les fichiers attachés aux documents d'exigence de conformité sont majoritairement des PDF.

> Exemple d'obtention des fichiers d'un document d'un dossier GET "/api/v1/account/{{account_id}}/dossiers/{{dossierId}}/documents/{{documentId}}/files"

```json
{
    "content": [
        {
            "fileId": 4575539,
            "uploadDate": "2019-03-19T00:22:22.31",
            "fileUUID": "8d76e532ec39daa965da354e72a9cfa35c43c2ab",
            "fileCreation": "2019-03-19T00:22:22.299",
            "fileSize": 75422,
            "expirationDate": "2019-09-19T23:59:59.999"
        }
    ]
}
```

Vous pouvez télécharger une copie du fichier grace à son id.
