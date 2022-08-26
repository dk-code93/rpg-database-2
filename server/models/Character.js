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
    },
    description: {
      type: String,
      required: false,
      maxLength: [250, 'Description can only be 250 characters'],
    },
    class: {
      type: String,
      required: false,
    },
    base_hp: {
      type: Number,
      required: true,
      default: 1,
    },
    stats: {
      type: Map,
      of: Number,
      default: {
        int: 0,
        dex: 0,
        str: 0,
        cha: 0,
        wis: 0,
        con: 0,
      },
    },

}, {
    timestamps: true,
});
  
const Character = model('Character', characterSchema);
  
module.exports = Character;