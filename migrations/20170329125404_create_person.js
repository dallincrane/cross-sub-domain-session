exports.up = function(knex) {
  return knex.schema.createTable('person', function (t) {
    t.increments()
    t.text('name')
    t.text('email').notNullable()
    t.text('password')
    t.timestamps(true, true)

    t.unique('email')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('person')
}
