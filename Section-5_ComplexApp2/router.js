const express = require('express')
const router = express.Router()
const usreController = require('./controllers/userController')

router.get('/', usreController.home)
router.post('/register', usreController.register)
router.post('/login', usreController.login)
router.post('/logout', usreController.logout)

module.exports =  router