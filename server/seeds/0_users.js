
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: 'AmyB', password: 'thisisatest'}),
        knex('users').insert({username: 'LisaM', password: 'thisisatest'}),
        knex('users').insert({username: 'GordonG', password: 'thisisatest'})
      ]);
    });
};
