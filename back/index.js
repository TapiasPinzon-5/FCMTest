console.clear();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors({origin:'*'}));
app.use(logger('dev'));

app.get("/", (req,res) => {
  res.send("hello world")
});

app.listen(4000, () => {
  console.log(`Server corriendo en el puerto 4000`);
});