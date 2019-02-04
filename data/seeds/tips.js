exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tips")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tips").insert([
        { current_amount: 10, pending_amount: 5, worker_id: 1 },
        { current_amount: 0, pending_amount: 15, worker_id: 2 },
        { current_amount: 100, pending_amount: 0, worker_id: 3 }
      ]);
    });
};
