//= require_tree .

var update_timer = function() {
  var event = new Date("November 1, 2016");
  var now = new Date();
  var timediff = event - now;
  if (timediff > 0) {
    var seconds = Math.floor((timediff)/1000); //seconds = timediff divided by 100
    var minutes = Math.floor(seconds/60); //minutes = seconds divided by 60
    seconds -= minutes * 60; //seconds = subtract number of minutes times 60
    var hours = Math.floor(minutes/60); //hours = minutes divided by 60
    minutes -= hours * 60; //minutes = subtract number of hours times 60
    var days = Math.floor(hours/24); //days = hours divided by 24
    hours -= days * 24; //hours = subtract number of days times 24
    $("#timer").text("Registration opens in " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds");
    $("#timer-large").html("Registration opens in<br>" + days + "days<br>" + hours + " hours<br>" + minutes + " minutes<br>" + seconds + " seconds");
  } else {
    $("#timer").text("Registration has ended!");
    $("#timer-large").text("Registration has ended!");
  }
};

setInterval(update_timer, 1000);
update_timer();
