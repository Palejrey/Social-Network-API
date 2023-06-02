const {User} = require('../models');

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
            const user = await User.findOne({ _id:req.params.userID});
            res.status(200).json(user);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    async postNewUser(req, res) {
        try {
            const newUser =  new User(req.body);
            newUser.save();
            res.status(200).json(newUser);
          } catch (err) {
            res.status(500).json(err);
          }
    },
    async updateUser(req, res) {
        try {
            const update = req.body;
            await User.findOneAndUpdate(
                { _id:req.params.userID},
                update,
                {new:true}
                );
            res.status(200).json({ message: `User has been updated` });

          } catch (err) {
            res.status(500).json(err);
          }
    },
    async removeUser(req, res) {
        try {
            await User.findOneAndDelete({ _id:req.params.userID});
            res.status(200).json({ message: `User has been deleted` });
          } catch (err) {
            res.status(500).json(err);
          }
    },
    async addUserFriend(req, res) {
        try {
            const friend = await User.findOne({ _id:req.params.friendID});
            const user = await User.findOne({ _id:req.params.userID})
            // Add the new friend to the friend list
            user.friends.push(friend);
            
            // Save the updated user
            await user.save();

            // Return a success response
            res.status(200).json({ message: 'Friend added successfully.' });
          } catch (err) {
            res.status(500).json(err);
          }
    },
    async removeUserFriend(req, res) {
        try {
            const friend = await User.findOne({ _id:req.params.friendID});
            const user = await User.findOne({ _id:req.params.userID})
            // Add the new friend to the friend list
            user.friends.pop(friend);
            
            // Save the updated user
            await user.save();

            // Return a success response
            res.status(200).json({ message: `Friend has sucessfully been deleted` });
          } catch (err) {
            res.status(500).json(err);
          }
    },
};