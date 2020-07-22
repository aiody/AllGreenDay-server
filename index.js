const express = require('express');
const db = require('./src/db/models');

const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Hello World!'));

db.sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
});

app.listen(port, () => console.log(`AllGreenDay listening at port : ${port}`));
