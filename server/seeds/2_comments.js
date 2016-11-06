
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({posts_id: 1, users_id: 1, author: 'Anton K', content: 'Crushed that!'}),
        knex('comments').insert({posts_id: 2, users_id: 3, author: 'Sam T', content: 'Beautiful!  Want to do that one.'}),
        knex('comments').insert({posts_id: 3, users_id: 2, author: 'Ethan M', content: 'Amazeballs.'})

      ]);
    });
};
