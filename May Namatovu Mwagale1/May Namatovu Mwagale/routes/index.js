const express = require("express");
const router = express.Router();
const Index = require('../models/Index');

router.get("/index", (req, res) => {
  res.render("indexForm", { title: "Covid Form" });
});

router.post('/',  async(req,res) => {
  try{
    const index = new Index(req.body);
    await Index.index(index, req.body.password, (err) =>{
      if (err)
      {
        throw err
      }
      res.redirect('/')
    })
  }
  catch(err){
    res.status(400).send('Oops! Something went wrong.')
    console.log(err);
  }
})


module.exports = router;