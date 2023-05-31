var express = require('express');
var router = express.Router();
var search = require('../models/search')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/adddata', async function (req, res, next) {
  data = await search.create(req.body)
  res.status(201).json({
    status: 'success',
    data
  })
});

router.get('/getdata', async function (req, res, next) {
  data = await search.find()
  res.status(201).json({
    status: 'success',
    data
  })
});

// searching data system
router.post('/searching', async function (req, res, next) {

  try{
    data = await search.find({"name":{$regex : ".*"+req.body.name+".*" }})
    if(data.length > 0)
    {
      res.status(201).json({
        status:'success',
        data
      })
    }
    else
    {
      res.status(401).json({
        status:'alert',
      })
    }

  }
  catch{
    res.status(401).json({
      status:'alert'
    })
  }

});



module.exports = router;
