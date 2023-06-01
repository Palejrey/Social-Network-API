const router = require('express').Router();
const{
    getUsers,
    postNewUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(postNewUser);

module.exports = router;