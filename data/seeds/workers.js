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
          profile_photo:
            "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo:
            "https://channel-korea.com/wp-content/uploads/2017/09/IU_1476317492_af_org-e1506689157858.jpg",
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=500",
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo:
            "https://amsi.org.au/wp-content/uploads/2014/09/am_m1_0758-500x500.jpg",
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo:
            "https://www.bth.se/wp-content/uploads/2017/10/Untitled-500x500.jpg",
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo:
            "http://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201303/172530850.jpg",
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo:
            "https://static1.squarespace.com/static/59d4e11803596e8c6624ca73/t/5a08f090e4966b7f02b812d7/1510535317781/blockfivehundred-1.jpg",
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo: "https://source.unsplash.com/random/500x500",
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo:
            "https://images.unsplash.com/photo-1515640235930-7548bc94d6d3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo:
            "https://images.unsplash.com/photo-1535468850893-d6e543fbd7f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo:
            "https://images.unsplash.com/photo-1528660994940-d847063abf56?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9",
          working_since: "2012/11",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          user_type: "employee",
          tagline: faker.hacker.phrase(),
          occupation: "waiter"
        },
        {
          username: faker.name.firstName(),
          profile_photo:
            "https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9",
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
