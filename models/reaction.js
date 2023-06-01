const {Schema, model} = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId ,
      default: Types.ObjectId() ,
    },
    reactionBody: {
      type: String,
      required: true ,
      maxlength: 280 ,
    },
    username: {
      type: String ,
      required: true ,
    },
    createdAt: {
      type: Date ,
      default: Date.now ,
      get: formatDate ,
    }
  },
  {
    _id: false
  }
);

function formatDate(date) {
  // Custom formatting logic for the timestamp
  return date.toLocaleDateString(); // Replace with your desired formatting logic
}


module.exports = reactionSchema;