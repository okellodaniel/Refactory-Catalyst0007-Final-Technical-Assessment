const express = require("express");
const router = express.Router();
const Registration = require("../models/covidReg");

router.get("/", (req, res) => {
    
      res.render("covidReg", {title: "Covid Registration Form" });
  
  });
  router.post('/', async (req, res) => {
    try {
       var newRegistration = new Registration(req.body)
        await newRegistration.save()
        console.log(req.body)
        res.redirect('/')
    } catch (error) {
       console.log(error);
        res.status(404).send('unable to send to the database')
    }
 }
)

router.get('/patientDetails', async(req, res) => {
    var userlist = await Registration.find()
    res.render('patients', {patients:userlist})
})












module.exports = router;