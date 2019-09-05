const express = require('express');

const app = express();

// For POST requests
app.use(express.json)
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/api', require('routes/api'));

app.listen(3000, () => {
    console.log('server started on http://localhost:3000/');
});