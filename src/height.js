var express = require("express");
var csv = require('csv');
var fs=require('fs');

var app = express();
var Employees = [];
    var min=150; 
    var max=180;  
    for( var i = 0 ; i < 50 ; i++)
    {
      var randomnumber = Math.floor(Math.random() * (+max - +min)) + +min+"\n";
    Employees.push(randomnumber);
fs.appendFile('height.csv', randomnumber, function (err) {
    var count=1;
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
    console.log(Employees);
    count++;
});
    }

console.log(Employees);
