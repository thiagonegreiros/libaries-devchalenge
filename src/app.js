const express = require('express');
const cors = require('cors');

const app = express();

//* API routes
const index = require('./routes/index');
const compositionRoute = require('./routes/composition.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/', compositionRoute);

module.exports = app;