exports.up = function(knex, Promise) {
  return knex.schema.createTable("workers", table => {
    table.increments();
    table
      .binary("profile_photo")
      .defaultTo("https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png");
    table.string("working_since", 255);
    table.string("tagline", 255);

    table
      .string("first_name", 128)
      .notNullable()
      .defaultTo("");
    table
      .string("last_name", 128)
      .notNullable()
      .defaultTo("");
    table
      .integer("type_id")
      .notNullable()
      .references("id")
      .inTable("occupation")
      .onDelete("CASCADE");
    table.boolean("type_logged_in").defaultTo("false");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("workers");
};
