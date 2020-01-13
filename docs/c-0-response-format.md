---
id: c-0-response-format
title: Responses format
sidebar_label: Responses format
---


Responses are in JSON format composed of the following (optional) attributes:

Attributes|Description
----------|--------------------------------------------------------------------
content|containing the result of the operation, if successful
page|requested the page number, returned only in case of paginated content
size|requested page size, returned in case of paginated content
totalElements|total number of items returned
messages|information, warning or error messages


> Example of messages

```json
{
  content: [
    {
      ...
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

## Encoding

eAttestations APIs use UTF8 encoding


## HTTP codes

On every HTTP response a HTTP code with a value greater than 400 will indicate an error.

These are the main HTTP code that developpers need to control on client side.
 in order to behave accordingly.

HTTP Code|Meaning|Description
---------|-------|--------------
401|Unauthenticated user|The request is not authenticated.
403|Access denied|The request is not authorized
404|resource not found|The requested resources or search did not fetch any result
500|Internal server error|Something wrong happened on server
503|Server error|Something wrong happened on server side due to the request

> Example of messages send with HTTP error code > 400

```json
{
    "timestamp": "2019-02-05T09:06:15.245+0000",
    "status": 404,
    "error": "Not Found",
    "message": "No message available",
    "path": "/api/v1/account/1234567/876543"
}
```