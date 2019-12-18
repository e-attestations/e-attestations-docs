---
id: a-5-response-format
title: Format des réponses
sidebar_label: Format des réponses
---

```json
{
  content: [
    {
      "companyIdType": "string",
      "companyIdValue": "string",
      "thirdpartyCode": "string"
    }],
  messages: {
    warning: [
      {
        code: "W001",
        message: "La clé d'API expire dans 3 jours"
      }
    ]
  }
}
```

Les réponses sont au format JSON composées des attributs (optionnels) suivants:

* **content**, contenant le résultat de l'opération, en cas de succès.
* **page**, le numéro de la page. **Renvoyé en cas de contenu paginé.**
* **size**, taille de la page. **Renvoyé en cas de contenu paginé.**
* **totalElements**, le nombre total d'éléments. **Renvoyé en cas de contenu paginé.**
* **messages** contenant **d'éventuels messages** d'information, d'avertissement ou d'erreur.


Pour plus de détails lisez la section <a href="#schemas">Schemas</a> et plus spécifiquement sur le format des <a href="#tocSmessages">Messages</a>.

## Exemple d'erreur (protocolaire)

```json
{
    "timestamp": "2019-02-05T09:06:15.245+0000",
    "status": 404,
    "error": "Not Found",
    "message": "No message available",
    "path": "/api/v1/account/1234567/876543"
}
```

<aside class="warning">
Nous avons développé un contrat d'interface (présenté ci dessus) qui se veut le plus pratique pour le développeur.
Il est toute fois important de noter que durant la PREVIEW certains messages pourront ne pas encore présenter le même format.
Auquel cas un format 'standard' de réponse d'erreur 'protocolaire' est utilisé.
Nous poursuivons les développements pour permettre la généralisation du contrat d'interface dans tous les cas d'erreur.
</aside>


## Encoding

L'API REST doit être utilisée et consommée en UTF8.

