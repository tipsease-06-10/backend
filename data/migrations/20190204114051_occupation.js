exports.up = function(knex, Promise) {
  return knex.schema.createTable("occupation", table => {
    table.increments();
    table.string("name", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("occupation");
};
