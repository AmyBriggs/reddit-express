var express = require('express')
var router = express.Router()
var knex = require('../db/knex')
var bcrypt = require('bcrypt')

router.post('/', function(req, res, next){
  knex('users')
    .where('username', req.body.username)
    .first()
    .then(function(user){
      if(user) {
        let passwordMatch = bcrypt.compareSync(req.body.password, user.password)

        if(passwordMatch === false){
          console.log(user);
          res.json(user)
        } else {
          let error = {
            message: 'Username or password are incorrect.'
          }
          res.json(error)
        }
      } else {
        let error = {
          message: 'No such username exists.'
        }
        res.json(error)
      }
    })
})


module.exports = router;
