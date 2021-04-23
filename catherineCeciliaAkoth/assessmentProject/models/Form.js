// Requiring mongoose.
const mongoose = require('mongoose');
// Create a schema for data that is needed to be saved.
const formSchema = new mongoose.Schema({
  surName: {
    type: String,
    //required: 'please fill in',
  },
  givenName: {
    type: String,
    //required: 'please fill in',
  },
  dob:{
      type: String,
      //required:'please select',
  },
  residence:{
    type: String,
    //required: 'please enter service'
  },
  occupation:{
    type: String,
    //required: 'please fill in',
  },
 nationality:{
      type: String,
      //required: 'please fill in',
  },
  gender:{
    type: String,
    //required:'please select',
  },
  category:{
  type: String,
  //require: 'please enter '
  },
  


  
})
// Export mongoose model.
module.exports = mongoose.model('Form', formSchema)