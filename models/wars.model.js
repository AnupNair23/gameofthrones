const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var WarSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
  },
  year: {
    type: Number
  },
  battle_number: {
    type: Number
  },
  attacker_king: {
    type: String
  },
  defender_king: {
    type: String
  },
  attacker_1: {
    type: String
  },
  attacker_2: {
    type: String
  },
  attacker_3: {
    type: String
  },
  attacker_4: {
    type: String
  },
  defender_1: {
    type: String
  },
  defender_2: {
    type: String
  },
  defender_3: {
    type: String
  },
  defender_4: {
    type: String
  },
  attacker_outcome: {
    type: String
  },
  battle_type: {
    type: String
  },
  major_death: {
    type: String
  },
  attacker_size: {
    type: Number
  },
  defender_size: {
    type: Number
  },
  attacker_commander: {
    type: String
  },
  defender_commander: {
    type: String
  },
  summer: {
    type: Number
  },
  location: {
    type: String
  },
  region: {
    type: String
  },
  note: {
    type: String
  }

});


// Export the model
module.exports = mongoose.model('wars', WarSchema);
// module.exports = CustomerModel;