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
          is_a_user: false,
          tagline: "Consecutive Punch!",
          type_id: 1
        },
        {
          username: "mariekondo",
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "Marie",
          last_name: "Kondo",
          is_a_user: true,
          tagline: "does it spark joy?",
          type_id: 2
        },
        {
          username: "ben",
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "My Long Lost",
          last_name: "Love",
          is_a_user: true,
          tagline: "Why the friend zone?",
          type_id: 3
        }
      ]);
    });
};
