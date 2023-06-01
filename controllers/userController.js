const {Reaction, Thought, User} = require('../models');

module.exports = {
    async getUsers(req, res) {
        try {
            const user = await User.find();
            res.json(user);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async getUser(req, res) {
        try {

        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async postNewUser(req, res) {
        try {

        }
        catch(err){
            res.status(500).json(err);
        }
    },
};