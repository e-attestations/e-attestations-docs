---
id: c-5-documents
title: Documents
sidebar_label: Documents
---

Documents are elements of the compliance evidence for requirement's request and defined by e-Attestations as a document type with generally one type of document per requirement and for which a response is provided by e-Attestations or the third party itself.

A 'document' can also be called as an evidence and can be :

- a signature
- data
- one or more files
- a set of data from a form to be completed by the declarant
etc.

A 'document' has a validity and therefore an expiry that the e-Attestations platform monitors continuously.

> Example of dossier's documents GET request `/api/v1/account/{{account_id}}/dossiers/{{dossierId}}/documents`

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
