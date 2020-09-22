const express = require('express')
const router = express.Router()
const usreController = require('./controllers/userController')
const postController = require('./controllers/postController')

//user related routes
router.get('/', usreController.home)
router.post('/register', usreController.register)
router.post('/login', usreController.login)
router.post('/logout', usreController.logout)

//profile related routes
router.get('/profile/:username', usreController.ifUserExists, usreController.profilePostsScreen)

//post related routes
router.get('/create-post', usreController.mustBeLoggedIn, postController.viewCreateScreen)
router.post('/create-post', usreController.mustBeLoggedIn, postController.create)
router.get('/post/:id', postController.viewSingle)
router.get('/post/:id/edit', usreController.mustBeLoggedIn, postController.viewEditScreen)
router.post('/post/:id/edit', usreController.mustBeLoggedIn, postController.edit)
router.post('/post/:id/delete', usreController.mustBeLoggedIn, postController.delete)

module.exports =  router