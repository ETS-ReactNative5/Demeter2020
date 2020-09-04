const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let account = new Schema({

  Email: {type:String},
  Password: {type:String},

}, {
    collection: 'Accounts'
  })

// account.index({ location: "2dsphere" });

module.exports = mongoose.model('Account', account)

