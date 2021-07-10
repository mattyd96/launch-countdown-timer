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
var oldDays = Math.floor(distance / (1000 * 60 * 60 * 24));
var oldHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var oldMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var oldSeconds = Math.floor((distance % (1000 * 60)) / 1000);

if(oldHours == 0 && oldMinutes == 0 && oldSeconds == 0) {oldDays -= 1}
if(oldHours == 0) {oldHours = 23}
if(oldMinutes == 0) {oldMinutes = 59}
if(oldSeconds == 0) {oldSeconds = 59}

//------------------------------- Interval functions for seconds, minutes, hours, and days -----------------------//


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  //reset current card values
  document.getElementById("seconds-current-top").innerText = ('0' + oldSeconds.toString()).slice(-2);
  document.getElementById("seconds-current-bottom").innerText = ('0' + oldSeconds.toString()).slice(-2);

  document.getElementById("minutes-current-top").innerText = ('0' + oldMinutes.toString()).slice(-2);
  document.getElementById("minutes-current-bottom").innerText = ('0' + oldMinutes.toString()).slice(-2);

  document.getElementById("hours-current-top").innerText = ('0' + oldHours.toString()).slice(-2);
  document.getElementById("hours-current-bottom").innerText = ('0' + oldHours.toString()).slice(-2);

  document.getElementById("days-current-top").innerText = ('0' + oldDays.toString()).slice(-2);
  document.getElementById("days-current-bottom").innerText = ('0' + oldDays.toString()).slice(-2);


  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //reset flips -> show current cards again and return flip to top
  if(seconds != oldSeconds) {
    secondsFront.classList.remove("flip-card-front");
    secondsBehind.classList.remove("flip-card-behind");
  }

  if(minutes != oldMinutes) {
  minutesFront.classList.remove("flip-card-front");
  minutesBehind.classList.remove("flip-card-behind");
  }

  if(hours != oldHours) {
    daysFront.classList.remove("flip-card-front");
    daysBehind.classList.remove("flip-card-behind");
  }

  if(days != oldDays) {
    hoursFront.classList.remove("flip-card-front");
    hoursBehind.classList.remove("flip-card-behind");
  }
  

  var y = setInterval(() => {
  
    if(seconds < 0) {seconds = 59;}
    document.getElementById("seconds-next-top").innerText = ('0' + seconds.toString()).slice(-2);
    document.getElementById("seconds-next-bottom").innerText = ('0' + seconds.toString()).slice(-2);
    
    secondsFront.classList.add("flip-card-front");
    secondsBehind.classList.add("flip-card-behind");

    //update minutes
    if(minutes != oldMinutes) {
      if(minutes < 0) {minutes = 59;}
      document.getElementById("minutes-next-top").innerText = ('0' + minutes.toString()).slice(-2);
      document.getElementById("minutes-next-bottom").innerText = ('0' + minutes.toString()).slice(-2);

      minutesFront.classList.add("flip-card-front");
      minutesBehind.classList.add("flip-card-behind");
    }

    //update hours
    if(hours != oldHours) {
      if(hours < 0) {hours = 23;}
      document.getElementById("hours-next-top").innerText = ('0' + hours.toString()).slice(-2);
      document.getElementById("hours-next-bottom").innerText = ('0' + hours.toString()).slice(-2);

      hoursFront.classList.add("flip-card-front");
      hoursBehind.classList.add("flip-card-behind");
    }

    //update days
    if(days != oldDays) {
      if(days < 0) {days = 23;}
      document.getElementById("days-next-top").innerText = ('0' + days.toString()).slice(-2);
      document.getElementById("days-next-bottom").innerText = ('0' + days.toString()).slice(-2);

      daysFront.classList.add("flip-card-front");
      daysBehind.classList.add("flip-card-behind");
    }

    oldDays = days;
    oldHours = hours;
    oldMinutes = minutes;
    oldSeconds = seconds;
    clearInterval(y);
  }, 100);

  
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("seconds-next-top").innerText = '00';
    document.getElementById("seconds-next-bottom").innerText = '00';
    document.getElementById("seconds-current-top").innerText = '00';
    document.getElementById("seconds-current-bottom").innerText = '00';

    document.getElementById("minutes-next-top").innerText = '00';
    document.getElementById("minutes-next-bottom").innerText = '00';
    document.getElementById("minutes-current-top").innerText = '00';
    document.getElementById("minutes-current-bottom").innerText = '00';

    document.getElementById("hours-next-top").innerText = '00';
    document.getElementById("hours-next-bottom").innerText = '00';
    document.getElementById("hours-current-top").innerText = '00';
    document.getElementById("hours-current-bottom").innerText = '00';

    document.getElementById("days-next-top").innerText = '00';
    document.getElementById("days-next-bottom").innerText = '00';
    document.getElementById("days-current-top").innerText = '00';
    document.getElementById("days-current-bottom").innerText = '00';
  }
}, 1000);