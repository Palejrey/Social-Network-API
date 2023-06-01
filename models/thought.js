const {Schema, model} = require('mongoose');
const reactionSchema = require('./reaction');
//Schema to create thought schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String ,
            required: true ,
            minlength: 1 ,
            maxlength: 280 ,
        },
        createdAt: {
            type: Date ,
            default: Date.now ,
            get: formatDate,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        _id: false,
    }
);

// Creates a virtual property `reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

function formatDate(date) {
    return date.toLocalDateString();
}

//Intialize thought model
const Thought = model('thought', thoughtSchema );

module.exports = Thought;