'use strict';
const root = require('@ddlees/module-root');
const pkg = root.require('package.json');
const log = require('debug')(`${pkg.name}:db`);
const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

mongoose.connect(process.env.MONGODB_URI, {
    promiseLibrary: bluebird
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    log(`Connected to ${db.name}`);
});

module.exports = db;