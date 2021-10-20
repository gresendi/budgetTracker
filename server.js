const express = require("express");
const { join } = require('path')


const PORT = 3000;
const syncDB = require('./db')
const app = express();


app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(require("./routes/api.js"));


syncDB()
  .then(() => app.listen(process.env.PORT || PORT, () => {
    console.log(`App running on port ${PORT}!`);
  }))
  .catch(err => console.log(err))