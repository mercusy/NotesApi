#  Notes Api

---
## Create new note

**POST**`/api/notes` 

Request
```json
{
    "title": "Hello",
    "content": "long content"
    "cardcolor":123244
}
```

Response
```json
{   "id" : 2
    "title": "Hello",
    "content": "long content"
    "cardcolor":123244
}
```

---
## Get all created notes

**GET** `/api/notes`

Response

```json
[
  {
    "id": 1,
    "title": "hi",
    "content": "have you rate this project",
    "cardcolor": 2123221
  },
  {
    "id": 2,
    "title": "what?",
    "content": "why you looking at me?!",
    "cardcolor": 2123221
  }
]
```
---
## Delete any note

**DELETE**`/api/notes`

Request
```json
{
    "id": 4,
    "title": "Hello",
    "content": "long content"
    "cardcolor":123244
}
```
Response
```json
{
    "id": 4,
    "title": "Hello",
    "content": "long content"
    "cardcolor":123244
}
```
---
## Update any note

**PATCH**`/api/notes`

Request
```json
{
    "id": 4,
    "title": "Hello",
    "content": "long content"
    "cardcolor":123244
}
```
Response
```json
{
    "id": 4,
    "title": "Hello",
    "content": "long content"
    "cardcolor":123244
}
```

