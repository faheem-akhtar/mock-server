FORMAT: 1A

# Redro Todos

This is a simple JSON based API to manage todos

## Todos Collection [/todos]

### List all todos [GET]

+ Response 200 (application/json)

        [
            {
                "id": 1,
                "text": "Apple",
                "completed": false
            },
            {
                "id": 2,
                "text": "Orange",
                "completed": false
            },
            {
                "id": 3,
                "text": "Mango",
                "completed": false
            },
            {
              "id": 4,
              "text": "Kiwi",
              "completed": false
            }
        ]


