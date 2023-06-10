#  Notes Api

---

**POST**`/api/notes`
Create new note

```json
{
    "title": "Hello",
    "content": "long content"
    "cardcolor":123244
}
```
---
**GET** `/api/notes`

Get all created notes

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

**DETE**`/api/notes`
Delete any note

```json
{
    "id": 4,
    "title": "Hello",
    "content": "long content"
    "cardcolor":123244
}
```

