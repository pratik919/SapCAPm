const express = require('express');
const app = express()

const port = process.env.PORT || 4000;
const jwt = require('./utils/getJwtToken');
const studentRoute = require('./Routes/studentRoute');

/*Middleware */
app.use(express.json());

// ROUTES & JWT Token
app.use('/',jwt.getJwt, studentRoute);

app.all('*', (req, res, next) => {
    res.status(400).json({
        status: 'fail',
        message: 'Invalid Endpoint'
      });
});
 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))