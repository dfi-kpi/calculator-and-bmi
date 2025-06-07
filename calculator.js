const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("Результат додавання "+ result);
});

app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname+ "/index.html");
});

app.post("/bmicalculator", function(req,res){
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);

  let heightInMeters = height / 100;
  var bmi = weight/(heightInMeters * heightInMeters);

  let decision = "";
  if (bmi < 18.5) {
    decision = "Недостатню вагу";
  }
  else if (bmi >= 18.5 && bmi < 24.9) {
    decision = "Нормальну вагу";
  }
  else if (bmi >= 25 && bmi < 29.9) {
    decision = "Зайву вагу";
  }
  else {
    decision = "Ожиріння";
  }

  res.send(`Ваш індекс маси тіла становить ${bmi}. Це означає, що ви маєте: ${decision}!`);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
