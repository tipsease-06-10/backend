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

| Method | Endpoint      | Description                                                                                                                                                                                                                                                                                 |
| ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /register | Creates a `user` using the information sent inside the `body` of the request.                                                                    |
| POST   | /login    | Use the credentials sent inside the `body` to authenticate the user. On successful login, returns a message with the username and a JWT token|
| GET    | /workers    | If the user is logged in, respond with an array of all the workers contained in the database. If the worker is not logged in, return a message:"No token provided, must be set on Authorization Header" |
| GET    | /workers/:id| If the user is logged in, respond with an object of the worker  |
| PUT    | /workers/:id| Creates a new worker and returns with the id of the created worker |
| POST   | /workers    | Creates a new worker and returns with the id of the created worker |


### GET:

###### /workers

- returns a list of workers

###### /workers/:id

- returns a worker object with the specified id

### POST:

###### /workers

- creates a new worker and returns with the id of the created worker

### PUT:

###### /workers/:id

- Updates an existing worker with the change, and returns the id of the worker selected

