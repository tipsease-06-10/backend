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
| POST   | /register           | Register a new `user` using the information provided in the command.                                                                                                                           |
| POST   | /login              | Use the credentials provided in the command to authenticate the user. On successful login, display a message with the username and a JWT token                                                           |
| POST   | /tips               | Add a new `tip` for a worker, include `worker_id` as the first argument and `tip_amount` as the second                                                                                                                                               |
| GET    | /tips               | Get a list of `tips` for all `workers`                                                                                                                                                                                      |
| GET    | /tips/:id           | Get the `tip` for a specific `worker` using `id`                                                                                                                                                                 |
| GET    | /workers            | If the `user` is logged in, display an array of all the `workers` contained in the database. If the `user` is not logged in, display a message:"No token provided, must be set on Authorization Header" |
| GET    | /workers/:id        | If the `user` is logged in, display an object of the `worker`                                                                                                                                          |
| PUT    | /workers/:id        | Updates a `worker` with new information and display the updated `worker`'s details                                                                                                                                      |
| POST   | /workers            | Creates a new `worker` and dispalys the `id` of the created `worker`                                                                                                                                     |
| POST   | /workers/:id/upload | Upload an image file to the specific `worker`'s profile                                                                                                                                                       |

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
        "id": 1,
        "username": "admin",
        "profile_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6_nkVgvmr5atTYATHSKriNP-AGyW7vJG9gJKVNlxdDwAKZjD",
        "working_since": "2012/11",
        "tagline": "Consecutive Punch!",
        "first_name": "One Punch",
        "last_name": "Mann",
        "occupation": "waiter",
        "user_type": "guest"
    },
    {
        "id": 2,
        "username": "mariekondo",
        "profile_photo": "https://pbs.twimg.com/media/DaWpr8HX4AAuUvz.jpg",
        "working_since": "2012/11",
        "tagline": "does it spark joy?",
        "first_name": "Marie",
        "last_name": "Kondo",
        "occupation": "barista",
        "user_type": "employee"
    }]
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
    "profile_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6_nkVgvmr5atTYATHSKriNP-AGyW7vJG9gJKVNlxdDwAKZjD",
    "working_since": "2012/11",
    "tagline": "Consecutive Punch!",
    "first_name": "One Punch",
    "last_name": "Mann",
    "occupation": "waiter",
    "user_type": "guest",
    "tips": [
        {
            "tip_date": "2019-02-03 21:58:19",
            "tip_amount": 10
        },
        {
            "tip_date": "2019-02-05 21:58:19",
            "tip_amount": 5.25
        },
        {
            "tip_date": "2019-02-05 21:58:19",
            "tip_amount": 7.8
        },
        {
            "tip_date": "2019-02-05 21:58:19",
            "tip_amount": 9.9
        }
    ],
    "total_tip": 32.95
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

- returns
```
{
    "userId": 9,
    "username": "admsin",
    "token": "gakjsdgfjkwhgjfgmjagjhgfkeawgwaefsdfsadfasefsafsafas",
    "user_type": "employee"
}
```

###### /login

- logs the user in and returns a token
```
{
    "userId": "9",
    "username": "admsin",
    "user_type": "employee",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbXNpbiIsImlhdCI6MTU0OTU5ODY2MX0.JsWkCCCjRg9pDzJ3LOTTW8wf3tjqQ6129u8SHTEt7mA"
}
```

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
{
    "id": 21,
    "message": "worker created with the id of 21"
}
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

- console logs

```
{
    "id": 1,
    "username": "admin",
    "profile_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6_nkVgvmr5atTYATHSKriNP-AGyW7vJG9gJKVNlxdDwAKZjD",
    "working_since": "2012/11",
    "tagline": "Consecutive Punch!",
    "first_name": "One Punch",
    "last_name": "Mann",
    "occupation": "waiter",
    "user_type": "guest",
    "tips": [
        {
            "tip_date": "2019-02-03 21:58:19",
            "tip_amount": 10
        },
        {
            "tip_date": "2019-02-05 21:58:19",
            "tip_amount": 5.25
        },
        {
            "tip_date": "2019-02-05 21:58:19",
            "tip_amount": 7.8
        },
        {
            "tip_date": "2019-02-05 21:58:19",
            "tip_amount": 9.9
        }
    ]
}
```
