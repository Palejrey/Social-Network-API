const router = require('express').Router();
const friendRoutes = require('./friendRoutes');
const userRoutes = require('./userRoutes');
const reactionRoutes = require('./reactionRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/friends', friendRoutes);
router.use('/users', userRoutes);
router.use('/reactions', reactionRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
