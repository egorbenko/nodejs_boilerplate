require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var server = require('http').Server(app);
var socketServer = require('socket.io')(server);
var socketClient = require('socket.io-client').connect('http://localhost:3000', {reconnect: true});

/**
 *  Disable x-powered-by in headers
 */
app.disable('x-powered-by');

/**
 *  Connect to database
 */
mongoose.connect('mongodb://' + process.env.MONGODB_PORT_27017_TCP_ADDR + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME);

/**
 *  View engine setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

/**
 *  Register dependencies
 */
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 *  Register routes
 */
app.use(require(path.join(__dirname, 'routes')));
app.use(require(path.join(__dirname, 'routes/errors')));

/**
 *  Register sockets
 */
var testListener = require('./socket')(socketServer);

module.exports = {app: app, server: server};
