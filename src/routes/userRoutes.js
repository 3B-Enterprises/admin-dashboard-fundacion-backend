const { Router } = require('express');
const router = Router();
const { defaultRoute, getAllUsers, loginRoute, createAnUser } = require('../controllers/users/user-router.controller')

router.get('/', defaultRoute)
router.get('/allUsers', getAllUsers)
router.post('/login', loginRoute)
router.post('/register', createAnUser)

module.exports = router