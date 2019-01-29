const createError = require('http-errors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
*
* Angular App 
* The Angular app is served as a static page from the build directory 
*
**/
app.use(express.static(path.join(__dirname, 'dist/tabcorp-client-angular')));
app.use('/', express.static(path.join(__dirname, 'dist/tabcorp-client-angular')));




/** 
*
* Middeware - Error Handling
* Not found 404 
*
**/
app.use(function(req, res, next) {
	next(createError(404));
});

/** 
*
* Middeware - Error Handling
* Custom Error Handler 
* 
**/
app.use(function(err, req, res, next) {
	// -- set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// -- send error as json (this is an API afterall)
	res.status(err.status || 500);
	res.json(err.status);
});

module.exports = app;