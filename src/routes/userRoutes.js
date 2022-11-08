const { Router } = require('express');
const router = Router();
const { defaultRoute } = require('../controllers/users/user-router.controller')

router.get('/', defaultRoute)


module.exports = router