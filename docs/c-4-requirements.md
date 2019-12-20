---
id: c-4-requirement
title: Requirements
sidebar_label: Requirements
---

L'exigence est un ensemble de demandes dans le domaine métier du donneur d'ordres (légale, compliance, métier, etc...). 

Au titre du suivi continu de la conformité du tier, une exigence est matérialisée dans le workflow par une **demande** et en attente d'une **réponse**. 

Cette réponse est le plus souvent apportée par e-Attestations qui catalise et aggrège les réponses de nombreuses sources de données provenant de diverses administration et fournisseurs de données de confiance. 

La réponse peut aussi être donnée par le tier lui-même pour :

- un fichier portant un document exigé
- la saisie d'une donnée spécifique
- un ou plusieurs documents et leur(s) fichier(s) lié(s)
- une signature électronique daté et auditable
- tout autre élément demandé constituant un preuve de conformité dans le cadre du suivi.

> Exemple d'interrogation des exigences d'un dossier GET "/api/v1/account/{{account_id}}/dossiers/{{dossierId}}/requirements"

```json
{
    "content": [
        {
            "documentId": 1,
            "accountId": 119631,
            "code": "ATT_VIGI",
            "name": "Attestationdevigilance6mois",
            "dossierId": 836261
        },
        {
            "documentId": 2,
            "accountId": 119631,
            "code": "JUSTIF_IMM",
            "name": "Justificatifdimmatriculation",
            "dossierId": 836261
        }
    ]
}
```
