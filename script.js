// Set the date we're counting down to
var date = new Date();
date.setDate(date.getDate() + 10);
var countDownDate = date.getTime();

//variables for flippable element in each time card
var secondsFront = document.getElementById("seconds-front");
var secondsBehind = document.getElementById("seconds-behind");
var minutesFront = document.getElementById("minutes-front");
var minutesBehind = document.getElementById("minutes-behind");
var hoursFront = document.getElementById("hours-front");
var hoursBehind = document.getElementById("hours-behind");
var daysFront = document.getElementById("days-front");
var daysBehind = document.getElementById("days-behind");

//---------- Initial Setup For Timer -> set initial values ------------- //

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

if(hours == 0 && minutes == 0 && seconds == 0) {days -= 1}
if(hours == 0) {hours = 23}
if(minutes == 0) {minutes = 59}
if(seconds == 0) {seconds = 59}

document.getElementById("seconds-current-top").innerText = seconds.toString();
document.getElementById("seconds-current-bottom").innerText = seconds.toString();
document.getElementById("minutes-current-top").innerText = minutes.toString();
document.getElementById("minutes-current-bottom").innerText = minutes.toString();
document.getElementById("hours-current-top").innerText = hours.toString();
document.getElementById("hours-current-bottom").innerText = hours.toString();
document.getElementById("days-current-top").innerText = days.toString();
document.getElementById("days-current-bottom").innerText = days.toString();

//------------------------------- Interval functions for seconds, minutes, hours, and days -----------------------//

// Update the second count down every 1 second
var secondInterval = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculation for seconds
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //reset flip 
    secondsFront.classList.remove("flip-card-front");
    secondsBehind.classList.remove("flip-card-behind");

    //update seconds
    var nextSecond = seconds - 1;
    if(nextSecond < 0) {nextSecond = 59;}
    document.getElementById("seconds-current-top").innerText = seconds.toString();
    document.getElementById("seconds-current-bottom").innerText = seconds.toString();
    document.getElementById("seconds-next-top").innerText = (nextSecond).toString();
    document.getElementById("seconds-next-bottom").innerText = (nextSecond).toString();

    //set flip
    setTimeout(
        function() {
            secondsFront.classList.add("flip-card-front");
            secondsBehind.classList.add("flip-card-behind");
        }, 1);

    // If the count down is finished, loop around
    if (distance < 0) {
      clearInterval(secondInterval);
    }  

}, 999);

//Update minute card every minute
var minuteInterval = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    //reset flip
    minutesFront.classList.remove("flip-card-front");
    minutesBehind.classList.remove("flip-card-behind");


    //update seconds
    var nextMinute = minutes - 1;
    if(nextMinute < 0) {nextMinute = 59;}
    document.getElementById("minutes-current-top").innerText = minutes.toString();
    document.getElementById("minutes-current-bottom").innerText = minutes.toString();
    document.getElementById("minutes-next-top").innerText = nextMinute.toString();
    document.getElementById("minutes-next-bottom").innerText = nextMinute.toString();

    //set flip
    setTimeout(
          function() {
              minutesFront.classList.add("flip-card-front");
              minutesBehind.classList.add("flip-card-behind");
          }, 1);
        
    // If the count down is finished, loop around
    if (distance < 0) {
      clearInterval(minuteInterval);
    }

  }, 59990);

  //Update hour card every hour
  var hourInterval = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
    //reset flip
    hoursFront.classList.remove("flip-card-front");
    hoursBehind.classList.remove("flip-card-behind");
  
    //update seconds
    var nextHour = hours - 1;
    if(nextHour < 0) {nextHour = 59;}
    document.getElementById("hours-current-top").innerText = hours.toString();
    document.getElementById("hours-current-bottom").innerText = hours.toString();
    document.getElementById("hours-next-top").innerText = nextHour.toString();
    document.getElementById("hours-next-bottom").innerText = nextHour.toString();
  
    //set flip
    setTimeout(
        function() {
            hoursFront.classList.add("flip-card-front");
            hoursBehind.classList.add("flip-card-behind");
        }, 1);
  
    // If the count down is finished, loop around
    if (distance < 0) {
      clearInterval(hourInterval);
    }
    
  }, 3599990);

//Update Day Card Every Day
  var dayInterval = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  
    //reset flip
    daysFront.classList.remove("flip-card-front");
    daysBehind.classList.remove("flip-card-behind");
  
  
    //update seconds
    var nextDay = days - 1;
    if(nextDay < 0) {nextDay = 0;}
    document.getElementById("hours-current-top").innerText = days.toString();
    document.getElementById("hours-current-bottom").innerText = days.toString();
    document.getElementById("hours-next-top").innerText = nextDay.toString();
    document.getElementById("hours-next-bottom").innerText = nextDay.toString();
  
    //set flip
    setTimeout(
        function() {
            daysFront.classList.add("flip-card-front");
            dayssBehind.classList.add("flip-card-behind");
        }, 1);
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(dayInterval);
    }

  }, 86399990);