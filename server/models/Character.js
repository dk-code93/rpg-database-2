const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
});
  
const User = model('Character', characterSchema);
  
module.exports = User;