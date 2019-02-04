exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tips")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tips").insert([
        { current_amount: 10, pending_amount: 5 },
        { current_amount: 0, pending_amount: 15 },
        { current_amount: 100, pending_amount: 0 }
      ]);
    });
};
