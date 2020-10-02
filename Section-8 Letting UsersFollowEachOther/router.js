const express = require('express')
const router = express.Router()
const usreController = require('./controllers/userController')
const postController = require('./controllers/postController')
const followController = require('./controllers/followController')

//user related routes
router.get('/', usreController.home)
router.post('/register', usreController.register)
router.post('/login', usreController.login)
router.post('/logout', usreController.logout)

//profile related routes
router.get('/profile/:username', usreController.ifUserExists,usreController.sharedProfileData, usreController.profilePostsScreen)
router.get('/profile/:username/followers', usreController.ifUserExists,usreController.sharedProfileData, usreController.profileFollowersScreen)
router.get('/profile/:username/following', usreController.ifUserExists,usreController.sharedProfileData, usreController.profileFollowingScreen)

//post related routes
router.get('/create-post', usreController.mustBeLoggedIn, postController.viewCreateScreen)
router.post('/create-post', usreController.mustBeLoggedIn, postController.create)
router.get('/post/:id', postController.viewSingle)
router.get('/post/:id/edit', usreController.mustBeLoggedIn, postController.viewEditScreen)
router.post('/post/:id/edit', usreController.mustBeLoggedIn, postController.edit)
router.post('/post/:id/delete', usreController.mustBeLoggedIn, postController.delete)
router.post('/search', postController.search)

//follow related routes
router.post('/addFollow/:username', usreController.mustBeLoggedIn ,followController.addFollow)
router.post('/removeFollow/:username', usreController.mustBeLoggedIn ,followController.removeFollow)

module.exports =  router