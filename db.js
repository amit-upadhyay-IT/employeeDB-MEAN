var chalk = require('chalk');
var mongoose = require('mongoose');

//var dbURI = 'mongodb://localhost/test';

var dbURI = 'mongodb://amitupadhyaydbproject:amitupadhyay@ds163705.mlab.com:63705/myemployeeamit'


mongoose.connect(dbURI);


mongoose.connection.on('connected', function () {
  console.log(chalk.yellow('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error', function (err) {
  console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});

// Stories Schema

var employeeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  dob: Date,
  dept: String,
  gender: String
});

// Build the User model

var EmployeeDB = mongoose.model('EmployeeDB', employeeSchema);
module.exports = EmployeeDB;
