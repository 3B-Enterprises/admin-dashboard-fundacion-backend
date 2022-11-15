const { Router } = require('express');
const router = Router();
const { defaultRoute, getAllUsers } = require('../controllers/users/user-router.controller')

router.get('/', defaultRoute)
router.get('/allUsers', getAllUsers)

module.exports = router