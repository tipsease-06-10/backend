exports.up = function(knex, Promise) {
  return knex.schema.createTable("occupation", table => {
    table.increments();
    table.string("type", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("occupation");
};
