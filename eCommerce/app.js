/* --- CREATE SERVER --- */

// Import Express
const express = require('express');

// Execute Express
const app = express();

// Import Mongoose
const mongoose = require('mongoose');

// Import Body Parser
const bodyParser = require('body-parser');

// Import Cors
const cors = require('cors');

// Use dotenv to hide DB credentials
require('dotenv/config');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Import Routes
const productsRoute = require('./routes/products');
//const salesRoute = require('./routes/sales');

app.use('/product', productsRoute);
//app.use('/sales', salesRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('connected to DB')
);

// Listen/Boot Up server
app.listen(3000);
