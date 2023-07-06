const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let date = new Date();
  let newDate = addDays(date, 100);
  response.send(
    `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  );
});
module.exports = app;
app.listen(3000);
