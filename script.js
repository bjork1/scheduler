
boxVal = document.querySelector(".box");
//btnClick = document.querySelector("#saveThis");


//Define each id with onclick 
//If clicked, save value of input to Local Storage


//Get Item variable for each item boxes 1-9

var $store9 = localStorage.getItem("box9item");
var $keep9 = $('#box9');
//$test.val("Hello");
$keep9.val($store9);

var $store10 = localStorage.getItem("box10item");
var $keep10 = $('#box10');
//$test.val("Hello");
$keep10.val($store10);

var $store11 = localStorage.getItem("box11item");
var $keep11 = $('#box11');
//$test.val("Hello");
$keep11.val($store11);

var $store12 = localStorage.getItem("box12item");
var $keep12 = $('#box12');
//$test.val("Hello");
$keep12.val($store12);

var $store1 = localStorage.getItem("box1item");
var $keep1 = $('#box1');
//$test.val("Hello");
$keep1.val($store1);

var $store2 = localStorage.getItem("box2item");
var $keep2 = $('#box2');
//$test.val("Hello");
$keep2.val($store2);

var $store3 = localStorage.getItem("box3item");
var $keep3 = $('#box3');
//$test.val("Hello");
$keep3.val($store3);

var $store4 = localStorage.getItem("box4item");
var $keep4 = $('#box4');
//$test.val("Hello");
$keep4.val($store4);

var $store5 = localStorage.getItem("box5item");
var $keep5 = $('#box5');
//$test.val("Hello");
$keep5.val($store5);

//End Variables for getItem

//Start Adding in functions for date time from moment.js
//For each hours 1-9 create variable
//Create 3 if statements for each time slot if hours are after, during, or before that time
//set background color within each if statement: grey(past),red(current),green(future)

var time = moment().format('H:mm:ss');
console.log(time);

var hours9 = new Date().getHours();
var hours10 = new Date().getHours();
var hours11 = new Date().getHours();
var hours12 = new Date().getHours();
var hours1 = new Date().getHours();
var hours2 = new Date().getHours();
var hours3 = new Date().getHours();
var hours4 = new Date().getHours();
var hours5 = new Date().getHours();

console.log(hours4);


//if (hours9 >= 7 && hours9 <= 20) {
if (hours9 > 9) {
    console.log("Check9before");
    $('#box9').css("background-color","grey");
}
if (hours9 === 9) {
    $('#box9').css("background-color","red");
    console.log("Check9during");

}
if (hours9 < 9) {
    $('#box9').css("background-color","green");
    console.log("Check9after");
}

if (hours10 > 10) {
    console.log("Check10before");
    $('#box10').css("background-color","grey");
}
if (hours10 === 10) {
    $('#box10').css("background-color","red");
    console.log("Check10during");
}
if (hours10 < 10) {
    $('#box10').css("background-color","green");
    console.log("Check10after");
}

if (hours11 > 11) {
    console.log("Check11before");
    $('#box11').css("background-color","grey");
}
if (hours11 === 11) {
    $('#box11').css("background-color","red");
    console.log("Check11during");
}
if (hours11 < 11) {
    $('#box11').css("background-color","green");
    console.log("Check11after");
}

if (hours12 > 12) {
    console.log("Check12before");
    $('#box12').css("background-color","grey");
}
if (hours12 === 12) {
    $('#box12').css("background-color","red");
    console.log("Check12during");
}
if (hours12 < 12) {
    $('#box12').css("background-color","green");
    console.log("Check12after");
}

if (hours1 > 13) {
    console.log("Check1before");
    $('#box1').css("background-color","grey");
}
if (hours1 === 13) {
    $('#box1').css("background-color","red");
    console.log("Check1during");
}
if (hours1 < 13) {
    $('#box1').css("background-color","green");
    console.log("Check1after");
}

if (hours2 > 14) {
    console.log("Check2before");
    $('#box2').css("background-color","grey");
}
if (hours2 === 14) {
    $('#box2').css("background-color","red");
    console.log("Check2during");
}
if (hours2 < 14) {
    $('#box2').css("background-color","green");
    console.log("Check2after");
}

if (hours3 > 15) {
    console.log("Check3before");
    $('#box3').css("background-color","grey");
}
if (hours3 === 15) {
    $('#box3').css("background-color","red");
    console.log("Check3during");
}
if (hours3 < 15) {
    $('#box3').css("background-color","green");
    console.log("Check3after");
}

if (hours4 > 16) {
    console.log("Check4before");
    $('#box4').css("background-color","grey");
}
if (hours4 === 16) {
    $('#box4').css("background-color","red");
    console.log("Check4during");
}
if (hours4 < 16) {
    $('#box4').css("background-color","green");
    console.log("Check4after");
}

if (hours5 > 17) {
    console.log("Check5before");
    $('#box5').css("background-color","grey");
}
if (hours5 === 17) {
    $('#box5').css("background-color","red");
    console.log("Check5during");
}
if (hours5 < 17) {
    $('#box5').css("background-color","green");
    console.log("Check5after");
}

//End if statements



var Now = moment().format('dddd, MMMM Do');
var x = document.getElementById('tpa');
x.innerHTML = Now;















//Playing with Date Time from exteral sites
/*

//console.log(moment('2:04:26 p').isAfter('3:01:16 p'));

function diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }



var numValue = $('#gina').text();
var sd = parseInt(numValue);

dt1 = new Date(Now);
dt2 = new Date("January 20, 2020 05:11:14");
console.log(diff_hours(dt1, dt2));

var difference = (diff_hours(dt1, dt2));

if (difference > 3) {
    $('#box1').css("background-color","red");

}
else if (difference <4) {
    $('#box1').css("background-color","green");
}

*/

//val($test.val() + '-');


//$('#box1').val(now.val() + '-');

//If statement, so that if time is between certain hours, the background color is a certain color
//Red is current hour
//Grey is previous hours
//Green is future hours that haven't happened yet

/*

$(function() {
    if (sd > 9) {
        console.log("It is higher than 8");
        $('#box1').css("background-color","red");
    }
    
  });

  */



//Run a Save click function for each box variable 1-9
//Save to Local Storage as a box#item 

$("#save9").on ("click", function () {

    var variable = document.getElementById("box9").value;
    localStorage.setItem("box9item", variable);
    
});

$("#save10").on ("click", function () {

    var variable = document.getElementById("box10").value;
    localStorage.setItem("box10item", variable);
    
});

$("#save11").on ("click", function () {

    var variable = document.getElementById("box11").value;
    localStorage.setItem("box11item", variable);
    
});

$("#save12").on ("click", function () {

    var variable = document.getElementById("box12").value;
    localStorage.setItem("box12item", variable);
    
});

$("#save1").on ("click", function () {

    var variable = document.getElementById("box1").value;
    localStorage.setItem("box1item", variable);
    
});

$("#save2").on ("click", function () {

    var variable = document.getElementById("box2").value;
    localStorage.setItem("box2item", variable);
    
});

$("#save3").on ("click", function () {

    var variable = document.getElementById("box3").value;
    localStorage.setItem("box3item", variable);
    
});

$("#save4").on ("click", function () {

    var variable = document.getElementById("box4").value;
    localStorage.setItem("box4item", variable);
    
});

$("#save5").on ("click", function () {

    var variable = document.getElementById("box5").value;
    localStorage.setItem("box5item", variable);
    
});

//End Save click functions



