var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res) {
  const number1 = req.body.number1;
  const number2 = req.body.number2;
  var result = req.body.result;

  const operator = req.body.operator;
  
  if(operator === "add"){
    result = parseFloat(number1) + parseFloat(number2);
    res.render('index', {number1, number2, result});
  }
  else if(operator === "sub"){
    result = parseFloat(number1) - parseFloat(number2);
    res.render('index', {number1, number2, result});
  }
  else if(operator === "mul"){
    result = parseFloat(number1) * parseFloat(number2);
    res.render('index', {number1, number2, result});
  }
  else if(operator === "div"){
    result = parseFloat(number1) / parseFloat(number2);
    res.render('index', {number1, number2, result});
  }
    
});

module.exports = router;
