const express = require('express')
const router = express.Router()
const usreController = require('./controllers/userController')
const postController = require('./controllers/postController')
//user related routes

router.get('/', usreController.home)
router.post('/register', usreController.register)
router.post('/login', usreController.login)
router.post('/logout', usreController.logout)

//post related routes
router.get('/create-post', usreController.mustBeLoggedIn, postController.viewCreateScreen)
router.post('/create-post', usreController.mustBeLoggedIn, postController.create)
router.get('/post/:id', postController.viewSingle)

module.exports =  router