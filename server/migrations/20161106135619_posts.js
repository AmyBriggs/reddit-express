'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments()
    table.integer('users_id').notNullable().references('id').inTable('users').onDelete('CASCADE')
    table.string('title').notNullable()
    table.string('author').notNullable()
    table.string('image_url').notNullable()
    table.string('description', 2000).notNullable()
    table.integer('votes').default(0)
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts')
};
