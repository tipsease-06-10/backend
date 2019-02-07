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
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "One Punch",
          last_name: "Man",
          user_type: "guest",
          tagline: "Consecutive Punch!",
          occupation: "waiter"
        },
        {
          username: "mariekondo",
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "Marie",
          last_name: "Kondo",
          user_type: "employee",
          tagline: "does it spark joy?",
          occupation: "barista"
        },
        {
          username: "pewdiepie",
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "pewds",
          last_name: "felix",
          user_type: "employee",
          tagline: "bro fist",
          occupation: "bellhop"
        },
        {
          username: "ben",
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "My Long Lost",
          last_name: "Love",
          user_type: "employee",
          tagline: "Why the friend zone?",
          occupation: "bellhop"
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
