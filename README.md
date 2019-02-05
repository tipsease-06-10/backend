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
```axios.get('yourURL/workers').then(res=> console.log(res)).catch(err=>console.log(err))```
- console logs 
```
[
    {
        "id": 1,
        "username": "admin",
        "profile_photo": "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
        "working_since": "2012/11",
        "tagline": "Consecutive Punch!",
        "first_name": "One Punch",
        "last_name": "Man",
        "type_id": 1,
        "is_a_user": 0
    },
    {
        "id": 2,
        "username": "mariekondo",
        "profile_photo": "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
        "working_since": "2012/11",
        "tagline": "does it spark joy?",
        "first_name": "Marie",
        "last_name": "Kondo",
        "type_id": 2,
        "is_a_user": 1
    },
    {
        "id": 3,
        "username": "ben",
        "profile_photo": "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
        "working_since": "2012/11",
        "tagline": "Why the friend zone?",
        "first_name": "My Long Lost",
        "last_name": "Love",
        "type_id": 3,
        "is_a_user": 1
    }
]
```

###### /workers/:id

- returns a worker object with the specified id
```
axios
    .get('yourURL/workers/1')
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
```
- console logs 
```
{
        "id": 1,
        "username": "admin",
        "profile_photo": "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
        "working_since": "2012/11",
        "tagline": "Consecutive Punch!",
        "first_name": "One Punch",
        "last_name": "Man",
        "type_id": 1,
        "is_a_user": 0
}
```

### POST:

###### /register

- register an user and returns the id of the created user

###### /login

- logs the user in and returns a token

###### /workers

- creates a new worker with the supplied `workeObject`(see schema for required fields) and returns with the id of the created worker
```
axios
    .post('yourURL/workers',workerObject)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
```
- console logs 
```
message: worker created with the id of 1
```

### PUT:

###### /workers/:id

- Updates an existing worker with the `change`, and returns the id of the worker selected

```
axios
    .put('yourURL/workers/id',change)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
```
