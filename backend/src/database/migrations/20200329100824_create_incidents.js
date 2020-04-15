/*npx knex migrate:lastest*/
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
      
      table.increments();
      
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      /*FK_ong_id*/
      table.string('ong_id').notNullable();
      /*chave estrangeira*/
      table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
