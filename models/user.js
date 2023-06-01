const {Schema, model} = require('mongoose');
const thought = require('./thought')
// Schema to create user schema
const userSchema = new Schema(
    {
        username: {
            type: String ,
            unique: true , // `username` must be unique
            required: true ,
            trim: true //removes uncessary white space from either side of username
        },
        email: {
            type: String ,
            unique: true , // `email` must be unique
            required: true ,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
          }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        _id: false,
    }
);

// Creates a virtual property `friendCount` that gets the amount of friends a user has
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Initialize user model
const User = model('user', userSchema);

module.exports = User;

//Save this for later to populate friends in routes
/*
User.findOne({ _id: someUserId })
  .populate('friends')
  .exec((err, user) => {
    // 'user' will have the friends field populated with the actual user documents
  });
*/