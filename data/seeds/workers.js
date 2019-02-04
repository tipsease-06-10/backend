exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("workers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("workers").insert([
        {
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "Marie",
          last_name: "Kondo",
          type_logged_in: false,
          tagline: "does it spark joy?"
        },
        {
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "Marie",
          last_name: "Kondo",
          type_logged_in: false,
          tagline: "does it spark joy?"
        },
        {
          profile_photo: "https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png",
          working_since: "2012/11",
          first_name: "Marie",
          last_name: "Kondo",
          type_logged_in: false,
          tagline: "does it spark joy?"
        }
      ]);
    });
};
