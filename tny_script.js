"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Samuel Harris
   Date:   1/6/20

*/

//Display the current date and time
document.getElementById("dateNow").innerHTML="m/d/y <br/> h:m:s"; 

//Display the time left until New Year's Eve
document.getElementById("days").textContent = "DD";
document.getElementById("hrs").textContent = "HH";
document.getElementById("mins").textContent = "MM";
document.getElementById("secs").textContent = "SS";

var date = new Date("January 7, 2020 13:54:23");

var dateStr = date.toDateString(); // dateStr == 1/7/2020
var timeStr = date.toLocaleDateString(); // timeStr == 1:54:23 pm

document.getElementById("dateNow").innerHTML = dateStr + "<br/>" + timeStr;