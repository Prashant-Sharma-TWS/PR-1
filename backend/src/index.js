require('dotenv').config();
const EXPRESS = require('express');
const PORT = process.env.PORT || 8000;

const APP = EXPRESS();

APP.get('/', (req, res) =>
  res.json({ status: 200, message: 'This is Home to Backend' })
);

APP.listen(PORT, console.log(`live @${PORT}`));
