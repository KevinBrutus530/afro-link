"use strict";

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
require('dotenv').config();
var port = process.env.PORT || 3005;
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
var addressesRouter = require('./routes/addresses');
var businessesRouter = require('./routes/businesses');
var categoriesRouter = require('./routes/categories');
var contactsRouter = require('./routes/contacts');
var ownersRouter = require('./routes/owners');
var reviewsRouter = require('./routes/reviews');
var typeRouter = require('./routes/types');
app.use('/addresses', addressesRouter);
app.use('/businesses', businessesRouter);
app.use('/categories', categoriesRouter);
app.use('/contacts', contactsRouter);
app.use('/owners', ownersRouter);
app.use('/reviews', reviewsRouter);
app.use('/types', typeRouter);
app.listen(port, function () {
  return console.log('Server running on port ', port);
});
