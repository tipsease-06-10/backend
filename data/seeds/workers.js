const faker = require("faker");

// class RandomName {
//   constructor() {
//     this.username = faker.name.firstName();
//     this.profile_photo = faker.image.avatar();
//     this.first_name = faker.name.firstName();
//     this.last_name = faker.name.lastName();
//     this.working_since = faker.date.past();
//     this.tagline = faker.hacker.phrase();
//     this.occupation = "waiter";
//   }
// }
// let randomWorker = () => {
//   return new RandomName();
// };
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("workers")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("workers").insert([
        {
          username: "admin",
          profile_photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6_nkVgvmr5atTYATHSKriNP-AGyW7vJG9gJKVNlxdDwAKZjD",
          working_since: "2012/11",
          first_name: "One Punch",
          last_name: "Man",
          user_type: "guest",
          tagline: "Consecutive Punch!",
          occupation: "waiter"
        },
        {
          username: "mariekondo",
          profile_photo: "https://pbs.twimg.com/media/DaWpr8HX4AAuUvz.jpg",
          working_since: "2012/11",
          first_name: "Marie",
          last_name: "Kondo",
          user_type: "employee",
          tagline: "does it spark joy?",
          occupation: "barista"
        },
        {
          username: "pewdiepie",
          profile_photo:
            "http://www.gstatic.com/tv/thumb/persons/835149/835149_v9_bb.jpg",
          working_since: "2012/11",
          first_name: "pewds",
          last_name: "felix",
          user_type: "employee",
          tagline: "bro fist",
          occupation: "bellhop"
        },
        {
          username: "ben",
          profile_photo: "https://i.imgur.com/S8hd8t0.png",
          working_since: "2012/11",
          first_name: "Ben",
          last_name: "Tsao",
          user_type: "employee",
          tagline: "Why the friend zone?",
          occupation: "bellhop"
        },
        {
          username: faker.name.firstName(),
          profile_photo:
            "https://us.123rf.com/450wm/lithian/lithian1509/lithian150900132/45607000-portrait-of-a-young-dreamy-brunette-beauty-with-windswept-hair-.jpg?ver=6",
          working_since: "2012/11",
          first_name: "Sandrine",
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo:
            "https://cucuru.media/wp-content/uploads/2017/05/628456560-20170428100109-e1493341315516.jpg",
          working_since: "2012/11",
          first_name: "Liz",
          last_name: "Hahm",
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo: faker.internet.avatar(),
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo: faker.internet.avatar(),
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo: faker.internet.avatar(),
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo: faker.internet.avatar(),
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo: faker.internet.avatar(),
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo: faker.internet.avatar(),
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo: faker.internet.avatar(),
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo: faker.internet.avatar(),
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo: faker.internet.avatar(),
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo: faker.internet.avatar(),
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo: faker.internet.avatar(),
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo: faker.internet.avatar(),
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        }
      ]);
    });
};
