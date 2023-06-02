const router = require('express').Router();
const{
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtID').get(getThought).delete(deleteThought).put(updateThought);
router.route('/api/thoughts/:thoughtId/reactions').post().delete();
module.exports = router;