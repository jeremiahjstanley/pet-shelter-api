exports.up = function (knex) {
  return knex.schema
    .createTable('pets', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('type');
      table.string('breed');
      table.string('location');
      table.string('latitude');
      table.string('longitude');

      table.timestamps(true, true);
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('pets')

};