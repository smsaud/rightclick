
const debug = require('debug')('rnd:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const customers = require('./routes/customers');
const home = require('./routes/home');
const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.use(express.json());
app.use(helmet());

console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);
console.log(`Mail Password: ${config.get('mail.password')}`);

if (app.get('env') == 'development') {
    app.use(morgan('tiny'));
    debug('Morgan enabled.....................');
}

app.use(logger);
app.use(auth);
app.use('/', home);
app.use('/api/customers', customers);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

