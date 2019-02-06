# back-end-ben

##### Data Schema (data structure)

`Worker`

```
{
    "username": "admin",              // required
    "first_name": "One Punch",        // defaults to 'Test'  required
    "last_name": "Man",               // defaults to 'Test'  required
    "occupation":"barista"            // required
    "user_type": 'employee'
}
```

`Tip`

```
{
        "worker_id": 1,                     // required
        "tip_amount": 10                    // required
}
```

`User`

```
{
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

| Method | Endpoint            | Description                                                                                                                                                                                             |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /register           | Creates a `user` using the information sent inside the `body` of the request.                                                                                                                           |
| POST   | /login              | Use the credentials sent inside the `body` to authenticate the user. On successful login, returns a message with the username and a JWT token                                                           |
| POST   | /tips               | Add a new `tip`, supply with `worker_id` and `tip_amount`                                                                                                                                               |
| GET    | /tips               | Get a list of tips                                                                                                                                                                                      |
| GET    | /tips/:id           | Get a specific tip with the provided id                                                                                                                                                                 |
| GET    | /workers            | If the user is logged in, respond with an array of all the workers contained in the database. If the worker is not logged in, return a message:"No token provided, must be set on Authorization Header" |
| GET    | /workers/:id        | If the user is logged in, respond with an object of the worker                                                                                                                                          |
| PUT    | /workers/:id        | Creates a new worker and returns with the id of the created worker                                                                                                                                      |
| POST   | /workers            | Creates a new worker and returns with the id of the created worker                                                                                                                                      |
| POST   | /workers/:id/upload | Post an image file to the specific worker profile                                                                                                                                                       |

### GET:

###### /workers

- returns a list of workers

```
axios
    .get('yourURL/workers')
    .then(res=> console.log(res))
    .catch(err=>console.log(err))
```

- console logs

```
        [
        {
          id:1,
          username: "admin",
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "One Punch",
          last_name: "Man",
          user_type: "guest",
          tagline: "Consecutive Punch!",
         occupation: waiter
        },
        {
          id:2,
          username: "mariekondo",
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "Marie",
          last_name: "Kondo",
          user_type: "employee",
          tagline: "does it spark joy?",
         occupation: barista
        },
        {
          id:3,
          username: "pewdiepie",
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "pewds",
          last_name: "felix",
          user_type: "employee",
          tagline: "bro fist",
         occupation: bellhop
        },
        { 
          id:4,
          username: "ben",
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "My Long Lost",
          last_name: "Love",
          user_type: "employee",
          tagline: "Why the friend zone?",
         occupation: bellhop
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
          id:1,
          username: "admin",
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "One Punch",
          last_name: "Man",
          user_type: "guest",
          tagline: "Consecutive Punch!",
          occupation:'waiter'
        }
```

###### /tips

- returns a list of tips

```
axios
    .get('yourURL/tips')
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
```

- console logs

```
[
    {
        "id": 1,
        "worker_id": 1,
        "tip_date": "2019-02-03 21:58:19",
        "tip_amount": 10
    },
    {
        "id": 2,
        "worker_id": 2,
        "tip_date": "2019-02-04 21:58:19",
        "tip_amount": 5
    }
]
```

###### /tips/1

- returns a tip

```
axios
    .get('yourURL/tips/1')
    .then(res=>console.log(res))
    .catch(err=> console.log(err))
```

- console logs

```
    {
        "id": 1,
        "worker_id": 1,
        "tip_date": "2019-02-03 21:58:19",
        "tip_amount": 10
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

###### /workers/:id/upload

###### /tips

- adds a tip and returns the id of the tip added

```
axios
    .post('yourURL/tips',tipObject)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
```

- console logs

```
[1]
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
