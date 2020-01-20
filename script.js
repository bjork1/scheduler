
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
//Create if statement for each time slot if hours are between that time
//set background color within each if statement: grey(past),red(current),green(future)

var time = moment().format('H:mm:ss');
console.log(time);
var hours = new Date().getHours();
if (hours >= 7 && hours <= 20) {
    console.log("Yes!");
}












//Playing with Date Time from exteral sites


var numValue = $('#gina').text();
var sd = parseInt(numValue);


var Now = moment().format('MMMM D, YYYY hh:mm:ss');
var x = document.getElementById('tpa');
x.innerHTML = Now;




//console.log(moment('2:04:26 p').isAfter('3:01:16 p'));

function diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }



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



