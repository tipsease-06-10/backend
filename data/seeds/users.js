const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "admin", password: bcrypt.hashSync("password", 11) },
        { username: "mariekondo", password: bcrypt.hashSync("password", 11) },
        {
          username: "pewdiepie",
          password: bcrypt.hashSync("tseries", 11)
        }
      ]);
    });
};
