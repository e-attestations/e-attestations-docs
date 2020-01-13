---
id: c-6-files
title: Files
sidebar_label: Files
---

'files' attached to the compliance requirement documents are most of the time PDFs.

You can obtain a copy of the file through an API call.

> Example of GET request to a file `/api/v1/account/{{account_id}}/dossiers/{{dossierId}}/documents/{{documentId}}/files`

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
