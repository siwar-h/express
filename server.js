const express = require("express");
const app = express();
const Port = 5000;


//app.get('/',(req,res)=>{
//res.send('hello')
//res.end()})
const middle = (req, res, next) => {
  const d = new Date(Date.now());
  const day = d.getDay();
  const hour = d.getHours();
  console.log("d", d);
  console.log("day", day);
  console.log("hour", hour);
  if (day>=1 && day <= 5 && hour>=9 && hour <= 16) {
    next();
  } else {
    res.send("We are not available right now! Come back during business hours.");
  }
};

app.use(middle);
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render();
});

app.listen(Port, (err) => {
  err
    ? console.log("err", err)
    : console.log(`server is running on port:${Port}`);
});
