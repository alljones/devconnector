
//Initializing Server
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello There!'));

//deploy to Heroku or Local Port 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));