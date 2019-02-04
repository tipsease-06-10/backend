exports.up = function(knex, Promise) {
  return knex.schema.createTable("tips", table => {
    table.increments();
    table
      .integer("worker_id")
      .references("id")
      .inTable("workers")
      .notNullable();
    table.float("current_amount").defaultTo(0);
    table.float("pending_amount").defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tips");
};
