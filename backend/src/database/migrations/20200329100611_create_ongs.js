/*Parametro up seta o que vai acontecer quando eu executar está migration*/
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
  
};

/*E se eu precisar voltar a trás ? ou seja caso eu queira deletar as tabelas criada pelo up*/
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
