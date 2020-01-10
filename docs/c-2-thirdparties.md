---
id: c-2-thirdparties
title: Thirdparties
sidebar_label: Thirdparties
---

Le tiers, le fournisseur, le sous-traitant, etc... est en relation avec le compte donneur d'ordres et fait l'objet de l'évaluation continue au titre de sa conformité, suivant la souscription et/ou les option du compte e-Attestations.

Dans le cadre de cette relation, le compte e-Attestations utilisateur de l'API REST/JSON est aussi appelé compte "donneur d'ordres".

> Exemple d'appel GET sur "/api/v1/account/{{account_id}}/thirdparties?siret=50382936800045"

```json
{
    "content": [
        {
            "thirdpartyId": 875,
            "companyIdType": "CIT001",
            "companyIdValue": "50382936800045",
            "thirdpartyCode": "123",
            "siren": "503829368",
            "siret": "50382936800045",
            "tva": "FR69503829368",
            "name": "E-ATTESTATIONS.COM",
            "datecreation": "2010-11-24",
            "legalCategoryLabel": "Société par actions simplifiée",
            "legalCategoryCode": "5710",
            "acronym": null,
            "activityLabel": "Edition de logiciels applicatifs",
            "activityCode": "5829C",
            "ceo": "POIDEVIN Emmanuel",
            "capital": 3642000,
            "capitalCurrency": "EUR",
            "turnover": 2771996.0,
            "turnoverCurrency": "EUR",
            "lastBalanceSheetDate": "2017-12-31",
            "workforce": 13
        }
    ],
    "page": 0,
    "size": 10,
    "totalElements": 1
}
```
