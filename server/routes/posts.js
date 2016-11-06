var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('posts')
    .then(function(data) {
      res.json(data)
    })
});

router.post('/', function(req, res, next) {
  knex('posts')
    .insert(req.body, '*')
    .then(function(post) {
      res.json(post)
    })
})

router.get('/:id', function(req, res, next){
  knex('posts')
  .where('id', req.params.id)
  .first()
  .then(function(post) {
    res.json(post)
  })
})

router.put('/:id', function(req, res, next){
  knex('posts')
  .where('id', req.params.id)
  .first()
  .then(function(post){
    if(post.users_id === req.body.users_id) {
      knex('posts')
      .where('id', req.params.id)
      .update(req.body)
      .then(function(post){
        res.json(post)
      })
    } else {
      let error = {
        message: 'Please log in.'
      }
    } res.json(error)
  })
})

router.delete('/:id', function(req, res, next){
  knex('posts')
    .where('id', req.params.id)
    .first()
    .del()
    .then(function(){
      res.json('Post deleted')
    })
})

module.exports = router;
