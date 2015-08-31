/*-------------------------------------------------*\
 |                                                 |
 |      /$$$$$$    /$$$$$$   /$$$$$$   /$$$$$$     |
 |     /$$__  $$  /$$__  $$ |_  $$_/  /$$__  $$    |
 |    | $$  \__/ | $$  \ $$   | $$   | $$  \ $$    |
 |    |  $$$$$$  | $$$$$$$$   | $$   | $$  | $$    |
 |     \____  $$ | $$__  $$   | $$   | $$  | $$    |
 |     /$$  \ $$ | $$  | $$   | $$   | $$  | $$    |
 |    |  $$$$$$/ | $$  | $$  /$$$$$$ |  $$$$$$/    |
 |     \______/  |__/  |__/ |______/  \______/     |
 |                                                 |
 |                                                 |
 |                                                 |
 |    *---------------------------------------*    |
 |    |   © 2015 SAIO - All Rights Reserved   |    |
 |    *---------------------------------------*    |
 |                                                 |
\*-------------------------------------------------*/

var winston = require('winston');
var _ = require('underscore');

/*
notes:
  loggly direct ? ou winston-syslog to linked loggly docker container acting as rsyslog server
  -> syslog c'est cool avec le docker loggly mais quid du json ?
  quid err callback if syslog or loggly off ?

options: {
  loggly: {
    level: String,
    subdomain: String,
    tag: String,
    inputToken: String,
    username: String,
    password: String
  },
  file: {
    level: String,
    path: String, // format: /path/to/logfilename -> no extension
    rotate: String, // file creation frequency: 'month' | 'day' | 'hour' | 'minute'
      //if rotate save logfiles at /path/to/logfilename.yyyy-MM-dd-hh-mm.log ?
  },
  console
}

*/

var Logger = function(container, options) {
  var that = this;

  options = _.defaults(options, {});
  var transports = [];

  // console transport
  var consoleOut = {};
  transports.push(consoleOut);

  // file transport
  var fileOut = {};
  transports.push(fileOut);

  // Loggly transport
  var logglyOut = {};
  transports.push(logglyOut);

  that._logger = new winston.Logger({
    transports: transports
  });
};

Logger.prototype.start = function() {

};

Logger.prototype.stop = function() {

};

Logger.prototype.log = function() {

};

module.exports = Logger;
