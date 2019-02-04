exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("occupation")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("occupation").insert([
        { occupation: "waiter" },
        { occupation: "barista" },
        { occupation: "bellhop" }
      ]);
    });
};
