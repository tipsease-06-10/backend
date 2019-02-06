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
        }
      ]);
    });
};
