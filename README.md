# back-end-ben

##### Data Schema (data structure)

```
worker= {
       "id": 1,
        "username": "admin",
        "profile_photo": "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
        "working_since": "2012/11",       // defaults to 'input tag line'
        "tagline": "Consecutive Punch!",  // defaults to 'Test'
        "first_name": "One Punch",        // defaults to 'Test'  required
        "last_name": "Man",               // defaults to 'Test'  required
        "type_id": 1,                     // defaults to false
        "is_a_user": 0}
```

### GET:

###### /workers

- returns a list of workers

###### /workers/:id

- returns a worker object with the specified id

###### /users

- returns a list of users

### POST:

###### /workers

- creates a new worker and returns with the id of the created worker
