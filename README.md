# back-end-ben

##### Data Schema (data structure)

`Worker`

```
{
    "id": 1,
    "username": "admin",
    "profile_photo": "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
    "working_since": "2012/11",       // defaults to 'input tag line'
    "tagline": "Consecutive Punch!",  // defaults to 'Test'
    "first_name": "One Punch",        // defaults to 'Test'  required
    "last_name": "Man",               // defaults to 'Test'  required
    "type_id": 1,                     // defaults to false
    "is_a_user": 0
}
```

`User`

```
{
    "id":1
    "username":'admin',  // required
    "password":'admin'   // required
}
```

`Test user account`

```
username:admin
password:password

username:mariekondo
password:sparksjoy

username:pewdiepie
password:tseries

username:ben
password:ben
```

### GET:

###### /workers

- returns a list of workers

###### /workers/:id

- returns a worker object with the specified id

###### /users

- returns a list of users

### POST:

###### /register

- register an user and returns the id of the created user

###### /login

- logs the user in and returns a token

###### /workers

- creates a new worker and returns with the id of the created worker

### PUT:

###### /workers/:id

- Updates an existing worker with the change, and returns the id of the worker selected

### DELETE:
