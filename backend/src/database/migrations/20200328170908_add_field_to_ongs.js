
exports.up = function(knex) {
  return knex.schema.table('ongs', function(table) {
    table.string('password').notNullable().defaultTo('');
  })
};

exports.down = function(knex) {
  return knex.schema.table('ongs', function(table) {
    table.dropColumn('password');
});
};
