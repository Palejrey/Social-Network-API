const router = require('express').Router();
const{
    getUsers,
    postNewUser,
    getUser,
    removeUser,
    updateUser,
    addUserFriend,
    removeUserFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(postNewUser);
router.route('/:userID').get(getUser).delete(removeUser).put(updateUser);
router.route('/:userID/friends/:friendID').post(addUserFriend).delete(removeUserFriend);
module.exports = router;