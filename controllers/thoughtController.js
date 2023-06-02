const {Reaction, Thought, User} = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);            
        }
    },
    async getThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id:req.params.thoughtID});
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);            
        }
    },
    async createThought(req, res) {
        try {
            const newThought =  new Thought(req.body);
            newThought.save();
            res.status(200).json(newThought);
        } catch (err) {
            res.status(500).json(err);            
        }
    },
    async updateThought(req, res) {
        try {
            const update = req.body;
            await Thought.findOneAndUpdate(
                { _id:req.params.thoughtID},
                update,
                {new:true}
            );
            res.status(200).json({ message: `Thought has been updated` });
        } catch (err) {
            res.status(500).json(err);            
        }
    },
    async deleteThought(req, res) {
        try {
            await Thought.findOneAndDelete({ _id:req.params.thoughtID});
            res.status(200).json({ message: `Thought has been deleted` });
        } catch (err) {
            res.status(500).json(err);            
        }
    },
    async addReaction(req, res) {
        try {
            const update = req.body;
            await Thought.findOneAndUpdate(
                { _id:req.params.thoughtID},
                update,
                {new:true}
            );
        } catch (err) {
            res.status(500).json(err);            
        }
    },
    async deleteReaction(req, res) {
        try {
            await Thought.findOneAndDelete({ _id:req.params.thoughtID});
            res.status(200).json({ message: `Thought has been deleted` });
        } catch (err) {
            res.status(500).json(err);            
        }
    },
};
