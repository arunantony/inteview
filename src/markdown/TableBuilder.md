[Back to Home](/)

# Instructions

## Challenge: Create a Table builder!

## Requirements

- Table should be build from the JSON provided in the file src/dummy.json

- User should be able to delete a row and hide/view a column. The table should be dynamic and column Name should be 'key' in the json. eg: this table will contain the columns: name, job, eid, age, place, country.

  **Note** : Json can have any key value pairs, **we don't hardcode the keys**

1. The UI should contain a list of the columns and user should be able to toggle it to either show/hide.
2. A table which is populated as per the result of the show/hide configuration.

Here is the sample dummy data

```json
[
  {
    "eid": 1,
    "name": "Sam",
    "age": 20,
    "job": "SE",
    "place": "Delhi",
    "country": "India"
  },
  {
    "eid": 2,
    "name": "Alex",
    "age": 23,
    "job": "SE",
    "place": "UP",
    "country": "India",
    "hobbies": "Music, Dance"
  },
  {
    "eid": 3,
    "name": "Marc",
    "age": 23,
    "job": "SE",
    "place": "Ontario",
    "country": "Canada"
  }
]
```

file path: [/src/components/TableBuilder.tsx](/src/components/TableBuilder.tsx)
